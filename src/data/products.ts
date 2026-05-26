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
  introduction: string;
}

export const categories: Category[] = [
  { 
    id: 'pintura', 
    name: 'Pintura', 
    introduction: 'Nuestra línea de pinturas ofrece soluciones de alta calidad para renovar y proteger tus espacios. Desde látex premium hasta esmaltes específicos, garantizamos durabilidad y un acabado profesional.' 
  },
  { 
    id: 'impermeabilizacion', 
    name: 'Impermeabilización',
    introduction: 'La impermeabilización es el proceso de protección de estructuras contra la filtración de agua. Es vital para prevenir daños estructurales, moho y deterioro estético en techos, muros y cimientos.'
  },
  { 
    id: 'preparacion-superficies', 
    name: 'Preparación de superficies',
    introduction: 'La preparación de superficies es el paso crítico antes de cualquier acabado. Consiste en sellar, nivelar y limpiar el sustrato para garantizar la máxima adherencia y durabilidad del producto final.'
  },
];

export const subcategories: Subcategory[] = [
  { id: 'latex', name: 'Látex', categoryId: 'pintura', image: '/assets/categories/latex.webp' },
  { id: 'membranas-liquidas', name: 'Membranas Líquidas', categoryId: 'impermeabilizacion', image: '/assets/categories/MemLiquida_optimized.webp' },
  { id: 'membranas-asfalticas', name: 'Membranas Asfálticas', categoryId: 'impermeabilizacion', image: '/assets/categories/mem-rollo.webp' },
  { id: 'pintura-asfaltica', name: 'Pintura Asfáltica', categoryId: 'impermeabilizacion', image: '/assets/categories/p-asfal.webp' },
  { id: 'selladores-juntas', name: 'Selladores de Juntas', categoryId: 'preparacion-superficies', image: '/assets/categories/selladores-juntas-optimized-v2.webp' },
  { id: 'reparacion-grietas', name: 'Reparación de Grietas', categoryId: 'preparacion-superficies', image: '/assets/categories/reparacion-grietas.webp' },
  { id: 'masillas-fijadores', name: 'Masillas y Fijadores', categoryId: 'preparacion-superficies', image: '/assets/categories/masillas-fijadores-optimized-v2.webp' },
];

export const products: Product[] = [
  {
    id: "1.0",
    name: "Látex Acrílico Interior Das Beste Hogar y Obra",
    slug: "latex-acrilico-das-beste-hogar-y-obra",
    description: "Pintura para paredes interiores que ofrece un excelente poder cubritivo y protección antihongos. Ideal para proyectos residenciales y comerciales en Rosario que buscan una excelente terminación con mínimo salpicado.",
    image: "/assets/products/latex/das-beste-hogar-obra-int.webp",
    category: "pintura",
    subcategory: "latex",
    specs: {
      rendimiento: "12 m² por litro y por mano (aproximadamente).",
      prestacion: "Baldes de 20 y 10 litros.",
      uso: "Paredes interiores",
      color: "Blanco (apto para entonadores universales).",
      acabado: 'Mate',
      aplicacion: "Pincel o rodillo.",
      secado: "2 horas (al tacto) / 5 hours mínimo entre manos."
    }
  },
  {
    id: "2.0",
    name: "Látex Acrílico Plus Interior Terra Color",
    slug: "latex-acrilico-plus-interior-terra-color",
    description: "Pintura látex para ambientes internos que ofrece un blanco intenso, gran poder cubritivo y una fórmula de bajo olor diseñada para facilitar la habitabilidad inmediata de tus espacios.",
    image: "/assets/products/latex/terra-color-interior-plus.webp",
    category: "pintura",
    subcategory: "latex",
    specs: {
      rendimiento: "10 a 12 m² por litro y por mano.",
      prestacion: "Baldes de 20 y 10 litros.",
      uso: "Paredes interiores, yeso y mampostería.",
      color: "Blanco (apto para entonadores).",
      acabado: 'Mate',
      aplicacion: "Pincel, rodillo o soplete.",
      secado: "1 a 2 horas al tacto / 4 horas entre manos."
    }
  },
  {
    id: "3.0",
    name: "Látex Acrílico Plus Exterior Terra Color",
    slug: "latex-acrilico-plus-exterior-terra-color",
    description: "Formulado para resistir las máximas exigencias del clima, este látex para frentes y muros cuenta con aditivos UV que evitan el desgaste prematuro y previenen la formación de algas u hongos.",
    image: "/assets/products/latex/terra-color-exterior-plus.webp",
    category: "pintura",
    subcategory: "latex",
    specs: {
      rendimiento: "10 a 14 m² por litro y por mano.",
      prestacion: "Baldes de 20 y 10 litros.",
      uso: "Frentes, muros exteriores y patios.",
      color: "Blanco (apto para entonadores).",
      acabado: 'Mate',
      aplicacion: "Rodillo o pincel de cerda reforzada.",
      secado: "3 horas al tacto / 6 horas entre manos."
    }
  },
  {
    id: '3.0',
    name: 'Impermeabilizante Poliuretánico Das Beste',
    slug: 'impermeabilizante-poliuretanico-das-beste',
    description: 'Esta membrana líquida de base poliuretánica ofrece máxima elasticidad y transitabilidad. Es la solución definitiva para filtraciones en techos, muros y terrazas exigentes expuestas a la radiación UV.',
    image: '/assets/products/mem-liq/das-beste-poliuretanico.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-liquidas',
    specs: {
      rendimiento: '1.5 kg/m² (Techos) / 0.5 kg/m² (Paredes).',
      prestacion: 'Baldes de 5, 12 y 20 kg / Potes de 1 Lt.',
      uso: 'Techos, muros, frentes y superficies transitables.',
      color: 'Blanco, Verde, Rojo Teja, Gris.',
      aplicacion: 'Pincel o rodillo.',
      secado: '3 horas mínimo entre manos.'
    }
  },
  {
    id: '3.1',
    name: 'Impermeabilizante Acrílico Das Beste',
    slug: 'impermeabilizante-acrilico-das-beste',
    description: 'Producto polimérico que forma una membrana protectora elástica de alta adherencia. Garantiza un sellado superior contra el agua y resistencia UV en cubiertas y frentes exteriores.',
    image: '/assets/products/mem-liq/das-beste-acrilico.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-liquidas',
    specs: {
      rendimiento: '1.5 kg/m² (Techos) / 0.5 kg/m² (Paredes).',
      prestacion: 'Baldes de 5, 12 y 20 kg / Potes de 1 Lt.',
      uso: 'Techos, terrazas, muros and frentes.',
      color: 'Blanco, Verde, Rojo Teja, Gris.',
      aplicacion: 'Rodillo, pincel o soplete.',
      secado: '3 horas mínimo entre manos.'
    }
  },
  {
    id: '3.2',
    name: 'Impermeabilizante Poliuretánico Terra Color',
    slug: 'impermeabilizante-poliuretanico-terra-color',
    description: 'Pasta poliuretánica elástica diseñada para impermeabilización de techos y muros. Crea una barrera impermeable duradera que se adapta eficazmente a los movimientos estructurales de la obra.',
    image: '/assets/products/mem-liq/terra-color-poliuretanico.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-liquidas',
    specs: {
      rendimiento: '1.5 lt/m² (Techos).',
      prestacion: 'Baldes de 5, 12 y 20 lt / Potes de 1 lt.',
      uso: 'Techos, muros, frentes y superficies transitables.',
      color: 'Blanco, Verde, Rojo Teja.',
      aplicacion: 'Rodillo, pincel.',
      secado: '3 horas mínimo entre manos.'
    }
  },
  {
    id: '3.3',
    name: 'Impermeabilizante Impercaucho Das Beste',
    slug: 'impermeabilizante-impercaucho-das-beste',
    description: 'Formulado con polímeros de caucho microtriturado para lograr una resistencia extrema al desgaste mecánico y la abrasión. Ideal para techos transitables, chapas, hormigón y madera.',
    image: '/assets/products/mem-liq/imper-caucho-hogar-obra.webp',
    category: 'impermeabilizacion',
    subcategory: 'membranas-liquidas',
    specs: {
      rendimiento: '1 a 2 kg/m².',
      prestacion: 'Baldes de 5, 12 y 20 kg.',
      uso: 'Vidrios, plásticos, membranas, hormigón, chapa y madera.',
      color: 'Gris, Blanco.',
      aplicacion: 'Rodillo sintético de pelo corto (aplicación cruzada).',
      secado: '3 horas mínimo entre manos.'
    }
  },
  {
    id: '4.0',
    name: 'KoverTech FLEX - Membrana Asfáltica',
    slug: 'kovertech-flex-membrana-asfaltica',
    description: 'Membrana asfáltica en rollo con alma de polietileno y cara de aluminio flexible de alta pureza (27 micrones). Brinda máxima adaptabilidad térmica evitando quiebres en techos y losas.',
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
    description: 'Solución hidrófuga con aluminio gofrado flexible de 19 micrones. Reduce eficientemente la absorción térmica en techos de chapa, losas y fibrocemento.',
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
    description: 'Membrana con protección de geotextil tejido no tejido de poliéster y alma de HDPE. Diseñada especialmente para terrazas transitables y expuestas al impacto del granizo.',
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
    description: 'Emulsión asfáltica acuosa de aplicación en frío. Actúa como excelente imprimante hidrófugo preparando superficies verticales y techados antes de la colocación de membranas.',
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
    description: 'Pintura asfáltica de base solvente y secado rápido. Proporciona una barrera de aislamiento hidrófugo eficaz y protección anticorrosiva sobre metales, hormigón y mampostería.',
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
    description: 'Pintura asfáltica anticorrosiva que incorpora pasta de aluminio para optimizar la reflexión térmica. Ideal para la protección duradera de chapas de zinc y tanques de acero.',
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
    description: 'Sellador de poliuretano monocomponente para juntas de dilatación. Cura con la humedad ambiente logrando una adherencia excepcional y absoluta resistencia al agua en fachadas y terrazas.',
    image: "/assets/products/Juntas/sellador_de_pu_tacsa.webp",
    category: "preparacion-superficies", // ¡CORREGIDO QUIRÚRGICAMENTE AQUÍ!
    subcategory: "selladores-juntas",
    specs: {
      rendimiento: "3 metros lineales por cartucho en juntas de 0,5 cm x 1 cm.",
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
    description: 'Sellador acrílico flexible de base acuosa ideal para interiores. Perfecto para el sellado de grietas, marcos de aberturas, molduras y juntas en placas de yeso.',
    image: "/assets/products/Juntas/sellador_acrilico_tacsa.webp",
    category: "preparacion-superficies",
    subcategory: "selladores-juntas",
    specs: {
      rendimiento: "3 metros lineales por cartucho en juntas de 0,5 cm x 1 cm.",
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
    description: 'Masilla acrílica de alto poder adherente para reparar grietas en techos y paredes. Mantiene su elasticidad permanente a lo largo de los años evitando filtraciones y rajaduras.',
    image: '/assets/products/Juntas/sella-grietas-dasbeste.webp',
    category: "preparacion-superficies",
    subcategory: "selladores-juntas",
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
    name: 'Manta de Fibra Sintética',
    slug: 'fibra-sintetica-manta',
    description: 'Manta de fibra sintética para el refuerzo estructural de impermeabilizaciones líquidas. Garantiza una alta resistencia y flexibilidad previniendo grietas estructurales.',
    image: '/assets/products/Grietas/manta-fibra-sintetica.webp',
    category: "preparacion-superficies",
    subcategory: "reparacion-grietas",
    specs: {
      prestacion: 'Rollo de 0,90 m x 25 m.',
      uso: 'Reparación de grietas, fisuras y rajaduras en cemento, concreto, mampostería, galvanizado y fibrocemento.',
      aplicacion: 'Aplicar con pincel o rodillo junto con impermeabilizante sobre superficie limpia y seca.',
    }
  },
  {
    id: '6.5',
    name: 'Venda de Fibra Sintética',
    slug: 'fibra-sintetica-venda',
    description: 'Venda de fibras sintéticas diseñada para el tomado y reparación de fisuras críticas, mejorando la durabilidad de las membranas en uniones de muros y techados.',
    image: '/assets/products/Grietas/venda-fibra-sintetica.webp',
    category: "preparacion-superficies",
    subcategory: "reparacion-grietas",
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
    description: 'Masilla lista para usar ideal para placas de yeso y sistemas de construcción en seco. Garantiza un tomado de juntas perfecto, excelente lijabilidad y terminación lisa uniforme.',
    image: '/assets/products/myf/masilla-classic-dasbeste.webp',
    category: "preparacion-superficies",
    subcategory: "masillas-fijadores",
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
    name: 'Das Beste - Enlucido Exterior / Interior Multipropósito',
    slug: 'dasbeste-enlucido-exterior-multiproposito',
    description: 'Revoque y enlucido multipropósito de alta resistencia al agua. Permite reparar grietas, emprolijar superficies y lograr acabados suaves tanto en interiores como en exteriores.',
    image: '/assets/products/myf/enlucido-multiproposito-dasbeste.webp',
    category: "preparacion-superficies",
    subcategory: "masillas-fijadores",
    specs: {
      rendimiento: 'Aproximadamente 3 kg por m² en capas de 3 a 5 mm de espesor.',
      prestacion: 'Bolsas de 1.25 kg, 5 kg y 20 kg en color blanco o gris cemento.',
      uso: 'Revoques, reparaciones, emprolijado de superficies, colocación de cerámicos, arreglos en hormigón, mampostería, madera, chapa o vidrio.',
      acabado: 'Superficie lisa, pareja, suave y resistente al agua.',
      aplicacion: 'Aplicar con cuchara, llana o fratacho. Preparar mezclando con agua hasta lograr consistencia cremosa.',
      secado: 'Tiempo variable según espesor y condiciones ambientales.'
    }
  },
  {
    id: '7.1',
    name: 'Emapi - Sellador Fijador',
    slug: 'emapi-sellador-fijador',
    description: 'Fijador sellador al agua concentrado. Elimina la porosidad de la mampostería y el yeso, optimizando de manera drástica el rendimiento final de las pinturas de terminación.',
    image: '/assets/products/myf/sellador-fijador-emapi.webp',
    category: "preparacion-superficies",
    subcategory: "masillas-fijadores",
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