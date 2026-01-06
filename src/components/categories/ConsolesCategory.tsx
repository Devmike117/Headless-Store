import { BsXbox, BsNintendoSwitch } from 'react-icons/bs';
import { SiPlaystation } from 'react-icons/si';
import { ProductCard } from '../ProductCard';

export const ConsolesCategory = () => {
  const products = [
    {
      name: 'Xbox Game Pass Ultimate',
      description: 'Suscripción mensual completa',
      price: '$16.99/mes',
      color: 'from-green-600 to-green-800',
      icon: BsXbox,
      popular: true,
    },
    {
      name: 'Xbox Game Pass PC',
      description: 'Suscripción mensual PC',
      price: '$9.99/mes',
      color: 'from-green-700 to-teal-800',
      icon: BsXbox,
      popular: true,
    },
    {
      name: 'Xbox Live Gold',
      description: '12 meses de suscripción',
      price: '$59.99/año',
      color: 'from-green-500 to-emerald-700',
      icon: BsXbox,
      popular: false,
    },
    {
      name: 'Nintendo Switch Online',
      description: 'Suscripción anual individual',
      price: '$19.99/año',
      color: 'from-red-600 to-red-800',
      icon: BsNintendoSwitch,
      popular: false,
    },
    {
      name: 'Nintendo Switch Familia',
      description: 'Suscripción anual familiar',
      price: '$34.99/año',
      color: 'from-red-500 to-pink-700',
      icon: BsNintendoSwitch,
      popular: false,
    },
    {
      name: 'PlayStation Now',
      description: 'Suscripción streaming 12 meses',
      price: '$59.99/año',
      color: 'from-blue-700 to-indigo-900',
      icon: SiPlaystation,
      popular: false,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-black mb-2">Suscripciones de Consola</h2>
        <p className="text-gray-600">Game Pass, PlayStation Plus, Nintendo Switch Online y más</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
