export interface CateringPackage {
  id: string;
  slug: string;
  name: string;
  category: 'prasmanan' | 'nasibox' | 'coffeebreak' | 'tumpeng';
  categoryLabel: string;
  pricePerPax: number;
  minPax: number;
  description: string;
  includes: string[];
  image: string;
  isPopular?: boolean;
}

export const defaultCateringPackages: CateringPackage[] = [
  {
    id: 'cat-01',
    slug: 'buffet-prasmanan-mewah',
    name: 'Buffet Prasmanan Istimewa',
    category: 'prasmanan',
    categoryLabel: 'Prasmanan Tradisional',
    pricePerPax: 45000,
    minPax: 50,
    description: 'Sajian prasmanan lengkap dengan chafing dish pemanas, dekorasi meja saji, peralatan makan higienis, dan staf profesional.',
    includes: [
      'Nasi Gurih / Nasi Liwet Solo Komplit',
      '3 Macam Lauk Utama (Ayam Goreng Lengkuas, Sambal Goreng Ati, Telur Pindang)',
      'Sayur Berkuah / Tumisan Segar (Lodeh Jawa / Oseng Buncis)',
      'Dessert Aneka Jajanan Pasar Tampah Tradisional',
      'Kerupuk Udang & Sambal Bajak Khas',
      'Air Mineral & Es Teh Manis'
    ],
    image: '/images/categories/catering.jpg',
    isPopular: true
  },
  {
    id: 'cat-02',
    slug: 'nasi-kotak-nusantara-premium',
    name: 'Nasi Kotak Nusantara Premium',
    category: 'nasibox',
    categoryLabel: 'Nasi Kotak / Bento Box',
    pricePerPax: 28000,
    minPax: 20,
    description: 'Nasi kotak eksklusif dengan wadah bento ramah lingkungan, higienis, porsi pas mengenyangkan untuk konsumsi rapat atau seminar.',
    includes: [
      'Nasi Putih Pulen / Nasi Kuning Wangi Daun Pandan',
      'Lauk Utama: Ayam Bakar Solo / Empal Daging Suwir Gurih',
      'Lauk Pendamping: Perkedel Kentang / Tempe Orek Manis',
      'Sayuran: Lalapan Segar / Urap Sayur Rempah',
      'Jajanan Tradisional: Lemper Ayam & Nagasari Daun Pisang',
      'Sambal Khas & Sendok Set Higienis'
    ],
    image: '/images/categories/snack-box.jpg',
    isPopular: true
  },
  {
    id: 'cat-03',
    slug: 'coffee-break-jajanan-pasar-tampah',
    name: 'Coffee Break Jajanan Pasar Tampah',
    category: 'coffeebreak',
    categoryLabel: 'Coffee Break & Gathering',
    pricePerPax: 18000,
    minPax: 30,
    description: 'Penyajian jajanan pasar tradisional di atas tampah anyaman bambu berhias daun pisang segar untuk suasana jeda rapat yang hangat.',
    includes: [
      'Koleksi 4 Macam Jajanan Manis (Kue Mangkok, Dadar Gulung, Klepon, Semar Mendem)',
      'Koleksi 2 Macam Jajanan Gurih (Arem-Arem Daging, Pastel Sayur Telur)',
      'Rebusan Tradisional (Kacang Rebus / Pisang Rebus)',
      'Opsi Minuman Hangat Khas Solo (Wedang Ronde / Wedang Jahe Rempah)'
    ],
    image: '/images/hero/hero-banner.jpg',
    isPopular: false
  }
];
