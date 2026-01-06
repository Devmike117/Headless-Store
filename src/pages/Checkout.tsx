
import GPayLogo from '../assets/Google_Pay.svg';
import ApplePayLogo from '../assets/Apple_Pay.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCreditCard, HiCheckCircle, HiShoppingCart, HiDownload } from 'react-icons/hi';
import { BsBank } from 'react-icons/bs';
import { loadStripe } from '@stripe/stripe-js';
import { StripePayment } from '../components/StripePayment';
import { GooglePayPayment } from '../components/GooglePayPayment';
import { ApplePayPayment } from '../components/ApplePayPayment';
import { useCart } from '../context/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { PageTransition } from '@/components/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { gamesData } from '../data/gamesData';
import { generateReceiptPDF, generateOrderNumber, type OrderData } from '../utils/generateReceipt';
import { generateLicenseKey, generateDownloadLink } from '../utils/licenseGenerator';

{/* Inicializar Stripe */}
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

type PaymentMethod = 'stripe' | 'googlepay' | 'applepay' | 'transfer';

interface CheckoutFormData {
  email: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

{/* Guardar la orden y compras en Supabase */}
const saveOrderToDatabase = async (
  userId: string | undefined,
  orderData: OrderData,
  paymentMethod: string
) => {
  try {
    {/* Si no hay usuario, no guardar en la base de datos */}
    if (!userId) {
      console.log('No user logged in, skipping database save');
      return { success: false, message: 'Usuario no autenticado' };
    }

    {/* 1. Guardar la orden */}
    const { data: orderRecord, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: userId,
        order_number: orderData.orderNumber,
        total: orderData.total,
        subtotal: orderData.subtotal,
        tax: orderData.tax,
        status: 'completed',
        payment_method: paymentMethod,
        customer_name: orderData.customerInfo.name,
        customer_email: orderData.customerInfo.email,
        customer_address: orderData.customerInfo.address,
        customer_city: orderData.customerInfo.city,
        customer_postal_code: orderData.customerInfo.postalCode,
        customer_country: orderData.customerInfo.country,
      })
      .select()
      .single();

    if (orderError) {
      console.error('Error saving order:', orderError);
      return { success: false, error: orderError };
    }

    {/* 2. Guardar los productos comprados */}
    const purchasesData = orderData.items.map((item) => ({
      user_id: userId,
      order_id: orderRecord.id,
      product_id: item.id,
      product_name: item.name,
      product_image: null, // imagen de producto no disponible en este contexto
      platform: item.platform || 'Digital',
      price: item.price,
      license_key: generateLicenseKey(item.name),
      download_link: generateDownloadLink(item.id, item.platform),
    }));

    const { error: purchasesError } = await supabase
      .from('purchases')
      .insert(purchasesData);

    if (purchasesError) {
      console.error('Error saving purchases:', purchasesError);
      return { success: false, error: purchasesError };
    }

    return { success: true, orderId: orderRecord.id };
  } catch (error) {
    console.error('Error in saveOrderToDatabase:', error);
    return { success: false, error };
  }
};


export const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('stripe');
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: user?.email || '',
    name: user?.user_metadata?.full_name || '',
    address: '',
    city: '',
    postalCode: '',
    country: 'MX',
  });

  const subtotal = getCartTotal();
  const tax = subtotal * 0.16; // IVA 16%
  const total = subtotal + tax;

  useEffect(() => {
    if (cart.length === 0 && !showSuccess) {
      navigate('/store');
    }
  }, [cart, navigate, showSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadReceipt = () => {
    if (orderData) {
      generateReceiptPDF(orderData);
    }
  };

  const handleSuccess = async () => {
    // Guardar datos de la orden antes de limpiar el carrito
    const orderNumber = generateOrderNumber();
    const paymentMethodName = paymentMethod === 'stripe' 
      ? 'Tarjeta de crédito/débito (Stripe)' 
      : paymentMethod === 'googlepay' 
      ? 'Google Pay' 
      : 'Transferencia bancaria';
    
    const order: OrderData = {
      orderNumber,
      date: new Date().toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      paymentMethod: paymentMethodName,
      customerInfo: formData,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        platform: item.platform
      })),
      subtotal,
      tax,
      total
    };
    
    // Guardar en Supabase si hay usuario autenticado
    if (user) {
      const result = await saveOrderToDatabase(user.id, order, paymentMethodName);
      
      if (result.success) {
        console.log('Order saved successfully!', result.orderId);
      } else {
        console.error('Failed to save order:', result.error);
        // Continuar de todas formas mostrando el éxito al usuario
      }
    } else {
      console.log('Guest checkout - order not saved to database');
    }
    
    setOrderData(order);
    setShowSuccess(true);
    clearCart();
  };

  const handleTransferSubmit = () => {
    // envío de confirmación
    setTimeout(() => {
      handleSuccess();
    }, 1000);
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white flex items-center justify-center px-6 pt-20"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-center max-w-lg w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <HiCheckCircle className="text-6xl text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl font-bold text-black mb-4"
          >
            ¡Pago exitoso!
          </motion.h1>
          
          {orderData && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4"
              >
                <p className="text-sm text-blue-900 font-semibold mb-1">Número de orden</p>
                <p className="text-lg font-mono text-blue-700">{orderData.orderNumber}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gray-50 rounded-2xl p-4 mb-6 text-left"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Resumen de compra</h3>
                <div className="space-y-2">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name}</span>
                      <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900">${orderData.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">IVA (16%)</span>
                      <span className="text-gray-900">${orderData.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-base mt-2 pt-2 border-t border-gray-300">
                      <span className="text-gray-900">Total</span>
                      <span className="text-blue-600">${orderData.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="text-lg text-gray-600 mb-6"
          >
            Recibirás un email con los detalles de tu compra y las instrucciones para descargar tus productos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-3"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleDownloadReceipt}
                size="lg"
                className="w-full"
                variant="default"
              >
                <HiDownload className="text-xl mr-2" />
                Descargar recibo (PDF)
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => navigate('/store')}
                size="lg"
                variant="outline"
                className="w-full"
              >
                Continuar comprando
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-20 pb-16 checkout-container">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-black mb-2 checkout-title">Checkout</h1>
          <p className="text-gray-600">Completa tu compra de forma segura</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 checkout-grid">
          {/* Izquierda: Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6 checkout-form"
          >
            {/* Información del cliente */}
            <Card className="checkout-card">
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="juan@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Calle Principal 123"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Ciudad</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Ciudad de México"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Código Postal</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="12345"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">País</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="MX"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selección de método de pago */}
            <Card className="checkout-card">
              <CardHeader>
                <CardTitle>Método de pago</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
                  className="space-y-3"
                >
                  <motion.label
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      paymentMethod === 'stripe'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="stripe" id="stripe" />
                      <div className="flex items-center gap-3">
                        <HiCreditCard className="text-3xl text-blue-600" />
                        <div>
                          <div className="font-semibold text-black">Tarjeta de crédito/débito</div>
                          <div className="text-sm text-gray-500">Procesado por Stripe</div>
                        </div>
                      </div>
                    </div>
                  </motion.label>

                  <motion.label
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      paymentMethod === 'applepay'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="applepay" id="applepay" />
                      <div className="flex items-center gap-3">
                        <img src={ApplePayLogo} alt="Apple Pay" style={{ width: 40, height: 28 }} />
                        <div>
                          <div className="font-semibold text-black">Apple Pay</div>
                          <div className="text-sm text-gray-500">Pago seguro con Apple Pay</div>
                        </div>
                      </div>
                    </div>
                  </motion.label>

                  <motion.label
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      paymentMethod === 'googlepay'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="googlepay" id="googlepay" />
                      <div className="flex items-center gap-3">
                        <img src={GPayLogo} alt="Google Pay" style={{ width: 40, height: 28 }} />
                        <div>
                          <div className="font-semibold text-black">Google Pay</div>
                          <div className="text-sm text-gray-500">Pago seguro con Google Pay</div>
                        </div>
                      </div>
                    </div>
                  </motion.label>

                  <motion.label
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      paymentMethod === 'transfer'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="transfer" id="transfer" />
                      <div className="flex items-center gap-3">
                        <BsBank className="text-3xl text-green-600" />
                        <div>
                          <div className="font-semibold text-black">Transferencia bancaria</div>
                          <div className="text-sm text-gray-500">Pago manual por transferencia</div>
                        </div>
                      </div>
                    </div>
                  </motion.label>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Formularios de pago */}
            <AnimatePresence mode="wait">

              {paymentMethod === 'stripe' && (
                <motion.div
                  key="stripe"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <StripePayment
                    stripePromise={stripePromise}
                    formData={formData}
                    total={total}
                    onSuccess={handleSuccess}
                  />
                </motion.div>
              )}
              {paymentMethod === 'applepay' && (
                <motion.div
                  key="applepay"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ApplePayPayment total={total} onSuccess={handleSuccess} />
                </motion.div>
              )}
              {paymentMethod === 'googlepay' && (
                <motion.div
                  key="googlepay"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <GooglePayPayment total={total} onSuccess={handleSuccess} />
                </motion.div>
              )}

              {paymentMethod === 'transfer' && (
                <motion.div
                  key="transfer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BsBank className="text-2xl text-green-600" />
                        Transferencia bancaria
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-4">
                        <h3 className="font-semibold text-black text-lg">Datos bancarios</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Banco:</span>
                            <span className="font-medium text-black">BBVA México</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Cuenta:</span>
                            <span className="font-medium text-black">0123456789</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">CLABE:</span>
                            <span className="font-medium text-black">012345678901234567</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Beneficiario:</span>
                            <span className="font-medium text-black">Tienda Digital S.A.</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Concepto:</span>
                            <span className="font-medium text-black">Compra licencias digitales</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                        <p className="text-sm text-yellow-800">
                          <strong>Importante:</strong> Una vez realizada la transferencia, envía el comprobante a{' '}
                          <a href="mailto:devmike117@icloud.com" className="underline">
                            devmike117@icloud.com
                          </a>{' '}
                          con tu número de orden. Procesaremos tu pedido en 24-48 horas.
                        </p>
                      </div>

                      <Button
                        onClick={handleTransferSubmit}
                        className="w-full py-6 text-lg"
                        size="lg"
                      >
                        Confirmar pedido
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Resumen del pedido: lado derecho */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="sticky top-24 checkout-summary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HiShoppingCart className="text-xl" />
                  Resumen del pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">

                {/* Artículos del carrito */}
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {cart.map((item) => {
                    const gameData = gamesData[item.id];
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 p-3 bg-gray-50 rounded-2xl"
                      >
                        <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <img src={gameData?.banner} alt={item.name} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-black text-sm truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-500">{item.platform}</p>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-400 line-through">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                              <Badge variant="success" className="text-xs px-2 py-0">
                                -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                              </Badge>
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-black">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Totales */}
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>IVA (16%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-black pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Compra segura */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start gap-3">
                  <HiCheckCircle className="text-2xl text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-green-900 mb-1">Compra segura</div>
                    <div className="text-green-700">
                      Tus datos están protegidos con encriptación SSL de 256 bits
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};
