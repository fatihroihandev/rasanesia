export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  meaning: string;
  description: string;
  whatsappNumber: string; // digits only e.g. '6281234567890'
  whatsappDisplay: string;
  email: string;
  instagram: string;
  serviceAreas: string[];
  operationalHours: string;
  orderNotice: string;
  addressNotice: string;
  locationMapEmbedUrl: string;
  locationAddress?: string;
  locationMapDirectUrl?: string;
  mainNavLinks: NavLink[];
  secondaryNavLinks: NavLink[];
}

export const siteConfig: SiteConfig = {
  brandName: 'Rasanesia',
  tagline: 'Rasa Tradisi, Cara Modern.',
  meaning: 'Rasa Indonesia',
  description: 'Jajanan tradisional, snack box custom, dan catering untuk berbagai acara di Kota Surakarta dan Kabupaten Sukoharjo.',
  // Nomor WhatsApp resmi (dikonfigurasi terpusat)
  whatsappNumber: '6281234567890',
  whatsappDisplay: '+62 812-3456-7890',
  email: 'halo@rasanesia.com',
  instagram: '@rasanesia.id',
  serviceAreas: ['Kota Surakarta', 'Kabupaten Sukoharjo'],
  operationalHours: 'Setiap Hari: 07.00 - 18.00 WIB (Pemesanan disarankan H-2)',
  orderNotice: 'Pemesanan dan konfirmasi ketersediaan dilakukan melalui WhatsApp Business resmi Rasanesia.',
  addressNotice: 'Dapur produksi berlokasi di area Surakarta & Sukoharjo. Untuk menjaga kebersihan dan alur kerja dapur, kunjungan wajib konfirmasi terlebih dahulu via WhatsApp.',
  // Peta regional Kota Surakarta sebagai referensi area (bukan pin alamat fiktif)
  locationMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63273.74416738596!2d110.77668615414603!3d-7.568472911295353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16627ad11ab1%3A0xe7fe4e0454f809d4!2sSurakarta%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  locationAddress: 'Dapur Produksi Rasanesia, Surakarta & Sukoharjo, Jawa Tengah',
  locationMapDirectUrl: 'https://maps.google.com/?q=Surakarta,+Jawa+Tengah',
  // Navigasi desktop utama sesuai Addendum Section 3.1
  mainNavLinks: [
    { label: 'Beranda', href: '/' },
    { label: 'Menu Jajanan', href: '/menu/' },
    { label: 'Snack Box', href: '/snack-box/' },
    { label: 'Custom Pesanan', href: '/custom-snack/' },
    { label: 'Catering', href: '/catering/' },
    { label: 'Galeri', href: '/galeri/' }
  ],
  // Tautan sekunder untuk footer dan mobile menu
  secondaryNavLinks: [
    { label: 'Cara Pesan', href: '/cara-pesan/' },
    { label: 'Tentang Rasanesia', href: '/tentang/' },
    { label: 'Area Layanan', href: '/area-layanan/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Kontak', href: '/kontak/' },
    { label: 'Ketentuan Pemesanan', href: '/ketentuan-pemesanan/' },
    { label: 'Kebijakan Privasi', href: '/kebijakan-privasi/' }
  ]
};
