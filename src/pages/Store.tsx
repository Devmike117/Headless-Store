import { Link } from 'react-router-dom';
import { SiSteam } from 'react-icons/si';
import { DiWindows } from 'react-icons/di';
import { BsMicrosoft, BsXbox } from 'react-icons/bs';
import { HiBadgeCheck, HiLightningBolt, HiCreditCard } from 'react-icons/hi';
import { HiRocketLaunch, HiLockClosed, HiShieldCheck, HiArrowLeft } from 'react-icons/hi2';
import { BiSupport } from 'react-icons/bi';
import { PageTransition } from '@/components/PageTransition';

export const Store = () => {
  const categories = [
    { 
      id: 'games', 
      name: 'Juegos', 
      icon: SiSteam,
      description: 'Steam, PlayStation, Epic Games y más',
      path: '/store/games',
      color: 'from-blue-900 to-blue-700'
    },
    { 
      id: 'consoles', 
      name: 'Consolas', 
      icon: BsXbox,
      description: 'Xbox, PlayStation, Nintendo',
      path: '/store/consoles',
      color: 'from-green-600 to-green-800'
    },
    { 
      id: 'windows', 
      name: 'Windows', 
      icon: DiWindows,
      description: 'Windows 10 y 11 Pro/Home',
      path: '/store/windows',
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      id: 'office', 
      name: 'Office', 
      icon: BsMicrosoft,
      description: 'Microsoft 365, Office 2021',
      path: '/store/office',
      color: 'from-orange-500 to-red-600'
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12 px-2 sm:px-6">
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
      <div className="text-center py-8 px-2 sm:px-6">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-semibold text-black mb-4 tracking-tight">Tienda de Licencias</h1>
        <p className="text-base sm:text-xl text-gray-600">Licencias originales para juegos y software</p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-[980px] mx-auto px-2 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group"
            >
              <div className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-blue-500 transition-all duration-300">
                <div className={`bg-gradient-to-br ${category.color} p-12 flex items-center justify-center`}>
                  <category.icon className="text-white text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-3xl font-semibold text-black mb-3">{category.name}</h3>
                  <p className="text-gray-600 text-lg">{category.description}</p>
                  <div className="mt-6">
                    <span className="text-blue-600 font-medium group-hover:text-blue-700">Ver productos →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-10 sm:py-20 px-2 sm:px-6">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-black mb-8 sm:mb-12 text-center">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center">
              <HiBadgeCheck className="text-4xl mb-4 text-blue-600 inline" />
              <h3 className="text-xl font-semibold text-black mb-2">Licencias Originales</h3>
              <p className="text-gray-600">Todas nuestras licencias son 100% originales y verificadas</p>
            </div>
            <div className="text-center">
              <HiLightningBolt className="text-4xl mb-4 text-yellow-500 inline" />
              <h3 className="text-xl font-semibold text-black mb-2">Entrega Inmediata</h3>
              <p className="text-gray-600">Recibe tu licencia por email en menos de 5 minutos</p>
            </div>
            <div className="text-center">
              <HiCreditCard className="text-4xl mb-4 text-green-600 inline" />
              <h3 className="text-xl font-semibold text-black mb-2">Pago Seguro</h3>
              <p className="text-gray-600">Transacciones protegidas y métodos de pago confiables</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-10 sm:py-20 px-2 sm:px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold text-black mb-4">Todas las licencias incluyen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-12">
            <div>
              <div className="flex justify-center mb-3">
                <HiRocketLaunch className="text-3xl sm:text-4xl text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Activación inmediata</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <HiLockClosed className="text-3xl sm:text-4xl text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">100% seguras y originales</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <HiShieldCheck className="text-3xl sm:text-4xl text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Garantía de por vida</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <BiSupport className="text-3xl sm:text-4xl text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Soporte 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="bg-gray-50 py-10 sm:py-20 px-2 sm:px-6">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-black mb-8 sm:mb-12 text-center">Preguntas frecuentes</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-black mb-2">¿Cómo recibo mi licencia?</h3>
              <p className="text-sm sm:text-base text-gray-600">Una vez completada tu compra, recibirás un email con tu código de licencia y las instrucciones de activación en menos de 5 minutos.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-black mb-2">¿Las licencias son permanentes?</h3>
              <p className="text-sm sm:text-base text-gray-600">Sí, todas nuestras licencias de Windows y Office son perpetuas. Para suscripciones como Xbox Game Pass o Microsoft 365, se renuevan según el período contratado.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-black mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-sm sm:text-base text-gray-600">Aceptamos tarjetas de crédito/débito, Apple Pay, Google Pay y transferencias bancarias. Todos los pagos son procesados de forma segura.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};
