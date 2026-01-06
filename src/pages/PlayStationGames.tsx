import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { SiPlaystation } from 'react-icons/si';
import { GameCard } from '../components/GameCard';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { PageTransition } from '@/components/PageTransition';

export const PlayStationGames = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const allGames = [
    {
      id: 'gow',
      name: 'God of War Ragnarök',
      description: 'Acción, Aventura, Mitología',
      price: '$69.99',
      color: 'from-blue-800 to-blue-950',
      icon: SiPlaystation,
      badge: 'popular' as const,
      rating: 4.9,
      banner: '/assets/ps-placeholder.jpg',
    },
    {
      id: 'spiderman2',
      name: 'Spider-Man 2',
      description: 'Acción, Superhéroes, Mundo Abierto',
      price: '$69.99',
      color: 'from-red-700 to-blue-900',
      icon: SiPlaystation,
      badge: 'popular' as const,
      rating: 4.8,
      banner: '/assets/ps-placeholder.jpg',
    },
    {
      id: 'tlou2',
      name: 'The Last of Us Part II',
      description: 'Acción, Aventura, Survival',
      price: '$49.99',
      originalPrice: '$59.99',
      discount: 17,
      color: 'from-green-800 to-gray-900',
      icon: SiPlaystation,
      badge: 'sale' as const,
      rating: 4.6,
      banner: '/assets/ps-placeholder.jpg',
    },
    {
      id: 'horizon',
      name: 'Horizon Forbidden West',
      description: 'Acción, RPG, Mundo Abierto',
      price: '$59.99',
      color: 'from-orange-600 to-purple-800',
      icon: SiPlaystation,
      rating: 4.7,
      banner: '/assets/ps-placeholder.jpg',
    },
    {
      id: 'ghost',
      name: 'Ghost of Tsushima',
      description: 'Acción, Aventura, Samurái',
      price: '$49.99',
      color: 'from-red-900 to-gray-900',
      icon: SiPlaystation,
      rating: 4.8,
      banner: '/assets/ps-placeholder.jpg',
    },
    {
      id: 'ratchet',
      name: 'Ratchet & Clank: Rift Apart',
      description: 'Acción, Plataformas, Aventura',
      price: '$59.99',
      color: 'from-purple-600 to-blue-800',
      icon: SiPlaystation,
      badge: 'new' as const,
      rating: 4.5,
      banner: '/assets/ps-placeholder.jpg',
    },
    {
      id: 'gt7',
      name: 'Gran Turismo 7',
      description: 'Carreras, Simulación, Deportivo',
      price: '$59.99',
      color: 'from-red-700 to-blue-800',
      icon: SiPlaystation,
      rating: 4.4,
      banner: '/assets/ps-placeholder.jpg',
    },
    {
      id: 'returnal',
      name: 'Returnal',
      description: 'Roguelike, Ciencia Ficción, Acción',
      price: '$49.99',
      originalPrice: '$69.99',
      discount: 29,
      color: 'from-cyan-600 to-purple-900',
      icon: SiPlaystation,
      badge: 'sale' as const,
      rating: 4.3,
      banner: '/assets/ps-placeholder.jpg',
    },
    {
      id: 'uncharted',
      name: 'Uncharted: Legacy Collection',
      description: 'Acción, Aventura, Tesoros',
      price: '$39.99',
      color: 'from-yellow-700 to-brown-900',
      icon: SiPlaystation,
      rating: 4.7,
      banner: '/assets/ps-placeholder.jpg',
    },
  ];

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
      <div className="min-h-screen bg-white pt-12">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <HiArrowLeft />
          Volver al inicio
        </Link>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <SiPlaystation className="text-5xl text-blue-600" />
            <h1 className="text-5xl font-semibold text-black">Juegos de PlayStation</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">Exclusivos y grandes títulos para PlayStation</p>
          
          <div className="mb-6">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          
          <FilterBar 
            onPriceFilter={setPriceFilter}
            onSortChange={setSortBy}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
