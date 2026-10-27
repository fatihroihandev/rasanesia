export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Pengaturan Bisnis & Situs',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Nama Brand',
      type: 'string',
      initialValue: 'Rasanesia'
    },
    {
      name: 'tagline',
      title: 'Tagline Brand',
      type: 'string',
      initialValue: 'Rasa Tradisi, Cara Modern.'
    },
    {
      name: 'whatsappNumber',
      title: 'Nomor WhatsApp Business (Format Digit Internasional)',
      type: 'string',
      description: 'Hanya angka tanpa spasi atau tanda plus, contoh: 6281234567890',
      initialValue: '6281234567890'
    },
    {
      name: 'whatsappDisplay',
      title: 'Tampilan Nomor WhatsApp',
      type: 'string',
      initialValue: '+62 812-3456-7890'
    },
    {
      name: 'operationalHours',
      title: 'Jam Operasional Layanan',
      type: 'string',
      initialValue: 'Setiap Hari: 07.00 - 18.00 WIB'
    },
    {
      name: 'serviceAreas',
      title: 'Area Layanan Terkonfirmasi',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'addressNotice',
      title: 'Catatan Kunjungan Dapur Produksi',
      type: 'text',
      rows: 2,
      initialValue: 'Dapur produksi berlokasi di area Surakarta & Sukoharjo. Untuk menjaga kebersihan, kunjungan langsung wajib konfirmasi terlebih dahulu via WhatsApp.'
    }
  ]
};
