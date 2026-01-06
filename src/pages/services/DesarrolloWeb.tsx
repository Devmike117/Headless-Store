import { Link } from 'react-router-dom';
import { HiCodeBracketSquare, HiArrowLeft, HiCheckCircle } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const DesarrolloWeb = () => {
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
            <HiCodeBracketSquare className="text-5xl sm:text-6xl text-blue-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">Desarrollo Web</h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">Desde $7,999 MXN</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Creamos sitios web profesionales y modernos que impulsan tu negocio en el mundo digital. 
          Diseños responsivos, rápidos y optimizados para convertir visitantes en clientes.
        </p>
      </div>

      {/* Qué incluye el servicio */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">¿Qué incluye?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Diseño Responsivo</h3>
                <p className="text-gray-600">Tu sitio se verá perfecto en computadoras, tablets y celulares</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">SEO Básico</h3>
                <p className="text-gray-600">Optimización inicial para motores de búsqueda</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Arquitectura JAMstack</h3>
                <p className="text-gray-600">Sitio moderno y rápido a diferencia de arquitecturas tradicionales</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Dominio .com o .mx</h3>
                <p className="text-gray-600">Compra y configuración de tu dominio personalizado</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">Formulario de Contacto</h3>
                <p className="text-gray-600">Los clientes pueden comunicarse contigo fácilmente</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">SSL Gratuito</h3>
                <p className="text-gray-600">Certificado de seguridad HTTPS incluido</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Proceso de trabajo</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Consulta inicial</h3>
                <p className="text-gray-600">Conversamos sobre tu negocio, objetivos y necesidades específicas</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Diseño y maquetación</h3>
                <p className="text-gray-600">Creamos el diseño visual y la estructura de tu sitio web</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Desarrollo</h3>
                <p className="text-gray-600">Programamos tu sitio con las mejores tecnologías</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Revisión y ajustes</h3>
                <p className="text-gray-600">Revisas el sitio y realizamos los ajustes necesarios</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Lanzamiento</h3>
                <p className="text-gray-600">Tu sitio web sale al aire y comienza a trabajar para ti</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opciones de precios */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black mb-8">Planes disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-black mb-2">Básico</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$7,999 MXN</p>
              <p className="text-sm text-gray-500 mb-4">Ideal para negocios pequeños o profesionales</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  <span>Hasta 5 secciones (Inicio, Servicios, Acerca, Contacto, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Diseño responsivo (móvil, tablet, PC)
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Formulario de contacto
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Deploy JAMstack
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Dominio .com o .mx (incluido por 1 año)
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recomendado
              </div>
              <h3 className="text-2xl font-semibold text-black mb-2">Profesional</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$14,999 MXN</p>
              <p className="text-sm text-gray-500 mb-4">Para empresas que buscan presencia digital completa</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  <span>Hasta 10 secciones personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Todo lo incluido en plan Básico
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Galería de imágenes profesional
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  SEO avanzado y optimización
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Google Analytics
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-black mb-2">E-commerce</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$39,999 MXN</p>
              <p className="text-sm text-gray-500 mb-4">Tienda en línea profesional lista para vender</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  <span>Tienda en línea completa</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Hasta 50 productos con categorías
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Carrito de compras
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Pasarelas de pago integradas
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Panel de administración
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                  Todo lo del plan Profesional
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6">*Deploy JAMstack: Sitio más rápido, seguro y moderno que hosting tradicional.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">¿Listo para tener tu sitio web?</h2>
          <p className="text-xl text-gray-600 mb-8">Contáctanos y comencemos a trabajar en tu proyecto</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium text-center">
              Solicitar cotización
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
