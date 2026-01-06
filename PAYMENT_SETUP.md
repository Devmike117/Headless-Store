> **Nota:** Stripe facilita la integración de Apple Pay. No necesitas implementar la lógica nativa de Apple Pay ni registrarte como merchant en Apple. Solo debes verificar tu dominio en Stripe y usar el Payment Request Button de Stripe. Stripe se encarga de toda la comunicación y requisitos técnicos con Apple Pay.

# Configuración de Pagos

Esta aplicación incluye integración con múltiples métodos de pago: Stripe, PayPal y Transferencia Bancaria.

## 🔐 Configuración de Stripe

### 1. Obtener las claves API

1. Crea una cuenta en [Stripe](https://stripe.com)
2. Ve a Developers > API keys
3. Copia tu **Publishable key** (comienza con `pk_`)

### 2. Configurar en la aplicación

Edita el archivo `src/pages/Checkout.tsx` y reemplaza la clave de prueba:

```typescript
const stripePromise = loadStripe('TU_PUBLISHABLE_KEY_AQUI');
```

### 3. Backend (Producción)

Para producción necesitas:
- Crear un endpoint en tu backend para generar PaymentIntents
- Usar tu **Secret key** en el servidor (NUNCA en el frontend)
- Implementar webhooks para confirmar pagos


## 🟢 Configuración de Google Pay

### 1. Obtener credenciales de Google Pay

1. Regístrate en [Google Pay Business Console](https://pay.google.com/business/console)
2. Crea un nuevo merchant y obtén tu **Merchant ID**
3. Define el nombre de tu comercio (**Merchant Name**) que aparecerá en el checkout

### 2. Configurar variables de entorno

Agrega en tu archivo `.env`:

```env
VITE_GOOGLEPAY_MERCHANT_ID=tu_merchant_id
VITE_GOOGLEPAY_MERCHANT_NAME=Nombre de tu tienda
```

### 3. Integrar en el frontend

El componente ya está listo para usar las variables de entorno:

```tsx
import { GooglePayPayment } from '../components/GooglePayPayment';

<GooglePayPayment total={total} onSuccess={handleSuccess} />
```

No expongas tus credenciales directamente en el código fuente, solo usa variables de entorno.

### 4. Producción

- Cambia el `environment: 'TEST'` a `environment: 'PRODUCTION'` en el componente si vas a producción.
- Asegúrate de que tu Merchant ID esté aprobado por Google.

### 5. Recursos

- [Google Pay API Docs](https://developers.google.com/pay/api/web/overview)
- [Google Pay Merchant Registration](https://pay.google.com/business/console)

### 1. Obtener Client ID

1. Crea una cuenta en [PayPal Developer](https://developer.paypal.com)
2. Ve a Dashboard > My Apps & Credentials
3. Crea una nueva app
4. Copia tu **Client ID**

### 2. Configurar en la aplicación

Edita el archivo `src/pages/Checkout.tsx` en la sección de PayPal:

```typescript
<PayPalScriptProvider
   options={{
      clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID, // Usar variable de entorno
      currency: 'USD',
   }}
>
```

### 3. Modo Sandbox vs Producción

- **Sandbox (Desarrollo)**: Usa el Client ID de Sandbox
- **Production**: Usa el Client ID de Live


## 🍏 Configuración de Apple Pay

### 1. Requisitos previos

- Debes tener una cuenta de Stripe y tu dominio debe estar verificado en Stripe para Apple Pay.
- El sitio debe estar servido por HTTPS (obligatorio en producción).

### 2. Variables de entorno

Agrega en tu archivo `.env`:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 3. Verifica tu dominio en Stripe

1. Ingresa a tu dashboard de Stripe.
2. Ve a "Pagos" > "Apple Pay".
3. Agrega y verifica tu dominio siguiendo las instrucciones de Stripe.

### 4. Integración en el frontend

El componente ya está listo para usar Apple Pay a través de Stripe Payment Request Button:

```tsx
import { ApplePayPayment } from '../components/ApplePayPayment';

<ApplePayPayment total={total} onSuccess={handleSuccess} />
```

### 5. Producción

- Asegúrate de que tu dominio esté verificado en Stripe.
- Usa tu clave de producción en el archivo `.env`.

### 6. Recursos

- [Stripe Apple Pay Docs](https://stripe.com/docs/apple-pay)
- [Verificar dominio Apple Pay](https://dashboard.stripe.com/settings/payments/apple_pay)

## 🏦 Transferencia Bancaria

La transferencia bancaria es un método manual que requiere:

1. Actualizar los datos bancarios en `src/pages/Checkout.tsx`:

```typescript
<div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-4">
  <h3 className="font-semibold text-black text-lg">Datos bancarios</h3>
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span className="text-gray-600">Banco:</span>
      <span className="font-medium text-black">TU_BANCO</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Cuenta:</span>
      <span className="font-medium text-black">TU_NUMERO_CUENTA</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">CLABE:</span>
      <span className="font-medium text-black">TU_CLABE</span>
    </div>
    // ... más campos
  </div>
</div>
```

2. Configurar un sistema de notificaciones por email
3. Implementar un dashboard para verificar comprobantes

## 🔒 Seguridad

### Variables de Entorno (Recomendado)

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_PAYPAL_CLIENT_ID=...
```

Luego usa en tu código:

```typescript
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
```

### HTTPS Obligatorio

Tanto Stripe como PayPal requieren HTTPS en producción.

## 📧 Notificaciones por Email

Para enviar emails de confirmación necesitas:

1. Un servicio como:
   - SendGrid
   - Mailgun
   - Amazon SES
   - Resend

2. Un backend que escuche los webhooks de Stripe/PayPal
3. Templates de email para confirmaciones

## 🧪 Modo de Prueba

### Stripe Test Cards

- Éxito: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Requiere autenticación: `4000 0025 0000 3155`

Fecha de expiración: Cualquier fecha futura
CVC: Cualquier 3 dígitos
Código postal: Cualquier código

### PayPal Sandbox

Usa las credenciales de prueba de tu cuenta Sandbox en PayPal Developer Dashboard.

## 🚀 Deploy en Producción

1. **Backend API** (Node.js, Python, etc.)
   ```
   POST /api/create-payment-intent
   POST /api/webhook/stripe
   POST /api/webhook/paypal
   ```

2. **Variables de Entorno**
   - Stripe Secret Key
   - PayPal Client Secret
   - Database credentials
   - Email service credentials

3. **SSL Certificate**
   - Obligatorio para pagos
   - Usa Let's Encrypt (gratis)
   - O el SSL de tu hosting

## 📱 Testing

Prueba cada flujo:
- ✅ Agregar al carrito
- ✅ Ir a checkout
- ✅ Llenar formulario
- ✅ Pago con Stripe
- ✅ Pago con PayPal
- ✅ Solicitud de transferencia
- ✅ Email de confirmación
- ✅ Entrega de licencias

## 🛠️ Desarrollo Adicional

Para un sistema completo necesitas:

1. **Backend**
   - API REST o GraphQL
   - Base de datos (PostgreSQL, MongoDB)
   - Autenticación (JWT, OAuth)

2. **Webhooks**
   - Stripe: `stripe listen --forward-to localhost:3000/webhook/stripe`
   - PayPal: Configurar en Developer Dashboard

3. **Gestión de Licencias**
   - Generar códigos únicos
   - Almacenar en base de datos
   - Enviar por email
   - Portal de descarga

4. **Dashboard Admin**
   - Ver órdenes
   - Verificar pagos
   - Aprobar transferencias
   - Gestionar inventario

## 📚 Recursos

- [Stripe Documentation](https://stripe.com/docs)
- [PayPal Developer](https://developer.paypal.com/docs)
- [Stripe Testing](https://stripe.com/docs/testing)
- [PayPal Sandbox](https://developer.paypal.com/tools/sandbox/)

