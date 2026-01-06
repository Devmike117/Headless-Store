import { supabase } from '../lib/supabase';

{/* Función para reclamar órdenes de invitado al registrarse */}
export const claimGuestOrders = async (userId: string, email: string) => {
  try {
    {/* Llamada al procedimiento almacenado en Supabase */}
    const { data, error } = await supabase.rpc('claim_guest_orders', {
      p_user_id: userId,
      p_email: email
    });

    if (error) {
      console.error('Error claiming guest orders:', error);
      return { success: false, error };
    }

    return { success: true, claimedCount: data };
  } catch (error) {
    console.error('Exception claiming guest orders:', error);
    return { success: false, error };
  }
};

{/* Verifica si hay órdenes de invitado pendientes para un email */}
export const checkGuestOrders = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('guest_orders')
      .select('*')
      .eq('email', email)
      .eq('claimed', false);

    if (error) {
      console.error('Error checking guest orders:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Exception checking guest orders:', error);
    return [];
  }
};
