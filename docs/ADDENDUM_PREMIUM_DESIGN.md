# RASANESIA — MASTER DEVELOPMENT ADDENDUM
## Premium Design Standard, Conversion, CMS & Technical Requirements

**Brand:** Rasanesia — Rasa Tradisi, Cara Modern.  
**Business:** Jajanan tradisional, snack box, custom snack box, catering.  
**Target area:** Kota Surakarta dan Kabupaten Sukoharjo, sesuai cakupan layanan yang dikonfirmasi.  
**Frontend:** Astro, TypeScript, Tailwind CSS.  
**CMS:** Sanity CMS dan Sanity Studio.  
**Hosting target:** Cloudflare Pages dengan Astro SSR jika sesuai hasil audit dan kebutuhan CMS.  
**Primary conversion:** WhatsApp Business.  
**Design ambition:** Kualitas visual, detail implementasi, dan pengalaman pengguna setara website bisnis profesional dengan anggaran desain dan pengembangan sekitar US$1.000.

## 1. OBJECTIVE AND PRIORITY

Website harus terasa seperti website brand kuliner profesional yang dirancang secara custom, bukan template generik yang hanya diganti warna dan logo.

Tujuan utama:

1. Membangun kepercayaan terhadap brand Rasanesia.
2. Membuat produk terlihat menarik dan mudah dipahami.
3. Mempermudah pengunjung memilih paket dan menghubungi bisnis.
4. Menghasilkan inquiry dan pesanan yang relevan.
5. Memberi pemilik kemampuan mengelola konten tanpa coding.
6. Menjaga performa, aksesibilitas, keamanan, dan biaya operasional tetap terkendali.

Standar US$1.000 adalah target kualitas, bukan klaim bahwa harga proyek, hasil bisnis, atau tingkat konversi tertentu otomatis tercapai.

**Urutan prioritas:** kejelasan informasi dan konversi → kualitas visual → pengalaman mobile → performa dan aksesibilitas → dekorasi tambahan.

## 2. DESIGN DIRECTION

### 2.1 Creative direction

Gunakan arah visual **premium Indonesian culinary editorial**: hangat, autentik, modern, elegan, dan berkarakter lokal.

Referensi visual yang diinginkan:
- Fotografi makanan bergaya editorial.
- Komposisi yang terarah dengan ruang kosong yang cukup.
- Tipografi dengan karakter elegan dan keterbacaan tinggi.
- Warna alami yang terinspirasi bahan, rempah, daun, dan kemasan tradisional.
- Detail ornamen Indonesia yang halus dan tidak berlebihan.
- Komponen modern dengan hierarchy yang jelas dan interaksi yang konsisten.

Jangan membuat website terasa seperti:
- Template marketplace generik.
- Dashboard SaaS yang diterapkan ke website kuliner.
- Landing page penuh gradient, glassmorphism, atau animasi yang tidak relevan.
- Website tradisional yang terlalu ramai ornamen.
- Katalog sederhana dengan deretan kartu seragam tanpa art direction.

### 2.2 Brand palette

Gunakan token warna berikut sebagai fondasi:

- Brown: `#70452E`
- Warm cream: `#F7F0E3`
- Leaf green: `#65734B`
- Gold: `#D99A55`
- Warm white: `#FFFDF8`

Aturan penggunaan:
- Warm white dan warm cream menjadi dasar halaman.
- Brown digunakan untuk teks penting, tombol utama, dan elemen identitas.
- Leaf green menjadi aksen sekunder.
- Gold digunakan terbatas untuk highlight dan detail dekoratif.
- Jangan menggunakan seluruh warna dengan intensitas yang sama pada satu viewport.
- Pastikan kontras teks dan kontrol memenuhi standar aksesibilitas yang sesuai.

Semua warna harus didefinisikan sebagai design tokens terpusat. Hindari nilai warna yang tersebar tanpa konsistensi di berbagai komponen.

### 2.3 Typography

Gunakan:
- Heading: Lora atau Playfair Display.
- Body: Inter atau Nunito Sans.

Pilih maksimal satu font heading dan satu font body sebagai kombinasi utama. Pastikan font memiliki dukungan karakter yang dibutuhkan, loading yang efisien, dan fallback yang layak.

Hierarki tipografi harus jelas antara:
- Display heading.
- Section heading.
- Card title.
- Body text.
- Metadata.
- Price.
- Button label.
- Form label dan helper text.

Jangan menggunakan terlalu banyak ukuran font atau menjadikan seluruh heading sangat besar. Gunakan skala tipografi responsif yang konsisten.

## 3. ART DIRECTION AND PHOTOGRAPHY

Fotografi adalah salah satu faktor terpenting dalam kesan premium Rasanesia.

### 3.1 Image quality

Utamakan foto produk nyata dengan:
- Pencahayaan natural atau pencahayaan studio yang lembut.
- Tekstur makanan yang terlihat jelas.
- Komposisi yang rapi dan menggugah selera.
- Warna makanan yang akurat.
- Background yang sesuai dengan identitas brand.
- Styling yang konsisten antarfoto.

Untuk hero, pilih foto utama yang kuat dan relevan dengan produk unggulan. Hindari kolase terlalu ramai atau gambar yang membuat headline sulit dibaca.

### 3.2 Image consistency

- Tetapkan rasio gambar per jenis komponen.
- Gunakan `object-fit` dan `object-position` yang tepat.
- Jangan memotong produk penting secara tidak sengaja.
- Sediakan placeholder yang dirancang dengan baik ketika foto belum tersedia.
- Gunakan format dan ukuran file yang sesuai untuk performa.
- Berikan alt text deskriptif sesuai isi gambar.

Jangan menampilkan gambar stok seolah-olah foto asli Rasanesia. Jangan membuat klaim bahwa foto merupakan pesanan nyata jika bukan.

## 4. PREMIUM UI SYSTEM

Bangun design system reusable sebelum memperluas seluruh halaman.

Komponen minimal:
- Header dan navigasi desktop.
- Navigasi mobile.
- Footer.
- Primary, secondary, dan text buttons.
- Product cards.
- Package cards.
- Price display.
- Category filters.
- Product detail sections.
- Gallery grid dan image viewer jika diperlukan.
- Form fields dan validation messages.
- WhatsApp CTA.
- FAQ accordion.
- Breadcrumbs.
- Empty, loading, error, dan not-found states.
- Modal atau dialog jika diperlukan.

Setiap komponen harus memiliki state, spacing, typography, dan interaksi yang konsisten.

### 4.1 Buttons and interactions

- Primary CTA harus langsung menjelaskan tindakan, misalnya “Pesan via WhatsApp”.
- Secondary CTA digunakan untuk eksplorasi, misalnya “Lihat Detail”.
- Tombol harus memiliki hover, focus, active, dan disabled states yang sesuai.
- Jangan menggunakan tombol yang tampak aktif tetapi tidak melakukan tindakan.
- Jangan membuat semua tombol berwarna mencolok.
- Jangan mengandalkan hover sebagai satu-satunya cara mengakses informasi.

### 4.2 Cards and surfaces

- Gunakan radius, border, shadow, dan spacing secara konsisten.
- Hindari shadow berlebihan dan card yang terlihat berat.
- Jangan membungkus setiap paragraf dalam card.
- Gunakan layout editorial untuk variasi visual dan hierarchy.
- Pastikan foto dan informasi produk menjadi fokus utama.

### 4.3 Motion

Animasi hanya digunakan untuk membantu pemahaman dan memberi respons yang halus.

Diperbolehkan:
- Transisi warna dan border.
- Perubahan state tombol.
- Fade atau reveal yang ringan jika tidak mengganggu pembacaan.
- Interaksi menu dan accordion yang jelas.

Hindari:
- Animasi panjang sebelum konten dapat diakses.
- Parallax berat.
- Scroll hijacking.
- Animasi yang mengganggu perangkat mobile.
- Motion yang tidak menghormati `prefers-reduced-motion`.

## 5. PREMIUM HOMEPAGE

Homepage harus memiliki komposisi editorial yang khas dan tidak hanya terdiri atas kumpulan section template.

Urutan yang direkomendasikan:

1. Header dengan logo, navigasi, dan CTA.
2. Hero dengan headline yang kuat, deskripsi singkat, CTA utama, CTA sekunder, dan fotografi unggulan.
3. Kategori utama: Menu Jajanan, Snack Box, Custom Pesanan, dan Catering.
4. Pilihan produk atau paket unggulan dari CMS.
5. Section yang menjelaskan karakter dan penawaran Rasanesia berdasarkan fakta.
6. Section custom snack box atau solusi untuk acara.
7. Galeri foto pilihan.
8. Ringkasan cara pesan.
9. Informasi area layanan yang benar.
10. FAQ pilihan.
11. CTA penutup.
12. Footer yang lengkap dan terorganisasi.

Tidak semua section harus memiliki layout yang sama. Variasikan komposisi dengan tetap mempertahankan konsistensi visual.

Jangan membuat headline yang berisi klaim kualitas, popularitas, pengalaman, atau keunggulan yang belum dapat dibuktikan.

## 6. NAVIGATION AND PAGE ARCHITECTURE

### 6.1 Main navigation

Desktop:
- Beranda.
- Menu Jajanan.
- Snack Box.
- Custom Pesanan.
- Catering.
- Galeri.
- CTA WhatsApp.

Footer atau navigasi sekunder:
- Cara Pesan.
- Tentang Rasanesia.
- Area Layanan.
- FAQ.
- Kontak.
- Kebijakan Privasi.
- Ketentuan Pemesanan.

Mobile menggunakan navigasi ringkas dan CTA yang mudah dijangkau. Jangan memaksakan semua halaman ke navigasi utama.

### 6.2 Routes

Pertahankan route yang sudah tersedia:

- `/`
- `/menu/`
- `/menu/[slug]/`
- `/snack-box/`
- `/snack-box/[slug]/`
- `/custom-snack/`
- `/catering/`
- `/cara-pesan/`
- `/tentang/`
- `/galeri/`
- `/faq/`
- `/kontak/`
- `/kebijakan-privasi/`
- `/ketentuan-pemesanan/`

Tambahkan `/area-layanan/` jika kontennya membutuhkan halaman tersendiri. Jangan membuat halaman duplikat yang tidak memberikan manfaat tambahan.

## 7. PRODUCT CATALOG AND PACKAGE PAGES

### 7.1 Menu jajanan

Halaman `/menu/` menyediakan:
- Foto dan nama produk.
- Deskripsi.
- Kategori.
- Harga beserta satuan jika tersedia.
- Status ketersediaan jika dikelola secara nyata.
- Filter kategori jika bermanfaat.
- Link detail.
- CTA WhatsApp.

Detail `/menu/[slug]/` memuat informasi produk yang relevan, pilihan atau ketentuan pemesanan yang telah dikonfirmasi, serta CTA dengan konteks produk.

### 7.2 Snack box

Halaman `/snack-box/` menampilkan paket siap pilih.

Detail paket mendukung:
- Nama dan foto.
- Deskripsi.
- Harga dan satuan.
- Isi paket.
- Minimum order jika berlaku.
- Ketentuan pemesanan jika sudah ditentukan.
- Status aktif.
- Featured status dan urutan tampilan.

Informasi paket harus mudah dibandingkan. Jangan menggunakan harga atau isi paket dummy sebagai data bisnis nyata.

### 7.3 Product cards

Setiap kartu harus memiliki hierarchy yang jelas:
1. Foto.
2. Nama produk.
3. Deskripsi singkat atau informasi pembeda.
4. Harga dan satuan jika tersedia.
5. CTA yang sesuai.

Hindari menampilkan terlalu banyak teks pada kartu. Informasi lengkap tersedia di halaman detail.

Label “Unggulan” harus dipilih pemilik. Label “Terlaris”, diskon, atau stok terbatas hanya boleh digunakan apabila memiliki dasar data yang benar.

## 8. CUSTOM SNACK BOX AND CATERING

### 8.1 Custom snack box

Halaman `/custom-snack/` menyediakan formulir yang mudah dipahami:

- Nama pemesan.
- Kontak jika diperlukan.
- Tanggal kebutuhan.
- Jenis acara, opsional.
- Jumlah box.
- Pilihan produk atau kombinasi isi.
- Anggaran per box, opsional.
- Metode pemenuhan jika tersedia.
- Lokasi atau area pengiriman jika relevan.
- Catatan tambahan, opsional.

Validasi input wajib, pertahankan nilai ketika error, dan berikan pesan yang jelas. Jangan meminta informasi yang tidak dibutuhkan untuk inquiry awal.

### 8.2 Catering

Halaman `/catering/` menampilkan penawaran catering yang benar-benar tersedia, foto nyata jika ada, informasi paket yang sudah dikonfirmasi, serta CTA permintaan penawaran.

Form inquiry dapat mencakup:
- Nama dan kontak.
- Jenis acara.
- Tanggal dan waktu.
- Perkiraan jumlah porsi.
- Lokasi acara.
- Preferensi menu.
- Anggaran opsional.
- Catatan tambahan.

Jangan menjanjikan ketersediaan atau instant quotation tanpa data dan proses yang mendukungnya.

## 9. ORDER SCHEDULING AND BUDGET ESTIMATOR

### 9.1 Scheduling

Pelanggan dapat memasukkan tanggal dan waktu kebutuhan. Informasi ini menjadi bagian dari inquiry, bukan konfirmasi booking otomatis.

- Validasi tanggal sesuai aturan yang telah ditentukan.
- Jangan membuat cutoff atau lead time sendiri.
- Nyatakan bahwa ketersediaan, harga, dan tanggal harus dikonfirmasi Rasanesia.
- Jangan menyatakan slot tersedia tanpa sumber data kapasitas yang nyata.

### 9.2 Budget estimator

Estimator hanya aktif jika harga dan aturan perhitungan sudah dikonfirmasi.

Untuk satu item:

`Estimasi subtotal = harga per unit × jumlah`

Untuk beberapa item, jumlahkan subtotal masing-masing item.

Biaya pengiriman, diskon, pajak, dan biaya tambahan hanya dihitung jika aturan dan nilainya telah dikonfirmasi.

- Tampilkan rincian dan satuan.
- Gunakan label “Estimasi” jika biaya belum final.
- Jangan menampilkan hasil nol sebagai harga final ketika harga tidak tersedia.
- Sediakan CTA untuk konfirmasi melalui WhatsApp.
- Uji seluruh aturan perhitungan dengan unit test.

## 10. WHATSAPP BUSINESS

WhatsApp merupakan kanal utama inquiry dan koordinasi pesanan.

### Requirements

- Nomor WhatsApp dikonfigurasi di satu tempat.
- Gunakan format internasional yang valid.
- Jangan menghard-code nomor pada banyak komponen.
- CTA produk mengirim konteks produk.
- CTA snack box mengirim konteks paket dan jumlah jika diisi.
- Form custom dan catering menghasilkan ringkasan yang terstruktur.
- Pesan di-encode dengan benar.
- Pengguna dapat meninjau dan mengedit pesan sebelum mengirim.
- Sediakan fallback apabila WhatsApp tidak dapat dibuka.

Tombol floating harus tidak menutupi konten atau kontrol pada mobile.

Klik tombol atau pembukaan WhatsApp bukan bukti bahwa pesan terkirim, order diterima, stok tersedia, harga disepakati, atau pembayaran diterima.

## 11. CMS AND CONTENT EDITING

### 11.1 Platform

Gunakan Sanity CMS dan Sanity Studio dengan Astro, TypeScript, dan Tailwind CSS.

Target hosting adalah Cloudflare Pages. Gunakan Astro SSR jika diperlukan dan sesuai dengan hasil audit untuk menyajikan konten CMS yang diperbarui tanpa rebuild frontend setiap kali konten berubah.

### 11.2 Content types

CMS harus mendukung:
- Produk.
- Paket snack box.
- Galeri.
- FAQ.
- Konten Custom Pesanan dan Catering.
- Cara Pesan.
- Tentang Rasanesia.
- Area Layanan.
- Site settings dan metadata.

Field produk mencakup nama, slug, gambar, kategori, deskripsi, harga dan satuan, isi atau porsi jika relevan, status publikasi, featured status, dan urutan tampilan.

Field yang tidak relevan boleh bersifat opsional. Field wajib harus memiliki label, validasi, dan petunjuk yang mudah dipahami.

### 11.3 Owner experience

Pemilik harus bisa:
- Menambah dan mengedit produk.
- Mengubah harga, gambar, nama, dan isi paket.
- Mengelola kategori dan galeri.
- Mengatur status publikasi dan urutan.
- Mengedit FAQ serta konten yang disepakati.
- Melakukan preview dan publish jika didukung.

Semua konten yang dijanjikan sebagai CMS-managed harus dapat diubah tanpa edit kode.

### 11.4 Image storage

- Foto disimpan melalui image storage/CDN Sanity.
- GitHub menyimpan source code.
- CMS menyimpan dokumen dan referensi gambar.
- Cloudflare Pages menyajikan frontend.
- Optimalkan gambar dan ukuran file.
- Verifikasi kuota storage, bandwidth, dan ketentuan paket.

Jangan mengklaim layanan gratis selamanya atau tanpa batas.

### 11.5 Update behavior

- Perubahan kode mengikuti build dan deployment.
- Perubahan konten CMS harus mengikuti mekanisme update yang telah diuji.
- Untuk SSR, tentukan strategi cache dan invalidation.
- Jangan menjanjikan perubahan langsung tampil sebelum memverifikasi perilaku CDN dan cache.
- Jika menggunakan static generation, dokumentasikan kebutuhan rebuild atau mekanisme revalidation.

## 12. GALLERY, FAQ, CONTACT, AND SERVICE AREA

### Gallery

Galeri harus menggunakan foto nyata atau gambar ilustrasi yang diidentifikasi dengan jujur. Sediakan caption, alt text, urutan, dan status publikasi yang dapat dikelola.

### FAQ

FAQ harus menjawab pertanyaan mengenai pemesanan, custom paket, minimum order jika berlaku, pengiriman, pembayaran, dan ketersediaan berdasarkan kebijakan nyata.

### Contact and About

Halaman Kontak memuat kanal kontak yang telah dikonfirmasi. Halaman Tentang menjelaskan brand tanpa mengarang sejarah, pengalaman, atau klaim yang belum terbukti.

### Service area

Tampilkan Surakarta dan wilayah Sukoharjo yang benar-benar dilayani. Jangan mengklaim seluruh wilayah terjangkau tanpa konfirmasi.

Peta Surakarta boleh digunakan sebagai referensi regional. Jangan menampilkan titik tersebut sebagai alamat produksi. Alamat dan titik pengambilan hanya boleh dipublikasikan setelah ditetapkan dan disetujui pemilik.

## 13. MOBILE-FIRST AND RESPONSIVE QUALITY

Mobile bukan versi desktop yang diperkecil. Layout, hierarchy, gambar, navigasi, formulir, dan CTA harus dirancang untuk layar kecil sejak awal.

Wajib:
- Tidak ada horizontal overflow yang tidak disengaja.
- Teks dan harga mudah dibaca.
- Kontrol memiliki ukuran interaksi yang nyaman.
- Navigasi ringkas dan jelas.
- CTA WhatsApp mudah dijangkau tanpa menutupi konten.
- Form memakai input type dan keyboard yang sesuai.
- Gambar memiliki ukuran dan cropping yang tepat.
- Tidak ada layout shift yang tidak perlu.
- Empty, loading, error, dan success states tetap rapi pada layar kecil.

Uji pada beberapa ukuran viewport, termasuk ponsel kecil, ponsel besar, tablet, dan desktop.

## 14. PERFORMANCE, ACCESSIBILITY, AND SEO

### Performance

- Optimalkan gambar dan font.
- Gunakan lazy loading untuk gambar non-kritis.
- Hindari JavaScript dan dependensi yang tidak diperlukan.
- Prioritaskan konten utama.
- Hindari animasi dan efek berat.
- Periksa console errors, network failures, dan layout shifts.

### Accessibility

- Gunakan semantic HTML.
- Sediakan keyboard navigation dan focus states.
- Gunakan label formulir dan pesan validasi yang jelas.
- Sediakan alt text yang relevan.
- Jangan menyampaikan status hanya dengan warna.
- Hormati reduced-motion preferences.

### SEO

- Title dan meta description unik per halaman.
- Heading hierarchy yang logis.
- URL dan canonical yang benar jika relevan.
- Open Graph metadata.
- Sitemap dan robots configuration.
- Structured data hanya jika datanya benar dan memenuhi persyaratan.
- Gunakan kata kunci lokal secara natural.
- Jangan membuat doorway pages, alamat palsu, rating palsu, atau klaim bisnis yang tidak benar.

## 15. SECURITY AND PRIVACY

- Jangan mengekspos private CMS tokens ke client bundle.
- Simpan secret di environment variables atau secret management yang sesuai.
- Batasi akses Studio.
- Validasi input.
- Hindari menyisipkan input pengguna sebagai HTML mentah tanpa sanitasi.
- Jangan mengumpulkan data yang tidak diperlukan.
- Jangan mengklaim data inquiry disimpan jika tidak ada backend penyimpanan.
- Tangani kegagalan CMS dengan fallback yang layak.

## 16. INFORMATION THAT MUST NOT BE INVENTED

Jangan mengarang:
- Harga, isi paket, dan minimum order.
- Jam operasional, cutoff, atau lead time.
- Biaya dan cakupan pengiriman.
- Alamat produksi dan koordinat.
- Metode pembayaran.
- Kebijakan refund atau pembatalan.
- Testimoni, rating, sertifikasi, atau angka penjualan.
- Ketersediaan stok.
- Klaim popularitas atau hasil bisnis.

Jika data belum tersedia, gunakan fallback yang jelas, sembunyikan field opsional, atau arahkan pelanggan untuk konfirmasi melalui WhatsApp.

## 17. EXCLUDED FROM INITIAL SCOPE

Tidak termasuk kecuali disetujui terpisah:
- Customer accounts.
- Shopping cart persisten.
- Checkout dan payment gateway otomatis.
- Sinkronisasi stok real-time.
- Booking kapasitas real-time.
- Database order dan dashboard operasional.
- Loyalty points dan membership.
- Kupon kompleks.
- Blog dengan pipeline editorial.
- Integrasi berbayar yang belum disetujui.

## 18. IMPLEMENTATION PRIORITY

### P0 — Launch essentials

1. Audit repository dan arsitektur yang sudah ada.
2. Tetapkan design tokens dan reusable components.
3. Bangun homepage premium dan navigasi responsif.
4. Selesaikan katalog dan detail produk.
5. Selesaikan katalog dan detail snack box.
6. Integrasikan WhatsApp dengan konteks produk.
7. Integrasikan CMS untuk produk, paket, dan gambar.
8. Pastikan mobile quality, SEO dasar, dan deployment.
9. Konfigurasikan data bisnis yang sudah dikonfirmasi.

### P1 — Conversion improvements

1. Form custom snack box.
2. Catering inquiry.
3. Cara Pesan.
4. FAQ dan Area Layanan.
5. CMS-managed gallery.
6. Inquiry scheduling.
7. Budget estimator jika harga lengkap.

### P2 — Post-launch improvements

1. Search dan filter tambahan.
2. Produk terkait.
3. Analitik konversi dengan perhatian terhadap privasi.
4. Otomatisasi operasional jika volume pesanan membenarkannya.

Jangan menunda peluncuran seluruh website hanya karena fitur P1 atau P2 belum selesai, selama persyaratan P0 dan data yang diperlukan sudah terpenuhi.

## 19. PREMIUM DESIGN ACCEPTANCE CRITERIA

Desain tidak dinyatakan selesai hanya karena sudah menggunakan warna brand dan layout responsif.

### 19.1 Visual quality

- [ ] Homepage memiliki art direction yang khas dan hierarchy visual yang jelas.
- [ ] Tidak terlihat seperti template generik yang hanya diganti warna.
- [ ] Typography, spacing, radius, shadow, dan komponen konsisten.
- [ ] Foto memiliki kualitas dan cropping yang layak.
- [ ] Komposisi halaman bervariasi tanpa kehilangan konsistensi.
- [ ] Tidak ada ornamen, gradient, animasi, atau dekorasi berlebihan.
- [ ] Tidak ada elemen visual yang tampak belum selesai atau tidak konsisten.
- [ ] Semua halaman utama mengikuti design system yang sama.

### 19.2 Mobile quality

- [ ] Semua halaman utama diuji pada beberapa ukuran layar.
- [ ] Tidak ada horizontal overflow yang tidak disengaja.
- [ ] Navigasi dan CTA berfungsi dengan baik.
- [ ] WhatsApp floating button tidak menutupi konten.
- [ ] Formulir mudah diisi pada perangkat mobile.
- [ ] Gambar tidak terpotong secara tidak sengaja.
- [ ] Hierarchy visual tetap jelas tanpa sekadar menumpuk semua elemen desktop.

### 19.3 Interaction quality

- [ ] Tombol dan tautan berfungsi sesuai label.
- [ ] Hover, focus, active, disabled, loading, error, dan success states relevan telah ditangani.
- [ ] Formulir memiliki validasi dan feedback yang jelas.
- [ ] Accordion, filter, modal, atau image viewer jika digunakan dapat dioperasikan dengan keyboard.
- [ ] Tidak ada elemen yang tampak interaktif tetapi tidak melakukan tindakan.

### 19.4 Conversion quality

- [ ] CTA utama jelas pada homepage dan halaman produk.
- [ ] Detail produk mudah dipahami.
- [ ] Harga dan satuan tidak ambigu jika ditampilkan.
- [ ] Pesan WhatsApp membawa konteks yang relevan.
- [ ] Alur inquiry tidak mengklaim order terkonfirmasi secara otomatis.
- [ ] Pengguna dapat menemukan Cara Pesan, FAQ, dan Area Layanan.

### 19.5 Technical quality

- [ ] Tidak ada broken images atau dead links pada alur utama.
- [ ] Tidak ada error console yang belum dijelaskan.
- [ ] Metadata halaman utama tersedia.
- [ ] CMS content update diuji.
- [ ] Tidak ada private token yang terekspos.
- [ ] Performa dan aksesibilitas diperiksa dengan alat pengujian.
- [ ] Acceptance criteria fungsional lainnya dalam master development tetap dipenuhi.

### 19.6 Performance targets

Gunakan Core Web Vitals sebagai target kualitas, bukan jaminan hasil di semua perangkat dan jaringan:

- LCP: maksimal 2,5 detik.
- INP: maksimal 200 milidetik.
- CLS: maksimal 0,1.

Evaluasi dengan data lapangan jika tersedia dan gunakan pengujian lab untuk diagnosis. Jangan menyatakan target telah tercapai hanya berdasarkan inspeksi visual atau satu kali pengujian.

## 20. HANDOVER REQUIREMENTS

Serahkan:
1. Ringkasan arsitektur aktual.
2. Daftar halaman dan fitur yang selesai.
3. Panduan Sanity Studio untuk pemilik.
4. Panduan mengelola produk, paket, foto, dan konten.
5. Panduan deployment dan rollback yang relevan.
6. Daftar environment variables tanpa secret.
7. Daftar layanan, kuota, dan potensi biaya.
8. Hasil acceptance testing.
9. Daftar fitur yang belum selesai atau menunggu data.
10. Screenshot atau rekaman hasil desktop dan mobile untuk review desain.

Jangan menyatakan proyek selesai sebelum pengujian dilakukan dan blocker yang tersisa diungkapkan.

## FINAL PRINCIPLES

- Website harus terlihat custom-designed dan terasa premium, bukan sekadar memenuhi checklist fitur.
- Foto, tipografi, komposisi, konsistensi, dan detail interaksi sama pentingnya dengan warna.
- Desain harus membantu penjualan, bukan menghambat pelanggan.
- Mobile quality merupakan persyaratan inti.
- Tidak boleh ada klaim bisnis atau harga yang dibuat-buat.
- CMS harus memungkinkan pemilik mengelola konten yang disepakati tanpa coding.
- Perubahan konten dan perubahan kode memiliki alur deployment yang jelas.
- Target biaya rendah tidak boleh mengorbankan keamanan atau melanggar ketentuan layanan.
- Setiap fitur dan standar desain harus diuji sebelum dinyatakan selesai.
- Konflik spesifikasi harus diselesaikan sebelum implementasi yang terdampak dilanjutkan.