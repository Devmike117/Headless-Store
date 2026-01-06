import { HiShoppingCart } from 'react-icons/hi';
import type { IconType } from 'react-icons';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  color: string;
  icon: IconType;
  popular?: boolean;
}

export const ProductCard = ({ name, description, price, color, icon: Icon, popular = false }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer relative">
      {popular && (
        <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          Popular
        </div>
      )}
      <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className={`aspect-square bg-gradient-to-br ${color} flex items-center justify-center`}>
          <Icon className="text-white text-7xl opacity-80" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-black mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <p className="text-2xl font-semibold text-black mb-4">{price}</p>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <HiShoppingCart className="text-lg" />
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
};
