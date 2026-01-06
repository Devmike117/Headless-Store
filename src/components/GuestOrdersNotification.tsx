import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { checkGuestOrders } from '../utils/claimGuestOrders';

export const GuestOrdersNotification = () => {
  const { user } = useAuth();
  const [showNotification, setShowNotification] = useState(false);
  const [claimedCount, setClaimedCount] = useState(0);

  useEffect(() => {
    const checkForClaimedOrders = async () => {
      if (!user?.email) return;

      {/* Verificar si ya mostramos la notificación */}
      const hasShownNotification = localStorage.getItem('guest_orders_notification_shown');
      if (hasShownNotification === 'true') return;

      try {
        const guestOrders = await checkGuestOrders(user.email);
        if (guestOrders.length > 0) {
          setClaimedCount(guestOrders.length);
          setShowNotification(true);
          localStorage.setItem('guest_orders_notification_shown', 'true');

          {/* Auto-ocultar después de 10 segundos */}
          setTimeout(() => {
            setShowNotification(false);
          }, 10000);
        }
      } catch (error) {
        console.error('Error checking guest orders:', error);
      }
    };

    checkForClaimedOrders();
  }, [user]);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-md"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">¡Órdenes recuperadas!</h4>
              <p className="text-sm">
                Hemos encontrado {claimedCount} {claimedCount === 1 ? 'orden' : 'órdenes'} anteriores 
                asociadas a tu correo. Ya están disponibles en tu biblioteca.
              </p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="flex-shrink-0 text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
