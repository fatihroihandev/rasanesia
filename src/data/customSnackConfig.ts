export interface PackagingOption {
  id: string;
  name: string;
  extraPrice: number;
  description: string;
  isDefault?: boolean;
}

export interface CustomSnackConfig {
  minSnacks: number;
  maxSnacks: number;
  minOrderBoxes: number;
  packagingOptions: PackagingOption[];
  complimentaryItems: string[];
  addonBeverages: {
    id: string;
    name: string;
    price: number;
  }[];
  notes: string;
}

export const defaultCustomSnackConfig: CustomSnackConfig = {
  minSnacks: 2,
  maxSnacks: 6,
  minOrderBoxes: 20,
  packagingOptions: [
    {
      id: 'pack-craft',
      name: 'Kotak Kraft Standard Ramah Lingkungan',
      extraPrice: 0,
      description: 'Dus berbahan kraft coklat tebal food-grade, tampilan natural dan bersih.',
      isDefault: true
    },
    {
      id: 'pack-mika',
      name: 'Dus Jendela Mika Bening Eksklusif',
      extraPrice: 2000,
      description: 'Kemasan putih/gold elegan dengan jendela mika transparan memperlihatkan kecantikan kue.'
    },
    {
      id: 'pack-besek',
      name: 'Besek Anyaman Bambu Tradisional',
      extraPrice: 3500,
      description: 'Wadah besek bambu khas Solo dengan alas daun pisang dan pita hias bernuansa etnik nusantara.'
    },
    {
      id: 'pack-batik',
      name: 'Dus Motif Batik Surakarta Premium',
      extraPrice: 2500,
      description: 'Dus bermotif batik khas Solo yang anggun untuk acara kedinasan dan resepsi penting.'
    }
  ],
  complimentaryItems: [
    'Alas Daun Pisang Segar di Setiap Kemasan',
    'Tisu Higienis & Tusuk Gigi Kemas Individual',
    'Gratis Custom Stiker Nama Acara (Pemesanan ≥ 50 Box)'
  ],
  addonBeverages: [
    { id: 'bev-cup', name: 'Air Mineral Cup 220ml', price: 1000 },
    { id: 'bev-bottle', name: 'Air Mineral Botol 330ml', price: 3000 },
    { id: 'bev-tea', name: 'Teh Melati Kotak 200ml', price: 3500 }
  ],
  notes: 'Pemesanan custom disarankan minimal H-2 untuk penyiapan bahan segar kue tradisional dan penataan wadah.'
};
