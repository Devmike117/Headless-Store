import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiArrowLeft, HiShoppingCart, HiHeart, HiOutlineHeart, HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { gamesData } from '../data/gamesData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageTransition } from '@/components/PageTransition';

export const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  const game = id ? gamesData[id] : null;
  const inWishlist = id ? isInWishlist(id) : false;

  if (!game) {
    return (
      <div className="min-h-screen bg-white pt-12 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black mb-4">Juego no encontrado</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  {/* Manejar agregar al carrito */}
  const handleAddToCart = () => {
    addToCart({
      id: game.id,
      name: game.name,
      price: game.price,
      originalPrice: game.originalPrice,
      platform: game.platform,
    });
  };

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(game.id);
    } else {
      addToWishlist(game.id);
    }
  };

  return (
    <PageTransition>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-12 px-1 xs:px-2 sm:px-4"
    >
      {/* Header */}
      <div className="bg-neutral-900 text-white rounded-xl sm:rounded-3xl shadow-xl my-2 sm:my-4 mb-8 sm:mb-16 md:mb-20 p-3 xs:p-4 sm:p-8 md:p-10 w-full border border-gray-800">
        <div className="px-0 py-0">
          <motion.button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 xs:mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowLeft className="text-lg" />
            Volver
          </motion.button>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Izquierda: Medios */}
            <motion.div 
              className="space-y-2 xs:space-y-3 sm:space-y-4 w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Imagen/Video principal */}
              <motion.div 
                className="aspect-video bg-neutral-800 rounded-lg sm:rounded-2xl overflow-hidden border border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {showVideo ? (
                  <iframe
                    src={game.video}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <motion.img
                    key={selectedImage}
                    src={game.screenshots[selectedImage]}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              {/* Miniaturas */}
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 gap-2 xs:gap-3 mt-2 sm:mt-4">
                <motion.button
                  onClick={() => setShowVideo(true)}
                  className={`aspect-video rounded-md sm:rounded-lg overflow-hidden border-2 transition-all shadow-sm ${
                    showVideo ? 'border-blue-500' : 'border-transparent hover:border-white/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-full h-full bg-neutral-900/80 flex items-center justify-center">
                    <motion.span 
                      className="text-4xl"
                      whileHover={{ scale: 1.2 }}
                    >
                      ▶
                    </motion.span>
                  </div>
                </motion.button>
                {game.screenshots.map((screenshot: string, index: number) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setShowVideo(false);
                      setSelectedImage(index);
                    }}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      !showVideo && selectedImage === index
                        ? 'border-blue-500'
                        : 'border-transparent hover:border-white/50'
                    }`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Derecha: Información */}
            <motion.div 
              className="space-y-3 xs:space-y-4 sm:space-y-6 w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="flex items-center justify-between gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-sm text-white font-medium tracking-wide bg-neutral-800 rounded-full px-3 py-1 border border-gray-700">{game.platform}</span>
                <motion.button
                  onClick={toggleWishlist}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 xs:p-3 rounded-full transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={inWishlist ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {inWishlist ? (
                      <HiHeart className="text-xl xs:text-2xl text-red-500" />
                    ) : (
                      <HiOutlineHeart className="text-xl xs:text-2xl text-white" />
                    )}
                  </motion.div>
                </motion.button>
              </motion.div>

              <motion.h1 
                className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {game.name}
              </motion.h1>

              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.05 }}
                      >
                        <HiStar
                          className={`text-xl ${
                            i < Math.floor(game.rating) ? 'text-yellow-400' : 'text-gray-600'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-sm text-white/80">
                    {game.rating} ({game.totalReviews.toLocaleString()} reseñas)
                  </span>
                </div>
              </motion.div>

              <motion.p 
                className="text-sm xs:text-base sm:text-lg text-gray-200 leading-relaxed mb-2 xs:mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {game.description}
              </motion.p>

              {/* Géneros */}
              <motion.div 
                className="flex flex-wrap gap-1 xs:gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {game.genres.map((genre: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                  >
                    <Badge variant="secondary" className="px-4 py-2 bg-white/10 text-white hover:bg-white/20 rounded-full border border-gray-700 text-sm font-medium backdrop-blur-sm">
                      {genre}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* Precio y Acciones */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Card className="bg-neutral-800/80 border border-gray-700 rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 space-y-2 xs:space-y-3 sm:space-y-4 shadow-md">
                  <div className="flex items-end gap-2 xs:gap-3 sm:gap-4">
                    {game.discount && game.discount > 0 && (
                      <>
                        <span className="text-base xs:text-xl sm:text-2xl text-white/60 line-through">
                          ${game.originalPrice?.toFixed(2)}
                        </span>
                        <Badge variant="success" className="px-2 xs:px-3 py-1 text-sm xs:text-base sm:text-lg">
                          -{game.discount}%
                        </Badge>
                      </>
                    )}
                  </div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">${game.price.toFixed(2)}</div>

                  <div className="space-y-2 xs:space-y-3">
                    <Button
                      onClick={handleAddToCart}
                      className="w-full py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg"
                      size="lg"
                    >
                      <HiShoppingCart className="text-lg xs:text-xl sm:text-2xl mr-1 xs:mr-2" />
                      Agregar al carrito
                    </Button>
                    <Button
                      onClick={() => {
                        handleAddToCart();
                        setTimeout(() => navigate('/checkout'), 300);
                      }}
                      variant="outline"
                      className="w-full py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg bg-white hover:bg-gray-100 text-black border-0"
                      size="lg"
                    >
                      Comprar ahora
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Secciones de contenido */}
      <motion.div 
        className="max-w-[1200px] mx-auto px-2 xs:px-3 sm:px-6 py-6 xs:py-8 sm:py-12 mt-8 sm:mt-12 md:mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 xs:mb-10 sm:mb-16 text-xs xs:text-sm">
            <TabsTrigger value="about">Acerca del juego</TabsTrigger>
            <TabsTrigger value="features">Características</TabsTrigger>
            <TabsTrigger value="requirements">Requisitos</TabsTrigger>
            <TabsTrigger value="info">Información</TabsTrigger>
          </TabsList>

          {/* Acerca del juego */}
          <TabsContent value="about" className="space-y-4 xs:space-y-6 sm:space-y-8 mt-4 sm:mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-4 xs:p-6 sm:p-10">
                <h2 className="text-base xs:text-xl sm:text-3xl font-semibold text-black mb-2 xs:mb-4 sm:mb-6">Acerca del juego</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm xs:text-base sm:text-lg">
                  {game.longDescription}
                </p>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Características */}
          <TabsContent value="features" className="mt-4 sm:mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-4 xs:p-6 sm:p-10">
                <h2 className="text-base xs:text-xl sm:text-3xl font-semibold text-black mb-2 xs:mb-4 sm:mb-6">Características principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 xs:gap-2 sm:gap-4">
                  {game.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-start gap-2 xs:gap-3 p-2 xs:p-3 sm:p-4 bg-gray-50 rounded-lg xs:rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors text-sm xs:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Requisitos del sistema */}
          <TabsContent value="requirements" className="mt-4 sm:mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-base xs:text-xl sm:text-3xl font-semibold text-black">Requisitos del sistema</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                {/* Mínimos */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-4 xs:p-5 sm:p-8 h-full">
                    <h3 className="text-sm xs:text-lg sm:text-xl font-semibold text-black mb-2 xs:mb-3 sm:mb-4">Mínimos</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Sistema Operativo</dt>
                        <dd className="text-gray-900">{game.systemRequirements.minimum.os}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Procesador</dt>
                        <dd className="text-gray-900">{game.systemRequirements.minimum.processor}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Memoria</dt>
                        <dd className="text-gray-900">{game.systemRequirements.minimum.memory}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Gráficos</dt>
                        <dd className="text-gray-900">{game.systemRequirements.minimum.graphics}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Almacenamiento</dt>
                        <dd className="text-gray-900">{game.systemRequirements.minimum.storage}</dd>
                      </div>
                    </dl>
                  </Card>
                </motion.div>

                {/* Recomendados */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="p-4 xs:p-5 sm:p-8 h-full bg-blue-50 border-blue-200">
                    <h3 className="text-sm xs:text-lg sm:text-xl font-semibold text-black mb-2 xs:mb-3 sm:mb-4 flex items-center gap-2">
                      Recomendados
                      <Badge variant="info">Óptimo</Badge>
                    </h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Sistema Operativo</dt>
                        <dd className="text-gray-900">{game.systemRequirements.recommended.os}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Procesador</dt>
                        <dd className="text-gray-900">{game.systemRequirements.recommended.processor}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Memoria</dt>
                        <dd className="text-gray-900">{game.systemRequirements.recommended.memory}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Gráficos</dt>
                        <dd className="text-gray-900">{game.systemRequirements.recommended.graphics}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Almacenamiento</dt>
                        <dd className="text-gray-900">{game.systemRequirements.recommended.storage}</dd>
                      </div>
                    </dl>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Información adicional */}
          <TabsContent value="info" className="mt-4 sm:mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: 'Fecha de lanzamiento', value: game.releaseDate },
                  { label: 'Desarrollador', value: game.developer },
                  { label: 'Distribuidor', value: game.publisher }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Card className="p-5 xs:p-6 sm:p-8 hover:shadow-lg transition-shadow">
                      <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">{item.label}</h3>
                      <p className="text-base sm:text-lg font-semibold text-black">{item.value}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Idiomas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Card className="p-5 xs:p-6 sm:p-10">
                  <h2 className="text-lg sm:text-2xl font-semibold text-black mb-4 sm:mb-6">Idiomas disponibles</h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {game.languages.map((language: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.03, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="px-4 py-2 text-base">
                          {language}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
    </PageTransition>
  );
};
