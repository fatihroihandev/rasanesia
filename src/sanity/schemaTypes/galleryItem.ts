export const galleryItemSchema = {
  name: 'galleryItem',
  title: 'Item Galeri Foto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Foto',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'tag',
      title: 'Kategori / Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Snack Box', value: 'Snack Box' },
          { title: 'Jajanan Tradisional', value: 'Jajanan' },
          { title: 'Katering & Prasmanan', value: 'Catering' },
          { title: 'Tampah Kue', value: 'Tampah' },
          { title: 'Dapur & Produksi', value: 'Dapur' }
        ]
      },
      initialValue: 'Snack Box'
    },
    {
      name: 'caption',
      title: 'Keterangan Tambahan',
      type: 'string'
    },
    {
      name: 'altText',
      title: 'Teks Aksesibilitas (Alt Text)',
      type: 'string'
    },
    {
      name: 'displayOrder',
      title: 'Urutan Tampilan',
      type: 'number',
      initialValue: 1
    },
    {
      name: 'isPublished',
      title: 'Publikasikan',
      type: 'boolean',
      initialValue: true
    }
  ]
};
