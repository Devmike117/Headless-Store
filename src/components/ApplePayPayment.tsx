import React, { useEffect, useRef } from 'react';

interface ApplePayPaymentProps {
  total: number;
  onSuccess: (details: any) => void;
}

export const ApplePayPayment: React.FC<ApplePayPaymentProps> = ({ total, onSuccess }) => {
  const applePayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!(window as any).Stripe) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.async = true;
      script.onload = initializeApplePay;
      document.body.appendChild(script);
    } else {
      initializeApplePay();
    }
    // eslint-disable-next-line
  }, []);

  function initializeApplePay() {
    if (!(window as any).Stripe || !applePayRef.current) return;
    const stripe = (window as any).Stripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
    const paymentRequest = stripe.paymentRequest({
      country: 'MX',
      currency: 'mxn',
      total: {
        label: 'Total',
        amount: Math.round(total * 100),
      },
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: false,
      requestShipping: false,
      // Solicitamos tarjetas
      supportedNetworks: ['amex', 'mastercard', 'visa'],
      // Solo mostrar Apple Pay
      displayItems: [
        { label: 'Total', amount: Math.round(total * 100) }
      ],
    });

    paymentRequest.canMakePayment().then(function(result: any) {
      if (result && result.applePay) {
        const elements = stripe.elements();
        const prButton = elements.create('paymentRequestButton', {
          paymentRequest,
          style: {
            paymentRequestButton: {
              type: 'applePay',
              theme: 'dark',
              height: '44px',
            },
          },
        });
        prButton.mount(applePayRef.current);
        paymentRequest.on('token', function(ev: any) {
          onSuccess(ev.token);
          ev.complete('success');
        });
      } else {
        if (applePayRef.current) {
          applePayRef.current.innerHTML = '<p class="text-xs text-gray-500">Apple Pay no está disponible en este dispositivo/navegador.</p>';
        }
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div ref={applePayRef}></div>
      <p className="text-xs text-gray-500 mt-2">Pago seguro con Apple Pay</p>
    </div>
  );
};
