# MASTER DEVELOPMENT FINAL — RASANESIA

## Production-Ready, Mobile-First Website

### 1. PERAN DAN TUJUAN

Bertindak sebagai senior fullstack developer, UI/UX designer, technical architect, SEO specialist, QA engineer, dan deployment engineer. Bangun website Rasanesia yang lengkap, profesional, responsif, dinamis berbasis data, dan siap dipublikasikan.

Jangan berhenti pada konsep, wireframe, prototype, atau landing page sederhana. Implementasikan seluruh halaman, komponen, konten, interaksi, validasi, dokumentasi, testing, dan konfigurasi deployment yang termasuk dalam scope.

Jangan mengklaim pekerjaan selesai sebelum hasil implementasi benar-benar diuji.

### 2. INFORMASI BISNIS

- Brand: Rasanesia
- Makna: Rasa Indonesia
- Tagline: “Rasa Tradisi, Cara Modern.”
- Produk: jajanan tradisional, snack box, custom snack box, dan catering.
- Target pasar: individu, keluarga, penyelenggara acara, kantor, komunitas, UMKM, dan perusahaan.
- Wilayah prioritas: Kota Surakarta dan Kabupaten Sukoharjo.
- Model layanan: pengiriman dan pengambilan pesanan.
- Pemesanan: WhatsApp Business.
- Koordinasi dan konfirmasi pembayaran: melalui WhatsApp.
- Lokasi produksi: alamat belum ditentukan.
- Kunjungan: wajib konfirmasi terlebih dahulu.

Jangan mengarang alamat, nomor telepon, harga, bahan, sertifikasi, stok, jam operasional, testimoni, jumlah pelanggan, kebijakan pengiriman, atau klaim bisnis. Simpan informasi yang belum tersedia dalam konfigurasi yang mudah diperbarui dan tampilkan placeholder secara terkendali. Jangan mempublikasikan placeholder sebagai fakta.

### 3. TECH STACK

Gunakan:

- Astro dengan static site generation.
- TypeScript dengan strict type checking.
- Tailwind CSS untuk styling.
- Komponen Astro reusable dan JavaScript seperlunya untuk interaktivitas.
- Data produk dan konfigurasi bisnis dalam file terstruktur dengan tipe yang jelas.
- GitHub Pages untuk hosting.
- GitHub Actions untuk build dan deployment otomatis.
- Google Maps Embed atau solusi peta yang sesuai.
- WhatsApp Click-to-Chat untuk inquiry dan pemesanan.
- Optimasi gambar, metadata SEO, sitemap, canonical URL, dan structured data yang valid.

Jangan menambahkan React, database, backend API, autentikasi, dashboard admin, atau payment gateway kecuali ada kebutuhan nyata yang tidak dapat dipenuhi oleh arsitektur ini.

Pastikan website dapat berjalan pada GitHub Pages, termasuk dukungan repository subpath dan custom domain jika digunakan. Konfigurasikan Astro `site` dan `base` dengan benar, tanpa merusak tautan, gambar, navigasi, atau URL halaman.

### 4. PRIORITAS UTAMA: MOBILE-FIRST UI/UX

Rancang website dari layar handphone terlebih dahulu. Desktop adalah pengembangan layout dari desain mobile yang sudah solid, bukan sebaliknya.

Targetkan pengalaman yang nyaman pada viewport 320, 360, 375, 390, 414, dan 430 px, serta tablet dan desktop.

Persyaratan:

- Tidak ada horizontal overflow atau konten terpotong.
- Layout, grid, tipografi, gambar, kartu, formulir, dan navigasi menyesuaikan viewport.
- Gunakan ukuran font responsif, `clamp()` bila relevan, line-height yang nyaman, dan panjang teks yang mudah dipindai.
- Tombol dan target sentuh idealnya minimal 44 × 44 px.
- Jarak antarelemen cukup agar tidak terjadi salah klik.
- Navbar mobile ringkas, mudah digunakan, dan memiliki menu yang benar-benar berfungsi.
- CTA WhatsApp mudah ditemukan tanpa menghalangi konten.
- Sticky bottom CTA boleh digunakan pada halaman yang relevan, tetapi harus memperhitungkan safe area perangkat dan tidak menutupi footer, tombol, atau konten.
- Gunakan gambar dengan rasio konsisten, focal point yang tepat, dan cropping yang tidak memotong produk secara buruk.
- Formulir menggunakan input yang sesuai, label jelas, validasi, dan keyboard mobile yang tepat.
- Hindari teks kecil, elemen padat, carousel yang mengganggu, animasi berlebihan, dan popup yang menghambat.
- Hormati `prefers-reduced-motion`.
- Pastikan seluruh interaksi dapat digunakan melalui keyboard dan memiliki focus state yang jelas.
- Uji menu, dialog, filter, accordion, formulir, dan CTA di perangkat kecil.

Jangan sekadar mengecilkan layout desktop. Susun ulang urutan konten, ukuran komponen, navigasi, dan prioritas visual berdasarkan kebutuhan pengguna mobile.

### 5. VISUAL DESIGN SYSTEM

Gunakan konsep **Modern Heritage**: nuansa kuliner Nusantara yang hangat dan autentik, dipadukan dengan layout modern, elegan, bersih, dan premium.

Palet awal:

- Brown: `#70452E`
- Warm cream: `#F7F0E3`
- Leaf green: `#65734B`
- Gold: `#D99A55`
- Warm white: `#FFFDF8`

Gunakan Lora atau Playfair Display untuk heading dan Inter atau Nunito Sans untuk body. Pastikan font tersedia dengan strategi fallback dan tidak menghambat render.

Gunakan foto kuliner berkualitas tinggi, detail tekstur makanan, pencahayaan natural, whitespace, tipografi yang kuat, ornamen Nusantara yang subtil, dan hierarki visual yang konsisten.

Hindari desain generik, tampilan template murahan, ornamen berlebihan, gradient acak, emoji sebagai pengganti ikon profesional, serta foto yang tidak relevan dengan produk.

Bangun design tokens untuk warna, typography, spacing, radius, shadow, container, dan breakpoint. Buat komponen konsisten dan reusable.

### 6. HALAMAN WEBSITE

Implementasikan seluruh halaman berikut:

1. `/` — Homepage.
2. `/menu/` — Katalog produk dan kategori.
3. `/menu/[slug]/` — Detail produk.
4. `/snack-box/` — Katalog paket snack box.
5. `/snack-box/[slug]/` — Detail paket snack box.
6. `/custom-snack/` — Penawaran snack box custom dan inquiry.
7. `/catering/` — Informasi catering dan inquiry.
8. `/cara-pesan/` — Proses pemesanan, pembayaran, pengiriman, dan pengambilan.
9. `/tentang/` — Cerita dan identitas brand.
10. `/galeri/` — Galeri produk.
11. `/faq/` — Pertanyaan umum.
12. `/kontak/` — Kontak, WhatsApp, peta, dan area layanan.
13. `/kebijakan-privasi/` — Kebijakan privasi yang sesuai dengan praktik aktual.
14. `/ketentuan-pemesanan/` — Ketentuan pesanan dan pembayaran berdasarkan kebijakan bisnis yang telah dikonfirmasi.

Gunakan layout konsisten, breadcrumb pada halaman yang relevan, metadata unik, navigasi yang jelas, serta internal linking yang baik.

### 7. HOMEPAGE DAN CONVERSION DESIGN

Susun homepage dengan alur yang meyakinkan dan berorientasi pada pemesanan:

1. Header dan navigasi responsif.
2. Hero section dengan headline “Rasa Tradisi, Cara Modern.”, penjelasan singkat, foto kuliner yang kuat, dan CTA “Lihat Menu” serta “Pesan via WhatsApp”.
3. Kategori produk utama.
4. Produk unggulan yang diambil dari data.
5. Paket snack box.
6. Penawaran custom snack box.
7. Layanan catering.
8. Keunggulan bisnis yang benar-benar dapat dibuktikan.
9. Cerita singkat Rasanesia.
10. Galeri produk.
11. FAQ ringkas.
12. Area layanan Surakarta dan Sukoharjo.
13. CTA WhatsApp yang kuat.
14. Footer dengan navigasi, kontak, kebijakan, dan informasi kunjungan.

Urutan dapat disesuaikan berdasarkan hasil desain, tetapi jangan mengorbankan kejelasan produk, trust, performa mobile, dan konversi.

Jangan menampilkan rating, review, penghargaan, logo pelanggan, atau angka penjualan fiktif.

### 8. KATALOG DINAMIS BERBASIS DATA

Buat sumber data terstruktur dengan TypeScript untuk:

- Produk.
- Kategori.
- Paket snack box.
- Galeri.
- FAQ.
- Navigasi.
- Informasi bisnis.
- Area layanan.
- Metadata SEO.

Setiap produk dapat memiliki slug, nama, deskripsi, kategori, gambar, alt text, komposisi, harga, satuan harga, minimum pemesanan, ketersediaan, serta status tampil. Gunakan field opsional ketika informasi belum tersedia.

Fitur katalog:

- Filter kategori yang berfungsi.
- Pencarian produk jika jumlah katalog mendukung.
- Kartu produk konsisten dan responsif.
- Halaman detail produk yang dihasilkan dari data.
- Empty state yang informatif.
- Status produk yang jelas.
- CTA pemesanan per produk atau paket.
- Navigasi dan URL yang konsisten.

Jangan membuat harga, komposisi, stok, minimum order, atau ketersediaan fiktif. Produk contoh hanya boleh dipublikasikan jika jelas diberi label sebagai konten contoh yang belum siap dijual. Jangan tampilkan katalog kosong sebagai katalog bisnis yang sudah siap menerima pesanan.

Tidak perlu database untuk scope ini. Dokumentasikan bahwa perubahan data dilakukan melalui repository dan deployment ulang.

### 9. WHATSAPP BUSINESS FLOW

Buat satu konfigurasi terpusat untuk nomor WhatsApp dalam format internasional berupa digit saja, tanpa tanda `+`, spasi, atau tanda baca. Jangan mengarang nomor. Jika nomor belum tersedia, tampilkan status konfigurasi yang jelas dan nonaktifkan CTA pemesanan yang tidak dapat digunakan.

Gunakan URL Click-to-Chat dengan pesan yang di-encode secara benar menggunakan `encodeURIComponent`.

Sediakan pesan berbeda untuk:

- Pertanyaan umum.
- Pemesanan produk.
- Pemesanan paket snack box.
- Custom snack box.
- Catering.
- Pertanyaan pengiriman atau pengambilan.

Pesan pemesanan sebaiknya mencantumkan produk atau paket, jumlah, tanggal kebutuhan, dan pertanyaan lanjutan yang relevan. Untuk custom order, minta jenis acara, tanggal, estimasi jumlah, anggaran, kebutuhan kemasan, serta lokasi pengiriman atau pengambilan.

Jangan mengklaim pesanan sudah tersimpan, pembayaran berhasil, atau order terkonfirmasi hanya karena pengguna mengeklik WhatsApp. Semua konfirmasi dilakukan oleh pihak bisnis melalui percakapan.

Gunakan tautan yang aman, label CTA yang jelas, serta `target="_blank"` dan `rel="noopener noreferrer"` jika membuka tab baru.

### 10. PETA DAN LOKASI

Tampilkan peta pada homepage atau kontak sesuai kebutuhan desain.

Karena alamat produksi belum tersedia:

- Gunakan peta regional Surakarta sebagai referensi wilayah, bukan pin lokasi produksi.
- Jangan membuat alamat atau koordinat palsu.
- Tambahkan keterangan bahwa lokasi produksi belum dipublikasikan dan kunjungan harus dikonfirmasi terlebih dahulu.
- Tampilkan area layanan sebagai informasi bisnis, bukan sebagai jaminan bahwa semua alamat dapat dijangkau.
- Sediakan tautan untuk membuka peta di Google Maps.

Pastikan peta responsif, tidak memecahkan layout mobile, dan tidak membebani initial page load secara berlebihan. Gunakan lazy loading jika sesuai.

### 11. SEO DAN DISCOVERABILITY

Implementasikan:

- Title dan meta description unik untuk setiap halaman.
- Canonical URL.
- Open Graph metadata.
- Sitemap XML.
- Robots configuration yang sesuai.
- Heading hierarchy yang benar.
- Semantic HTML.
- Alt text deskriptif.
- Internal links dan breadcrumb.
- Structured data JSON-LD yang valid dan hanya berdasarkan fakta yang telah dikonfirmasi.
- URL yang bersih dan konsisten.
- Halaman error 404 yang sesuai brand.

Target SEO lokal meliputi jajanan tradisional, snack box, dan catering di Surakarta serta Sukoharjo. Gunakan kata kunci secara alami, bukan keyword stuffing.

Jangan memasukkan alamat bisnis, jam operasional, rating, atau atribut LocalBusiness yang belum diverifikasi. Dokumentasikan setup Google Search Console dan proses pengiriman sitemap. Jangan menjanjikan ranking atau traffic tertentu.

### 12. PERFORMANCE DAN ACCESSIBILITY

Optimalkan:

- Format gambar modern seperti WebP atau AVIF jika didukung.
- Ukuran dan resolusi gambar sesuai kebutuhan.
- Responsive images dan lazy loading.
- Font loading.
- Penggunaan JavaScript seminimal mungkin.
- Layout stability dan pencegahan CLS.
- Pengurangan dependency.
- Semantic HTML, label, focus states, kontras warna, dan navigasi keyboard.
- `prefers-reduced-motion`.
- Loading dan error states pada komponen interaktif.

Target Lighthouse sebagai sasaran pengujian, bukan klaim sebelum pengukuran:

- Performance: minimal 90.
- Accessibility: minimal 95.
- Best Practices: minimal 95.
- SEO: minimal 95.

Catat hasil pengujian aktual, perangkat, mode, dan batasan yang memengaruhi skor. Jangan memalsukan hasil audit.

### 13. STRUKTUR PROYEK DAN KUALITAS KODE

Gunakan struktur yang terorganisasi, misalnya:

- `src/components/`
- `src/layouts/`
- `src/pages/`
- `src/content/`
- `src/data/`
- `src/styles/`
- `public/images/`
- `public/`
- `scripts/`
- `tests/`

Sesuaikan struktur dengan konvensi Astro yang tepat.

Persyaratan:

- TypeScript strict.
- Komponen reusable.
- Data dan konfigurasi bisnis terpisah dari UI.
- Tidak ada duplikasi komponen yang tidak perlu.
- Tidak ada dead links, tombol dekoratif yang tidak berfungsi, atau navigasi palsu.
- Validasi slug, field wajib, dan konfigurasi WhatsApp.
- Error handling untuk fitur interaktif.
- Tidak ada secret atau kredensial sensitif di repository.
- Dependency yang diperlukan saja.
- README lengkap berisi instalasi, development, build, konfigurasi, deployment, dan pembaruan konten.

### 14. TESTING DAN VERIFIKASI WAJIB

Sebelum menyatakan website selesai:

1. Instal dependency dan jalankan build produksi.
2. Jalankan TypeScript check serta linting jika dikonfigurasi.
3. Jalankan automated tests untuk fungsi penting.
4. Periksa seluruh route yang direncanakan.
5. Uji katalog, filter, navigasi, breadcrumb, FAQ, dan CTA.
6. Verifikasi format URL WhatsApp dan pesan prefilled.
7. Pastikan CTA tidak mengklaim pesanan atau pembayaran telah dikonfirmasi.
8. Uji tampilan pada viewport mobile, tablet, dan desktop.
9. Periksa horizontal overflow, teks terpotong, tombol bertumpuk, serta elemen yang tertutup sticky CTA.
10. Periksa gambar rusak, console errors, dead links, metadata, dan canonical URL.
11. Verifikasi konfigurasi GitHub Pages untuk repository subpath atau custom domain yang digunakan.
12. Pastikan workflow deployment berjalan dengan konfigurasi dan permission yang benar.
13. Jalankan audit accessibility dan Lighthouse.
14. Dokumentasikan test yang berhasil, gagal, atau belum dapat dilakukan.

Jika tersedia browser testing, gunakan untuk memverifikasi halaman yang benar-benar dirender. Jika tidak tersedia, nyatakan keterbatasan tersebut secara eksplisit dan jangan mengklaim pengujian visual telah dilakukan.

### 15. ACCEPTANCE CRITERIA

Website dapat dinyatakan siap rilis hanya jika:

- Semua halaman dalam scope terimplementasi.
- Desain mobile-first dan tidak memiliki horizontal overflow pada viewport target.
- Seluruh navigasi dan interaksi utama berfungsi.
- Data katalog terstruktur dan mudah diperbarui.
- WhatsApp flow bekerja dengan nomor yang telah dikonfirmasi.
- Informasi bisnis yang belum diketahui tidak ditampilkan sebagai fakta.
- Peta tidak menyesatkan pengguna mengenai lokasi produksi.
- SEO dasar dan metadata telah diperiksa.
- Build produksi berhasil.
- Deployment GitHub Pages telah diverifikasi jika akses deployment tersedia.
- Dokumentasi instalasi, konfigurasi, konten, testing, dan deployment tersedia.

Jika nomor WhatsApp, harga, foto produk, atau informasi bisnis belum tersedia, selesaikan implementasi teknis dengan konfigurasi yang aman, tetapi tandai data tersebut sebagai blocker peluncuran. Jangan menganggap website siap menerima pelanggan sebelum CTA dan informasi yang dibutuhkan pelanggan benar-benar valid.

### 16. CARA EKSEKUSI

Kerjakan implementasi secara menyeluruh, bukan hanya memberikan instruksi atau contoh kode.

Urutan kerja:

1. Periksa repository, struktur proyek, dan kondisi awal.
2. Konfirmasi asumsi teknis yang benar-benar menghalangi implementasi.
3. Buat design system dan layout mobile-first.
4. Implementasikan komponen, halaman, serta data.
5. Implementasikan WhatsApp, peta, SEO, dan konfigurasi GitHub Pages.
6. Jalankan testing dan perbaiki temuan.
7. Verifikasi build dan deployment.
8. Sediakan README serta checklist data bisnis yang masih diperlukan.

Jangan mengarang bahwa file telah diubah, test berhasil, atau deployment sudah live jika belum dilakukan. Jika repository atau akses deployment tidak tersedia, jelaskan kebutuhan akses tersebut dan berikan hasil implementasi yang benar-benar dapat diserahkan.

### 17. HASIL AKHIR YANG WAJIB DISERAHKAN

- Source code lengkap.
- Seluruh halaman dan komponen.
- Design system responsif.
- Katalog berbasis data.
- WhatsApp Click-to-Chat flow.
- Peta dengan konteks lokasi yang akurat.
- SEO dasar dan metadata.
- Konfigurasi GitHub Pages serta GitHub Actions.
- Automated tests dan laporan verifikasi.
- README instalasi dan deployment.
- Checklist informasi bisnis yang belum tersedia.
- Ringkasan hasil akhir, keterbatasan, dan status kesiapan rilis.

**PRINSIP UTAMA:** kualitas layout mobile, kejelasan produk, kepercayaan pelanggan, kecepatan website, dan kemudahan pemesanan harus menjadi prioritas. Hasil akhirnya harus terasa seperti website brand kuliner yang sungguh-sungguh siap digunakan, bukan sekadar template demonstrasi.