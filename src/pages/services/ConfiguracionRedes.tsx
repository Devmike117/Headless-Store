import { Link } from 'react-router-dom';
import { HiWifi, HiArrowLeft, HiCheckCircle, HiHome, HiSignal, HiWrenchScrewdriver, HiInformationCircle } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const ConfiguracionRedes = () => {
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
          <div className="bg-blue-100 p-4 sm:p-6 rounded-3xl">
            <HiWifi className="text-5xl sm:text-6xl text-blue-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Configuración de Redes</h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">Desde $599 MXN</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Instalación y configuración de redes domésticas básicas. Cableado estructurado, 
          configuración de modems, routers y extensores de señal WiFi para una conectividad estable.
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
                <h3 className="text-lg font-semibold text-black mb-1">Cableado básico</h3>
                <p className="text-gray-600">Instalación de cable de red Cat5e/Cat6 en tu hogar u oficina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Configuración de modem</h3>
                <p className="text-gray-600">Configuración inicial y optimización de tu modem de internet</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Configuración de router</h3>
                <p className="text-gray-600">Configuración de red WiFi con contraseña segura</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Optimización de señal</h3>
                <p className="text-gray-600">Ubicación óptima de equipos para mejor cobertura</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Conexión de dispositivos</h3>
                <p className="text-gray-600">Conectamos tus equipos a la nueva red configurada</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Pruebas de velocidad</h3>
                <p className="text-gray-600">Verificamos que obtengas el ancho de banda contratado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Servicios de red que ofrecemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <HiHome className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Red doméstica</h3>
              <p className="text-gray-600 mb-4">Configuración básica para casa con WiFi y cableado</p>
              <p className="text-2xl font-bold text-blue-600">$599 MXN</p>
            </div>
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6">
              <HiSignal className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Extensión WiFi</h3>
              <p className="text-gray-600 mb-4">Instalación de repetidores o extensores de señal</p>
              <p className="text-2xl font-bold text-blue-600">$399 MXN</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <HiWrenchScrewdriver className="text-5xl text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">Diagnóstico de red</h3>
              <p className="text-gray-600 mb-4">Identificación y solución de problemas de conexión</p>
              <p className="text-2xl font-bold text-blue-600">$299 MXN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Qué NO hacemos */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex gap-4">
            <HiInformationCircle className="text-4xl text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Servicio básico - No incluye</h3>
              <p className="text-gray-700 mb-2">
                Este es un servicio de configuración básica de redes domésticas. NO incluye:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Instalación de fibra óptica</li>
                <li>• Certificación de cableado estructurado</li>
                <li>• Configuración de servidores</li>
                <li>• Redes empresariales complejas</li>
                <li>• VPN o configuraciones avanzadas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Problemas comunes */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Problemas comunes que solucionamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Señal WiFi débil</h3>
              <p className="text-gray-600 mb-3">
                Si tu WiFi no llega a todas las áreas de tu casa, instalamos repetidores 
                o reubicamos el router para mejor cobertura.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Internet lento</h3>
              <p className="text-gray-600 mb-3">
                Optimizamos la configuración de tu modem/router y verificamos que obtengas 
                la velocidad contratada con tu proveedor.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Desconexiones frecuentes</h3>
              <p className="text-gray-600 mb-3">
                Identificamos y solucionamos problemas de conexión inestable, 
                interferencias o configuración incorrecta.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">No se conectan dispositivos</h3>
              <p className="text-gray-600 mb-3">
                Configuramos correctamente tu red para que todos tus dispositivos 
                puedan conectarse sin problemas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">¿Problemas con tu red WiFi?</h2>
          <p className="text-xl text-gray-600 mb-8">Te ayudamos a tener una conexión estable y rápida</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium text-center">
              Solicitar servicio
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
