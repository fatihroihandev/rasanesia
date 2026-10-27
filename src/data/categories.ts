export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: 'jajanan',
    slug: 'jajanan-tradisional',
    name: 'Jajanan Tradisional',
    shortDescription: 'Kelezatan autentik dari warisan budaya Indonesia dengan bahan alami pilihan.',
    image: '/images/categories/jajanan-tradisional.jpg',
    href: '/menu/'
  },
  {
    id: 'snackbox',
    slug: 'snack-box',
    name: 'Snack Box',
    shortDescription: 'Praktis, lezat, dan higienis dalam kemasan modern ramah lingkungan untuk berbagai acara.',
    image: '/images/categories/snack-box.jpg',
    href: '/snack-box/'
  },
  {
    id: 'catering',
    slug: 'catering',
    name: 'Catering',
    shortDescription: 'Pilihan hidangan prasmanan dan nasi kotak lengkap untuk momen spesial perusahaan dan keluarga.',
    image: '/images/categories/catering.jpg',
    href: '/catering/'
  },
  {
    id: 'custom',
    slug: 'snack-custom',
    name: 'Snack Custom',
    shortDescription: 'Racik sendiri kombinasi kue, kemasan, pita eksklusif, dan kartu ucapan sesuai selera.',
    image: '/images/categories/snack-custom.jpg',
    href: '/custom-snack/'
  }
];
