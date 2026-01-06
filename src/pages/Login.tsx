import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { PageTransition } from '@/components/PageTransition';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      // Mensaje de error más específico según el tipo
      console.error('Login error:', error);
      
      if (error.message.includes('Email not confirmed')) {
        setError('Tu email no está confirmado. Revisa tu bandeja de entrada (y spam) y haz clic en el enlace de confirmación que te enviamos.');
      } else if (error.message.includes('Invalid login credentials')) {
        setError('Email o contraseña incorrectos. Si acabas de registrarte, recuerda confirmar tu email primero.');
      } else {
        setError(error.message);
      }
      setLoading(false);
    } else {
      navigate('/profile');
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    const { error } = await signInWithGoogle();
    if (error) {
      setError(error.message);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[440px] sm:max-w-[480px]"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="public/logo.png"
                alt="Logo" 
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain" 
                draggable="false"
              />
            </div>
          </div>

          {/* Título  */}
          <h1 className="text-[32px] font-semibold text-center text-gray-900 mb-2 leading-tight tracking-tight">
            Inicia sesión con tu cuenta
          </h1>
          <p className="text-center text-[17px] text-gray-600 mb-8">
            de Devmike117 Store
          </p>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-[15px] text-red-600 text-center px-4 py-3 bg-red-50 rounded-xl border border-red-200">
                {error}
              </div>
            )}

            {/* Input Email con etiqueta arriba */}
            <div>
              <label htmlFor="email" className="block text-[13px] font-medium text-gray-900 mb-1.5 ml-1">
              Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3.5 text-[17px] bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Input Password con etiqueta arriba */}
            <div>
              <label htmlFor="password" className="block text-[13px] font-medium text-gray-900 mb-1.5 ml-1">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3.5 text-[17px] bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Botón continuar */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-[17px] font-medium py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {loading ? 'Iniciando sesión...' : 'Continuar'}
            </button>

            {/* Opción de Google */}
            <div className="relative py-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">o</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-900 text-[17px] font-medium py-3.5 rounded-xl border border-gray-300 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuar con Google
            </button>
          </form>

          {/* Footer crear cuenta */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-[15px] text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link to="/register" className="text-blue-600 hover:underline font-medium">
                Crear ahora
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Footer inferior */}
        <div className="mt-12 text-center">
          <p className="text-[13px] text-gray-500">
            Al continuar, aceptas los términos y condiciones de Tienda Digital
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
