export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  specs: {
    rendimiento?: string;
    prestacion: string;
    uso: string;
    acabado?: string;
    color?: string;
    aplicacion: string;
    secado?: string;
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
  // { id: 'pintura', name: 'Pintura' },
  { id: 'impermeabilizacion', name: 'Impermeabilización' },
  { id: 'preparacion-superficies', name: 'Preparación de superficies' },
];

export const subcategories: Subcategory[] = [
  // { id: 'pintura-interior', name: 'Pintura Interior', categoryId: 'pintura', image: '/assets/categories/pintura-interior.webp' },
  // { id: 'pintura-exterior', name: 'Pintura Exterior', categoryId: 'pintura', image: '/assets/categories/pintura-exterior.webp' },
  { id: 'membranas-liquidas', name: 'Membranas Líquidas', categoryId: 'impermeabilizacion', image: '/assets/categories/MemLiquida_optimized.webp' },
  { id: 'membranas-asfalticas', name: 'Membranas Asfálticas', categoryId: 'impermeabilizacion', image: '/assets/categories/mem-rollo.webp' },
  { id: 'pintura-asfaltica', name: 'Pintura Asfáltica', categoryId: 'impermeabilizacion', image: '/assets/categories/p-asfal.webp' },
  { id: 'selladores-juntas', name: 'Selladores de Juntas', categoryId: 'preparacion-superficies', image: '/assets/categories/selladores-juntas-optimized-v2.png' },
  {id: 'reparacion-grietas', name: 'Reparación de Grietas', categoryId: 'preparacion-superficies', image: '/assets/categories/reparacion-grietas.png' },
  {id: 'masillas-fijadores', name: 'Masillas y Fijadores', categoryId: 'preparacion-superficies', image: '/assets/categories/masillas-fijadores-optimized-v2.png' },
  
];

export const products: Product[] = [
  /*
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
  */
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
    id: "6",
    name: "Sellador de Poliuretano TACSA",
    slug: "sellador-poliuretano-tacsa",
    description: "Sellador elastomérico monocomponente de módulo medio-alto que cura con la humedad ambiente. Posee excelente adherencia, es resistente al agua, intemperie y radiación UV, además de ser pintable y transitable.",
    image: "/assets/products/Juntas/sellador_de_pu_tacsa.webp",
    category: "selladores",
    subcategory: "selladores-juntas",
    specs: {
      rendimiento: "-",
      prestacion: "Cartucho de 310ml",
      uso: "Interior y exterior. Juntas de dilatación, unión de paneles de concreto, sellado de techos, terrazas, fachadas y carpintería.",
      acabado: "Pasta tixotrópica de color gris",
      aplicacion: "Pistola aplicadora sobre superficies limpias; permite alisado con regla o espátula.",
      secado: "Secado al tacto en 60 min; Profundidad de curado de 3mm cada 24 hs"
    }
},
{
    id: "6.1",
    name: "Sellador Acrílico TACSA",
    slug: "sellador-acrilico-tacsa",
    description: "Sellador acrílico base acuosa con funguicida, flexible y sin olor. Ideal para propósitos generales, brinda excelentes terminaciones, es amigable con el medio ambiente y permite ser pintado una vez curado.",
    image: "/assets/products/Juntas/sellador_acrilico_tacsa.webp",
    category: "selladores",
    subcategory: "selladores-juntas",
    specs: {
      rendimiento: "-",
      prestacion: "Cartucho de 280ml",
      uso: "Uso interior (resiste intemperie una vez curado). Sellado de grietas, marcos de puertas, ventanas, molduras, zócalos y juntas en placas de yeso.",
      acabado: "Pasta tixotrópica de color blanco",
      aplicacion: "Pistola aplicadora sobre superficies limpias. Permite alisar con regla o espátula. No exponer al agua durante las primeras 2 horas.",
      secado: "Secado al tacto (formación de piel) entre 5-20 min. Profundidad de curado > 3mm cada 24 hs."
    }
},
 {
  id: '6.2',
  name: 'Sella Grietas Elástico Das Beste',
  slug: 'dasbeste-sella-grietas-elastico',
  description: 'Masilla acrílica elástica de alto poder adherente, ideal para sellar grietas en techos y paredes. Mantiene su elasticidad durante años evitando la reaparición de fisuras.',
  image: '/assets/products/Juntas/sella-grietas-dasbeste.webp',
  category: 'preparacion-superficies',
  subcategory: 'selladores-juntas',
  specs: {
    rendimiento: 'Alto rendimiento, depende del ancho y profundidad de la grieta.',
    prestacion: 'Potes de 1 litro.',
    uso: 'Sellado de grietas en techos, paredes, juntas de placas cementicias y superficies de distintos materiales.',
    acabado: 'Flexible, elástico y adherente.',
    aplicacion: 'Aplicar sobre superficie limpia y seca. Se aplica directamente desde la bolsa o con espátula. Puede diluirse con agua para grietas horizontales.',
    secado: 'Secado natural al aire. Mantiene elasticidad permanente.'
  }
},
{
  id: '6.4',
  name: 'Manta de Fibra Sintetica',
  slug: 'fibra-sintetica-manta',
  description: 'Manta de fibras sintéticas para reparaciones, sellado de grietas y refuerzo de impermeabilización en techos, muros y cubiertas. Alta resistencia, flexibilidad y fácil aplicación.',
  image: '/assets/products/Grietas/manta-fibra-sintetica.webp',
  category: 'preparacion-superficies',
  subcategory: 'reparacion-grietas',
  specs: {
    prestacion: 'Rollo de 0,90 m x 25 m.',
    uso: 'Reparación de grietas, fisuras y rajaduras en cemento, concreto, mampostería, galvanizado y fibrocemento.',
    aplicacion: 'Aplicar con pincel o rodillo junto con impermeabilizante sobre superficie limpia y seca.',
  }
},
{
  id: '6.5',
  name: 'Venda de Fibra Sintetica',
  slug: 'fibra-sintetica-venda',
  description: 'Venda de fibras sintéticas para reparaciones, sellado de grietas y refuerzo de impermeabilización en techos, muros y cubiertas. Alta resistencia, flexibilidad y fácil aplicación.',
  image: '/assets/products/Grietas/venda-fibra-sintetica.webp',
  category: 'preparacion-superficies',
  subcategory: 'reparacion-grietas',
  specs: {
    prestacion: 'Vendas de 0,20 m x 25 m.',
    uso: 'Reparación de grietas, fisuras y rajaduras en cemento, concreto, mampostería, galvanizado y fibrocemento.',
    aplicacion: 'Aplicar con pincel o rodillo junto con impermeabilizante sobre superficie limpia y seca.',
  }
},
{
  id: '6.6',
  name: 'Das Beste - Masilla Classic',
  slug: 'dasbeste-masilla-classic',
  description: 'Masilla lista para usar especialmente formulada para terminaciones en placas de yeso y construcción en seco. Alta adherencia, flexible y de excelente calidad de terminación.',
  image: '/assets/products/myf/masilla-classic-dasbeste.webp',
  category: 'preparacion-superficies',
  subcategory: 'masillas-fijadores',
  specs: {
    rendimiento: 'Aproximadamente 0,6 kg por m² en tomado de juntas y tapado de tornillos.',
    prestacion: 'Baldes de 32 kg, 17 kg y 7 kg. Bolsa de 25 kg. Pote de 1 litro.',
    uso: 'Tomado de juntas, tapado de tornillos y terminaciones en placas de yeso y sistemas de construcción en seco.',
    acabado: 'Terminación lisa, uniforme y de alta adherencia.',
    aplicacion: 'Aplicar con espátula sobre superficie limpia y seca. Colocar cinta en la junta y cubrir con masilla.',
    secado: 'Secado al tacto variable. Para lijado final dejar secar mínimo 24 horas.'
  }
},
{
  id: '6.7',
  name: 'Das Beste - Enlucido Exterior / Interior Multiproposito',
  slug: 'dasbeste-enlucido-exterior-multiproposito',
  description: 'Revoque multipropósito para exterior e interior, resistente al agua y a la inmersión. Permite lograr superficies lisas, parejas y de alta adherencia en trabajos de reparación, terminación y construcción.',
  image: '/assets/products/myf/enlucido-multiproposito-dasbeste.webp',
  category: 'preparacion-superficies',
  subcategory: 'masillas-fijadores',
  specs: {
    rendimiento: 'Aproximadamente 3 kg por m² en capas de 3 a 5 mm de espesor.',
    prestacion: 'Bolsas de 1.25 kg, 5 kg y 20 kg en color blanco o gris cemento.',
    uso: 'Revoques, reparaciones, emprolijado de superficies, colocación de cerámicos, arreglos en hormigón, mampostería, madera, chapa o vidrio.',
    acabado: 'Superficie lisa, pareja, suave y resistente al agua.',
    aplicacion: 'Aplicar con cuchara, llana o fratacho. Preparar mezclando con agua hasta lograr consistencia cremosa.',
    secado: 'Tiempo variable según espesor y condiciones ambientales.'
  }
},
  /*
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
  },
  */
  {
  id: '7.1',
  name: 'Emapi - Sellador Fijador',
  slug: 'emapi-sellador-fijador',
  description: 'Sellador fijador al agua para interior y exterior que sella la porosidad, mejora la adherencia y aumenta el rendimiento de la pintura. Resistente a hongos y algas.',
  image: '/assets/products/myf/sellador-fijador-emapi.webp',
  category: 'preparacion-superficies',
  subcategory: 'masillas-fijadores',
  specs: {
    rendimiento: '10 a 20 m² por litro y por mano según absorción de la superficie.',
    prestacion: 'Envases de 1 L, 4 L, 10 L y 20 L.',
    uso: 'Sellado y fijado de superficies interiores y exteriores de mampostería, yeso, fibrocemento y placas de yeso.',
    acabado: 'Mate, incoloro.',
    aplicacion: 'Aplicar con pincel, rodillo o airless. Diluir 1 parte de producto en 2 a 3 partes de agua.',
    secado: 'Al tacto 2 horas, secado total 8 horas.'
  }
},
];

