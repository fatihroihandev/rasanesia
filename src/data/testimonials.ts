export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  eventOrOccasion?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Siti Rahma',
    role: 'Pelanggan Individu',
    eventOrOccasion: 'Syukuran Keluarga di Surakarta',
    content: 'Rasanya enak sekali, kuenya lembut dan wangi pandan alami. Pengemasan sangat rapi dan higienis. Pelayanan via WhatsApp sangat ramah dan responsif!',
    rating: 5
  },
  {
    id: 'testi-2',
    name: 'Budi Santoso',
    role: 'Pelanggan Korporat',
    eventOrOccasion: 'Seminar & Workshop Kantor',
    content: 'Sangat cocok untuk kebutuhan konsumsi rapat kantor kami di Solo. Waktu pengantaran tepat waktu, snack box bersih, dan rasa kualitasnya sangat konsisten.',
    rating: 5
  },
  {
    id: 'testi-3',
    name: 'Andi Pratama',
    role: 'Penyelenggara Acara',
    eventOrOccasion: 'Event Gathering Komunitas',
    content: 'Pilihan snack box custom-nya fleksibel menyesuaikan budget panitia. Tamu-tamu banyak yang memuji sosis solo dan kue lumpurnya. Pasti jadi langganan!',
    rating: 5
  },
  {
    id: 'testi-4',
    name: 'Ratna Kusuma',
    role: 'Ibu Rumah Tangga',
    eventOrOccasion: 'Arisan Warga Sukoharjo',
    content: 'Tampah jajanan pasarnya cantik sekali penataannya. Daun pisangnya segar dan kuenya bersih. Tamu arisan senang dan banyak yang minta kontak WhatsApp Rasanesia.',
    rating: 5
  }
];
