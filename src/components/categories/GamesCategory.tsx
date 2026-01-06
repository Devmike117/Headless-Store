import { SiSteam, SiPlaystation, SiEpicgames, SiOrigin } from 'react-icons/si';
import { ProductCard } from '../ProductCard';

export const GamesCategory = () => {
  const products = [
    {
      name: 'Steam Gift Card',
      description: 'Tarjeta de regalo para Steam',
      price: '$20 - $100',
      color: 'from-blue-900 to-blue-700',
      icon: SiSteam,
      popular: true,
    },
    {
      name: 'PlayStation Store',
      description: 'Tarjeta de regalo PSN',
      price: '$25 - $100',
      color: 'from-blue-600 to-indigo-800',
      icon: SiPlaystation,
      popular: true,
    },
    {
      name: 'Epic Games Store',
      description: 'Tarjeta de regalo Epic',
      price: '$15 - $100',
      color: 'from-gray-800 to-gray-950',
      icon: SiEpicgames,
      popular: false,
    },
    {
      name: 'EA Origin',
      description: 'Tarjeta de regalo Origin',
      price: '$20 - $100',
      color: 'from-orange-600 to-orange-800',
      icon: SiOrigin,
      popular: false,
    },
    {
      name: 'Steam Wallet Code',
      description: 'Código digital instantáneo',
      price: '$10 - $500',
      color: 'from-indigo-900 to-purple-800',
      icon: SiSteam,
      popular: true,
    },
    {
      name: 'PlayStation Plus',
      description: 'Suscripción 12 meses',
      price: '$59.99/año',
      color: 'from-blue-500 to-cyan-700',
      icon: SiPlaystation,
      popular: false,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-black mb-2">Juegos</h2>
        <p className="text-gray-600">Tarjetas de regalo y códigos para las principales plataformas</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
