# Servicio / Tienda

Store construida con **Vite + React + TypeScript + Tailwind CSS** con sistema de autenticación, carrito de compras y múltiples métodos de pago.

## 🚀 Tecnologías

### Frontend
- **Vite 7** - Build tool ultrarrápido
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 3** - Framework CSS utility-first con componentes personalizados
- **React Router DOM 7** - Enrutamiento SPA
- **Framer Motion** - Animaciones y transiciones fluidas
- **React Icons** - Biblioteca de iconos

### Backend & Base de Datos
- **Supabase** - Autenticación, base de datos PostgreSQL y almacenamiento
- **Supabase Auth** - Autenticación con email/password y OAuth (Google)
- **Axios** - Cliente HTTP

### Pagos
- **Stripe** - Procesamiento de pagos con tarjeta
- **Apple Pay** - A través de Stripe Payment Request Button
- **Google Pay** - SDK de Google Pay con tokenización de Stripe
- **@stripe/react-stripe-js** - Componentes de Stripe para React
- **@stripe/stripe-js** - SDK de Stripe
- **Google Pay API** - SDK oficial de Google Pay

### UI Components
- **Radix UI** - Componentes accesibles sin estilos (Tabs, Radio Groups)
- **Class Variance Authority (CVA)** - Gestión de variantes de componentes
- **Tailwind Merge** - Fusión inteligente de clases Tailwind
- **clsx** - Utilidad para clases condicionales

### Utilidades
- **jsPDF** - Generación de recibos en PDF
- **jspdf-autotable** - Tablas para PDFs

## 📦 Instalación

```bash
npm install
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Supabase
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_anon_key_de_supabase

# Stripe (incluye Apple Pay)
VITE_STRIPE_PUBLISHABLE_KEY=tu_publishable_key

# Google Pay
VITE_GOOGLEPAY_MERCHANT_ID=tu_merchant_id
VITE_GOOGLEPAY_MERCHANT_NAME=Nombre de tu tienda
```

Para más detalles sobre la configuración:
- **Supabase**: Ver [SUPABASE_SETUP.md](SUPABASE_SETUP.md)
- **Pagos**: Ver [PAYMENT_SETUP.md](PAYMENT_SETUP.md)

## 🛠️ Desarrollo

### Servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

## 🏗️ Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## 📂 Estructura del Proyecto

```
tienda/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.tsx       # Barra de navegación
│   │   ├── Footer.tsx       # Pie de página
│   │   ├── CartDropdown.tsx # Carrito desplegable
│   │   ├── GameCard.tsx     # Tarjeta de juego
│   │   ├── ProductCard.tsx  # Tarjeta de producto
│   │   ├── SearchBar.tsx    # Barra de búsqueda
│   │   ├── FilterBar.tsx    # Filtros de productos
│   │   ├── Modal.tsx        # Modal reutilizable
│   │   ├── PageTransition.tsx       # Transiciones entre páginas
│   │   ├── ScrollToTop.tsx          # Scroll automático al cambiar ruta
│   │   ├── RevealLicense.tsx        # Mostrar licencias
│   │   ├── GuestOrdersNotification.tsx # Notificación órdenes invitado
│   │   ├── StripePayment.tsx        # Pago con Stripe
│   │   ├── ApplePayPayment.tsx      # Pago con Apple Pay
│   │   ├── GooglePayPayment.tsx     # Pago con Google Pay
│   │   ├── categories/      # Componentes de categorías
│   │   │   ├── ConsolesCategory.tsx
│   │   │   ├── GamesCategory.tsx
│   │   │   ├── OfficeCategory.tsx
│   │   │   └── WindowsCategory.tsx
│   │   └── ui/              # Componentes UI base (shadcn)
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── radio-group.tsx
│   │       └── tabs.tsx
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Home.tsx        # Página de inicio
│   │   ├── Store.tsx       # Tienda principal
│   │   ├── Games.tsx       # Catálogo de juegos
│   │   ├── GameDetails.tsx # Detalles de juego
│   │   ├── SteamGames.tsx  # Juegos Steam
│   │   ├── PlayStationGames.tsx # Juegos PlayStation
│   │   ├── XboxGames.tsx   # Juegos Xbox
│   │   ├── Windows.tsx     # Licencias Windows
│   │   ├── Office.tsx      # Licencias Office
│   │   ├── Consoles.tsx    # Consolas
│   │   ├── Checkout.tsx    # Proceso de pago
│   │   ├── Library.tsx     # Biblioteca personal
│   │   ├── Profile.tsx     # Perfil de usuario
│   │   ├── Login.tsx       # Inicio de sesión
│   │   ├── Register.tsx    # Registro
│   │   ├── Services.tsx    # Página de servicios
│   │   ├── Contact.tsx     # Contacto
│   │   ├── About.tsx       # Acerca de
│   │   ├── Careers.tsx     # Colaboración
│   │   ├── Privacy.tsx     # Política de privacidad
│   │   ├── Terms.tsx       # Términos y condiciones
│   │   ├── FAQ.tsx         # Preguntas frecuentes
│   │   └── services/       # Páginas de servicios técnicos
│   │       ├── EliminacionVirus.tsx
│   │       ├── MantenimientoPC.tsx
│   │       ├── InstalacionSO.tsx
│   │       ├── ConfiguracionRedes.tsx
│   │       ├── ReparacionDisco.tsx
│   │       ├── RecuperacionDatos.tsx
│   │       ├── InstalacionRemota.tsx
│   │       ├── ActualizacionMacOS.tsx
│   │       └── DesarrolloWeb.tsx
│   ├── context/            # Context API
│   │   └── CartContext.tsx # Estado del carrito
│   ├── contexts/           # Contextos adicionales
│   │   └── AuthContext.tsx # Autenticación
│   ├── data/               # Datos estáticos
│   │   └── gamesData.ts    # Información de juegos
│   ├── lib/                # Librerías y utilidades
│   │   ├── supabase.ts     # Cliente de Supabase
│   │   └── utils.ts        # Funciones auxiliares
│   ├── utils/              # Utilidades
│   │   ├── generateReceipt.ts     # Generar recibos PDF
│   │   ├── licenseGenerator.ts    # Generar licencias
│   │   └── claimGuestOrders.ts    # Reclamar órdenes invitado
│   ├── types/              # Tipos TypeScript
│   │   └── jspdf-autotable.d.ts
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── PAYMENT_SETUP.md        # Guía de configuración de pagos
├── SUPABASE_SETUP.md       # Guía de configuración de Supabase
├── GUEST_ORDERS_SYSTEM.md  # Sistema de órdenes invitado
├── SUPABASE_CLAIM_FUNCTION.sql # Función SQL para reclamar órdenes
└── index.html              # HTML base con SEO
```

## 🎯 Características

### Autenticación y Usuarios
- ✅ Sistema de registro con email y contraseña
- ✅ Inicio de sesión con email/contraseña
- ✅ Inicio de sesión con Google (OAuth)
- ✅ Autenticación por email con confirmación
- ✅ Perfil de usuario personalizable
- ✅ Gestión de sesiones seguras
- ✅ Protección de rutas privadas

### Tienda y Productos
- ✅ Catálogo de productos (juegos, software, consolas)
- ✅ Búsqueda y filtrado de productos
- ✅ Detalles de productos con imágenes
- ✅ Categorías: Steam, PlayStation, Xbox, Windows, Office
- ✅ Sistema de precios dinámico

### Carrito de Compras
- ✅ Carrito persistente con Context API
- ✅ Añadir/eliminar productos
- ✅ Actualización en tiempo real
- ✅ Vista previa en dropdown

### Pagos
- ✅ Integración con Stripe (tarjetas de crédito/débito)
- ✅ Apple Pay (vía Stripe Payment Request)
- ✅ Google Pay (SDK oficial con tokenización Stripe)
- ✅ Opción de transferencia bancaria
- ✅ Generación automática de recibos en PDF
- ✅ Generación de licencias automáticas

### Biblioteca Personal
- ✅ Visualización de productos comprados
- ✅ Acceso a claves de licencia
- ✅ Descarga de recibos
- ✅ Historial de compras

### UI/UX
- ✅ Diseño responsive con Tailwind CSS
- ✅ Animaciones con Framer Motion
- ✅ Componentes UI accesibles (Radix UI)
- ✅ Modal personalizable
- ✅ TypeScript para type safety
- ✅ Hot Module Replacement (HMR)
- ✅ Componentes modulares y reutilizables

## 📄 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter ESLint

## 🌐 Rutas

### Públicas
- `/` - Página de inicio
- `/store` - Tienda en línea (catálogo completo)
- `/games` - Juegos digitales
- `/games/:id` - Detalles de juego específico
- `/steam-games` - Juegos de Steam
- `/playstation-games` - Juegos de PlayStation
- `/xbox-games` - Juegos de Xbox
- `/windows` - Licencias de Windows
- `/office` - Licencias de Office
- `/consoles` - Consolas
- `/services` - Servicios disponibles
- `/contact` - Formulario de contacto
- `/login` - Inicio de sesión
- `/register` - Registro de usuario

### Protegidas (requieren autenticación)
- `/checkout` - Proceso de pago
- `/library` - Biblioteca personal de compras
- `/profile` - Perfil de usuario

## 🔐 Seguridad

- Variables de entorno para claves sensibles
- Autenticación JWT con Supabase
- Validación de sesiones
- Rutas protegidas
- Tokens seguros para pagos

## 📝 Notas de Desarrollo

- Los métodos de pago requieren configuración adicional (ver PAYMENT_SETUP.md)
- Supabase debe estar configurado para autenticación (ver SUPABASE_SETUP.md)
- Para usar Google OAuth, debes configurar el proveedor en Supabase Dashboard
- La confirmación por email requiere configurar SMTP en Supabase
- Apple Pay se procesa a través de Stripe Payment Request Button
- Google Pay usa el SDK oficial de Google Pay con tokenización de Stripe
- Los recibos se generan automáticamente en PDF después de cada compra
- Las licencias se generan aleatoriamente para productos de software

# Derechos

- Todos los derechos reservados Devmike117. 
- 