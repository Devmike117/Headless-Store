import { Link } from 'react-router-dom';
import { HiArrowLeft, HiCheckCircle, HiShieldExclamation } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';
import { FaAd } from 'react-icons/fa';
import { HiBugAnt, HiEye, HiLockClosed, HiExclamationTriangle, HiOutlineShieldCheck } from 'react-icons/hi2';

export const EliminacionVirus = () => {

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
              <HiShieldExclamation className="text-5xl sm:text-6xl text-blue-600" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Eliminación de Virus y Malware</h1>
              <p className="text-xl sm:text-2xl text-blue-600 font-semibold">Desde $299 MXN</p>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Limpieza profesional de virus, malware y amenazas digitales. Recupera la seguridad y velocidad de tu equipo.
          </p>
        </div>

        {/* Qué incluye el servicio */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl font-semibold text-black mb-8">¿Qué incluye?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Característica 1 */}
              <div className="flex items-start gap-4">
                <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">Eliminación de virus y malware</h3>
                  <p className="text-gray-600">Eliminamos todo tipo de virus y software malicioso.</p>
                </div>
              </div>
              {/* Característica 2 */}
              <div className="flex items-start gap-4">
                <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">Limpieza de adware</h3>
                  <p className="text-gray-600">Eliminamos anuncios, barras y ventanas emergentes.</p>
                </div>
              </div>
              {/* Característica 3 */}
              <div className="flex items-start gap-4">
                <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">Limpieza de USB y discos</h3>
                  <p className="text-gray-600">Revisamos y desinfectamos memorias y discos externos.</p>
                </div>
              </div>
              {/* Característica 4 */}
              <div className="flex items-start gap-4">
                <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">Extensiones y navegadores</h3>
                  <p className="text-gray-600">Limpiamos navegadores y eliminamos extensiones dañinas.</p>
                </div>
              </div>
              {/* Característica 5 */}
              <div className="flex items-start gap-4">
                <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">Programas no deseados</h3>
                  <p className="text-gray-600">Desinstalamos programas sospechosos o innecesarios.</p>
                </div>
              </div>
              {/* Característica 6 */}
              <div className="flex items-start gap-4">
                <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">Archivos temporales</h3>
                  <p className="text-gray-600">Borramos archivos basura para optimizar tu equipo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tipos de amenazas */}
        <div className="py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl font-semibold text-black mb-8">Tipos de amenazas que eliminamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <HiBugAnt className="text-5xl text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Virus y Troyanos</h3>
                <p className="text-gray-600 text-sm">Programas maliciosos que dañan o roban información.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <HiEye className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Spyware</h3>
                <p className="text-gray-600 text-sm">Software espía que recopila datos sin permiso.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <HiLockClosed className="text-5xl text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Programas no deseados</h3>
                <p className="text-gray-600 text-sm">Aplicaciones que se instalan sin tu permiso y afectan el rendimiento o muestran publicidad.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <FaAd className="text-5xl text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Adware</h3>
                <p className="text-gray-600 text-sm">Publicidad invasiva y redirecciones no deseadas.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <HiOutlineShieldCheck className="text-5xl text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Rootkits</h3>
                <p className="text-gray-600 text-sm">Ocultan amenazas y dificultan su eliminación.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <HiExclamationTriangle className="text-5xl text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Otros</h3>
                <p className="text-gray-600 text-sm">Worms, keyloggers, bots y más amenazas digitales.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Síntomas de infección */}
        <div className="py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl font-semibold text-black mb-8">¿Cómo saber si tu equipo está infectado?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Equipo lento o congelado</h3>
                <p className="text-gray-600 text-sm">El sistema tarda mucho en iniciar, abrir programas o navegar.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Ventanas emergentes</h3>
                <p className="text-gray-600 text-sm">Aparecen pop-ups, publicidad o pestañas nuevas sin tu permiso.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Archivos desaparecidos</h3>
                <p className="text-gray-600 text-sm">Tus documentos, fotos o carpetas no aparecen o están en otro lugar.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Navegador redirigido</h3>
                <p className="text-gray-600 text-sm">Al buscar o abrir páginas, te lleva a sitios desconocidos.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Programas desconocidos</h3>
                <p className="text-gray-600 text-sm">Ves aplicaciones nuevas o barras de herramientas que no recuerdas haber puesto.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Alertas falsas</h3>
                <p className="text-gray-600 text-sm">El sistema muestra advertencias de virus o problemas que no puedes cerrar.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl font-semibold text-black mb-8">¿Cómo trabajamos?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Diagnóstico</h3>
                  <p className="text-gray-600">Revisamos tu equipo y detectamos amenazas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Limpieza</h3>
                  <p className="text-gray-600">Eliminamos virus, malware y archivos dañinos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Entrega</h3>
                  <p className="text-gray-600">Te devolvemos tu equipo y damos recomendaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nota importante */}
        <div className="py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-black mb-3">Nota importante</h3>
              <p className="text-gray-700 leading-relaxed">
                La eliminación de virus y malware es un proceso seguro, pero en casos graves puede requerir respaldo o reinstalación de sistema. Siempre recomendamos mantener copias de seguridad y contar con antivirus actualizado.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16">
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-black mb-4">¿Listo para limpiar tu equipo?</h2>
            <p className="text-xl text-gray-600 mb-8">Contáctanos y recupera la seguridad de tu computadora</p>
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
