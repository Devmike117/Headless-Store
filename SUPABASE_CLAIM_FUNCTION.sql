-- Función para reclamar compras de invitado cuando un usuario se registra/loguea
-- Esta función convierte las órdenes de invitado a compras del usuario autenticado

CREATE OR REPLACE FUNCTION claim_guest_orders(user_id_param UUID, user_email TEXT)
RETURNS TABLE(claimed_count INT, order_ids UUID[]) 
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_claimed_count INT := 0;
  v_order_ids UUID[] := ARRAY[]::UUID[];
  guest_order RECORD;
BEGIN
  -- Buscar todas las órdenes de invitado con el email del usuario
  FOR guest_order IN 
    SELECT * FROM guest_orders 
    WHERE email = user_email 
    AND NOT claimed
  LOOP
    -- Incrementar contador
    v_claimed_count := v_claimed_count + 1;
    v_order_ids := array_append(v_order_ids, guest_order.id);
    
    -- Crear orden en la tabla orders
    INSERT INTO orders (
      user_id,
      order_number,
      total,
      subtotal,
      tax,
      status,
      payment_method,
      customer_name,
      customer_email,
      customer_address,
      customer_city,
      customer_postal_code,
      customer_country,
      created_at
    ) VALUES (
      user_id_param,
      guest_order.order_number,
      guest_order.total,
      (guest_order.order_data->>'subtotal')::DECIMAL,
      (guest_order.order_data->>'tax')::DECIMAL,
      'completed',
      guest_order.payment_method,
      guest_order.order_data->'customerInfo'->>'name',
      guest_order.order_data->'customerInfo'->>'email',
      guest_order.order_data->'customerInfo'->>'address',
      guest_order.order_data->'customerInfo'->>'city',
      guest_order.order_data->'customerInfo'->>'postalCode',
      guest_order.order_data->'customerInfo'->>'country',
      guest_order.created_at
    )
    ON CONFLICT (order_number) DO NOTHING;
    
    -- Obtener el ID de la orden creada
    DECLARE
      v_order_id UUID;
      item JSONB;
    BEGIN
      SELECT id INTO v_order_id FROM orders WHERE order_number = guest_order.order_number;
      
      -- Crear compras (purchases) para cada item
      FOR item IN SELECT * FROM jsonb_array_elements(guest_order.order_data->'items')
      LOOP
        INSERT INTO purchases (
          user_id,
          order_id,
          product_id,
          product_name,
          platform,
          price,
          license_key,
          download_link,
          created_at
        ) VALUES (
          user_id_param,
          v_order_id,
          (item->>'id')::TEXT,
          item->>'name',
          item->>'platform',
          (item->>'price')::DECIMAL,
          'LICENSE-' || substr(md5(random()::text), 1, 20), -- Generar nueva licencia
          'https://download.example.com/' || (item->>'id'),
          guest_order.created_at
        )
        ON CONFLICT DO NOTHING;
      END LOOP;
    END;
    
    -- Marcar la orden de invitado como reclamada
    UPDATE guest_orders 
    SET claimed = TRUE,
        claimed_at = NOW(),
        claimed_by = user_id_param
    WHERE id = guest_order.id;
    
  END LOOP;
  
  RETURN QUERY SELECT v_claimed_count, v_order_ids;
END;
$$;

-- Dar permisos de ejecución a usuarios autenticados
GRANT EXECUTE ON FUNCTION claim_guest_orders(UUID, TEXT) TO authenticated;

COMMENT ON FUNCTION claim_guest_orders IS 'Convierte las órdenes de invitado a compras del usuario autenticado basándose en el email';
