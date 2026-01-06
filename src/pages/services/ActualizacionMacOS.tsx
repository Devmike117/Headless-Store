import { Link } from 'react-router-dom';
import { FaApple } from 'react-icons/fa';
import { HiArrowLeft, HiCheckCircle, HiExclamationTriangle, HiClock } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const ActualizacionMacOS = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12">
      {/* Botón de regreso */}
      <div className="max-w-[980px] mx-auto px-6 pt-8">
        <Link to="/servicios" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <HiArrowLeft className="mr-2" />
          Volver a Servicios
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-3xl">
            <FaApple className="text-5xl sm:text-6xl text-white" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Actualización macOS</h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">Desde $599 MXN</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Actualiza tu Mac sin soporte oficial de Apple a versiones más recientes de macOS. 
          Extendemos la vida útil de tu equipo con métodos especializados.
        </p>
      </div>

      {/* Qué incluye el servicio */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Qué incluye el servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Evaluación de compatibilidad</h3>
                <p className="text-gray-600">Verificamos si tu Mac puede ejecutar la versión deseada</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Respaldo de datos</h3>
                <p className="text-gray-600">Verificamos que tengas respaldo antes de proceder</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Configuración del sistema</h3>
                <p className="text-gray-600">Preparamos tu Mac para la actualización</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Instalación de macOS</h3>
                <p className="text-gray-600">Instalamos la versión más reciente compatible con tu Mac</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Parches post-instalación</h3>
                <p className="text-gray-600">Aplicamos los parches necesarios para funcionalidad completa</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Verificación de hardware</h3>
                <p className="text-gray-600">Comprobamos que WiFi, Bluetooth, gráficos y audio funcionen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Macs compatibles */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Macs compatibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <HiCheckCircle className="text-2xl" />
                Generalmente compatibles
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• MacBook Pro (2012 - 2018)</li>
                <li>• MacBook Air (2012 - 2018)</li>
                <li>• iMac (2012 - 2018)</li>
                <li>• Mac Mini (2012 - 2014)</li>
                <li>• Mac Pro (2013)</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Versiones disponibles</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• macOS Monterey (12.x)</li>
                <li>• macOS Ventura (13.x)</li>
                <li>• macOS Sonoma (14.x)</li>
                <li>• macOS Sequoia (15.x)</li>
                <li>• macOS Tahoe (16.x)</li>
                <li>• Depende del hardware de tu Mac</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                La versión final dependerá de las capacidades de tu equipo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advertencia importante */}
      <div className="bg-red-50 border-l-4 border-red-400 py-8">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex gap-4">
            <HiExclamationTriangle className="text-3xl text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Importante antes de actualizar</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>• Respaldo obligatorio:</strong> Debes tener una copia de seguridad completa de tus datos (Time Machine recomendado)
                </li>
                <li>
                  <strong>• No es oficial:</strong> Esta actualización no está soportada por Apple y se hace bajo tu responsabilidad
                </li>
                <li>
                  <strong>• Posibles limitaciones:</strong> Algunas funciones pueden no estar disponibles (ej: Sidecar, Universal Control)
                </li>
                <li>
                  <strong>• Rendimiento variable:</strong> Depende de las especificaciones de tu Mac
                </li>
                <li>
                  <strong>• Sin garantía de Apple:</strong> Apple no brindará soporte para Macs con sistema no oficial
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Proceso de actualización</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Evaluación inicial</h3>
                <p className="text-gray-600">Verificamos modelo, especificaciones y compatibilidad de tu Mac</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Respaldo de datos</h3>
                <p className="text-gray-600">Confirmamos que tengas respaldo o te ayudamos a crearlo</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Preparación</h3>
                <p className="text-gray-600">Descarga de macOS y configuración del sistema</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Instalación</h3>
                <p className="text-gray-600">Proceso de instalación de la nueva versión de macOS (2-4 horas)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Parches y configuración</h3>
                <p className="text-gray-600">Aplicación de parches post-instalación para funcionalidad completa</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Verificación y entrega</h3>
                <p className="text-gray-600">Probamos que todo funcione y te explicamos los cambios</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tiempo estimado */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <HiClock className="text-6xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-3">Tiempo estimado</h3>
            <p className="text-xl text-gray-600 mb-2">3 a 5 horas aproximadamente</p>
            <p className="text-gray-600">
              El tiempo varía según el modelo de Mac, velocidad de internet y si requiere respaldo previo
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">¿Quieres actualizar tu Mac antiguo?</h2>
          <p className="text-xl text-gray-600 mb-8">Contáctanos para evaluar la compatibilidad de tu equipo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium text-center">
              Consultar compatibilidad
            </Link>
            <a href="https://t.me/devmike117" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-50 transition-colors text-base sm:text-lg font-medium text-center">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};
