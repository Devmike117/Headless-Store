# Sistema de Autenticación con Supabase

## Configuración Inicial

### 1. Crear cuenta en Supabase
1. Ve a https://supabase.com y regístrate
2. Crea un nuevo proyecto
3. Espera a que el proyecto esté listo (2-3 minutos)

### 2. Obtener credenciales
1. En tu dashboard de Supabase, ve a **Settings** > **API**
2. Copia tu `Project URL`
3. Copia tu `anon/public key`

### 3. Configurar variables de entorno
1. Crea un archivo `.env` en la raíz del proyecto (basado en `.env.example`)
2. Agrega tus credenciales:
```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
```

### 3.1. Configurar Email de Confirmación (RECOMENDADO)

**La forma más fácil y universal:** Usa el email nativo de Supabase.

1. Ve a Supabase → Project Settings → Auth → SMTP Settings
2. Desactiva "Enable Custom SMTP" (apaga el toggle)
3. Haz clic en Save
4. Ve a Authentication → Providers → Email
5. Activa el toggle "Confirm email"
6. Haz clic en Save

Ahora cualquier usuario podrá registrarse y recibir el email de confirmación desde noreply@mail.app.supabase.io (límite: 3 emails/hora).

**Notas:**
- Los emails pueden caer en spam, avisa a tus usuarios.
- Si necesitas más volumen, configura Resend, SendGrid o Mailgun más adelante.

---

### Flujo de registro para usuarios

1. El usuario se registra con su email y contraseña
2. Supabase envía automáticamente el email de confirmación
3. El usuario revisa su bandeja de entrada (y spam)
4. Haz clic en el enlace de confirmación
5. Ya puede iniciar sesión

---

### 4. Crear tablas en Supabase

Ve al **SQL Editor** en Supabase y ejecuta:

```sql
-- Tabla de órdenes
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  order_number TEXT UNIQUE NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL,
  tax DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'completed',
  payment_method TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_address TEXT NOT NULL,
  customer_city TEXT NOT NULL,
  customer_postal_code TEXT NOT NULL,
  customer_country TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de compras/productos
CREATE TABLE purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_image TEXT,
  platform TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  license_key TEXT,
  download_link TEXT,
  purchased_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad para orders
CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own orders"
  ON orders FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Políticas de seguridad para purchases
CREATE POLICY "Users can view their own purchases"
  ON purchases FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own purchases"
  ON purchases FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### 5. Configurar autenticación con Google (Opcional)

#### Paso 1: Obtener la Redirect URI de Supabase
1. En Supabase, ve a **Authentication** > **Providers**
2. Busca **Google** y haz clic para expandir
3. **COPIA** la URL que aparece en "Callback URL (for OAuth)" 
   - Debe verse así: `https://tu-proyecto.supabase.co/auth/v1/callback`
4. **NO actives el provider todavía**

#### Paso 2: Configurar Google Cloud Console
1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a **APIs & Services** > **Credentials**
4. Haz clic en **+ CREATE CREDENTIALS** > **OAuth client ID**
5. Si es la primera vez, deberás configurar la pantalla de consentimiento:
   - Tipo: **External**
   - Nombre de la aplicación: "Tienda Digital"
   - Email de soporte: tu email
   - Dominios autorizados: deja en blanco por ahora
   - Guarda y continúa
6. En la creación del OAuth client ID:
   - Application type: **Web application**
   - Name: "Tienda Digital - Supabase Auth"
   - **Authorized JavaScript origins**: 
     - `http://localhost:5174` (para desarrollo)
     - Tu dominio de producción cuando lo tengas
   - **Authorized redirect URIs**: 
     - **Pega aquí la Callback URL de Supabase** que copiaste en el Paso 1
     - Ejemplo: `https://xxxxx.supabase.co/auth/v1/callback`
   - Haz clic en **CREATE**
7. Copia el **Client ID** y **Client Secret**

#### Paso 3: Configurar en Supabase
1. Vuelve a Supabase > **Authentication** > **Providers** > **Google**
2. Activa el toggle **Enable Sign in with Google**
3. Pega el **Client ID** (Authorized Client IDs)
4. Pega el **Client Secret** (Client Secret for OAuth)
5. Haz clic en **Save**

#### Solución al error "redirect_uri_mismatch"
Este error ocurre cuando la redirect URI en Google Cloud Console no coincide exactamente con la de Supabase. Para solucionarlo:

1. Ve a Google Cloud Console > Credentials
2. Edita tu OAuth 2.0 Client ID
3. En "Authorized redirect URIs", asegúrate de tener **EXACTAMENTE**:
   - `https://TU-PROYECTO.supabase.co/auth/v1/callback`
4. Guarda los cambios
5. Espera 5 minutos para que los cambios se propaguen
6. Vuelve a intentar el login

## Funcionalidades Implementadas

### Autenticación
- ✅ Login con email/password
- ✅ Registro de usuarios
- ✅ Autenticación con Google
- ✅ Protección de rutas
- ✅ Persistencia de sesión

### Páginas
- ✅ `/login` - Iniciar sesión
- ✅ `/register` - Crear cuenta
- ✅ `/profile` - Perfil de usuario con historial de compras
- ✅ `/library` - Biblioteca de productos adquiridos

### Integración pendiente
- ⏳ Guardar compras en Supabase después del checkout
- ⏳ Generar claves de licencia automáticas
- ⏳ Enviar emails con licencias

## Próximos pasos

Para completar la integración:

1. **Actualizar el flujo de Checkout** para guardar órdenes en Supabase
2. **Generar licencias** automáticamente para cada producto
3. **Configurar emails** (Supabase + Resend o similar)
4. **Testing** completo del flujo de compra

## Comandos útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## Deploy en Vercel

1. Sube tu código a GitHub
2. Conecta el repositorio con Vercel
3. Agrega las variables de entorno en Vercel:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_STRIPE_PUBLIC_KEY (si usas Stripe)
   - VITE_PAYPAL_CLIENT_ID (si usas PayPal)
4. Deploy automático ✅
