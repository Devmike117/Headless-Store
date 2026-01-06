import { Link } from 'react-router-dom';
import { HiServerStack, HiArrowLeft, HiCheckCircle, HiExclamationTriangle } from 'react-icons/hi2';
import { FaWindows, FaLinux } from 'react-icons/fa';
import { PageTransition } from '@/components/PageTransition';

export const InstalacionSO = () => {
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
            <HiServerStack className="text-5xl sm:text-6xl text-blue-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Instalación de SO</h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">Desde $349 MXN</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Instalación profesional de Windows o distribuciones Linux. Incluye configuración inicial, 
          drivers y actualizaciones para que tu equipo funcione perfectamente desde el primer momento.
        </p>
      </div>

      {/* Sistemas operativos */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Sistemas operativos disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-600">
              <div className="flex items-center gap-4 mb-4">
                <FaWindows className="text-5xl text-blue-600" />
                <div>
                  <h3 className="text-2xl font-semibold text-black">Windows</h3>
                  <p className="text-blue-600 font-semibold">$349 - $499 MXN</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Windows 11 (última versión)</li>
                <li>• Windows 10 (todas las ediciones)</li>
                <li>• Windows 8.1</li>
                <li>• Windows 7 (equipos antiguos)</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700"><strong>Incluye:</strong> Drivers, actualizaciones, activación y configuración inicial</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <FaLinux className="text-5xl text-orange-500" />
                <div>
                  <h3 className="text-2xl font-semibold text-black">Linux</h3>
                  <p className="text-orange-500 font-semibold">$399 MXN</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Ubuntu (recomendado para principiantes)</li>
                <li>• Linux Mint</li>
                <li>• Fedora</li>
                <li>• Debian</li>
                <li>• Elementary OS</li>
              </ul>
              <div className="bg-orange-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700"><strong>Incluye:</strong> Instalación, drivers, actualizaciones y capacitación básica</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qué incluye el servicio */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Qué incluye el servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Instalación limpia</h3>
                <p className="text-gray-600">Formateo e instalación desde cero del sistema operativo</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Drivers actualizados</h3>
                <p className="text-gray-600">Instalación de todos los controladores necesarios</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Actualizaciones del sistema</h3>
                <p className="text-gray-600">Sistema completamente actualizado y seguro</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Configuración inicial</h3>
                <p className="text-gray-600">Cuenta de usuario, idioma, zona horaria y preferencias</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Programas esenciales</h3>
                <p className="text-gray-600">Navegador, antivirus, compresores y visor de PDF</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Optimización</h3>
                <p className="text-gray-600">Configuración para máximo rendimiento</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opción Dual Boot */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Quieres tener Windows y Linux?</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-purple-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <FaWindows className="text-4xl text-blue-600" />
                <span className="text-3xl font-bold">+</span>
                <FaLinux className="text-4xl text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black">Instalación Dual Boot</h3>
                <p className="text-purple-600 font-semibold text-xl">$699 MXN</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Instalamos ambos sistemas operativos en tu computadora. Al encender podrás elegir cuál usar. 
              Perfecto para quienes necesitan Windows para trabajo y Linux para desarrollo o aprendizaje.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong>Incluye:</strong> Particionado seguro, instalación de ambos SO, configuración de bootloader y capacitación de uso</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cuándo reinstalar */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Cuándo necesitas reinstalar el SO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Problemas comunes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• El sistema está muy lento o inestable</li>
                <li>• Errores frecuentes y pantallas azules</li>
                <li>• Infección por virus grave</li>
                <li>• Windows no inicia correctamente</li>
                <li>• Quieres actualizar a Windows 11</li>
                <li>• Compraste una PC usada</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Beneficios</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sistema limpio y rápido como nuevo</li>
                <li>• Sin archivos basura ni programas innecesarios</li>
                <li>• Mejor rendimiento general</li>
                <li>• Mayor seguridad</li>
                <li>• Soluciona la mayoría de problemas</li>
                <li>• Arranque más rápido</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nota importante */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex gap-4">
            <HiExclamationTriangle className="text-4xl text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Importante antes de instalar</h3>
              <p className="text-gray-700 mb-2">
                La instalación formateará tu disco duro y <strong>eliminará todos los archivos</strong>. 
              </p>
              <p className="text-gray-700">
                Te ayudamos a hacer respaldo de tus archivos importantes antes de proceder. 
                Si necesitas recuperar datos, consulta nuestro servicio de Recuperación de Datos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">¿Necesitas instalar un sistema operativo?</h2>
          <p className="text-xl text-gray-600 mb-8">Contáctanos y tendrás tu equipo listo en pocas horas</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium text-center">
              Agendar instalación
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
