import { Link } from 'react-router-dom';
import { MdOutlineCloudDone } from 'react-icons/md';
import { HiArrowLeft, HiCheckCircle, HiExclamationTriangle, HiClock, HiServer } from 'react-icons/hi2';
import { FaHdd, FaUsb, FaSdCard } from 'react-icons/fa';
import { PageTransition } from '@/components/PageTransition';

export const RecuperacionDatos = () => {
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
            <MdOutlineCloudDone className="text-5xl sm:text-6xl text-blue-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Recuperación de Datos</h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">Desde $799 MXN</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Rescate profesional de información perdida de discos duros, memorias USB, tarjetas SD y otros dispositivos. 
          Recuperamos archivos eliminados, formateados o de dispositivos dañados.
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
                <h3 className="text-lg font-semibold text-black mb-1">Diagnóstico gratuito</h3>
                <p className="text-gray-600">Evaluamos las posibilidades de recuperación sin costo</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Análisis profundo</h3>
                <p className="text-gray-600">Escaneo completo del dispositivo en busca de datos recuperables</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Recuperación de archivos</h3>
                <p className="text-gray-600">Extracción de documentos, fotos, videos y otros archivos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Entrega segura</h3>
                <p className="text-gray-600">Transferencia a disco nuevo, USB o nube según prefieras</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Reporte detallado</h3>
                <p className="text-gray-600">Lista de archivos recuperados y estado del dispositivo</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Confidencialidad</h3>
                <p className="text-gray-600">Tratamiento privado y seguro de tu información</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dispositivos compatibles */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Dispositivos compatibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <FaHdd className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">Discos Duros</h3>
              <p className="text-gray-600 text-sm">HDD internos y externos, SSD</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <FaUsb className="text-5xl text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">Memorias USB</h3>
              <p className="text-gray-600 text-sm">Pen drives de todas las capacidades</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <FaSdCard className="text-5xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">Tarjetas SD</h3>
              <p className="text-gray-600 text-sm">SD, microSD, CF, Memory Stick</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <HiServer className="text-5xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">Otros</h3>
              <p className="text-gray-600 text-sm">iPod, cámaras, celulares</p>
            </div>
          </div>
        </div>
      </div>

      {/* Situaciones */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Situaciones en las que podemos ayudarte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <HiCheckCircle className="text-2xl" />
                Alta probabilidad de éxito
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Archivos eliminados accidentalmente</li>
                <li>• Disco formateado por error</li>
                <li>• Particiones perdidas o eliminadas</li>
                <li>• Sistema no reconoce el dispositivo</li>
                <li>• Error "disco no formateado"</li>
                <li>• Archivos corruptos o dañados</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-4 flex items-center gap-2">
                <HiExclamationTriangle className="text-2xl" />
                Casos más complejos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Disco con sectores dañados</li>
                <li>• Dispositivo físicamente dañado</li>
                <li>• Disco que no enciende</li>
                <li>• Ruidos extraños en el disco</li>
                <li>• Daño por agua o golpes</li>
                <li>• Datos sobrescritos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Precios */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Precios según complejidad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Básica</h3>
              <p className="text-gray-600 mb-4">Archivos eliminados, formateo simple</p>
              <p className="text-3xl font-bold text-blue-600 mb-4">$799 MXN</p>
              <ul className="text-sm text-gray-600 text-left space-y-2">
                <li>• Memorias USB</li>
                <li>• Tarjetas SD</li>
                <li>• Archivos recientes</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Intermedia</h3>
              <p className="text-gray-600 mb-4">Discos con problemas lógicos</p>
              <p className="text-3xl font-bold text-blue-600 mb-4">$1,499 MXN</p>
              <ul className="text-sm text-gray-600 text-left space-y-2">
                <li>• Discos duros HDD/SSD</li>
                <li>• Particiones dañadas</li>
                <li>• Sectores defectuosos</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Avanzada</h3>
              <p className="text-gray-600 mb-4">Daño físico o casos complejos</p>
              <p className="text-3xl font-bold text-blue-600 mb-4">Desde $2,499</p>
              <ul className="text-sm text-gray-600 text-left space-y-2">
                <li>• Daño físico</li>
                <li>• Disco no reconocido</li>
                <li>• Requiere sala limpia</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6">*Precio final después del diagnóstico. Solo cobramos si logramos recuperar tus datos</p>
        </div>
      </div>

      {/* Nota importante */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex gap-4">
            <HiClock className="text-3xl text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">¿Qué hacer si perdiste tus datos?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>1. Deja de usar el dispositivo:</strong> No escribas nuevos datos, esto reduce las posibilidades de recuperación
                </li>
                <li>
                  <strong>2. No intentes reparar por tu cuenta:</strong> Programas no profesionales pueden empeorar la situación
                </li>
                <li>
                  <strong>3. Apaga el dispositivo:</strong> Si hace ruidos extraños, apágalo inmediatamente
                </li>
                <li>
                  <strong>4. Contáctanos lo antes posible:</strong> Mientras más rápido actuemos, mejores resultados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">¿Perdiste información importante?</h2>
          <p className="text-xl text-gray-600 mb-8">Solicita un diagnóstico gratuito ahora mismo</p>
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
