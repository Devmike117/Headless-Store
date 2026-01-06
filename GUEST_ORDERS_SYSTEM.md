# Sistema de Reclamación de Compras de Invitado

## ¿Qué hace?

Cuando un usuario compra sin estar autenticado (como invitado), la compra se guarda temporalmente. Cuando ese usuario se registre o inicie sesión con el mismo email, sus compras anteriores se recuperan automáticamente y aparecen en su biblioteca.

## Configuración en Supabase

### Paso 1: Crear tabla guest_orders

1. Ve a tu proyecto de Supabase
2. Abre el **SQL Editor**
3. Ejecuta el archivo `SUPABASE_GUEST_ORDERS_TABLE.sql`

### Paso 2: Crear función de reclamación

1. En el mismo **SQL Editor**
2. Ejecuta el archivo `SUPABASE_CLAIM_FUNCTION.sql`

## Cómo funciona

### Para el usuario:

1. **Compra como invitado**:
   - Usuario compra sin iniciar sesión
   - Orden se guarda en `guest_orders` con su email

2. **Se registra o inicia sesión**:
   - Al hacer login, automáticamente se buscan órdenes con su email
   - Las compras se transfieren a su cuenta
   - Aparecen en su biblioteca (`/library`)
   - Recibe una notificación de "¡Compras recuperadas!"

### Flujo técnico:

```
Checkout (invitado)
    ↓
guest_orders table (email + order_data)
    ↓
Usuario se loguea con ese email
    ↓
AuthContext detecta SIGNED_IN
    ↓
claimGuestOrders() ejecuta función SQL
    ↓
Crea registros en orders + purchases
    ↓
Marca guest_orders como claimed
    ↓
GuestOrdersNotification muestra mensaje
```

## Archivos modificados/creados

### Creados:
- `src/utils/claimGuestOrders.ts` - Lógica de reclamación
- `src/components/GuestOrdersNotification.tsx` - Notificación visual
- `SUPABASE_GUEST_ORDERS_TABLE.sql` - Script de tabla
- `SUPABASE_CLAIM_FUNCTION.sql` - Función SQL

### Modificados:
- `src/contexts/AuthContext.tsx` - Reclamación automática al login
- `src/pages/Checkout.tsx` - Guarda órdenes de invitado
- `src/App.tsx` - Muestra notificación

## Beneficios

✅ **No pierdes ventas**: Todas las compras se registran, incluso de invitados
✅ **Mejor experiencia**: Usuarios recuperan sus compras al registrarse
✅ **Automático**: Todo sucede sin intervención del usuario
✅ **Seguro**: Usa políticas RLS de Supabase

## Casos de uso

### Escenario 1: Compra y registro posterior
```
1. Usuario compra como invitado → email: juan@gmail.com
2. Días después se registra con juan@gmail.com
3. Al iniciar sesión, sus compras aparecen en su biblioteca
```

### Escenario 2: Ya tiene cuenta
```
1. Usuario compra como invitado (no recordaba su cuenta)
2. Inicia sesión con su cuenta existente
3. Las nuevas compras se agregan a su biblioteca
```

## Troubleshooting

### Las compras no se reclaman
- Verifica que la función SQL esté creada: `SELECT * FROM pg_proc WHERE proname = 'claim_guest_orders';`
- Revisa la consola del navegador para errores
- Verifica que el email en `guest_orders` coincida exactamente con el del usuario

### Error al ejecutar el SQL
- Asegúrate de que las tablas `orders` y `purchases` existan
- Verifica los permisos RLS en Supabase

### La notificación no aparece
- Es normal si el usuario no tenía compras previas de invitado
- Verifica que `GuestOrdersNotification` esté importado en `App.tsx`

## Próximas mejoras opcionales

- [ ] Página de "Reclamar compra" manual con código de orden
- [ ] Email automático cuando se reclamen compras
- [ ] Panel de admin para ver órdenes de invitado sin reclamar
- [ ] Expiración de órdenes de invitado después de X días
