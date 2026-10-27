# Panduan Pengelolaan Konten & Handover — Rasanesia

Dokumen ini adalah panduan lengkap non-teknis bagi pemilik bisnis dan pengelola website **Rasanesia** untuk memperbarui menu, foto, harga, dan paket tanpa perlu mengubah kode sumber website.

---

## 1. Ringkasan Arsitektur Website

Website Rasanesia dibangun dengan arsitektur modern berkecepatan tinggi:
- **Frontend & Server Rendering**: [Astro](https://astro.build/) SSR dengan TypeScript dan Tailwind CSS.
- **Hosting & Global CDN**: [Cloudflare Pages](https://pages.cloudflare.com/) (menjamin website selalu cepat diakses dari HP pengguna di Surakarta & Sukoharjo tanpa hambatan).
- **Content Management System (CMS)**: [Sanity CMS](https://www.sanity.io/) untuk mengelola konten dan penyimpanan foto di CDN khusus Sanity.
- **Kanal Pemesanan & Pembayaran Utama**: WhatsApp Business resmi Rasanesia.

---

## 2. Daftar Halaman & Rute yang Aktif

| Halaman | Rute URL | Fungsi Utama |
|---|---|---|
| **Beranda** | `/` | Hero banner, 4 kategori utama, paket unggulan, standar mutu, galeri pilihan, ringkasan cara pesan, area layanan, FAQ, dan CTA WhatsApp. |
| **Menu Jajanan** | `/menu/` | Katalog kue basah dengan filter rasa instan (*Semua*, *Gurih*, *Manis*). |
| **Detail Produk** | `/menu/[slug]/` | Halaman detail produk (foto, deskripsi, harga per pcs, komposisi, batas min order, tombol keranjang & WA). |
| **Paket Snack Box** | `/snack-box/` | Katalog paket snack box siap pilih untuk arisan, rapat, dan syukuran. |
| **Detail Paket Box** | `/snack-box/[slug]/` | Detail isian dalam box, kemasan, harga, dan tombol pesan. |
| **Custom Pesanan** | `/custom-snack/` | Formulir racik snack box (pilihan kemasan, isian kue, jumlah pax, tanggal acara, estimasi anggaran) yang otomatis menyusun pesan WhatsApp. |
| **Catering** | `/catering/` | Informasi buffet prasmanan, bento box, coffee break tampah, dan form inquiry penawaran katering ke WhatsApp. |
| **Cara Pesan** | `/cara-pesan/` | Panduan 4 langkah pemesanan dan pengantaran makanan segar. |
| **Galeri** | `/galeri/` | Dokumentasi foto asli dapur dan produk kue tampah. |
| **Tentang Kami** | `/tentang/` | Filosofi nama Rasanesia ("Rasa Indonesia") dan nilai warisan kuliner. |
| **FAQ** | `/faq/` | Tanya jawab seputar pemesanan, daya tahan kue, dan jangkauan area. |
| **Kontak** | `/kontak/` | Saluran WhatsApp resmi, jam operasional, dan peta regional Surakarta. |
| **Kebijakan Privasi** | `/kebijakan-privasi/` | Kebijakan perlindungan data pelanggan. |
| **Ketentuan Pemesanan** | `/ketentuan-pemesanan/` | Batas waktu H-2, kebijakan DP, dan konfirmasi pembayaran. |
| **Halaman 404** | `/404/` | Halaman error ramah pengunjung bertema kuliner. |

---

## 3. Panduan Pengelolaan Konten via Sanity Studio

Jika Sanity CMS dihubungkan ke proyek, pemilik bisnis dapat masuk ke antarmuka **Sanity Studio** melalui browser untuk mengedit konten:

### A. Menambahkan Produk Jajanan Baru
1. Masuk ke menu **Produk Jajanan Tradisional** di Sanity Studio.
2. Klik tombol **Create** (ikon pensil).
3. Isi:
   - **Nama Produk**: misal `Kue Lumpur Kentang Kismis`.
   - **Slug**: klik tombol **Generate** (akan otomatis membuat URL ramah SEO seperti `kue-lumpur-kentang-kismis`).
   - **Foto Utama**: unggah foto produk berkualitas baik.
   - **Kategori Rasa**: pilih *Jajanan Gurih / Asin* atau *Kudapan Manis*.
   - **Harga Satuan (Rp)**: masukkan angka harga (misal: `4500`). *Jika harga belum pasti, kosongkan field ini agar website otomatis menampilkan tombol "Konfirmasi Harga via WhatsApp".*
   - **Satuan Harga**: pilih `Per Buah (pcs)` atau `Per Porsi`.
   - **Minimal Pemesanan**: masukkan batas minimal order (misal: `15`).
   - **Deskripsi & Komposisi**: tuliskan bahan alami yang digunakan.
4. Klik tombol hijau **Publish** di pojok kanan bawah. Produk akan langsung tampil di website.

### B. Mengubah Harga atau Menonaktifkan Produk
- Buka produk yang ingin diubah.
- Ganti angka pada kolom **Harga Satuan**.
- Jika produk sedang habis atau musimnya selesai, ubah tombol **Status Ketersediaan** menjadi `Inactive`. Produk tidak akan muncul di katalog publik.
- Klik **Publish**.

### C. Menambahkan Foto Galeri Baru
1. Masuk ke menu **Item Galeri Foto**.
2. Klik **Create** dan unggah foto dokumentasi dari dapur atau pengantaran pesanan.
3. Beri **Judul Foto** dan pilih **Kategori / Tag** (Snack Box, Jajanan, Tampah, dsb).
4. Klik **Publish**. Foto langsung tersimpan di CDN Sanity dan tampil di halaman `/galeri/`.

---

## 4. Pengaturan Tanpa CMS (Fallback Data Lokal)

Jika Sanity CMS belum terhubung, seluruh data website berjalan dengan aman menggunakan file data terstruktur di folder `src/data/`:
- **Nomor WhatsApp & Jam Buka**: diatur di `src/data/siteConfig.ts`.
- **Daftar Jajanan**: diatur di `src/data/products.ts`.
- **Daftar Paket Snack Box**: diatur di `src/data/snackBoxes.ts`.
- **Tanya Jawab**: diatur di `src/data/faqs.ts`.

---

## 5. Konfigurasi Environment Variables

File konfigurasi `.env` (atau di Cloudflare Pages Dashboard):

```env
# Sanity CMS
SANITY_PROJECT_ID=id_project_sanity_anda
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01

# Nomor WhatsApp Resmi Rasanesia (Hanya Angka)
PUBLIC_WHATSAPP_NUMBER=6281234567890
PUBLIC_WHATSAPP_DISPLAY=+62 812-3456-7890
```

> **Catatan Keamanan:** Jangan pernah membagikan atau memublikasikan file `.env` ke repositori publik (GitHub).

---

## 6. Biaya Layanan & Batas Kuota Gratis

Arsitektur ini dirancang untuk biaya operasional serendah mungkin:
1. **Cloudflare Pages**: Gratis hingga 500 build/bulan dan 100.000 worker requests/hari (sangat lebih dari cukup untuk operasional awal).
2. **Sanity CMS (Free Tier)**: Gratis 100.000 API requests/bulan dan 5GB media storage (sangat memadai untuk ratusan varian kue dan galeri foto).
3. **Domain Kustom**: Biaya tahunan domain (misal `.com` atau `.id` sekitar Rp 150.000 - Rp 250.000/tahun).

---

## 7. Checklist Peluncuran (*Go-Live Checklist*)

Sebelum memublikasikan nomor WhatsApp ke pelanggan umum:
- [x] Pastikan nomor WhatsApp di `siteConfig.ts` atau `.env` adalah nomor WhatsApp Business aktif Rasanesia.
- [x] Uji alur klik WhatsApp pada tombol Beranda, Menu, Snack Box, Custom Snack, dan Keranjang.
- [x] Pastikan tidak ada klaim halal atau alamat pin yang menyesatkan sebelum izin resmi terbit.
- [x] Konfirmasi rekening bank resmi yang akan digunakan admin saat membalas pesan transfer pelanggan.

---
© 2026 Rasanesia. Hak cipta dilindungi.
