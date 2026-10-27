export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'jajanan' | 'snackbox' | 'catering';
  categoryLabel: string;
  price: number;
  priceUnit: string;
  description: string;
  ingredients: string[];
  tasteProfile: 'Manis' | 'Gurih' | 'Manis & Gurih';
  minOrder: number;
  image: string;
  available?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: 'prod-01',
    slug: 'lemper-ayam-spesial',
    name: 'Lemper Ayam Suwir Spesial',
    category: 'jajanan',
    categoryLabel: 'Jajanan Tradisional',
    price: 4500,
    priceUnit: 'pcs',
    description: 'Beras ketan pilihan yang dimasak dengan santan kental gurih, diisi suwiran daging ayam berbumbu rempah harum dan dibungkus daun pisang segar.',
    ingredients: ['Beras Ketan', 'Santan Kelapa Segar', 'Daging Ayam Dada', 'Bawang Merah & Putih', 'Ketumbar', 'Daun Salam & Serai'],
    tasteProfile: 'Gurih',
    minOrder: 15,
    image: '/images/products/product-01.jpg',
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'prod-02',
    slug: 'pastel-ayam-telur',
    name: 'Pastel Goreng Ayam & Sayur Telur',
    category: 'jajanan',
    categoryLabel: 'Jajanan Tradisional',
    price: 4500,
    priceUnit: 'pcs',
    description: 'Kulit pastel renyah berlapis dengan isian wortel manis, kentang lembut, bihun, ayam cincang gurih, dan irisan telur rebus, disajikan dengan cabai rawit hijau segar.',
    ingredients: ['Tepung Terigu', 'Wortel & Kentang', 'Daging Ayam', 'Bihun', 'Telur Rebus', 'Bumbu Rempah'],
    tasteProfile: 'Gurih',
    minOrder: 15,
    image: '/images/products/product-02.jpg',
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'prod-03',
    slug: 'dadar-gulung-pandan',
    name: 'Dadar Gulung Pandan Suji',
    category: 'jajanan',
    categoryLabel: 'Jajanan Tradisional',
    price: 4000,
    priceUnit: 'pcs',
    description: 'Kulit dadar lembut berpori dengan aroma wangi sari daun pandan suji asli, berisi unti kelapa parut muda yang dimasak manis dengan gula aren murni.',
    ingredients: ['Sari Daun Pandan & Suji', 'Tepung Terigu', 'Kelapa Parut Muda', 'Gula Aren Asli', 'Santan Kelapa'],
    tasteProfile: 'Manis',
    minOrder: 15,
    image: '/images/products/product-03.jpg',
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'prod-04',
    slug: 'kue-lumpur-kentang',
    name: 'Kue Lumpur Kentang Kismis',
    category: 'jajanan',
    categoryLabel: 'Jajanan Tradisional',
    price: 4500,
    priceUnit: 'pcs',
    description: 'Kue lumpur bertekstur sangat lembut lumer dari kentang kukus pilihan dan santan murni berkualitas, dengan topping kismis manis di atasnya.',
    ingredients: ['Kentang Pilihan', 'Santan Kelapa', 'Telur', 'Tepung Terigu', 'Gula Pasir', 'Kismis'],
    tasteProfile: 'Manis',
    minOrder: 15,
    image: '/images/products/product-04.jpg',
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'prod-05',
    slug: 'sosis-solo-basah',
    name: 'Sosis Solo Khas Surakarta',
    category: 'jajanan',
    categoryLabel: 'Jajanan Tradisional',
    price: 4000,
    priceUnit: 'pcs',
    description: 'Kulit dadar telur tipis lembut menggulung isian daging ayam cincang manis gurih khas cita rasa Solo yang legendaris.',
    ingredients: ['Telur Ayam', 'Daging Ayam Cincang', 'Bawang Merah & Putih', 'Pala & Merica', 'Gula Pasir & Garam'],
    tasteProfile: 'Gurih',
    minOrder: 20,
    image: '/images/products/product-05.jpg',
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'prod-06',
    slug: 'kue-ku-merah',
    name: 'Kue Ku / Thok Merah Kacang Hijau',
    category: 'jajanan',
    categoryLabel: 'Jajanan Tradisional',
    price: 4500,
    priceUnit: 'pcs',
    description: 'Kue tradisional kenyal berkulit ketan merah bermotif tempurung kura-kura, berisikan pasta kacang hijau manis lembut yang dihaluskan secara tradisional.',
    ingredients: ['Tepung Ketan', 'Kacang Hijau Kupas', 'Gula Pasir', 'Santan', 'Minyak Nabati', 'Pewarna Makanan Merah Alami'],
    tasteProfile: 'Manis',
    minOrder: 15,
    image: '/images/products/product-06.jpg',
    isFeatured: true
  },
  {
    id: 'prod-07',
    slug: 'kue-nona-manis-pandan',
    name: 'Kue Nona Manis Pandan Santan',
    category: 'jajanan',
    categoryLabel: 'Jajanan Tradisional',
    price: 3500,
    priceUnit: 'pcs',
    description: 'Kue talam modern dengan kombinasi lapisan hijau pandan manis yang lembut berpadu dengan vla santan gurih di bagian tengahnya.',
    ingredients: ['Jus Pandan Alami', 'Tepung Maizena & Terigu', 'Santan Kental', 'Gula Pasir', 'Garam Halus'],
    tasteProfile: 'Manis & Gurih',
    minOrder: 20,
    image: '/images/products/product-07.jpg',
    isFeatured: false
  },
  {
    id: 'prod-08',
    slug: 'risoles-ragout-creamy',
    name: 'Risoles Ragout Ayam Creamy',
    category: 'jajanan',
    categoryLabel: 'Jajanan Tradisional',
    price: 5000,
    priceUnit: 'pcs',
    description: 'Kulit risoles renyah berlapis tepung panir emas dengan isian ragout ayam, wortel, susu, dan keju yang lumer creamy di setiap gigitan.',
    ingredients: ['Tepung Terigu & Telur', 'Daging Ayam Cincang', 'Susu Segar', 'Wortel Dadu', 'Tepung Roti Panko'],
    tasteProfile: 'Gurih',
    minOrder: 15,
    image: '/images/products/product-08.jpg',
    isFeatured: true,
    isPopular: true
  }
];
