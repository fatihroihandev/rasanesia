export const faqSchema = {
  name: 'faq',
  title: 'Tanya Jawab (FAQ)',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Pertanyaan',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'answer',
      title: 'Jawaban',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Kategori Pertanyaan',
      type: 'string',
      options: {
        list: [
          { title: 'Pemesanan', value: 'order' },
          { title: 'Pengiriman & Area', value: 'delivery' },
          { title: 'Produk & Bahan', value: 'product' }
        ]
      },
      initialValue: 'order'
    },
    {
      name: 'displayOrder',
      title: 'Urutan Tampilan',
      type: 'number',
      initialValue: 1
    },
    {
      name: 'isPublished',
      title: 'Status Publikasi',
      type: 'boolean',
      initialValue: true
    }
  ]
};
