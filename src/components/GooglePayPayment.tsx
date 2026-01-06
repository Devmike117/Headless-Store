import React, { useEffect, useRef } from 'react';

interface GooglePayPaymentProps {
  total: number;
  onSuccess: (details: any) => void;
}

export const GooglePayPayment: React.FC<GooglePayPaymentProps> = ({ total, onSuccess }) => {
  const googlePayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!(window as any).google) {
      const script = document.createElement('script');
      script.src = 'https://pay.google.com/gp/p/js/pay.js';
      script.async = true;
      script.onload = initializeGooglePay;
      document.body.appendChild(script);
    } else {
      initializeGooglePay();
    }
    // eslint-disable-next-line
  }, []);

  function initializeGooglePay() {
    if (!(window as any).google || !googlePayRef.current) return;
    const paymentsClient = new (window as any).google.payments.api.PaymentsClient({ environment: 'TEST' });
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'stripe',
              'stripe:version': '2020-08-27',
              'stripe:publishableKey': import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: import.meta.env.VITE_GOOGLEPAY_MERCHANT_ID,
        merchantName: import.meta.env.VITE_GOOGLEPAY_MERCHANT_NAME,
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: total.toFixed(2),
        currencyCode: 'MXN',
        countryCode: 'MX',
      },
    };

    paymentsClient.isReadyToPay({
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: paymentDataRequest.allowedPaymentMethods,
    }).then(function(response: any) {
      if (response.result) {
        const button = paymentsClient.createButton({
          onClick: () => onGooglePayButtonClicked(paymentsClient, paymentDataRequest),
        });
        googlePayRef.current!.innerHTML = '';
        googlePayRef.current!.appendChild(button);
      }
    });
  }

  function onGooglePayButtonClicked(paymentsClient: any, paymentDataRequest: any) {
    paymentsClient.loadPaymentData(paymentDataRequest).then(function(paymentData: any) {
      
      onSuccess(paymentData);
    }).catch(function() {
      // Manejar error o cancelación
      alert('Pago cancelado o fallido.');
    });
  }

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div ref={googlePayRef}></div>
      <p className="text-xs text-gray-500 mt-2">Pago seguro con Google Pay</p>
    </div>
  );
};
