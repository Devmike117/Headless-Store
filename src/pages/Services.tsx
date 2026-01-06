import { HiComputerDesktop, HiWifi,HiShieldExclamation, HiCodeBracketSquare, HiServerStack, HiCircleStack, HiArrowLeft } from 'react-icons/hi2';
import { BiSupport } from 'react-icons/bi';
import { MdOutlineCloudDone } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';

export const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Eliminación de Virus y Malware',
      description: 'Limpieza de virus, spyware, troyanos y amenazas digitales',
      price: 'Desde $299 MXN',
      Icon: HiShieldExclamation,
      link: '/servicios/eliminacion-virus',
    },
    {
      id: 2,
      title: 'Instalación Remota',
      description: 'Te ayudamos a instalar y activar tu software de forma remota',
      price: 'Desde $299 MXN',
      Icon: BiSupport,
      link: '/servicios/instalacion-remota',
    },
    {
      id: 3,
      title: 'Desarrollo Web',
      description: 'Creación de sitios web profesionales para negocios y emprendimientos',
      price: 'Desde $8,999 MXN',
      Icon: HiCodeBracketSquare,
      link: '/servicios/desarrollo-web',
    },
    {
      id: 4,
      title: 'Mantenimiento PC',
      description: 'Limpieza, optimización y actualización de tu equipo',
      price: 'Desde $299 MXN',
      Icon: HiComputerDesktop,
      link: '/servicios/mantenimiento-pc',
    },
    {
      id: 5,
      title: 'Configuración de Redes',
      description: 'Instalación básica de cableado y configuración de modems y routers',
      price: 'Desde $599 MXN',
      Icon: HiWifi,
      link: '/servicios/configuracion-redes',
    },
    {
      id: 6,
      title: 'Instalación de SO',
      description: 'Instalación y actualización de Windows o distribuciones Linux',
      price: 'Desde $349 MXN',
      Icon: HiServerStack,
      link: '/servicios/instalacion-so',
    },
    {
      id: 7,
      title: 'Reparación de Discos Duros',
      description: 'Regeneración de sectores dañados en HDD mecánicos (SATA, IDE)',
      price: 'Desde $799 MXN*',
      Icon: HiCircleStack,
      link: '/servicios/reparacion-disco',
    },
    {
      id: 8,
      title: 'Actualización macOS',
      description: 'Actualiza tu Mac sin soporte oficial a versiones más recientes',
      price: 'Desde $599 MXN',
      Icon: FaApple,
      link: '/servicios/actualizacion-macos',
    },
    {
      id: 9,
      title: 'Recuperación de Datos',
      description: 'Rescate de información perdida de discos duros y dispositivos',
      price: 'Desde $799 MXN',
      Icon: MdOutlineCloudDone,
      link: '/servicios/recuperacion-datos',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12">
        {/* Back Button */}
        <div className="max-w-[980px] mx-auto px-6 pt-8 pb-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <HiArrowLeft />
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <div className="text-center py-8 px-6">
          <h1 className="text-5xl sm:text-6xl font-semibold text-black mb-4 tracking-tight">
            Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Servicios integrales de soporte técnico e informática
          </p>
        </div>

      {/* Servicios */}
      <div className="max-w-[980px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              <div className="flex justify-center mb-6">
                <service.Icon className="text-6xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 h-16 flex items-center justify-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed h-24 overflow-hidden">{service.description}</p>
              <p className="text-lg font-semibold text-black mb-6">{service.price}</p>
              <Link to={service.link} className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium mt-auto text-center">
                Más información
              </Link>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-6 text-center">*El precio de reparación de discos duros varía según la capacidad, estado del disco y tiempo de reparación.</p>
      </div>
    </div>
    </PageTransition>
  );
};
