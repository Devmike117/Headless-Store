import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { HiLibrary, HiInformationCircle, HiShoppingBag, HiDocumentText } from 'react-icons/hi';
import { Button } from '../components/ui/button';
import { gamesData } from '../data/gamesData';
import { RevealLicense } from '../components/RevealLicense';
import { PageTransition } from '@/components/PageTransition';
import { generateReceiptPDF } from '../utils/generateReceipt';

{/* Definición de la interfaz Purchase */}
interface Purchase {
  id: string;
  order_id: string;
  product_name: string;
  product_image: string;
  platform: string;
  price: number;
  license_key?: string;
  download_link?: string;
  purchased_at: string;
}

{/* Componente principal Library */}
export default function Library() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loadingPurchases, setLoadingPurchases] = useState(true);
  const [selectedTab, setSelectedTab] = useState('all');

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchPurchases();
    }
  }, [user]);

  const fetchPurchases = async () => {
    try {
      const { data, error } = await supabase
        .from('purchases')
        .select('*')
        .eq('user_id', user?.id)
        .order('purchased_at', { ascending: false });

      if (error) throw error;
      setPurchases(data || []);
    } catch (error) {
      console.error('Error fetching purchases:', error);
    } finally {
      setLoadingPurchases(false);
    }
  };

  {/* Filtrado de compras según la pestaña seleccionada */}
  const filteredPurchases = selectedTab === 'all' 
    ? purchases 
    : purchases.filter(p => p.platform?.toLowerCase() === selectedTab);

  const handleViewReceipt = async (purchase: Purchase) => {
    try {
      // Buscar el ID correcto del juego en gamesData
      const gameEntry = Object.entries(gamesData).find(([_, game]) => 
        game.name === purchase.product_name
      );
      const gameId = gameEntry ? gameEntry[0] : purchase.id;
      
      await generateReceiptPDF({
        orderNumber: purchase.order_id,
        date: new Date(purchase.purchased_at).toLocaleDateString('es-ES'),
        paymentMethod: 'Compra digital',
        customerInfo: {
          email: user?.email || '',
          name: user?.user_metadata?.full_name || 'Cliente',
          address: '',
          city: '',
          postalCode: '',
          country: 'México'
        },
        items: [{
          id: gameId,
          name: purchase.product_name,
          price: purchase.price,
          platform: purchase.platform
        }],
        subtotal: purchase.price / 1.16,
        tax: purchase.price - (purchase.price / 1.16),
        total: purchase.price
      });
    } catch (error) {
      console.error('Error generando recibo:', error);
      alert('Error al generar el recibo. Por favor intenta de nuevo.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black text-xl">Cargando...</div>
      </div>
    );
  }

  if (!user) return null;
  {/* Renderizado del componente */}
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-16 xs:pt-20 sm:pt-24 pb-6 xs:pb-8 sm:pb-12 px-2 xs:px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-4 xs:mb-6 sm:mb-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-1 xs:mb-2 tracking-tight">Mi Biblioteca</h1>
          <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl">Todos tus productos digitales en un solo lugar</p>
        </div>

        <Tabs defaultValue="all" onValueChange={setSelectedTab} className="mb-4 xs:mb-6 sm:mb-8">
          <TabsList className="bg-gray-100 border border-gray-200 rounded-xl xs:rounded-2xl p-1 flex flex-wrap gap-1 h-auto">
            <TabsTrigger value="all" className="rounded-lg xs:rounded-xl text-xs xs:text-sm">Todos ({purchases.length})</TabsTrigger>
            <TabsTrigger value="windows" className="rounded-lg xs:rounded-xl text-xs xs:text-sm">Windows</TabsTrigger>
            <TabsTrigger value="mac" className="rounded-lg xs:rounded-xl text-xs xs:text-sm">Mac</TabsTrigger>
            <TabsTrigger value="playstation" className="rounded-lg xs:rounded-xl text-xs xs:text-sm">PlayStation</TabsTrigger>
            <TabsTrigger value="xbox" className="rounded-lg xs:rounded-xl text-xs xs:text-sm">Xbox</TabsTrigger>
            <TabsTrigger value="steam" className="rounded-lg xs:rounded-xl text-xs xs:text-sm">Steam</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="mt-3 xs:mt-4 sm:mt-6">
            {loadingPurchases ? (
              <div className="text-center text-gray-600 py-12">Cargando biblioteca...</div>
            ) : filteredPurchases.length === 0 ? (
              <Card className="p-6 xs:p-8 sm:p-12 bg-white border-2 border-gray-200 rounded-2xl xs:rounded-3xl text-center shadow-lg">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl xs:rounded-2xl flex items-center justify-center mx-auto mb-3 xs:mb-4">
                  <HiLibrary className="text-gray-400 text-2xl xs:text-3xl" />
                </div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-black mb-1 xs:mb-2">
                  {selectedTab === 'all' ? 'Tu biblioteca está vacía' : `No tienes productos para ${selectedTab}`}
                </h2>
                <p className="text-gray-600 text-sm xs:text-base mb-4 xs:mb-5 sm:mb-6">
                  Explora nuestra tienda y encuentra las mejores ofertas
                </p>
                <Button
                  onClick={() => navigate('/store')}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl xs:rounded-2xl text-sm xs:text-base"
                >
                  Ir a la Tienda
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
                {filteredPurchases.map((purchase) => (
                  <motion.div
                    key={purchase.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="overflow-hidden bg-white border-2 border-gray-200 hover:border-blue-600 transition-all rounded-2xl xs:rounded-3xl shadow-lg">
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                        {/* Debug: Mostrar el id de la compra en consola */}
                        {(() => { console.log('purchase.id', purchase.id, 'product_name', purchase.product_name); return null; })()}
                        {gamesData[purchase.id]?.banner ? (
                          <img
                            src={gamesData[purchase.id].banner}
                            alt={purchase.product_name}
                            className="w-full h-full object-cover"
                          />
                        ) : Object.values(gamesData).find(g => g.name === purchase.product_name)?.banner ? (
                          <img
                            src={Object.values(gamesData).find(g => g.name === purchase.product_name)!.banner}
                            alt={purchase.product_name}
                            className="w-full h-full object-cover"
                          />
                        ) : purchase.product_image ? (
                          <img
                            src={purchase.product_image}
                            alt={purchase.product_name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <HiShoppingBag className="text-white text-6xl opacity-50" />
                          </div>
                        )}
                        <Badge className="absolute top-2 right-2 xs:top-3 xs:right-3 bg-black/70 text-white border-white/20 rounded-lg xs:rounded-xl text-xs">
                          {purchase.platform}
                        </Badge>
                      </div>
                      <div className="p-3 xs:p-4 sm:p-6">
                        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-1 xs:mb-2">
                          {purchase.product_name}
                        </h3>
                        <p className="text-gray-600 text-xs xs:text-sm mb-3 xs:mb-4">
                          Comprado el {new Date(purchase.purchased_at).toLocaleDateString('es-ES')}
                        </p>
                        
                        {purchase.license_key && (
                          <RevealLicense licenseKey={purchase.license_key} />
                        )}

                        <div className="flex flex-col xs:flex-row gap-2">
                          {purchase.download_link && (
                            <a
                              href={purchase.download_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 xs:px-4 rounded-lg xs:rounded-xl text-center font-semibold text-xs xs:text-sm flex items-center justify-center gap-1"
                            >
                              <HiInformationCircle />
                              Activar
                            </a>
                          )}
                          <button 
                            onClick={() => handleViewReceipt(purchase)}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-black py-2 px-3 xs:px-4 rounded-lg xs:rounded-xl font-semibold text-xs xs:text-sm border border-gray-200 flex items-center justify-center gap-1"
                          >
                            <HiDocumentText />
                            Ver recibo
                          </button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
    </PageTransition>
  );
}
