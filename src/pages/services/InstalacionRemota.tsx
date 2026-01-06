import { Link } from 'react-router-dom';
import { HiArrowLeft, HiCheckCircle, HiClock, HiShieldCheck, HiComputerDesktop, HiExclamationCircle } from 'react-icons/hi2';
import { BiSupport } from 'react-icons/bi';
import { PageTransition } from '@/components/PageTransition';

export const InstalacionRemota = () => {
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
            <BiSupport className="text-5xl sm:text-6xl text-blue-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Instalación Remota</h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">$299 MXN</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Te ayudamos a instalar y activar tu software desde la comodidad de tu hogar u oficina. 
          Nos conectamos de forma segura a tu equipo y realizamos la instalación mientras tú observas.
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
                <h3 className="text-lg font-semibold text-black mb-1">Instalación de software</h3>
                <p className="text-gray-600">Windows, Office, licencias de juegos y programas especializados</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Activación de licencias</h3>
                <p className="text-gray-600">Configuramos y activamos tus códigos de producto</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Configuración inicial</h3>
                <p className="text-gray-600">Dejamos todo listo para que empieces a usar tu software</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Actualizaciones</h3>
                <p className="text-gray-600">Instalamos las últimas actualizaciones disponibles</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Verificación</h3>
                <p className="text-gray-600">Comprobamos que todo funcione correctamente</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Soporte post-instalación</h3>
                <p className="text-gray-600">Te ayudamos si tienes dudas después del servicio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nota importante */}
      <div className="bg-blue-50 border-l-4 border-blue-400 py-8">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="flex gap-4">
            <HiExclamationCircle className="text-3xl text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Importante sobre las licencias</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>• Este servicio solo incluye la instalación:</strong> El precio de $299 MXN cubre únicamente el servicio técnico de instalación y configuración
                </li>
                <li>
                  <strong>• Las licencias se compran por separado:</strong> Debes adquirir las licencias de software de forma independiente o ya tenerlas
                </li>
                <li>
                  <strong>• Si ya tienes las licencias:</strong> Solo pagas el servicio de instalación remota de $299 MXN
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/store" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Ver licencias disponibles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cómo funciona */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Cómo funciona?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Contacto inicial</h3>
                <p className="text-gray-600">Nos cuentas qué necesitas instalar y agendamos una cita</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Conexión remota</h3>
                <p className="text-gray-600">Te enviamos un enlace para conectarnos de forma segura (AnyDesk o TeamViewer)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Instalación</h3>
                <p className="text-gray-600">Realizamos la instalación mientras tú observas en tiempo real</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Verificación</h3>
                <p className="text-gray-600">Probamos que todo funcione correctamente</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Listo para usar</h3>
                <p className="text-gray-600">Desconectamos y tu software queda listo para trabajar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ventajas */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Ventajas del servicio remoto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <HiClock className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Rápido y conveniente</h3>
              <p className="text-gray-600">Sin necesidad de trasladarte o esperar visita técnica</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <HiShieldCheck className="text-5xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">100% seguro</h3>
              <p className="text-gray-600">Conexión cifrada y tú controlas el acceso</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <HiComputerDesktop className="text-5xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Observas en tiempo real</h3>
              <p className="text-gray-600">Ves todo lo que hacemos en tu equipo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Qué podemos instalar remotamente */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Qué podemos instalar remotamente?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Software más común</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Windows 10 y 11 (activación)</li>
                <li>• Microsoft Office (todas las versiones)</li>
                <li>• Antivirus y programas de seguridad</li>
                <li>• Adobe (Photoshop, Illustrator, etc.)</li>
                <li>• AutoCAD y software de diseño</li>
                <li>• Programas contables (CONTPAQi, etc.)</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">También instalamos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Drivers y controladores</li>
                <li>• Juegos y plataformas (Steam, etc.)</li>
                <li>• Software empresarial</li>
                <li>• Configuración de impresoras</li>
                <li>• Actualizaciones de Windows</li>
                <li>• Cualquier software que necesites</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">¿Necesitas instalar software?</h2>
          <p className="text-xl text-gray-600 mb-8">Agenda tu servicio remoto hoy mismo</p>
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
