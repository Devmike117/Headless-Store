import { Link } from 'react-router-dom';
import { HiComputerDesktop, HiArrowLeft, HiCheckCircle, HiExclamationTriangle, HiBolt, HiShieldCheck, HiClock } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const MantenimientoPC = () => {
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
            <HiComputerDesktop className="text-5xl sm:text-6xl text-blue-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Mantenimiento PC</h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">Desde $299 MXN</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Mantén tu computadora funcionando como nueva. Limpieza física y digital, 
          optimización del sistema y actualizaciones para un rendimiento óptimo.
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
                <h3 className="text-lg font-semibold text-black mb-1">Limpieza física completa</h3>
                <p className="text-gray-600">Eliminación de polvo del ventilador, disipador y componentes internos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Cambio de pasta térmica</h3>
                <p className="text-gray-600">Aplicación de pasta térmica nueva para mejor disipación de calor</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Optimización del sistema</h3>
                <p className="text-gray-600">Eliminación de archivos temporales y programas innecesarios</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Escaneo de malware</h3>
                <p className="text-gray-600">Detección de virus y programas maliciosos básicos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Verificación de actualizaciones</h3>
                <p className="text-gray-600">Revisión de actualizaciones pendientes del sistema</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Prueba de hardware</h3>
                <p className="text-gray-600">Verificación del estado general de componentes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cuándo hacerlo */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Cuándo necesitas mantenimiento?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
                <HiExclamationTriangle className="text-2xl text-orange-600" />
                Señales de advertencia
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• La computadora está muy lenta</li>
                <li>• Se sobrecalienta o hace ruidos extraños</li>
                <li>• Tarda mucho en encender</li>
                <li>• Se traba o congela frecuentemente</li>
                <li>• Los programas tardan en abrir</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
                <HiCheckCircle className="text-2xl text-green-600" />
                Recomendaciones
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mantenimiento preventivo cada 6 meses</li>
                <li>• Si usas tu PC diariamente para trabajo</li>
                <li>• Después de 1 año sin limpieza</li>
                <li>• Si tu equipo está en ambiente polvoriento</li>
                <li>• Para mejorar el rendimiento general</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Beneficios del mantenimiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <HiBolt className="text-6xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Mayor velocidad</h3>
              <p className="text-gray-600">Tu PC funcionará más rápido y eficiente</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <HiShieldCheck className="text-6xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Más seguridad</h3>
              <p className="text-gray-600">Protección contra virus y malware</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <HiClock className="text-6xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Mayor vida útil</h3>
              <p className="text-gray-600">Extiende la duración de tu equipo</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">¿Tu PC necesita mantenimiento?</h2>
          <p className="text-xl text-gray-600 mb-8">Agenda tu servicio y recupera el rendimiento de tu equipo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium text-center">
              Agendar servicio
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
