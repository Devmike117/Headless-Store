{/* Definición de la interfaz para los datos del juego */}
export interface GameData {
  id: string;
  name: string;
  platform: string;
  banner: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  totalReviews: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  languages: string[];
  description: string;
  longDescription: string;
  features: string[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
  screenshots: string[];
  video: string;
  color: string;
  badge?: 'new' | 'sale' | 'preorder' | 'popular';
}
{/* Exportación de los datos de los juegos */}
export const gamesData: { [key: string]: GameData } = {
  // Grand Theft Auto V
  'gta5': {
    id: 'gta5',
    name: 'Grand Theft Auto V',
    platform: 'Steam',
    banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_hero.jpg',
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    rating: 4.5,
    totalReviews: 125000,
    releaseDate: '17 Sep 2013',
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    genres: ['Acción', 'Aventura', 'Mundo Abierto'],
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués'],
    description: 'Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de hasta 4K y disfrutar del juego a 60 fotogramas por segundo.',
    longDescription: `Los Santos es una extensa metrópoli bañada por el sol, llena de maestros de la superación personal, estrellas de telerrealidad y famosos en decadencia que luchan por sobrevivir en una época de incertidumbre económica y reality shows baratos. En medio de todo esto, tres criminales muy diferentes arriesgan todo en una serie de atracos audaces y peligrosos que podrían prepararlos para el resto de sus vidas.

Grand Theft Auto V para PC también incluye Grand Theft Auto Online, el universo online dinámico y en constante evolución de Grand Theft Auto. Completa tu imperio criminal compitiendo en misiones competitivas o cooperativas, tanto clásicas de GTA Online como completamente nuevas.`,
    features: [
      'Mundo abierto masivo con Los Santos y Blaine County',
      'Tres protagonistas únicos con historias entrelazadas',
      'Más de 60 horas de contenido en la campaña principal',
      'Grand Theft Auto Online incluido',
      'Gráficos mejorados en 4K con hasta 60 FPS',
      'Editor Rockstar: crea y comparte tus propios videos',
      'Soporte para mods de la comunidad',
      'Modo primera persona disponible'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850',
        memory: '4 GB RAM',
        graphics: 'NVIDIA 9800 GT 1GB / AMD HD 4870 1GB',
        storage: '72 GB',
      },
      recommended: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 660 2GB / AMD HD 7870 2GB',
        storage: '72 GB',
      }
    },
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/d61184a98c1cf2db2b08b2999c04b0519e3615bb/ss_d61184a98c1cf2db2b08b2999c04b0519e3615bb.1920x1080.jpg?t=1765479644',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/8340fd391012e12be7e4c02e65801a2648a6b60e/ss_8340fd391012e12be7e4c02e65801a2648a6b60e.1920x1080.jpg?t=1765479644',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/f2e70b5823510daa062293ff0b03821e1dee2d37/ss_f2e70b5823510daa062293ff0b03821e1dee2d37.1920x1080.jpg?t=1765479644',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/6959cc5d64cce82cb68a27457cfa46fb4d50f897/ss_6959cc5d64cce82cb68a27457cfa46fb4d50f897.1920x1080.jpg?t=1765479644',
    ],
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    color: '',
    badge: 'sale',
  },
  // Red Dead Redemption 2
  'rdr2': {
    id: 'rdr2',
    name: 'Red Dead Redemption 2',
    platform: 'Steam',
    banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_hero.jpg',
    price: 59.99,
    rating: 4.8,
    totalReviews: 98000,
    releaseDate: '5 Dic 2019',
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    genres: ['Acción', 'Aventura', 'Western'],
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Japonés'],
    description: 'América, 1899. Arthur Morgan y la banda de Van der Linde deben huir. Con agentes federales y los mejores cazarrecompensas pisándoles los talones, la banda debe atracar, robar y luchar para sobrevivir en el salvaje corazón de América.',
    longDescription: `Red Dead Redemption 2, el aclamado juego de mundo abierto de Rockstar Games, ganador de más de 175 premios al Mejor Juego del Año, llega a PC con nuevo contenido para el modo historia, mejoras visuales y más.

Arthur Morgan y la banda de Van der Linde huyen de la ley. Con agentes federales y los mejores cazarrecompensas pisándoles los talones, la banda debe atracar, robar y luchar para sobrevivir en el salvaje corazón de América. A medida que las divisiones internas aumentan, Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo crió.`,
    features: [
      'Mundo abierto épico del Salvaje Oeste',
      'Historia profunda con más de 60 horas de juego',
      'Red Dead Online con actualizaciones constantes',
      'Gráficos fotorrealistas optimizados para PC',
      'Sistema de honor que afecta la historia',
      'Caza, pesca y exploración inmersivas',
      'Modo foto avanzado',
      'HDR nativo y soporte para monitores ultra anchos'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i5-2500K / AMD FX-6300',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280 3GB',
        storage: '150 GB',
      },
      recommended: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i7-4770K / AMD Ryzen 5 1500X',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB',
        storage: '150 GB',
      }
    },
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1759502961',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.1920x1080.jpg?t=1759502961',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_4ce07ae360b166f0f650e9a895a3b4b7bf15e34f.1920x1080.jpg?t=1759502961',
    ],
    video: 'https://www.youtube.com/embed/gmA6MrX81z4',
    color: '',
    badge: 'popular',
  },
  // Cyberpunk 2077
  'cyberpunk': {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    platform: 'Steam',
    banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg',
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.2,
    totalReviews: 87500,
    releaseDate: '10 Dic 2020',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    genres: ['RPG', 'Mundo Abierto', 'Ciencia Ficción'],
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Polaco', 'Ruso'],
    description: 'Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, la glamur y las modificaciones corporales.',
    longDescription: `Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en la megalópolis de Night City, donde te pondrás en la piel de un mercenario o una mercenaria ciberpunk y vivirás su lucha a vida o muerte por la supervivencia. Mejorado y con contenido nuevo adicional gratuito. Personaliza tu personaje y tu estilo de juego a medida que aceptas trabajos, te labras una reputación y desbloqueas mejoras. Las relaciones que forjes y las decisiones que tomes darán forma al mundo que te rodea. Aquí nacen las leyendas. ¿Cuál será la tuya?`,
    features: [
      'Mundo abierto gigantesco con Night City y Badlands',
      'Historia ramificada con múltiples finales',
      'Sistema de combate y sigilo profundo',
      'Personalización extrema de personaje',
      'Ray tracing y DLSS para PC',
      'Banda sonora original de más de 150 canciones',
      'Modificaciones cibernéticas únicas',
      'Actualizaciones constantes mejorando el juego'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i7-6700 / AMD Ryzen 5 1600',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
        storage: '70 GB SSD',
      },
      recommended: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i7-12700 / AMD Ryzen 7 7800X3D',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT',
        storage: '70 GB SSD',
      }
    },
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_9beef14102f164fa1163536d0fb3a51d0a2e4a3f.1920x1080.jpg?t=1766141193',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_b20689e73e3ac19bcc5fad2c18d0353c769de144.1920x1080.jpg?t=1766141193',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_ae4465fa8a44dd330dbeb7992ba196c2f32cabb1.1920x1080.jpg?t=1766141193',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_2f649b68d579bf87011487d29bc4ccbfdd97d34f.1920x1080.jpg?t=1766141193',
    ],
    video: 'https://www.youtube.com/embed/8X2kIfS6fb8',
    color: '',
    badge: 'sale',
  },
  'eldenring': {
    id: 'eldenring',
    name: 'Elden Ring',
    platform: 'Steam',
    banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg',
    price: 59.99,
    rating: 4.9,
    totalReviews: 156000,
    releaseDate: '25 Feb 2022',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    genres: ['RPG', 'Souls-like', 'Fantasía Oscura'],
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Japonés', 'Coreano'],
    description: 'El NUEVO JUEGO DE ROL Y ACCIÓN DE FANTASÍA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y convertirte en un Señor del Círculo en las Tierras Intermedias.',
    longDescription: `Elden Ring es el nuevo RPG de acción y fantasía desarrollado por FromSoftware y creado por Hidetaka Miyazaki (Dark Souls) y George R. R. Martin (Canción de hielo y fuego).

Un vasto mundo donde el terreno abierto con sus distintas situaciones y los enormes mazmorras con complejas arquitecturas en tres dimensiones se conectan fluidamente. Mientras exploras, la alegría de descubrir amenazas y encuentros desconocidos te espera en cada rincón, proporcionando una sensación de logro sin igual.`,
    features: [
      'Mundo abierto épico creado por Miyazaki y George R.R. Martin',
      'Más de 100 horas de contenido',
      'Combate desafiante estilo Souls',
      'Montura Torrente para exploración rápida',
      'Invocación de espíritus como aliados',
      'Multijugador cooperativo y PvP',
      'Personalización profunda de construcción',
      'Gráficos impresionantes optimizados para PC'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB',
        storage: '60 GB',
      },
      recommended: {
        os: 'Windows 11 64 Bit',
        processor: 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB',
        storage: '60 GB',
      }
    },
    screenshots: [
      'https://via.placeholder.com/800x450/D4AF37/000000?text=Elden+Ring+Screenshot+1',
      'https://via.placeholder.com/800x450/FFD700/000000?text=Elden+Ring+Screenshot+2',
      'https://via.placeholder.com/800x450/B8860B/ffffff?text=Elden+Ring+Screenshot+3',
      'https://via.placeholder.com/800x450/DAA520/000000?text=Elden+Ring+Screenshot+4',
    ],
    video: 'https://www.youtube.com/embed/E3Huy2cdih0',
    color: '',
    badge: 'popular',
  },
  'hogwarts': {
    id: 'hogwarts',
    name: 'Hogwarts Legacy',
    platform: 'Steam',
    banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_hero.jpg',
    price: 49.99,
    rating: 4.3,
    totalReviews: 72000,
    releaseDate: '10 Feb 2023',
    developer: 'Avalanche Software',
    publisher: 'Warner Bros. Games',
    genres: ['Acción', 'RPG', 'Mundo Abierto'],
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués'],
    description: 'Hogwarts Legacy es un RPG de acción inmersivo en mundo abierto ambientado en el mundo presentado por primera vez en los libros de Harry Potter.',
    longDescription: `Hogwarts Legacy es un RPG de acción inmersivo en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico. Tu legado es lo que tú hagas de él. Vive lo imprevisto.

Experimenta Hogwarts en el siglo XIX. Tu personaje es un estudiante con la clave de un antiguo secreto que amenaza con destrozar el mundo mágico. Haz aliados, lucha contra magos oscuros y decide en última instancia el destino del mundo mágico.`,
    features: [
      'Explora Hogwarts, Hogsmeade y los alrededores',
      'Asiste a clases y aprende hechizos',
      'Crea y mejora pociones',
      'Doma y monta criaturas mágicas',
      'Desarrolla tu personaje y habilidades',
      'Descubre calabozos y completa misiones',
      'Personaliza tu Sala de los Menesteres',
      'Historia original ambientada en el siglo XIX'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i5-6600 / AMD Ryzen 5 1400',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 960 4GB / AMD Radeon RX 470 4GB',
        storage: '85 GB',
      },
      recommended: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i7-8700 / AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1080 Ti / AMD Radeon RX 5700 XT',
        storage: '85 GB',
      }
    },
    screenshots: [
      'https://via.placeholder.com/800x450/4B0082/ffffff?text=Hogwarts+Screenshot+1',
      'https://via.placeholder.com/800x450/8B008B/ffffff?text=Hogwarts+Screenshot+2',
      'https://via.placeholder.com/800x450/9932CC/ffffff?text=Hogwarts+Screenshot+3',
      'https://via.placeholder.com/800x450/9370DB/ffffff?text=Hogwarts+Screenshot+4',
    ],
    video: 'https://www.youtube.com/embed/1O6Qstncpnc',
    color: '',
    badge: 'new',
  },
  'witcher3': {
    id: 'witcher3',
    name: 'The Witcher 3: Wild Hunt',
    platform: 'Steam',
    banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_hero.jpg',
    price: 39.99,
    rating: 4.8,
    totalReviews: 234000,
    releaseDate: '19 May 2015',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    genres: ['RPG', 'Fantasía', 'Mundo Abierto'],
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Polaco', 'Ruso'],
    description: 'Eres Geralt de Rivia, cazador de monstruos. Has sido entrenado desde la niñez para ser una máquina de matar. Ahora te enfrentas a tu destino en un mundo en guerra constante.',
    longDescription: `The Witcher: Wild Hunt es un juego de rol y acción de nueva generación ambientado en un universo de fantasía lleno de decisiones importantes y consecuencias impactantes. En The Witcher, juegas como cazador de monstruos profesional Geralt de Rivia encargado de encontrar a un niño de la profecía en un vasto mundo abierto rico en ciudades de comerciantes, islas vikingas, pasajes peligrosos de montaña y cavernas olvidadas por explorar.`,
    features: [
      'Mundo abierto masivo 35 veces más grande que su predecesor',
      'Más de 100 horas de contenido principal y secundario',
      '2 expansiones DLC galardonadas incluidas',
      'Sistema de combate dinámico y estratégico',
      'Historia ramificada con múltiples finales',
      'Gráficos mejorados en versión Next-Gen',
      'Mini-juego Gwent adictivo',
      'Banda sonora épica galardonada'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i5-2500K / AMD FX-6300',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 770 / AMD Radeon R9 290',
        storage: '50 GB',
      },
      recommended: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i7-3770 / AMD FX-8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 / AMD Radeon RX 480',
        storage: '50 GB',
      }
    },
    screenshots: [
      'https://via.placeholder.com/800x450/2F4F4F/ffffff?text=Witcher+3+Screenshot+1',
      'https://via.placeholder.com/800x450/696969/ffffff?text=Witcher+3+Screenshot+2',
      'https://via.placeholder.com/800x450/708090/ffffff?text=Witcher+3+Screenshot+3',
      'https://via.placeholder.com/800x450/778899/ffffff?text=Witcher+3+Screenshot+4',
    ],
    video: 'https://www.youtube.com/embed/c0i88t0Kacs',
    color: '',
  },
  'cs2': {
    id: 'cs2',
    name: 'Counter-Strike 2',
    platform: 'Steam',
    banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/library_hero.jpg',
    price: 0,
    rating: 4.6,
    totalReviews: 445000,
    releaseDate: '27 Sep 2023',
    developer: 'Valve',
    publisher: 'Valve',
    genres: ['FPS', 'Multijugador', 'Competitivo'],
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Ruso', 'Chino'],
    description: 'Counter-Strike 2 es la mejora más grande en la historia de Counter-Strike. Con un motor Source 2 completamente nuevo, CS2 representa una evolución técnica completa del juego.',
    longDescription: `Durante más de dos décadas, Counter-Strike ha ofrecido una experiencia competitiva de elite, una que ha dado forma a FPS competitivos desde su lanzamiento. Ahora, este icónico legado da el siguiente paso con Counter-Strike 2.

CS2 incluye mapas mejorados con todos los detalles, modelos y efectos de Source 2. Todos los elementos del juego — desde las balas, hasta el humo, hasta los efectos de sonido — fueron repensados. Los Servidores Sub-Tick proporcionan un juego más fluido y responsivo. Y mucho más.`,
    features: [
      'Motor Source 2 de última generación',
      'Servidores Sub-Tick para respuesta instantánea',
      'Todos los mapas clásicos completamente renovados',
      'Sistema de humo volumétrico dinámico',
      'Iluminación y audio mejorados',
      'Ranking y matchmaking mejorados',
      'Completamente gratis para jugar',
      'Todos tus skins de CS:GO transferidos'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i5-2500K / AMD FX-6300',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 960 / AMD Radeon R9 280',
        storage: '85 GB',
      },
      recommended: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT',
        storage: '85 GB SSD',
      }
    },
    screenshots: [
      'https://via.placeholder.com/800x450/FF8C00/000000?text=CS2+Screenshot+1',
      'https://via.placeholder.com/800x450/FFD700/000000?text=CS2+Screenshot+2',
      'https://via.placeholder.com/800x450/FFA500/000000?text=CS2+Screenshot+3',
      'https://via.placeholder.com/800x450/FF7F50/000000?text=CS2+Screenshot+4',
    ],
    video: 'https://www.youtube.com/embed/BR5j-5ipBtY',
    color: '',
    badge: 'popular',
  },
  'baldurs': {
    id: 'baldurs',
    name: "Baldur's Gate 3",
    platform: 'Steam',
    banner: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_hero.jpg',
    price: 59.99,
    rating: 4.9,
    totalReviews: 178000,
    releaseDate: '3 Ago 2023',
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    genres: ['RPG', 'Estrategia', 'Fantasía'],
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Ruso'],
    description: "Baldur's Gate 3 es un RPG de próxima generación basado en las reglas de D&D. Reúne a tu grupo y regresa a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia.",
    longDescription: `Reúne a tu grupo y regresa a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, y la atracción de un poder absoluto.

Fuerzas misteriosas te otorgan habilidades extraordinarias, y tú decides tu destino. Hazte el líder, desata el poder que hay en ti y decide el destino de los Reinos Olvidados. Lo único que se interpone entre tú y el poder absoluto es la extraña criatura que crece en tu cabeza.`,
    features: [
      'Sistema de combate basado en D&D 5ª Edición',
      'Historia épica con múltiples caminos y finales',
      'Cooperativo online para hasta 4 jugadores',
      'Más de 174 horas de cinematográficas capturadas',
      '12 clases y 46 subclases jugables',
      'Mundo interactivo con consecuencias reales',
      'Romance y relaciones profundas con compañeros',
      'Ganador de múltiples premios GOTY'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel I5 4690 / AMD FX 8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 970 / AMD RX 480',
        storage: '150 GB',
      },
      recommended: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel i7 8700K / AMD r5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA 2060 Super / AMD 5700 XT',
        storage: '150 GB SSD',
      }
    },
    screenshots: [
      'https://via.placeholder.com/800x450/8B0000/ffffff?text=Baldurs+Gate+3+Screenshot+1',
      'https://via.placeholder.com/800x450/800080/ffffff?text=Baldurs+Gate+3+Screenshot+2',
      'https://via.placeholder.com/800x450/4B0082/ffffff?text=Baldurs+Gate+3+Screenshot+3',
      'https://via.placeholder.com/800x450/8B008B/ffffff?text=Baldurs+Gate+3+Screenshot+4',
    ],
    video: 'https://www.youtube.com/embed/OcP0WdH7rTs',
    color: '',
    badge: 'popular',
  },
  // Proximamente más juegos...
};

{/* Helper para obtener juegos por plataforma */}
export const getGamesByPlatform = (platform: string): GameData[] => {
  return Object.values(gamesData).filter(game => game.platform === platform);
};

{/* Helper para obtener todos los juegos */}
export const getAllGames = (): GameData[] => {
  return Object.values(gamesData);
};
