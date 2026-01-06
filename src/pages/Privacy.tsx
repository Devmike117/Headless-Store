import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const Privacy = () => {
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
          <h1 className="text-5xl font-semibold text-black mb-6">Política de Privacidad</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tu privacidad es importante para mí. Última actualización: {new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}.
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-[980px] mx-auto px-6 pb-16">
          <div className="space-y-12">
            {/* Sección 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Información que recopilo</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Recopilo únicamente la información necesaria para brindarte mis servicios:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Información de contacto (nombre, email, teléfono) cuando nos contactas o realizas una compra</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Información de pago procesada de forma segura a través de plataformas certificadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Información técnica de tus dispositivos cuando solicitas servicios de reparación o mantenimiento</span>
                </li>
              </ul>
            </div>

            {/* Sección 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Cómo uso tu información</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Utilizo tu información para:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Procesar tus pedidos y prestarte los servicios solicitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Comunicarnos contigo sobre el estado de tu servicio o compra</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Mejorar nuestros servicios y experiencia de usuario</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Cumplir con obligaciones legales y fiscales</span>
                </li>
              </ul>
            </div>

            {/* Sección 3 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Protección de datos</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Implemento medidas de seguridad técnicas y organizativas para proteger tu información personal 
                contra accesos no autorizados, pérdida o alteración. Tus datos de pago son procesados por 
                plataformas certificadas y nunca almaceno información completa de tarjetas de crédito.
              </p>
            </div>

            {/* Sección 4 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Tus derechos</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Tienes derecho a:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Acceder a la información que tenemos sobre ti</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Solicitar la corrección o eliminación de tus datos personales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Oponerte al procesamiento de tu información personal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Retirar tu consentimiento en cualquier momento</span>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Contacto</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Si tienes preguntas sobre mi política de privacidad o quieres ejercer tus derechos, 
                contáctame a través de:
              </p>
              <Link 
                to="/contacto" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
