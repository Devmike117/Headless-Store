import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Store } from './pages/Store';
import { Games } from './pages/Games';
import { Consoles } from './pages/Consoles';
import { Windows } from './pages/Windows';
import { Office } from './pages/Office';
import { SteamGames } from './pages/SteamGames';
import { XboxGames } from './pages/XboxGames';
import { PlayStationGames } from './pages/PlayStationGames';
import { GameDetails } from './pages/GameDetails';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Library from './pages/Library';
import { DesarrolloWeb } from './pages/services/DesarrolloWeb';
import { MantenimientoPC } from './pages/services/MantenimientoPC';
import { ReparacionDisco } from './pages/services/ReparacionDisco';
import { InstalacionSO } from './pages/services/InstalacionSO';
import { InstalacionRemota } from './pages/services/InstalacionRemota';
import { ConfiguracionRedes } from './pages/services/ConfiguracionRedes';
import { ActualizacionMacOS } from './pages/services/ActualizacionMacOS';
import { RecuperacionDatos } from './pages/services/RecuperacionDatos';
import { EliminacionVirus } from './pages/services/EliminacionVirus';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { FAQ } from './pages/FAQ';

function AnimatedRoutes() {
  const location = useLocation();
  
  // Páginas sin navbar
  const noNavbarRoutes = ['/login', '/register'];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);
  
  return (
    <>
      {showNavbar && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
        <Route path="/servicios/mantenimiento-pc" element={<MantenimientoPC />} />
        <Route path="/servicios/reparacion-disco" element={<ReparacionDisco />} />
        <Route path="/servicios/instalacion-so" element={<InstalacionSO />} />
        <Route path="/servicios/instalacion-remota" element={<InstalacionRemota />} />
        <Route path="/servicios/configuracion-redes" element={<ConfiguracionRedes />} />
        <Route path="/servicios/actualizacion-macos" element={<ActualizacionMacOS />} />
        <Route path="/servicios/recuperacion-datos" element={<RecuperacionDatos />} />
        <Route path="/servicios/eliminacion-virus" element={<EliminacionVirus />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/games" element={<Games />} />
        <Route path="/store/consoles" element={<Consoles />} />
        <Route path="/store/windows" element={<Windows />} />
        <Route path="/store/office" element={<Office />} />
        <Route path="/games/steam" element={<SteamGames />} />
        <Route path="/games/xbox" element={<XboxGames />} />
        <Route path="/games/playstation" element={<PlayStationGames />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/library" element={<Library />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/carreras" element={<Careers />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
