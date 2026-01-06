import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { HiUser, HiShoppingBag, HiLibrary, HiChartBar, HiLogout } from 'react-icons/hi';
import { PageTransition } from '@/components/PageTransition';

{/* Definición de la interfaz Order */}
interface Order {
  id: string;
  order_number: string;
  total: number;
  status: string;
  created_at: string;
  items: any[];
}

{/* Componente Profile */}
export default function Profile() {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoadingOrders(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black text-xl">Cargando...</div>
      </div>
    );
  }

  if (!user) return null;
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-16 xs:pt-20 sm:pt-24 pb-6 xs:pb-8 sm:pb-12 px-2 xs:px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header del perfil */}
        <Card className="p-4 xs:p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl shadow-lg mb-4 xs:mb-6 sm:mb-8">
          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-4">
            <div className="flex items-center gap-3 xs:gap-4">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-black rounded-xl xs:rounded-2xl flex items-center justify-center">
                <HiUser className="text-white text-2xl xs:text-3xl" />
              </div>
              <div>
                <h1 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-black tracking-tight">Mi Perfil</h1>
                <p className="text-gray-600 text-sm xs:text-base mt-1">{user.email}</p>
                {user.user_metadata?.full_name && (
                  <p className="text-gray-500 text-sm mt-1">{user.user_metadata.full_name}</p>
                )}
              </div>
            </div>
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="bg-white hover:bg-gray-50 text-black border-2 border-gray-300 rounded-xl xs:rounded-2xl flex items-center gap-2 text-sm xs:text-base py-2 xs:py-3 w-full xs:w-auto"
            >
              <HiLogout className="text-base xs:text-lg" />
              Cerrar Sesión
            </Button>
          </div>
        </Card>

        {/* Acciones rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 mb-4 xs:mb-6 sm:mb-8">
          <Link to="/library">
            <Card className="p-4 xs:p-5 sm:p-6 bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer">
              <div className="text-center">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-blue-100 rounded-xl xs:rounded-2xl flex items-center justify-center mx-auto mb-2 xs:mb-3">
                  <HiLibrary className="text-blue-600 text-xl xs:text-2xl" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-1 xs:mb-2">Mi Biblioteca</h3>
                <p className="text-gray-600 text-xs xs:text-sm">Ver todos mis productos</p>
              </div>
            </Card>
          </Link>

          <Link to="/store">
            <Card className="p-4 xs:p-5 sm:p-6 bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer">
              <div className="text-center">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-green-100 rounded-xl xs:rounded-2xl flex items-center justify-center mx-auto mb-2 xs:mb-3">
                  <HiShoppingBag className="text-green-600 text-xl xs:text-2xl" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-1 xs:mb-2">Tienda</h3>
                <p className="text-gray-600 text-xs xs:text-sm">Explorar productos</p>
              </div>
            </Card>
          </Link>

          <Card className="p-4 xs:p-5 sm:p-6 bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl">
            <div className="text-center">
              <div className="w-10 h-10 xs:w-12 xs:h-12 bg-purple-100 rounded-xl xs:rounded-2xl flex items-center justify-center mx-auto mb-2 xs:mb-3">
                <HiChartBar className="text-purple-600 text-xl xs:text-2xl" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-1 xs:mb-2">Estadísticas</h3>
              <p className="text-gray-600 text-xs xs:text-sm">{orders.length} compras realizadas</p>
            </div>
          </Card>
        </div>

        {/* Historial de compras */}
        <Card className="p-4 xs:p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl shadow-lg">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-black mb-4 xs:mb-5 sm:mb-6 tracking-tight">Historial de Compras</h2>

          {loadingOrders ? (
            <div className="text-center text-gray-600 py-12">Cargando compras...</div>
          ) : orders.length === 0 ? (
            <div className="text-center py-8 xs:py-10 sm:py-12">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl xs:rounded-2xl flex items-center justify-center mx-auto mb-3 xs:mb-4">
                <HiShoppingBag className="text-gray-400 text-2xl xs:text-3xl" />
              </div>
              <p className="text-gray-600 text-sm xs:text-base sm:text-lg mb-3 xs:mb-4">Aún no has realizado ninguna compra</p>
              <Link to="/store">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl xs:rounded-2xl text-sm xs:text-base">
                  Explorar Tienda
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3 xs:space-y-4">
              {orders.map((order) => (
                <Card
                  key={order.id}
                  className="p-3 xs:p-4 sm:p-6 bg-gray-50 border border-gray-200 hover:border-blue-600 transition-all rounded-xl xs:rounded-2xl"
                >
                  <div className="flex flex-col xs:flex-row justify-between items-start gap-3 xs:gap-0">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-black">
                          {order.order_number}
                        </h3>
                        <Badge className="bg-green-100 text-green-700 border-green-200 rounded-lg xs:rounded-xl text-xs xs:text-sm">
                          {order.status || 'Completado'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-xs xs:text-sm">
                        {new Date(order.created_at).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="text-left xs:text-right">
                      <p className="text-xl xs:text-2xl font-semibold text-black">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Card>
      </motion.div>
    </div>
    </PageTransition>
  );
}
