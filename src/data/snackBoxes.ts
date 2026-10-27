export interface SnackBoxPackage {
  id: string;
  slug: string;
  name: string;
  price: number;
  priceUnit: string;
  shortDescription: string;
  description: string;
  includes: string[];
  minOrder: number;
  packagingType: string;
  image: string;
  isPopular?: boolean;
}

export const snackBoxes: SnackBoxPackage[] = [
  {
    id: 'box-01',
    slug: 'paket-tradisional-a',
    name: 'Paket Tradisional A',
    price: 35000,
    priceUnit: 'box',
    shortDescription: 'Pilihan hemat dengan cita rasa Nusantara autentik untuk arisan & rapat.',
    description: 'Kombinasi klasik 3 jajanan favorit tradisional (1 manis, 2 gurih) lengkap dengan air mineral, dikemas rapi dalam kraft box ramah lingkungan.',
    includes: [
      'Lemper Ayam Suwir Spesial',
      'Pastel Ayam Telur Crispy',
      'Dadar Gulung Pandan Suji',
      'Air Mineral Cup 220ml',
      'Tisu & Tusuk Gigi Higienis'
    ],
    minOrder: 15,
    packagingType: 'Eco Kraft Box Medium + Banana Leaf Lining',
    image: '/images/categories/snack-box.jpg',
    isPopular: true
  },
  {
    id: 'box-02',
    slug: 'snack-box-premium',
    name: 'Snack Box Premium Executive',
    price: 75000,
    priceUnit: 'box',
    shortDescription: 'Paket mewah eksklusif untuk tamu VIP, seminar nasional, dan direksi perusahaan.',
    description: 'Pilihan 5 camilan premium nusantara berkelas tinggi dengan bahan baku nomor satu, dikemas dalam gift box eksklusif berpita emas Rasanesia.',
    includes: [
      'Lapis Legit Prunes Mentega Wijsman',
      'Risoles Ragout Ayam Creamy',
      'Lemper Ayam Daun Pisang',
      'Kue Lumpur Kentang Kismis',
      'Kacang Bawang Renyah Gurih',
      'Air Mineral Botol 330ml',
      'Sendok Kayu / Tisu Tebal & Pouch Higienis'
    ],
    minOrder: 10,
    packagingType: 'Hardbox Eksklusif Pita Emas + Custom Label Acara',
    image: '/images/categories/snack-custom.jpg',
    isPopular: true
  },
  {
    id: 'box-03',
    slug: 'paket-nasi-box-nusantara',
    name: 'Paket Nasi Box Nusantara',
    price: 45000,
    priceUnit: 'box',
    shortDescription: 'Makan siang lengkap nan lezat untuk workshop, syukuran, dan acara kantor.',
    description: 'Hidangan nasi pulen wangi dengan lauk utama ayam bumbu rempah pilihan, tumisan sayur segar, sambal khas, dan jajanan penutup tradisional.',
    includes: [
      'Nasi Gurih / Nasi Putih Pulen',
      'Ayam Goreng Lengkuas / Ayam Bakar Madu',
      'Sambal Goreng Kentang Ati',
      'Urap Sayur Bumbu Kelapa / Tumis Buncis Jagung',
      'Kerupuk Udang Renyah',
      'Kue Ku Tradisional (Pencuci Mulut)',
      'Sambal Terasi & Lalapan Segar',
      'Air Mineral Cup 220ml & Sendok Set Higienis'
    ],
    minOrder: 20,
    packagingType: 'Bento Box Sekat 5 Kraft Premium',
    image: '/images/categories/catering.jpg',
    isPopular: true
  },
  {
    id: 'box-04',
    slug: 'paket-kue-tradisional-tampah',
    name: 'Paket Tampah Kue Tradisional',
    price: 40000,
    priceUnit: 'porsi (Min 25 porsi)',
    shortDescription: 'Tampah tampan berbalut daun pisang hiasan cantik untuk sajian prasmanan.',
    description: 'Susunan indah aneka kue basah tradisional di atas tampah bambu anyam beralaskan daun pisang sirih berlipat cantik, cocok menjadi center point meja tamu.',
    includes: [
      'Kue Ku Merah Kacang Hijau',
      'Sosis Solo Basah Lembut',
      'Dadar Gulung Kelapa Pandan',
      'Kue Lumpur Kentang',
      'Kue Nona Manis Pandan',
      'Pastel Ayam Gurih'
    ],
    minOrder: 25,
    packagingType: 'Tampah Anyaman Bambu Tradisional + Daun Pisang Hias',
    image: '/images/hero/hero-banner.jpg',
    isPopular: true
  }
];
