import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

interface FilterBarProps {
  onPriceFilter: (range: string) => void;
  onSortChange: (sort: string) => void;
}

export const FilterBar = ({ onPriceFilter, onSortChange }: FilterBarProps) => {
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const handlePriceChange = (range: string) => {
    setPriceRange(range);
    onPriceFilter(range);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    onSortChange(sort);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {/* Filtrar precios */}
      <div className="relative">
        <select
          value={priceRange}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm text-black cursor-pointer hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Todos los precios</option>
          <option value="free">Gratis</option>
          <option value="0-20">Menos de $20</option>
          <option value="20-40">$20 - $40</option>
          <option value="40-60">$40 - $60</option>
          <option value="60+">Más de $60</option>
        </select>
        <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>

      {/* Filtrar orden */}
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm text-black cursor-pointer hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="popular">Más populares</option>
          <option value="price-low">Precio: Menor a Mayor</option>
          <option value="price-high">Precio: Mayor a Menor</option>
          <option value="newest">Más recientes</option>
          <option value="discount">Mayor descuento</option>
        </select>
        <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>

      {/* Filtrar plataforma */}
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors">
          Todas las plataformas
        </button>
      </div>
    </div>
  );
};
