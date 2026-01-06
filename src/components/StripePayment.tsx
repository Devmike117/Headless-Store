import { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { HiCreditCard } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface StripePaymentProps {
  stripePromise: any;
  formData: any;
  total: number;
  onSuccess: () => void;
}

function StripeCheckoutForm({ formData, total, onSuccess }: { formData: any; total: number; onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setProcessing(true);
    setError(null);
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setProcessing(false);
      return;
    }
    try {
      const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
          address: {
            line1: formData.address,
            city: formData.city,
            postal_code: formData.postalCode,
            country: formData.country,
          },
        },
      });
      if (error) {
        setError(error.message || 'Error al procesar el pago');
        setProcessing(false);
      } else {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      setError('Error al procesar el pago');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="mb-2 block">Información de la tarjeta</Label>
        <div className="p-4 border border-gray-300 rounded-2xl bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#000',
                  '::placeholder': { color: '#9CA3AF' },
                },
                invalid: { color: '#EF4444' },
              },
            }}
          />
        </div>
      </div>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm"
        >
          {error}
        </motion.div>
      )}
      <Button type="submit" disabled={!stripe || processing} className="w-full py-6 text-lg" size="lg">
        {processing ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Procesando...
          </div>
        ) : (
          <>Pagar ${total.toFixed(2)}</>
        )}
      </Button>
    </form>
  );
}

export function StripePayment({ stripePromise, formData, total, onSuccess }: StripePaymentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HiCreditCard className="text-2xl text-blue-600" />
          Pago con tarjeta
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm formData={formData} total={total} onSuccess={onSuccess} />
        </Elements>
      </CardContent>
    </Card>
  );
}
