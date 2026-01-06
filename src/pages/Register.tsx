import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { HiUserAdd } from 'react-icons/hi';
import { PageTransition } from '@/components/PageTransition';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLoading(true);

    const { error } = await signUp(email, password, {
      full_name: fullName,
    });

    if (error) {
      // Manejo específico de errores comunes
      if (error.message.includes('confirmation email') || error.message.includes('sending email')) {
        setError('Error al enviar el email. Configura un proveedor SMTP en Supabase (Resend recomendado). Ver SUPABASE_SETUP.md');
      } else if (error.message.includes('already registered')) {
        setError('Este email ya está registrado. Intenta iniciar sesión.');
      } else {
        setError(error.message);
      }
      setLoading(false);
    } else {
      setEmailSent(true);
      setSuccess(`¡Cuenta creada! Revisa tu bandeja de entrada y spam para confirmar tu cuenta antes de iniciar sesión.`);
      setLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <Card className="p-8 bg-white border-2 border-gray-200 rounded-3xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HiUserAdd className="text-green-600 text-3xl" />
            </div>
            <h1 className="text-3xl font-semibold text-black mb-4 tracking-tight">
              ¡Revisa tu email!
            </h1>
            <p className="text-gray-600 mb-4">
              Hemos enviado un correo de confirmación a:
            </p>
            <p className="text-blue-600 font-semibold mb-6">{email}</p>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 text-left">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Pasos siguientes:</strong>
              </p>
              <ol className="text-sm text-gray-600 space-y-1 ml-4 list-decimal">
                <li>Abre tu bandeja de entrada <span className="font-bold">y spam</span></li>
                <li>Busca el email de confirmación de Supabase</li>
                <li>Haz clic en el enlace de confirmación</li>
                <li>Regresa aquí para iniciar sesión</li>
              </ol>
            </div>
            <Link to="/login">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl">
                Ir al Login
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-24 pb-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <HiUserAdd className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl font-semibold text-black mb-2 tracking-tight">Crear Cuenta</h1>
          <p className="text-gray-600">Únete a Tienda Digital</p>
        </div>

        <Card className="p-8 bg-white border-2 border-gray-200 rounded-3xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-2xl">
                {success}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-black font-medium">
                Nombre Completo
              </Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Juan Pérez"
                required
                className="bg-white border-gray-300 text-black placeholder:text-gray-400 h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="bg-white border-gray-300 text-black placeholder:text-gray-400 h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-black font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-white border-gray-300 text-black placeholder:text-gray-400 h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-black font-medium">
                Confirmar Contraseña
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-white border-gray-300 text-black placeholder:text-gray-400 h-12"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl h-12"
            >
              {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
    </PageTransition>
  );
}
