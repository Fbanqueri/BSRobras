export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  specs: {
    rendimiento: string;
    prestacion: string;
    uso: string;
    acabado?: string;
    color?: string;
    aplicacion: string;
    secado: string;
  };
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'pintura', name: 'Pintura' },
  { id: 'impermeabilizacion', name: 'Impermeabilización' },
  { id: 'selladores', name: 'Selladores' },
];

export const subcategories: Subcategory[] = [
  { id: 'pintura-interior', name: 'Pintura Interior', categoryId: 'pintura', image: '/assets/categories/pintura-interior.jpg' },
  { id: 'pintura-exterior', name: 'Pintura Exterior', categoryId: 'pintura', image: '/assets/categories/pintura-exterior.jpg' },
  { id: 'membranas-liquidas', name: 'Membranas Líquidas', categoryId: 'impermeabilizacion', image: '/assets/categories/MemLiquida.webp' },
  { id: 'membranas-asfalticas', name: 'Membranas Asfálticas', categoryId: 'impermeabilizacion', image: '/assets/categories/mem-rollo.webp' },
  { id: 'pintura-asfaltica', name: 'Pintura Asfáltica', categoryId: 'impermeabilizacion', image: '/assets/categories/p-asfal.webp' },
  { id: 'selladores-juntas', name: 'Selladores de Juntas', categoryId: 'selladores', image: '/assets/categories/grietas.webp' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Pintura Látex Premium',
    slug: 'pintura-latex-premium',
    description: 'Acabado mate de alta cobertura. Ideal para interiores con gran resistencia al desgaste.',
    image: '/assets/products/pintura-latex-premium.jpg',
    category: 'pintura',
    subcategory: 'pintura-interior',
    specs: {
      rendimiento: '10 a 12 m² por litro y por mano.',
      prestacion: 'Antihongo, lavable y de bajo olor.',
      uso: 'Paredes interiores de yeso, revoque o ladrillo.',
      acabado: 'Mate sedoso aterciopelado.',
      aplicacion: 'Pincel, rodillo de lana o soplete.',
      secado: 'Al tacto 1 hora. Entre manos 4 horas.'
    }
  },
  {
    id: '2',
    name: 'Látex Exterior Pro',
    slug: 'latex-exterior-pro',
    description: 'Máxima resistencia a la intemperie y rayos UV. Formulado para climas extremos.',
    image: '/assets/products/latex-exterior-pro.jpg',
    category: 'pintura',
    subcategory: 'pintura-exterior',
    specs: {
      rendimiento: '8 a 10 m² por litro.',
      prestacion: 'Impermeable y elástico.',
      uso: 'Frentes y muros exteriores.',
      acabado: 'Mate.',
      aplicacion: 'Rodillo o soplete.',
      secado: '2 horas al tacto.'
    }
  },
  {
    id: '3.0',
    name: 'Impermeabilizante Poliuretánico Das Beste',
    slug: 'impermeabilizante-poliuretanico-das-beste',
    description: 'Membrana impermeable de base poliuretánica en pasta, diseñada para ofrecer la máxima elasticidad, transitabilidad y resistencia a la radiación UV en superficies exigentes.',
    image: '/assets/products/mem-liq/das-beste-poliuretanico.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-liquidas',
    specs: {
      rendimiento: '1.5 kg/m² (Techos) / 0.5 kg/m² (Paredes).',
      prestacion: 'Baldes de 5, 12 y 20 kg / Potes de 1 Lt.',
      uso: 'Techos, muros, frentes y superficies transitables.',
      color: 'Blaco, Verde, Rojo Teja, Gris.',
      aplicacion: 'Pincel o rodillo.',
      secado: '3 horas mínimo entre manos.'
    }
  },
  {
    id: '3.1',
    name: 'Impermeabilizante Acrílico Das Beste',
    slug: 'impermeabilizante-acrilico-das-beste',
    description: 'Producto polimérico en pasta de alta elasticidad y resistencia UV, diseñado para formar una membrana impermeable protectora en superficies exteriores.',
    image: '/assets/products/mem-liq/das-beste-acrilico.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-liquidas',
    specs: {
      rendimiento: '1.5 kg/m² (Techos) / 0.5 kg/m² (Paredes).',
      prestacion: 'Baldes de 5, 12 y 20 kg / Potes de 1 Lt.',
      uso: 'Techos, terrazas, muros y frentes.',
      color: 'Blaco, Verde, Rojo Teja, Gris.',
      aplicacion: 'Rodillo, pincel o soplete.',
      secado: '3 horas mínimo entre manos.'
    }
  },
  {
    id: '3.2',
    name: 'Impermeabilizante Poliuretánico Terra Color',
    slug: 'impermeabilizante-poliuretanico-terra-color',
    description: 'Membrana impermeable de base poliuretánica en pasta, diseñada para ofrecer la máxima elasticidad.',
    image: '/assets/products/mem-liq/terra-color-poliuretanico.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-liquidas',
    specs: {
      rendimiento: '1.5 lt/m² (Techos).',
      prestacion: 'Baldes de 5, 12 y 20 lt / Potes de 1 lt.',
      uso: 'Techos, muros, frentes y superficies transitables.',
      color: 'Blaco, Verde, Rojo Teja.',
      aplicacion: 'Rodillo, pincel.',
      secado: '3 horas mínimo entre manos.'
    }
  },
  {
    id: '3.3',
    name: 'Impermeabilizante Impercaucho Das Beste',
    slug: 'impermeabilizante-impercaucho-das-beste',
    description: 'Impermeabilizante acrílico de alto espesor con polímeros de caucho microtriturado. Ofrece máxima elasticidad y una resistencia superior a la abrasión, al desgaste mecánico y a los rayos UV.',
    image: '/assets/products/mem-liq/imper-caucho-hogar-obra.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-liquidas',
    specs: {
      rendimiento: '1 a 2 kg/m².',
      prestacion: 'Baldes de 5, 12 y 20 kg.',
      uso: 'Vidrios, plásticos, membranas, hormigón, chapa y madera.',
      color: 'Gris, Blanco.',
      aplicacion: 'Rodillo sintético de pelo corto (aplicación cruzada.',
      secado: '3 horas mínimo entre manos.'
    }
  },
  {
    id: '4.0',
    name: 'KoverTech FLEX - Membrana Asfáltica',
    slug: 'kovertech-flex-membrana-asfaltica',
    description: 'Membrana asfáltica con alma central de polietileno de alta densidad y cara superior de aluminio gofrado flexible de 27 micrones. Ofrece máxima adaptabilidad y no se quiebra ante cambios de temperatura.',
    image: '/assets/products/mem-roll/kovertech-flex.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-asfalticas',
    specs: {
      rendimiento: '10 m² por rollo.',
      prestacion: 'Rollos de 10m x 1m (Peso: 40 kg).',
      uso: 'Techos de chapa, losas, muros y cimientos (No transitable).',
      acabado: 'Aluminio flexible gofrado (27 micrones).',
      aplicacion: 'Soplete o pegado asfáltico.',
      secado: 'Inmediato (Colocación en seco).'
    }
  },
  {
    id: '4.1',
    name: 'KoverTech ROLL MT450 - Membrana Asfáltica',
    slug: 'kovertech-roll-mt450-membrana-asfaltica',
    description: 'Membrana asfáltica con alma central de polietileno de alta densidad (HDPE) y cara superior de aluminio gofrado flexible de 19 micrones. Diseñada para reducir la absorción térmica y resistir climas adversos en superficies no transitables.',
    image: '/assets/products/mem-roll/kovertech-roll-mt450.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-asfalticas',
    specs: {
      rendimiento: '10 m² por rollo.',
      prestacion: 'Rollos de 10m x 1m (Peso: 40 kg).',
      uso: 'Losas, bóvedas, techos de chapa y fibrocemento (No transitable).',
      acabado: 'Aluminio gofrado flexible (19 micrones).',
      aplicacion: 'Colocación con soplete.',
      secado: 'Inmediato (Colocación en seco).'
    }
  },
  {
    id: '4.2',
    name: 'KoverTech GEO - Membrana Asfáltica Geotextil',
    slug: 'kovertech-geo-membrana-asfaltica-geotextil',
    description: 'Membrana asfáltica de alta resistencia con protección superior de geotextil de 150 gr y alma central de HDPE de 50 micrones. Es una solución antigranizo y transitable, ideal para superficies con tránsito moderado y climas desfavorables.',
    image: '/assets/products/mem-roll/kovertech-geo.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-asfalticas',
    specs: {
      rendimiento: '10 m² por rollo.',
      prestacion: 'Rollos de 40 kg, 45 kg o 4mm de espesor.',
      uso: 'Terrazas transitables, techos planos/abovedados y bajo carpetas.',
      acabado: 'Geotextil de poliéster tejido no tejido.',
      aplicacion: 'Soplete o pegado asfáltico.',
      secado: 'Inmediato (Colocación en seco).'
    }
  },
  {
    id: '5.0',
    name: 'Kover Primer - Emulsión Asfáltica',
    slug: 'kover-primer-emulsion-asfaltica',
    description: 'Emulsión asfáltica acuosa de base coloide mineral que al secar forma una película impermeable y elástica. Funciona tanto como imprimante para membranas como impermeabilizante único en techos y muros.',
    image: '/assets/products/p-asfal/kover-primer-emulsion-asfaltica.webp',
    category: 'impermeabilizacion',
    subcategory: 'pintura-asfaltica',
    specs: {
      rendimiento: 'Imprimante: 0.5 kg/m².',
      prestacion: 'Baldes de 18 kg.',
      uso: 'Techados planos, curvos e inclinados y superficies verticales.',
      acabado: 'Película elástica negra.',
      aplicacion: 'Brocha, rodillo o secador (en frío).',
      secado: 'Al tacto: 12 hs | Total: < 24 hs.'
    }
  },
  {
    id: '5.1',
    name: 'Kover Primer - Pintura Asfáltica',
    slug: 'kover-primer-pintura-asfaltica',
    description: 'Imprimante de base solvente de secado rápido, elaborado a partir de asfaltos oxidados y solventes volátiles. Proporciona una aislación hidrófuga eficaz y protección anticorrosiva en diversas superficies.',
    image: '/assets/products/p-asfal/kover-primer-pintura-asfaltica.webp',
    category: 'impermeabilizacion',
    subcategory: 'pintura-asfaltica',
    specs: {
      rendimiento: 'Variable según la superficie y manos.',
      prestacion: 'Envases de 1, 4, 10, 18 y 200 litros.',
      uso: 'Metales, mampostería, madera, hormigón y fibrocemento.',
      acabado: 'Película flexible de alta adhesividad.',
      aplicacion: 'Brocha, rodillo o secador (en frío).',
      secado: 'Al tacto: 30 min | Total: 1 a 2 hs.'
    }
  },
  {
    id: '5.2',
    name: 'KoverTech - Pintura Asfáltica Aluminizada',
    slug: 'kovertech-pintura-asfaltica-aluminizada',
    description: 'Imprimante de base solvente y secado ultra rápido con pasta de aluminio leafing incorporada. Ofrece protección anticorrosiva e hidrófuga con una película flexible de alta adhesividad.',
    image: '/assets/products/p-asfal/kovertech-pintura-aluminizada.webp',
    category: 'impermeabilizacion',
    subcategory: 'pintura-asfaltica',
    specs: {
      rendimiento: 'Depende de la superficie y recubrimiento.',
      prestacion: 'Latas de 1 y 4 litros.',
      uso: 'Chapas de zinc/aluminio, tanques de acero, mampostería y madera.',
      acabado: 'Aluminizado protector y anticorrosivo.',
      aplicacion: 'Brocha, rodillo o secador.',
      secado: 'Al tacto: 30 min | Total: 1 a 2 hs.'
    }
  },
  {
    id: '6',
    name: 'Sellador Acrílico Pro',
    slug: 'sellador-acrilico-pro',
    description: 'Máxima adherencia y pintable. Perfecto para juntas de dilatación.',
    image: '/assets/products/sellador-acrilico-pro.jpg',
    category: 'selladores',
    subcategory: 'selladores-juntas',
    specs: {
      rendimiento: '5 metros lineales por cartucho.',
      prestacion: 'Pintable y flexible.',
      uso: 'Juntas de construcción.',
      acabado: 'Liso.',
      aplicacion: 'Pistola aplicadora.',
      secado: '15 min formación de piel.'
    }
  },
  {
    id: '7',
    name: 'Esmalte Sintético Satinado',
    slug: 'esmalte-sintetico-satinado',
    description: 'Esmalte de gran terminación and durabilidad. Ideal para maderas y metales.',
    image: '/assets/products/esmalte-satinado.jpg',
    category: 'pintura',
    subcategory: 'pintura-interior',
    specs: {
      rendimiento: '12 a 15 m² por litro.',
      prestacion: 'Gran brillo y nivelado.',
      uso: 'Interior y Exterior.',
      color: 'Blanco, Negro y colores intensos.',
      aplicacion: 'Pincel, rodillo o soplete.',
      secado: '4 a 6 horas.'
    }
  }
];

