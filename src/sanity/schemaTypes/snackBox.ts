export const snackBoxSchema = {
  name: 'snackBoxPackage',
  title: 'Paket Snack Box',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Paket',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('Nama paket wajib diisi')
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Foto Paket',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'price',
      title: 'Harga per Box (Rp)',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).error('Harga tidak boleh negatif')
    },
    {
      name: 'priceUnit',
      title: 'Satuan Harga',
      type: 'string',
      initialValue: 'box'
    },
    {
      name: 'shortDescription',
      title: 'Deskripsi Singkat',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Deskripsi Lengkap',
      type: 'text',
      rows: 3
    },
    {
      name: 'includes',
      title: 'Daftar Isian Dalam Box',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'minOrder',
      title: 'Minimal Pemesanan (Box)',
      type: 'number',
      initialValue: 15
    },
    {
      name: 'packagingType',
      title: 'Tipe Kemasan',
      type: 'string',
      initialValue: 'Kraft Box Ramah Lingkungan'
    },
    {
      name: 'isFeatured',
      title: 'Unggulan di Beranda',
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
