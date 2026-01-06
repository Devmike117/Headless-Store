import { HiHeart, HiOutlineHeart, HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GameCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  banner: string;
  badge?: 'new' | 'sale' | 'preorder' | 'popular';
  rating?: number;
}

export const GameCard = ({
  id,
  name,
  description,
  // price,
  // originalPrice,
  discount,
  banner,
  badge,
  rating,
}: GameCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  
  const inWishlist = isInWishlist(id);
  


  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
    }
  };

  const getBadgeVariant = () => {
    switch (badge) {
      case 'new':
        return 'info';
      case 'sale':
        return 'destructive';
      case 'preorder':
        return 'secondary';
      case 'popular':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getBadgeText = () => {
    switch (badge) {
      case 'new':
        return 'NUEVO';
      case 'sale':
        return 'OFERTA';
      case 'preorder':
        return 'PRE-ORDEN';
      case 'popular':
        return 'POPULAR';
      default:
        return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col">
        {/* Sección de banner */}
        <Link to={`/game/${id}`}>
          <motion.div 
            className="relative h-48 w-full overflow-hidden bg-gray-200 flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={banner} alt={name} className="object-cover w-full h-full" />
            {/* Insignia */}
            {badge && (
              <div className="absolute top-4 left-4">
                <Badge variant={getBadgeVariant() as any}>
                  {getBadgeText()}
                </Badge>
              </div>
            )}
            {/* Descuento */}
            {discount && (
              <div className="absolute top-4 right-4">
                <Badge variant="success" className="text-sm font-bold">
                  -{discount}%
                </Badge>
              </div>
            )}
            {/* Botón de lista de deseos */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist();
              }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all z-10"
            >
              <motion.div
                initial={false}
                animate={{ scale: inWishlist ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {inWishlist ? (
                  <HiHeart className="text-red-500 text-xl" />
                ) : (
                  <HiOutlineHeart className="text-gray-700 text-xl" />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </Link>

        {/* Sección de contenido */}
        <CardContent className="p-6 flex-1 flex flex-col">
          <Link to={`/game/${id}`}>
            <h3 className="text-lg font-semibold text-black mb-2 line-clamp-1 hover:text-blue-600 transition-colors">{name}</h3>
          </Link>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
          {/* Calificación */}
          {rating && (
            <div className="flex items-center gap-2 mb-4">
              <HiStar className="text-yellow-400 text-xl" />
              <span className="font-bold text-gray-800">{rating}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}