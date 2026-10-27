# Rasanesia - Rasa Tradisi, Cara Modern

Website resmi **Rasanesia** (Surakarta & Sukoharjo) yang menyajikan katalog jajanan pasar tradisional, paket snack box acara, snack box custom, dan layanan catering nusantara. Dibangun dengan konsep **Modern Heritage**, berarsitektur *static site generation* (SSG), mengutamakan *mobile-first UX*, dan terintegrasi langsung dengan WhatsApp Business Click-to-Chat.

---

## 🌟 Fitur Utama

1. **Mobile-First Responsive Design**: Tampilan optimal pada seluruh resolusi layar (320px - 1440px+), bebas horizontal overflow, target sentuh minimal 44x44px.
2. **Visual Modern Heritage**:
   - Palet warna: Brown `#70452E`, Warm cream `#F7F0E3`, Leaf green `#65734B`, Gold `#D99A55`, Warm white `#FFFDF8`.
   - Tipografi: Headings *Lora / Playfair Display*, Body *Inter / Nunito Sans*.
   - Kurasi foto kuliner beresolusi tinggi dengan pencahayaan hangat alami dan aksen daun pisang/tampah.
3. **Keranjang Belanja Cerdas ke WhatsApp (*Cart Drawer*)**:
   - Keranjang belanja client-side via `localStorage`.
   - Pengunjung dapat menambah item, mengatur kuantitas, mengisi catatan acara, dan klik checkout yang langsung menyusun rincian pesanan ke pesan WhatsApp Business resmi.
4. **Kalkulator & Form Rancang Custom Snack Box (`/custom-snack/`)**:
   - Pemilihan jenis box (Eco Kraft Box, Hardbox Eksklusif, Besek Bambu Tradisional).
   - Pemilihan variasi kue dari katalog.
   - Input jumlah box, anggaran, dan tanggal acara yang otomatis menghasilkan pesan konsultasi WhatsApp siap kirim.
5. **14 Halaman Lengkap + 404**:
   - `/` (Beranda)
   - `/menu/` & `/menu/[slug]/` (Katalog produk & Detail produk dinamis)
   - `/snack-box/` & `/snack-box/[slug]/` (Katalog paket & Detail paket dinamis)
   - `/custom-snack/` (Formulir custom snack)
   - `/catering/` (Layanan katering prasmanan & nasi kotak)
   - `/cara-pesan/` (Alur pemesanan transparan)
   - `/galeri/` (Dokumentasi nyata dapur & produk)
   - `/tentang/` (Kisah & filosofi brand)
   - `/faq/` (Tanya jawab accordion)
   - `/kontak/` (Saluran resmi & peta wilayah Surakarta/Sukoharjo)
   - `/kebijakan-privasi/` & `/ketentuan-pemesanan/`
   - `/404/` (Halaman error khusus)
6. **Optimasi SEO & Performa**:
   - Meta title, description, canonical link, OpenGraph & Twitter Cards.
   - Schema.org JSON-LD structured data (`Bakery`).
   - `sitemap.xml` dan `robots.txt` otomatis.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v4 SSG)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Type Checking**: TypeScript (Strict Mode)
- **Deployment**: GitHub Pages melalui GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 Panduan Memulai (Development)

### Prasyarat
- Node.js versi 18+ (direkomendasikan v20+)
- npm

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Lokal (Dev)
```bash
npm run dev
```
Buka browser di `http://localhost:4321`.

### 3. Typecheck & Build Produksi
```bash
npm run build
```
File siap rilis akan dihasilkan di folder `/dist/`.

### 4. Preview Hasil Build
```bash
npm run preview
```

---

## ⚙️ Panduan Konfigurasi Bisnis

Seluruh data bisnis terpusat di folder `src/data/` sehingga sangat mudah diperbarui tanpa mengubah kode tampilan:

### 1. Memperbarui Nomor WhatsApp & Info Bisnis (`src/data/siteConfig.ts`)
```typescript
export const siteConfig = {
  brandName: 'Rasanesia',
  tagline: 'Rasa Tradisi, Cara Modern.',
  whatsappNumber: '6281234567890', // Masukkan digit tanpa tanda +, spasi, atau strip
  whatsappDisplay: '+62 812-3456-7890',
  serviceAreas: ['Kota Surakarta', 'Kabupaten Sukoharjo'],
  operationalHours: 'Setiap Hari: 07.00 - 18.00 WIB',
  ...
};
```

### 2. Mengubah Menu & Harga Kue (`src/data/products.ts`)
Tambahkan atau ubah objek kue basah:
```typescript
{
  id: 'prod-01',
  slug: 'lemper-ayam-spesial',
  name: 'Lemper Ayam Suwir Spesial',
  price: 4500,
  priceUnit: 'pcs',
  description: '...',
  ingredients: ['Beras Ketan', 'Santan Kelapa Segar', 'Daging Ayam Dada'],
  tasteProfile: 'Gurih',
  minOrder: 15,
  image: '/images/products/product-01.jpg'
}
```

### 3. Mengubah Paket Snack Box (`src/data/snackBoxes.ts`)
Sesuaikan nama paket, isi dalam box, harga per box, dan minimal pesanan.

---

## 🌐 Panduan Deployment GitHub Pages

1. **Inisialisasi Git dan Push ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Rasanesia modern heritage website"
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
2. **Aktifkan GitHub Pages**:
   - Masuk ke tab **Settings** repository di GitHub.
   - Pilih menu **Pages** di bilah kiri.
   - Pada bagian **Build and deployment > Source**, pilih **GitHub Actions**.
3. **Penyesuaian Subpath (Jika Menggunakan Repository Subpath)**:
   - Jika website menggunakan URL `https://USERNAME.github.io/REPO_NAME/`, buka `astro.config.mjs` dan sesuaikan:
     ```javascript
     export default defineConfig({
       site: 'https://USERNAME.github.io',
       base: '/REPO_NAME/'
     });
     ```
   - Jika menggunakan domain kustom (misal `https://rasanesia.com`), biarkan `base: '/'`.

---

© 2026 Rasanesia. Cita Rasa Tradisional Indonesia.
