export const productSchema = {
  name: 'product',
  title: 'Produk Jajanan Tradisional',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Produk',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('Nama produk wajib diisi')
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required().error('Slug wajib dibuat')
    },
    {
      name: 'mainImage',
      title: 'Foto Utama Produk',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required().error('Foto utama wajib diunggah')
    },
    {
      name: 'category',
      title: 'Kategori Rasa',
      type: 'string',
      options: {
        list: [
          { title: 'Jajanan Gurih / Asin', value: 'Gurih' },
          { title: 'Kudapan Manis', value: 'Manis' },
          { title: 'Manis & Gurih', value: 'Manis & Gurih' }
        ]
      },
      initialValue: 'Gurih'
    },
    {
      name: 'price',
      title: 'Harga Satuan (Rp)',
      type: 'number',
      description: 'Kosongkan jika harga belum dikonfirmasi (akan memunculkan tombol konfirmasi via WhatsApp)',
      validation: (Rule: any) => Rule.min(0).error('Harga tidak boleh bernilai negatif')
    },
    {
      name: 'priceUnit',
      title: 'Satuan Harga',
      type: 'string',
      initialValue: 'pcs',
      options: {
        list: [
          { title: 'Per Buah (pcs)', value: 'pcs' },
          { title: 'Per Porsi', value: 'porsi' },
          { title: 'Per Paket', value: 'paket' }
        ]
      }
    },
    {
      name: 'description',
      title: 'Deskripsi Produk',
      type: 'text',
      rows: 3
    },
    {
      name: 'ingredients',
      title: 'Komposisi Bahan',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'minOrder',
      title: 'Minimal Pemesanan Satuan',
      type: 'number',
      initialValue: 15
    },
    {
      name: 'isAvailable',
      title: 'Status Ketersediaan',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'isFeatured',
      title: 'Tampilkan sebagai Produk Unggulan di Beranda',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'displayOrder',
      title: 'Urutan Tampilan',
      type: 'number',
      initialValue: 1
    }
  ]
};
