import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiShoppingBag, HiHeart, HiUser } from 'react-icons/hi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { CartDropdown } from './CartDropdown';

export const Navbar = () => {
  const { cart, wishlist } = useCart();
  const { user } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow transition-all duration-300"
        style={{ WebkitBackdropFilter: 'blur(16px)' }}
      >
        <div className="px-2 sm:px-4">
          <div className="flex items-center h-14 justify-between">
            <Link to="/" className="text-lg sm:text-[21px] font-semibold text-black hover:text-gray-600 transition-colors">
              Devmike117 Store
            </Link>
            {/* Navegación de escritorio */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link to="/" className="text-xs sm:text-[12px] text-black hover:text-gray-600 transition-colors">Inicio</Link>
              <Link to="/services" className="text-xs sm:text-[12px] text-black hover:text-gray-600 transition-colors">Servicios</Link>
              <Link to="/store" className="text-xs sm:text-[12px] text-black hover:text-gray-600 transition-colors">Tienda</Link>
              {user && (
                <Link to="/library" className="text-xs sm:text-[12px] text-black hover:text-gray-600 transition-colors">Biblioteca</Link>
              )}
              <Link to="/contact" className="text-xs sm:text-[12px] text-black hover:text-gray-600 transition-colors">Contacto</Link>
              <button className="relative text-gray-600 hover:text-black transition-colors">
                <HiHeart className="text-xl" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{wishlist.length}</span>
                )}
              </button>
              <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative text-gray-600 hover:text-black transition-colors">
                <HiShoppingBag className="text-xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{cart.length}</span>
                )}
              </button>
              <Link to={user ? "/profile" : "/login"} className="relative text-gray-600 hover:text-black transition-colors">
                <HiUser className="text-xl" />
                {user && (<span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>)}
              </Link>
            </div>
            {/* Iconos móviles */}
            <div className="md:hidden flex items-center gap-3">
              <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative text-gray-600 hover:text-black transition-colors">
                <HiShoppingBag className="text-xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{cart.length}</span>
                )}
              </button>
              <motion.button
                className="flex items-center px-2 py-1 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label="Abrir menú"
              >
                <span className="sr-only">Abrir menú</span>
                <motion.svg
                  className="h-7 w-7 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={false}
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  {mobileMenuOpen ? (
                    <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  )}
                </motion.svg>
              </motion.button>
            </div>
          </div>
          {/* Menú de navegación móvil */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="md:hidden flex flex-col gap-2 py-4 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-xl border-b border-gray-200"
                style={{ WebkitBackdropFilter: 'blur(16px)' }}
              >
                <Link to="/" className="text-black px-2 py-2 rounded hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
                <Link to="/services" className="text-black px-2 py-2 rounded hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
                <Link to="/store" className="text-black px-2 py-2 rounded hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>Tienda</Link>
                {user && (
                  <Link to="/library" className="text-black px-2 py-2 rounded hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>Biblioteca</Link>
                )}
                <Link to="/contact" className="text-black px-2 py-2 rounded hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
                <div className="flex gap-4 px-2 mt-2">
                  <button className="relative text-gray-600 hover:text-black transition-colors">
                    <HiHeart className="text-xl" />
                    {wishlist.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{wishlist.length}</span>
                    )}
                  </button>
                  <Link to={user ? "/profile" : "/login"} className="relative text-gray-600 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    <HiUser className="text-xl" />
                    {user && (<span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>)}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
