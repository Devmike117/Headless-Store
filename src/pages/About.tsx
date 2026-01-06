import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12">
        {/* Botón de regreso */}
        <div className="max-w-[980px] mx-auto px-6 pt-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <HiArrowLeft className="mr-2" />
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-[980px] mx-auto px-6 py-12">
          <h1 className="text-5xl font-semibold text-black mb-6">Acerca de mí</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Soluciones tecnológicas diseñadas para simplificar tu día a día.
          </p>
        </div>

        {/* Misión */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl font-semibold text-black mb-6">Mi misión</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Creo que la tecnología debe ser accesible y funcional para todos. Por eso ofrezco servicios técnicos profesionales y productos digitales de calidad a precios justos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde el desarrollo web hasta la reparación de equipos, cada proyecto es una oportunidad para ayudarte a alcanzar tus objetivos.
            </p>
          </div>
        </div>

        {/* valores */}
        <div className="py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl font-semibold text-black mb-8">Mis valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Calidad</h3>
                <p className="text-gray-600">
                  Cada servicio y producto cumple con los más altos estándares de calidad y confiabilidad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Transparencia</h3>
                <p className="text-gray-600">
                  Precios claros, sin sorpresas. Sabes exactamente qué obtienes y cuánto pagas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Compromiso</h3>
                <p className="text-gray-600">
                  Tu satisfacción es nuestra prioridad. Trabajamos hasta que estés completamente satisfecho.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-black mb-4">¿Listo para comenzar?</h2>
            <p className="text-xl text-gray-600 mb-8">Descubre nuestros servicios y productos</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/servicios" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium">
                Ver servicios
              </Link>
              <Link to="/tienda" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg font-medium">
                Ir a la tienda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
