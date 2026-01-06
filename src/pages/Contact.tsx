import { useState, type FormEvent } from 'react';
import { HiMail, HiChatAlt2, HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12">
      {/* Botón de regreso */}
      <div className="max-w-[980px] mx-auto px-6 pt-8 pb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <HiArrowLeft />
          Volver al inicio
        </Link>
      </div>

      {/* Header */}
      <div className="text-center py-8 px-6">
        <h1 className="text-5xl sm:text-6xl font-semibold text-black mb-4 tracking-tight">
          Contacto
        </h1>
        <p className="text-xl text-gray-600">
          Estamos aquí para ayudarte
        </p>
      </div>

      {/* Información de contacto */}
      <div className="max-w-[980px] mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <HiMail className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Email</h3>
            <p className="text-sm text-gray-600">devmike117@outlook.com</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <HiChatAlt2 className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Chat</h3>
            <p className="text-sm text-gray-600">Disponible 24/7</p>
          </div>
        </div>
        {/* Formulario */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                required
              />
            </div>
            <div>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>Selecciona un servicio</option>
                <option value="Eliminación de Virus">Eliminación de Virus</option>
                <option value="Mantenimiento de PC">Mantenimiento de PC</option>
                <option value="Instalación de SO">Instalación de SO</option>
                <option value="Configuración de Redes">Configuración de Redes</option>
                <option value="Reparación de Disco">Reparación de Disco</option>
                <option value="Recuperación de Datos">Recuperación de Datos</option>
                <option value="Instalación Remota">Instalación Remota</option>
                <option value="Actualización macOS">Actualización macOS</option>
                <option value="Desarrollo Web">Desarrollo Web</option>
                <option value="Tienda/Productos">Tienda/Productos</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <textarea
                id="message"
                rows={6}
                placeholder="Mensaje"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};
