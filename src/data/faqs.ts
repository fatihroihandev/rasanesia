export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'order' | 'delivery' | 'product';
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'order',
    question: 'Berapa hari sebelumnya saya harus memesan snack box atau jajanan?',
    answer: 'Untuk menjaga kesegaran dan kualitas kue basah tradisional kami yang dibuat fresh setiap hari, pemesanan idealnya dilakukan minimal H-2 sebelum acara. Untuk acara besar atau catering (di atas 100 box), kami menyarankan H-4.'
  },
  {
    id: 'faq-2',
    category: 'product',
    question: 'Apakah bisa custom kombinasi isi snack box sesuai anggaran kami?',
    answer: 'Tentu saja! Anda dapat menggunakan fitur formulir di halaman Custom Snack atau berkonsultasi langsung melalui WhatsApp kami. Anda bebas memilih kombinasi kue manis, gurih, jenis kemasan (kraft box, mika, atau bento), hingga kartu ucapan acara.'
  },
  {
    id: 'faq-3',
    category: 'delivery',
    question: 'Wilayah mana saja yang dijangkau oleh pengiriman Rasanesia?',
    answer: 'Wilayah layanan prioritas kami mencakup seluruh area Kota Surakarta (Solo) dan Kabupaten Sukoharjo. Pengiriman dapat dilakukan melalui kurir pengantaran langsung khusus makanan atau dapat diambil mandiri setelah konfirmasi.'
  },
  {
    id: 'faq-4',
    category: 'order',
    question: 'Bagaimana alur pembayaran pesanan?',
    answer: 'Seluruh koordinasi pesanan dan pembayaran dilakukan melalui WhatsApp Business resmi Rasanesia. Setelah rincian disepakati, pembayaran ditransfer ke rekening bank resmi kami. DP (uang muka) berlaku untuk pesanan dalam jumlah besar.'
  },
  {
    id: 'faq-5',
    category: 'product',
    question: 'Berapa lama daya tahan jajanan pasar Rasanesia?',
    answer: 'Karena kami tidak menggunakan bahan pengawet kimia buatan, jajanan basah tradisional kami paling nikmat dikonsumsi pada hari yang sama (tahan 12-24 jam di suhu ruang, atau hingga 2 hari jika disimpan di lemari pendingin).'
  }
];
