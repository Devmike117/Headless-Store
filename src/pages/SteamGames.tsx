import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { SiSteam } from 'react-icons/si';
import { GameCard } from '../components/GameCard';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { getAllGames } from '../data/gamesData';
import { PageTransition } from '@/components/PageTransition';

export const SteamGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  {/* Obtener todos los juegos de Steam desde gamesData */}
  const allGames = getAllGames()
    .filter(game => game.platform === 'Steam')
    .map(game => ({
      id: game.id,
      name: game.name,
      description: game.genres.join(', '),
      price: game.price === 0 ? 'Gratis' : `$${game.price.toFixed(2)}`,
      originalPrice: game.originalPrice ? `$${game.originalPrice.toFixed(2)}` : undefined,
      discount: game.discount,
      banner: game.banner,
      badge: game.badge,
      rating: game.rating,
    }));

  const filteredGames = allGames.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    const numPrice = game.price === 'Gratis' ? 0 : parseFloat(game.price.replace('$', ''));
    
    switch (priceFilter) {
      case 'free':
        matchesPrice = game.price === 'Gratis';
        break;
      case '0-20':
        matchesPrice = numPrice > 0 && numPrice < 20;
        break;
      case '20-40':
        matchesPrice = numPrice >= 20 && numPrice < 40;
        break;
      case '40-60':
        matchesPrice = numPrice >= 40 && numPrice < 60;
        break;
      case '60+':
        matchesPrice = numPrice >= 60;
        break;
    }
    
    return matchesSearch && matchesPrice;
  });

  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        const priceA = a.price === 'Gratis' ? 0 : parseFloat(a.price.replace('$', ''));
        const priceB = b.price === 'Gratis' ? 0 : parseFloat(b.price.replace('$', ''));
        return priceA - priceB;
      case 'price-high':
        const priceA2 = a.price === 'Gratis' ? 0 : parseFloat(a.price.replace('$', ''));
        const priceB2 = b.price === 'Gratis' ? 0 : parseFloat(b.price.replace('$', ''));
        return priceB2 - priceA2;
      case 'discount':
        return (b.discount || 0) - (a.discount || 0);
      default:
        return 0;
    }
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12 px-2 sm:px-6">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-6 py-8 sm:py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <HiArrowLeft />
          Volver al inicio
        </Link>
        
        <div className="mb-8 sm:mb-12 p-2 sm:p-0">
          <div className="flex items-center gap-2 sm:gap-4 mb-4">
            <SiSteam className="text-3xl sm:text-5xl text-blue-900" />
            <h1 className="text-2xl sm:text-5xl font-semibold text-black">Juegos de Steam</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">Los mejores juegos para PC disponibles en Steam</p>
          
          <div className="mb-6">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          
          <FilterBar 
            onPriceFilter={setPriceFilter}
            onSortChange={setSortBy}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sortedGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        {sortedGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron juegos con los filtros seleccionados</p>
          </div>
        )}
      </div>
    </div>
    </PageTransition>
  );
};
