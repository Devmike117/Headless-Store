import { Link } from 'react-router-dom';
import { HiCircleStack, HiArrowLeft, HiCheckCircle, HiXCircle } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const ReparacionDisco = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12">
      {/* Back Button */}
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
            <HiCircleStack className="text-5xl sm:text-6xl text-blue-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Reparación de Discos Duros</h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">Desde $799 MXN*</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Reparación profesional de discos duros mecánicos (HDD) con sectores dañados. 
          Recuperamos la funcionalidad de tu disco mediante regeneración de sectores defectuosos.
        </p>
        <p className="text-sm text-gray-500 mt-4">*El precio varía según la capacidad y estado del disco</p>
      </div>

      {/* What's Included */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Qué incluye el servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Diagnóstico completo</h3>
                <p className="text-gray-600">Análisis detallado del estado del disco y sectores dañados</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Regeneración de sectores</h3>
                <p className="text-gray-600">Reparación de sectores defectuosos mediante software especializado</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Verificación de resultados</h3>
                <p className="text-gray-600">Comprobación del funcionamiento después de la reparación</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Reporte detallado</h3>
                <p className="text-gray-600">Informe sobre el estado y sectores reparados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compatible Types */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Discos compatibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <HiCheckCircle className="text-2xl" />
                Reparamos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Discos duros mecánicos (HDD)</li>
                <li>• Conexión SATA</li>
                <li>• Conexión IDE</li>
                <li>• Discos internos de laptop</li>
                <li>• Discos internos de PC</li>
                <li>• Discos externos USB (HDD)</li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                <HiXCircle className="text-2xl" />
                No aplicable
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Discos de estado sólido (SSD)</li>
                <li>• Memorias USB</li>
                <li>• Tarjetas SD/microSD</li>
                <li>• Discos M.2 NVMe</li>
                <li>• Discos con daño físico severo</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">Para estos dispositivos ofrecemos servicio de recuperación de datos</p>
            </div>
          </div>
        </div>
      </div>

      {/* When to repair */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Cuándo necesitas este servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Síntomas comunes</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  Windows marca sectores dañados
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  Mensajes de error al leer/escribir archivos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  El disco hace ruidos extraños (clics)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  Archivos que no se pueden abrir o copiar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  El sistema operativo se congela
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  Carpetas o archivos desaparecen
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Importante saber</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  El proceso puede tardar de 4 a 48 horas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  Depende del tamaño y estado del disco
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  No garantiza recuperación al 100%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  Se recomienda respaldo después de reparar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  Evaluamos viabilidad antes de proceder
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Precios según capacidad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Hasta 500 GB</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$799 MXN</p>
              <p className="text-sm text-gray-600">Tiempo estimado: 4-12 horas</p>
            </div>
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">500 GB - 1 TB</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$1,299 MXN</p>
              <p className="text-sm text-gray-600">Tiempo estimado: 12-24 horas</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Más de 1 TB</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$1,799 MXN</p>
              <p className="text-sm text-gray-600">Tiempo estimado: 24-48 horas</p>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6">*Los tiempos son aproximados y pueden variar según el estado del disco</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">¿Tu disco duro necesita reparación?</h2>
          <p className="text-xl text-gray-600 mb-8">Solicita un diagnóstico gratuito antes de proceder</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium text-center">
              Solicitar diagnóstico
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
