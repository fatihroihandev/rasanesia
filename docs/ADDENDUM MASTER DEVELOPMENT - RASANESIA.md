# ADDENDUM MASTER DEVELOPMENT — RASANESIA
## Website Expansion, Conversion Optimization, CMS & Operational Requirements

**Brand:** Rasanesia  
**Tagline:** Rasa Tradisi, Cara Modern.  
**Business:** Jajanan tradisional Indonesia, snack box, custom snack box, dan catering.  
**Target area:** Kota Surakarta dan Kabupaten Sukoharjo, terbatas pada wilayah yang benar-benar dapat dilayani.  
**Primary conversion channel:** WhatsApp Business.  
**Frontend baseline:** Astro, TypeScript, Tailwind CSS.  
**Content management:** Sanity CMS dan Sanity Studio.  
**Hosting target:** Cloudflare Pages dengan Astro SSR apabila sesuai dengan kebutuhan integrasi dan batas paket yang berlaku.  
**Primary goal:** Meningkatkan kepercayaan, mempermudah pencarian produk, mengurangi hambatan pemesanan, dan menghasilkan inquiry serta pesanan yang memenuhi ketentuan bisnis.

---

## 1. PURPOSE AND SCOPE

Addendum ini memperluas spesifikasi website Rasanesia dengan menetapkan:

1. Struktur navigasi utama dan halaman pendukung.
2. Katalog produk dan detail produk.
3. Snack box, custom snack box, dan catering.
4. Formulir permintaan pesanan dan estimasi anggaran.
5. Integrasi WhatsApp Business.
6. Penjadwalan permintaan pesanan dan alur konfirmasi.
7. Area layanan, galeri, FAQ, dan SEO lokal.
8. CMS yang dapat digunakan pemilik bisnis tanpa mengedit kode.
9. Penyimpanan gambar, deployment, keamanan, aksesibilitas, dan pengujian.

Addendum ini harus diterapkan bersama master development utama, bukan sebagai pengganti keseluruhan spesifikasi sebelumnya.

### 1.1 Rules for resolving conflicts

- Persyaratan yang tidak diubah oleh addendum ini tetap mengikuti master development utama.
- Untuk fitur yang secara eksplisit diperluas atau diperjelas oleh addendum ini, gunakan persyaratan dalam addendum ini.
- Apabila dua persyaratan tidak dapat dipenuhi secara bersamaan, jangan memilih interpretasi secara diam-diam. Identifikasi konflik, jelaskan dampaknya, lalu minta keputusan sebelum implementasi.
- Jangan mengimplementasikan fitur yang memerlukan data bisnis, kebijakan, atau persetujuan pemilik tetapi belum tersedia.
- Jangan mengklaim fitur selesai sebelum implementasi dan acceptance testing berhasil dilakukan.

## 2. BUSINESS RULES AND SOURCE OF TRUTH

### 2.1 Verified business context

- Rasanesia menjual jajanan tradisional, snack box, custom snack box, dan catering.
- Pemesanan dan koordinasi pembayaran dilakukan melalui WhatsApp Business.
- Layanan berfokus pada Surakarta dan Sukoharjo.
- Model pemenuhan pesanan dapat berupa pengiriman dan pengambilan pesanan.
- Website harus memungkinkan pemilik mengelola konten produk tanpa mengubah kode sumber.

### 2.2 Information that must not be invented

Developer tidak boleh membuat atau mengasumsikan:

- Harga produk atau paket.
- Komposisi dan jumlah isi paket.
- Minimum order.
- Lead time atau batas waktu pemesanan.
- Jam operasional.
- Biaya, radius, dan ketentuan pengiriman.
- Alamat produksi atau titik pengambilan.
- Metode pembayaran yang tersedia.
- Kebijakan pembatalan, refund, dan perubahan pesanan.
- Sertifikasi, klaim halal, testimoni, rating, dan angka penjualan.
- Ketersediaan stok atau kepastian penerimaan pesanan.

Jika data tersebut belum tersedia, gunakan status belum dikonfigurasi, sembunyikan informasi opsional, atau tampilkan instruksi untuk meminta konfirmasi melalui WhatsApp. Jangan mengganti data yang belum tersedia dengan angka contoh seolah-olah merupakan informasi bisnis nyata.

### 2.3 Business data source

Informasi produk, paket, harga, galeri, FAQ, area layanan, dan konten bisnis yang dapat diedit harus bersumber dari CMS apabila jenis konten tersebut ditetapkan sebagai CMS-managed content.

Informasi operasional yang dapat berubah, seperti nomor WhatsApp, harus disimpan di konfigurasi terpusat yang dapat dikelola secara aman. Jangan menyebarkan nomor, harga, atau aturan bisnis sebagai hard-coded values di banyak komponen.

## 3. INFORMATION ARCHITECTURE AND NAVIGATION

### 3.1 Main navigation

Navigasi desktop wajib ringkas dan berorientasi pada pemesanan:

1. Beranda
2. Menu Jajanan
3. Snack Box
4. Custom Pesanan
5. Catering
6. Galeri
7. Tombol utama: Pesan via WhatsApp

Tautan berikut harus tersedia melalui footer, navigasi sekunder, atau bagian relevan dalam halaman:

- Cara Pesan
- Tentang Rasanesia
- Area Layanan
- FAQ
- Kontak
- Kebijakan Privasi
- Ketentuan Pemesanan

Jangan menambahkan semua tautan sekunder ke navigasi utama jika membuat tampilan desktop atau mobile terlalu padat.

### 3.2 Existing routes

Pertahankan dan gunakan route berikut jika sudah tersedia dalam implementasi:

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

Tambahkan route `/area-layanan/` hanya jika informasi area layanan memerlukan halaman tersendiri. Jika kontennya singkat, area layanan dapat ditampilkan pada halaman Kontak atau Cara Pesan tanpa membuat halaman duplikat.

Jangan membuat halaman baru dengan konten yang sama hanya untuk menambah jumlah halaman. Gunakan route yang sudah ada jika tujuannya sama.

### 3.3 Route requirements

- Gunakan slug yang stabil dan URL yang konsisten.
- Produk yang tidak aktif atau tidak dipublikasikan tidak boleh tampil dalam katalog publik.
- Route produk yang sudah tidak tersedia harus memiliki penanganan yang jelas, misalnya halaman 404 atau pengalihan yang relevan jika memang diperlukan.
- Jangan membuat pengalihan yang menyesatkan atau mengarahkan semua URL yang tidak ditemukan ke halaman beranda.
- Seluruh tautan navigasi harus berfungsi dan tidak menghasilkan dead links.

## 4. HOMEPAGE

Beranda harus menjadi jalur utama dari kunjungan menuju katalog dan inquiry.

Urutan bagian yang direkomendasikan:

1. Hero section dengan identitas Rasanesia, tagline, pesan nilai utama, dan CTA.
2. Kategori produk utama: Menu Jajanan, Snack Box, Custom Pesanan, Catering.
3. Produk atau paket unggulan yang dipilih melalui CMS.
4. Alasan memilih Rasanesia, hanya berdasarkan fakta yang dikonfirmasi.
5. Galeri foto pilihan.
6. Ringkasan cara pesan.
7. Ringkasan area layanan.
8. FAQ pilihan.
9. CTA pemesanan melalui WhatsApp.
10. Footer dengan informasi dan tautan penting.

### Requirements

- Jangan memenuhi hero dengan terlalu banyak teks.
- CTA utama harus terlihat tanpa harus menggulir terlalu jauh pada mobile.
- Setiap kategori harus mengarah ke halaman yang benar.
- Produk unggulan harus dapat dikelola melalui CMS.
- Jika belum ada produk unggulan yang dipilih, tampilkan fallback yang masuk akal tanpa error.
- Jangan menampilkan rating, label terlaris, atau klaim kualitas yang tidak didukung data nyata.

## 5. MENU JAJANAN AND PRODUCT CATALOG

### 5.1 Catalog functionality

Halaman `/menu/` harus menyediakan:

- Daftar produk dengan foto.
- Nama produk.
- Harga jika sudah dikonfirmasi dan dipublikasikan.
- Deskripsi singkat.
- Kategori produk.
- Status ketersediaan jika datanya benar-benar dikelola.
- Tombol untuk melihat detail.
- CTA pemesanan melalui WhatsApp.
- Filter kategori jika jumlah dan variasi produk membuatnya berguna.

Pencarian produk dapat ditambahkan jika katalog cukup besar untuk membutuhkannya. Jangan mengimplementasikan pencarian yang kompleks tanpa kebutuhan nyata.

### 5.2 Product detail page

Setiap halaman `/menu/[slug]/` harus dapat menampilkan:

- Nama dan foto produk.
- Deskripsi.
- Harga dan satuan harga jika tersedia.
- Informasi isi, ukuran, atau porsi jika relevan dan telah dikonfirmasi.
- Informasi pemesanan minimum jika berlaku.
- Catatan ketersediaan atau kebutuhan pemesanan sebelumnya jika sudah ditentukan.
- Produk terkait jika tersedia.
- CTA pemesanan yang membawa konteks produk ke WhatsApp.

Harga harus menjelaskan satuannya, misalnya per buah, per porsi, atau per paket, sesuai data bisnis. Jangan menyimpulkan satuan harga dari angka saja.

### 5.3 Product categories

Kategori harus dikelola melalui CMS atau mekanisme data yang konsisten. Jangan menanam daftar kategori tetap di banyak komponen apabila kategori tersebut perlu diedit oleh pemilik.

### 5.4 Featured and bestseller labels

- Label “Unggulan” dapat digunakan berdasarkan pilihan eksplisit pemilik melalui CMS.
- Label “Terlaris” hanya boleh digunakan jika didukung data penjualan yang dapat diverifikasi.
- Jangan menampilkan label stok terbatas, promo, diskon, atau produk baru tanpa data yang benar.

## 6. SNACK BOX

Halaman `/snack-box/` menampilkan paket snack box siap pilih.

Setiap paket harus mendukung data berikut sesuai kebutuhan:

- Nama paket.
- Foto paket.
- Deskripsi.
- Harga dan satuan harga.
- Daftar isi paket.
- Jumlah item atau porsi apabila dikonfirmasi.
- Minimum pemesanan jika berlaku.
- Ketentuan pemesanan atau lead time jika sudah ditetapkan.
- Status aktif atau tidak aktif.
- Urutan tampilan.
- Label unggulan jika dipilih pemilik.

Halaman detail `/snack-box/[slug]/` harus menampilkan seluruh informasi relevan serta CTA untuk meminta konfirmasi atau melakukan inquiry.

Jika harga atau ketentuan tertentu belum tersedia, jangan menampilkan nilai dummy sebagai harga final. Gunakan CTA konsultasi atau konfirmasi melalui WhatsApp.

## 7. CUSTOM SNACK BOX

Halaman `/custom-snack/` harus mempermudah pelanggan mengajukan kombinasi snack box sesuai kebutuhan.

### 7.1 Form fields

Formulir minimal mendukung:

- Nama pemesan.
- Nomor kontak, jika diperlukan untuk follow-up.
- Tanggal acara atau tanggal kebutuhan.
- Jenis acara, opsional.
- Jumlah box.
- Pilihan produk atau kombinasi isi yang diinginkan.
- Anggaran per box, opsional.
- Catatan kebutuhan khusus, opsional.
- Metode pemenuhan: pengiriman atau pengambilan, jika keduanya tersedia.
- Lokasi pengiriman atau area pengambilan, jika relevan.

Jangan mewajibkan informasi yang tidak diperlukan untuk inquiry awal. Formulir harus tetap bisa digunakan dengan data opsional yang belum diketahui.

### 7.2 Validation

- Jumlah box harus berupa angka valid yang lebih besar dari nol.
- Tanggal yang dipilih tidak boleh secara otomatis dianggap diterima oleh bisnis.
- Minimum order dan batas pemesanan harus mengikuti konfigurasi bisnis yang telah dikonfirmasi.
- Jika batas tersebut belum dikonfigurasi, jangan membuat aturan sendiri.
- Berikan pesan kesalahan yang jelas dan pertahankan input pengguna ketika validasi gagal.
- Jangan meminta informasi pembayaran atau data sensitif yang tidak diperlukan pada tahap inquiry.

### 7.3 Submission behavior

Saat pelanggan mengirim formulir:

1. Validasi input.
2. Buat ringkasan permintaan yang mudah dibaca.
3. Berikan opsi untuk meneruskan ringkasan melalui WhatsApp.
4. Gunakan URL Click-to-Chat resmi dengan nomor yang telah dikonfigurasi.
5. Encode pesan dan karakter khusus dengan benar.
6. Tampilkan instruksi jika WhatsApp tidak dapat dibuka.
7. Jangan mengklaim permintaan sudah diterima oleh Rasanesia sebelum ada konfirmasi nyata dari bisnis.

Formulir yang hanya membuka WhatsApp tidak boleh dipresentasikan sebagai sistem penyimpanan pesanan. Jika website tidak memiliki backend untuk menyimpan submission, nyatakan bahwa pelanggan perlu mengirim pesan melalui WhatsApp agar permintaannya diteruskan.

## 8. CATERING

Halaman `/catering/` ditujukan untuk pesanan acara dan kebutuhan dalam jumlah besar.

Jenis kebutuhan dapat mencakup rapat, acara keluarga, pengajian, seminar, dan acara kantor sebagai contoh penggunaan, bukan klaim bahwa semua layanan tersebut telah dikonfirmasi tersedia.

### 8.1 Content

Tampilkan:

- Ringkasan layanan catering.
- Jenis produk atau paket yang tersedia.
- Foto nyata jika tersedia.
- Informasi porsi, isi, atau harga jika telah dikonfirmasi.
- Proses inquiry dan konfirmasi.
- CTA untuk meminta penawaran melalui WhatsApp.

### 8.2 Catering inquiry

Formulir dapat mencakup:

- Nama pemesan.
- Kontak.
- Jenis acara.
- Tanggal dan waktu kebutuhan.
- Perkiraan jumlah porsi.
- Lokasi acara atau area pengiriman.
- Preferensi menu.
- Anggaran opsional.
- Catatan tambahan.

Jangan menampilkan instant booking, jaminan ketersediaan, atau instant quotation jika belum ada sistem dan data yang mendukungnya.

## 9. ORDER SCHEDULING

Fitur penjadwalan merupakan formulir permintaan tanggal pesanan, bukan sistem booking yang otomatis mengonfirmasi slot.

### Requirements

- Pelanggan dapat memasukkan tanggal dan waktu kebutuhan.
- Sistem memvalidasi format dan tanggal berdasarkan aturan yang telah dikonfirmasi.
- Tanggal yang dikirim harus masuk ke ringkasan WhatsApp.
- Tampilkan pemberitahuan bahwa tanggal, ketersediaan, harga, dan ketentuan harus dikonfirmasi oleh Rasanesia.
- Jangan menjanjikan slot tersedia tanpa sumber data ketersediaan yang benar.
- Jangan membuat sistem kalender booking real-time kecuali ada backend, data kapasitas, dan aturan operasional yang disepakati.

Jika lead time atau cutoff pemesanan belum ditentukan, jangan mengarang batas waktu.

## 10. BUDGET ESTIMATOR

Fitur estimasi anggaran bersifat opsional dan harus berbasis harga yang telah dikonfirmasi.

### 10.1 Calculation rules

Jika harga per unit dan jumlah pesanan tersedia:

Estimated subtotal = unit price × quantity.

Jika terdapat beberapa item:

Estimated subtotal = sum of each configured unit price × quantity.

Biaya pengiriman, pajak, biaya tambahan, diskon, atau biaya layanan hanya boleh dimasukkan apabila aturan dan nilainya telah dikonfirmasi.

### 10.2 Behavior

- Tampilkan label “Estimasi”, bukan “Total final”, jika masih ada komponen biaya yang belum pasti.
- Tampilkan rincian perhitungan dan satuan harga.
- Jika harga tidak tersedia atau konfigurasi tidak lengkap, jangan menampilkan hasil nol seolah-olah merupakan penawaran.
- Arahkan pengguna untuk meminta konfirmasi melalui WhatsApp.
- Jangan mengklaim estimasi sebagai quotation resmi atau komitmen harga.
- Perhitungan harus divalidasi dengan unit test.

Fitur estimasi tidak wajib aktif pada produk yang belum memiliki data harga lengkap.

## 11. WHATSAPP BUSINESS INTEGRATION

WhatsApp merupakan kanal utama untuk konversi dan koordinasi pesanan.

### 11.1 Centralized configuration

Nomor WhatsApp harus:

- Dikonfigurasi di satu tempat.
- Menggunakan format internasional yang sesuai untuk URL Click-to-Chat.
- Tidak ditulis berulang kali dalam komponen.
- Diuji agar tidak menghasilkan tautan yang rusak.

Nomor aktual harus diberikan atau dikonfirmasi oleh pemilik bisnis sebelum deployment. Jangan membuat nomor placeholder yang tampak sebagai nomor produksi.

### 11.2 WhatsApp CTA contexts

Tombol WhatsApp harus mengirim konteks yang sesuai dengan halaman, jika tersedia.

Contoh konteks:

- Produk: nama dan slug atau identitas produk.
- Snack box: nama paket dan jumlah yang diminta.
- Custom pesanan: ringkasan kebutuhan yang diisi pelanggan.
- Catering: tanggal acara, jumlah porsi, dan kebutuhan lain.
- Kontak umum: pesan inquiry umum.

### 11.3 Message formatting

- Susun pesan dengan ringkas, jelas, dan terstruktur.
- Encode karakter khusus dengan benar.
- Jangan memasukkan data yang tidak diisi pengguna atau tidak tersedia.
- Jangan memasukkan informasi pribadi berlebihan.
- Gunakan pesan awal yang dapat diedit pengguna sebelum dikirim.

### 11.4 Floating CTA

- Tombol WhatsApp dapat tampil sebagai floating action button pada mobile dan halaman yang sesuai.
- Jangan menutupi tombol submit, informasi penting, atau navigasi.
- Berikan jarak aman dari tepi layar dan safe area perangkat.
- Pastikan label atau accessible name menjelaskan tujuan tombol.
- Jangan membuka banyak tab atau memunculkan popup secara otomatis.

### 11.5 Order status

Klik WhatsApp hanya membuka percakapan atau menyiapkan pesan. Klik tersebut tidak membuktikan bahwa:

- Pesan telah terkirim.
- Rasanesia telah menerima permintaan.
- Stok tersedia.
- Harga telah disepakati.
- Pembayaran telah diterima.
- Pesanan telah dikonfirmasi.

Status tersebut hanya boleh dinyatakan setelah dikonfirmasi melalui proses bisnis yang nyata.

## 12. HOW TO ORDER

Halaman `/cara-pesan/` harus menjelaskan alur sederhana:

1. Pilih produk atau paket.
2. Tentukan kebutuhan atau isi formulir custom jika diperlukan.
3. Hubungi Rasanesia melalui WhatsApp.
4. Rasanesia memeriksa ketersediaan, detail, harga, tanggal, dan area layanan.
5. Pelanggan menerima konfirmasi ketentuan serta pembayaran yang berlaku.
6. Pesanan menjadi terkonfirmasi sesuai proses yang ditetapkan Rasanesia.
7. Produk dipersiapkan dan dipenuhi sesuai kesepakatan.

Sesuaikan urutan akhir dengan prosedur bisnis yang benar. Jangan menyatakan pesanan dikonfirmasi hanya karena formulir diisi atau tombol WhatsApp diklik.

## 13. SERVICE AREAS AND LOCATION

### 13.1 Service area

Tampilkan Kota Surakarta dan wilayah Kabupaten Sukoharjo yang benar-benar dilayani.

- Jangan menyatakan semua wilayah dapat dijangkau jika belum dikonfirmasi.
- Jangan menjanjikan waktu pengiriman atau biaya pengiriman tanpa data.
- Jika area layanan terperinci belum tersedia, gunakan pernyataan umum yang akurat dan arahkan pelanggan untuk mengonfirmasi lokasi melalui WhatsApp.

### 13.2 Map

Peta regional Surakarta dapat digunakan sebagai referensi wilayah layanan.

- Jangan menandai peta regional sebagai alamat produksi atau titik pengambilan.
- Jangan memublikasikan alamat produksi yang belum ditetapkan atau belum diizinkan untuk dipublikasikan.
- Jika alamat atau titik pengambilan nantinya ditentukan, pemilik harus menyetujui penggunaan dan publikasinya.
- Jika kunjungan harus dikonfirmasi terlebih dahulu, nyatakan aturan tersebut secara jelas.
- Jangan mengarang koordinat atau lokasi pin.

### 13.3 Pickup and delivery

Tampilkan pilihan pengiriman dan pengambilan hanya sesuai layanan yang benar-benar tersedia.

Ketentuan detail harus bersumber dari data bisnis yang dikonfirmasi. Jika belum tersedia, minta pelanggan melakukan konfirmasi.

## 14. GALLERY

Halaman `/galeri/` harus menampilkan foto produk, paket, kemasan, dan hasil pesanan yang benar-benar dimiliki atau diizinkan untuk dipublikasikan.

### Features

- Grid galeri responsif.
- Gambar dapat dibuka dalam tampilan lebih besar jika interaksi tersebut berguna.
- Caption opsional.
- Alt text untuk aksesibilitas.
- Urutan tampilan yang dapat dikelola melalui CMS.
- Status draft/published atau active/inactive sesuai model konten.
- CTA menuju katalog atau WhatsApp jika relevan.

Jangan menggunakan gambar stok seolah-olah merupakan dokumentasi pesanan nyata Rasanesia. Jika gambar ilustrasi digunakan, identifikasi secara jujur.

## 15. FAQ, CONTACT, ABOUT, AND POLICIES

### 15.1 FAQ

FAQ harus dapat dikelola melalui CMS dan menjawab pertanyaan yang benar-benar relevan, misalnya:

- Cara memesan.
- Minimum order jika berlaku.
- Kustomisasi snack box.
- Waktu pemesanan.
- Pengiriman dan pengambilan.
- Pembayaran.
- Ketersediaan produk.

Jangan menampilkan jawaban definitif untuk kebijakan yang belum disepakati.

### 15.2 Contact

Halaman Kontak harus menampilkan kanal kontak yang telah dikonfirmasi, CTA WhatsApp, area layanan, dan informasi relevan lainnya.

Jangan memublikasikan alamat atau kontak yang belum disetujui.

### 15.3 About

Halaman Tentang Rasanesia menjelaskan brand dan penawaran bisnis berdasarkan informasi nyata. Jangan mengarang sejarah perusahaan, kapasitas produksi, pengalaman, atau klaim keahlian.

### 15.4 Privacy and ordering terms

- Kebijakan privasi harus menjelaskan data yang benar-benar dikumpulkan dan bagaimana data tersebut digunakan.
- Jangan mengklaim data disimpan dengan aman, dihapus otomatis, atau tidak dibagikan jika implementasinya belum diverifikasi.
- Ketentuan pemesanan harus mengikuti kebijakan bisnis yang benar.
- Jika formulir hanya menyusun pesan WhatsApp dan tidak menyimpan data di server, jangan menyatakan website menyimpan pesanan secara permanen.
- Jika analytics, cookies non-esensial, atau layanan pihak ketiga digunakan, dokumentasikan sesuai perilaku aktual.

## 16. CMS AND CONTENT MANAGEMENT

### 16.1 Platform

Gunakan Sanity CMS dan Sanity Studio sesuai rancangan arsitektur utama, kecuali audit implementasi menunjukkan hambatan teknis atau batas paket yang membuat rancangan perlu direvisi.

Frontend menggunakan Astro, TypeScript, dan Tailwind CSS.

Hosting target adalah Cloudflare Pages dengan dukungan SSR melalui adapter yang sesuai apabila dibutuhkan agar konten CMS yang dipublikasikan dapat ditampilkan tanpa rebuild frontend setiap kali konten berubah.

### 16.2 Content types

CMS setidaknya harus mendukung model konten berikut sesuai halaman yang diimplementasikan:

**Product**
- Nama.
- Slug.
- Foto utama.
- Galeri gambar opsional.
- Kategori.
- Deskripsi.
- Harga dan satuan harga jika tersedia.
- Informasi isi atau porsi jika relevan.
- Minimum order jika berlaku.
- Status ketersediaan jika benar-benar dikelola.
- Featured status.
- Urutan tampilan.
- Draft/published.

**Snack box package**
- Nama.
- Slug.
- Foto.
- Deskripsi.
- Harga dan satuan harga.
- Daftar isi.
- Minimum order jika berlaku.
- Ketentuan pemesanan jika tersedia.
- Featured status.
- Urutan tampilan.
- Draft/published.

**Gallery item**
- Gambar.
- Caption.
- Alt text.
- Urutan tampilan.
- Draft/published.

**FAQ**
- Pertanyaan.
- Jawaban.
- Urutan.
- Status publikasi.

**Site settings**
- Nama dan identitas brand.
- Tagline.
- Nomor WhatsApp Business.
- Informasi kontak yang disetujui.
- Informasi area layanan.
- Tautan media sosial jika tersedia.
- Metadata situs yang relevan.

**Additional content**
- Konten Custom Pesanan, Catering, Cara Pesan, About, dan Area Layanan harus dapat diedit melalui CMS apabila konten tersebut termasuk dalam kebutuhan pengelolaan pemilik.
- Jangan mewajibkan pemilik mengubah kode untuk memperbarui harga, isi paket, gambar, deskripsi, FAQ, atau konten yang ditetapkan sebagai CMS-managed.

### 16.3 Client editing experience

Pemilik bisnis harus dapat:

- Menambahkan produk.
- Mengedit nama, foto, deskripsi, harga, dan isi paket.
- Mengatur kategori dan urutan tampilan.
- Menandai konten aktif atau tidak aktif.
- Mengelola galeri.
- Mengedit FAQ dan konten yang didukung CMS.
- Menyimpan draft dan memublikasikan perubahan.
- Melihat preview gambar sebelum dipublikasikan jika didukung antarmuka Studio.

Field penting harus memiliki label yang jelas, validasi, dan petunjuk yang memadai. Gunakan struktur yang mudah dipahami oleh pengguna nonteknis.

### 16.4 CMS validation

- Nama dan slug wajib tersedia untuk dokumen yang dipublikasikan.
- Slug harus unik.
- Harga tidak boleh negatif.
- Harga yang kosong harus diperlakukan sebagai tidak tersedia, bukan nol.
- Field wajib harus divalidasi sebelum publikasi.
- Gambar dan alt text harus didukung sesuai kebutuhan aksesibilitas.
- Konten yang tidak dipublikasikan tidak boleh muncul di halaman publik.
- Perubahan konten harus memiliki fallback jika field opsional kosong.

## 17. IMAGE STORAGE AND DELIVERY

- Foto produk dan galeri disimpan melalui media storage/CDN Sanity, bukan di-commit ke GitHub setiap kali pemilik mengganti foto.
- Dokumen CMS menyimpan referensi gambar dan metadata terkait.
- GitHub menyimpan source code, konfigurasi proyek yang aman, dan file aplikasi.
- Cloudflare Pages menyajikan frontend.
- Optimalkan gambar menggunakan fitur image CDN atau image transformation yang sesuai.
- Gunakan ukuran gambar yang sesuai kebutuhan tampilan, format modern jika didukung, dan lazy loading untuk gambar di luar viewport.
- Hindari mengunduh gambar resolusi penuh untuk thumbnail.
- Jangan menyimpan secret atau token CMS di repository publik.
- Verifikasi kuota storage, bandwidth, transformasi gambar, dan ketentuan paket layanan sebelum deployment.
- Jangan menjanjikan penyimpanan atau bandwidth tanpa batas.

## 18. CONTENT UPDATE AND DEPLOYMENT ARCHITECTURE

### 18.1 Desired behavior

Perubahan konten yang telah dipublikasikan melalui CMS harus dapat terlihat tanpa mengharuskan pemilik mengedit source code atau menjalankan deployment manual.

Untuk memenuhi kebutuhan tersebut, pilih salah satu mekanisme yang telah diuji:

**Preferred:** Astro SSR pada Cloudflare Pages dengan fetch konten CMS pada request halaman atau melalui mekanisme cache yang memiliki invalidation/refresh terdefinisi.

### 18.2 Update rules

- Perubahan source code tetap melalui proses build dan deployment.
- Perubahan konten CMS tidak boleh secara rutin mewajibkan rebuild frontend jika arsitektur SSR sudah digunakan.
- Tentukan dan dokumentasikan strategi caching agar konten baru muncul sesuai target waktu pembaruan yang diuji.
- Jangan mengklaim perubahan langsung terlihat seketika tanpa menguji cache, CDN, dan publikasi CMS.
- Jika arsitektur akhirnya menggunakan static generation, wajib menjelaskan bahwa pembaruan konten memerlukan rebuild atau mekanisme revalidation yang benar-benar diimplementasikan.
- Jangan mencampur asumsi static-only dengan klaim bahwa konten selalu diperbarui secara dinamis.
- Gunakan GitHub untuk version control dan deployment yang dipicu oleh perubahan kode.

### 18.3 Free-tier constraints

Target biaya layanan berulang adalah serendah mungkin, idealnya nol pada tahap awal.

Namun:

- Paket gratis tidak boleh dianggap gratis selamanya.
- Kuota dan ketentuan layanan harus diverifikasi sebelum deployment dan dipantau selama penggunaan.
- Domain kustom dapat menimbulkan biaya.
- Jangan memilih arsitektur yang melanggar ketentuan paket gratis.
- Jika kebutuhan melampaui kuota, jelaskan opsi upgrade, optimasi, atau alternatif sebelum terjadi biaya yang tidak disetujui.
- Pemilik harus memahami komponen layanan yang digunakan dan potensi biaya di masa depan.

## 19. MOBILE-FIRST DESIGN AND VISUAL SYSTEM

Gunakan identitas visual Rasanesia yang menggabungkan nuansa tradisional Indonesia dengan UI modern.

### 19.1 Design tokens

- Brown: `#70452E`
- Warm cream: `#F7F0E3`
- Leaf green: `#65734B`
- Gold: `#D99A55`
- Warm white: `#FFFDF8`

Typography:
- Heading: Lora atau Playfair Display.
- Body: Inter atau Nunito Sans.

Gunakan pilihan font yang konsisten dengan master design yang telah disepakati. Jangan memasukkan semua variasi font tanpa kebutuhan.

### 19.2 Design rules

- Utamakan foto makanan berkualitas.
- Gunakan ornamen tradisional secara terkendali.
- Pertahankan kontras teks yang baik.
- Hindari dekorasi yang mengganggu CTA atau informasi produk.
- Gunakan spacing, radius, komponen, dan hierarchy yang konsisten.
- Gunakan loading, empty, error, dan success states yang jelas.

### 19.3 Mobile requirements

- Layout harus nyaman pada layar ponsel kecil.
- Tidak boleh ada horizontal overflow yang tidak disengaja.
- Teks, harga, dan CTA harus mudah dibaca dan ditekan.
- Formulir harus menggunakan input type dan keyboard yang sesuai.
- Floating WhatsApp tidak boleh menutupi konten atau kontrol.
- Navigasi mobile harus ringkas dan dapat dioperasikan dengan satu tangan.
- Gambar tidak boleh menyebabkan layout shift yang tidak perlu.
- Uji tampilan pada beberapa ukuran viewport dan perangkat nyata jika tersedia.

## 20. ACCESSIBILITY, PERFORMANCE, AND SEO

### 20.1 Accessibility

- Gunakan semantic HTML.
- Pastikan semua fungsi utama dapat digunakan dengan keyboard.
- Sediakan accessible name untuk tombol dan input.
- Pastikan fokus terlihat.
- Sediakan alt text yang relevan.
- Gunakan label formulir dan pesan validasi yang jelas.
- Jangan menyampaikan status hanya melalui warna.
- Hormati preferensi reduced motion jika animasi digunakan.

### 20.2 Performance

- Optimalkan ukuran gambar dan font.
- Hindari JavaScript yang tidak diperlukan.
- Gunakan lazy loading untuk gambar non-kritis.
- Prioritaskan konten utama dan CTA.
- Hindari dependensi berat tanpa alasan.
- Periksa error console, request gagal, dan layout shift.
- Lakukan pengujian performa dengan perangkat dan jaringan yang relevan.

### 20.3 SEO

Setiap halaman utama harus memiliki:

- Title yang unik.
- Meta description yang relevan.
- URL yang konsisten.
- Heading hierarchy yang logis.
- Canonical URL jika sesuai.
- Open Graph metadata jika dibutuhkan.
- Sitemap dan robots configuration yang benar.
- Structured data hanya jika jenis data dan persyaratan kelayakannya terpenuhi.

Untuk SEO lokal:

- Gunakan Surakarta dan Sukoharjo secara natural pada konten yang relevan.
- Jangan membuat halaman doorway yang hanya mengganti nama lokasi tanpa nilai informasi.
- Jangan mempublikasikan alamat bisnis atau koordinat yang belum dikonfirmasi.
- Jangan menambahkan rating, jam buka, atau business details palsu ke structured data.

## 21. SECURITY AND PRIVACY

- Simpan token dan secret di environment variables atau secret management yang sesuai.
- Jangan mengekspos private CMS token di client bundle.
- Gunakan public read access yang sesuai untuk konten publik dan protected access untuk Studio.
- Terapkan validasi input pada sisi yang sesuai.
- Jangan memasukkan input pengguna ke HTML mentah tanpa sanitasi yang sesuai.
- Jangan mengumpulkan data pribadi yang tidak diperlukan.
- Jangan menyimpan data inquiry di database kecuali fitur tersebut memang dirancang, diimplementasikan, dan didokumentasikan.
- Uji error handling saat CMS gagal diakses.
- Tampilkan fallback yang layak ketika data konten gagal dimuat; jangan membuat halaman crash tanpa penanganan.

## 22. FEATURES NOT INCLUDED BY DEFAULT

Fitur berikut tidak termasuk dalam ruang lingkup awal kecuali secara eksplisit disetujui sebagai pekerjaan tambahan:

- Customer account dan login.
- Shopping cart persisten.
- Checkout dan payment gateway otomatis.
- Sinkronisasi stok real-time.
- Sistem booking dengan slot kapasitas real-time.
- Order management dashboard.
- Database pesanan permanen.
- Otomatisasi notifikasi order.
- Loyalty points atau membership.
- Sistem promo dan kupon kompleks.
- Blog dengan pipeline editorial rutin.
- Integrasi pihak ketiga yang memerlukan biaya atau akun berbayar.

Fitur dapat ditambahkan kemudian setelah ada kebutuhan bisnis, data operasional, dan keputusan biaya yang jelas.

## 23. IMPLEMENTATION PRIORITY

Urutan implementasi berdasarkan dampak terhadap konversi dan risiko:

### P0 — Essential launch requirements

1. Audit repository, route, komponen, dan arsitektur yang sudah ada.
2. Pastikan navigasi dan semua halaman utama berfungsi.
3. Selesaikan katalog dan detail produk.
4. Selesaikan katalog snack box dan detail paket.
5. Integrasikan WhatsApp dengan konteks produk atau paket.
6. Pastikan CMS dapat mengelola data produk dan foto.
7. Pastikan mobile layout berfungsi dengan baik.
8. Konfigurasikan nomor WhatsApp dan data bisnis yang telah dikonfirmasi.
9. Selesaikan metadata dasar, SEO, error handling, dan deployment.

### P1 — Conversion improvements

1. Formulir custom snack box.
2. Inquiry catering.
3. Halaman Cara Pesan.
4. FAQ dan Area Layanan.
5. Galeri yang dapat dikelola melalui CMS.
6. Penjadwalan inquiry.
7. Estimasi anggaran hanya untuk data yang lengkap.

### P2 — Improvements after validation

1. Pencarian produk yang lebih lengkap jika katalog berkembang.
2. Filter tambahan.
3. Produk terkait.
4. Peningkatan analitik konversi dengan memperhatikan privasi.
5. Otomatisasi operasional jika volume pesanan membenarkannya.

Jangan menunda peluncuran seluruh website hanya karena fitur P1 atau P2 belum selesai, selama P0 dan persyaratan bisnis yang diperlukan untuk peluncuran telah terpenuhi.

## 24. ACCEPTANCE CRITERIA

Implementasi dianggap memenuhi addendum hanya jika hasil berikut telah diuji.

### Navigation and pages

- Semua tautan navigasi mengarah ke tujuan yang benar.
- Tidak ada route utama yang error tanpa penanganan.
- Halaman produk dan paket dapat diakses melalui slug.
- Navigasi mobile dapat digunakan dengan nyaman.

### Catalog and CMS

- Pemilik dapat membuat, mengedit, memublikasikan, dan menonaktifkan konten tanpa mengedit kode.
- Perubahan nama, foto, harga, dan isi paket tampil sesuai data CMS.
- Konten draft tidak muncul di situs publik.
- Slug duplikat dan harga negatif ditolak oleh validasi.
- Field opsional kosong tidak merusak layout.

### WhatsApp

- Nomor WhatsApp berasal dari konfigurasi yang benar.
- CTA membuka URL yang valid.
- Ringkasan pesan sesuai konteks halaman atau formulir.
- Karakter khusus tidak merusak isi pesan.
- Klik WhatsApp tidak ditampilkan sebagai bukti bahwa order telah terkonfirmasi.

### Custom and catering forms

- Field wajib dan opsional berperilaku sesuai spesifikasi.
- Validasi jumlah dan format tanggal berjalan.
- Data yang dimasukkan masuk ke ringkasan dengan benar.
- Formulir memberikan feedback yang jelas.
- Pengguna diberi tahu bahwa pengiriman pesan dan konfirmasi order adalah proses terpisah.

### Scheduling and estimate

- Tidak ada klaim ketersediaan real-time tanpa data yang mendukungnya.
- Estimasi hanya muncul ketika konfigurasi harga memadai.
- Hasil perhitungan dapat diverifikasi dengan unit test.
- Biaya yang belum diketahui tidak diam-diam dimasukkan sebagai nol.

### Image and responsive behavior

- Gambar tampil dengan ukuran yang sesuai.
- Tidak ada gambar rusak pada alur utama.
- Layout tidak mengalami horizontal overflow yang tidak disengaja.
- CTA tidak menutupi kontrol atau konten penting.
- Loading dan empty states tampil dengan layak.

### SEO, security, and deployment

- Metadata halaman utama tersedia.
- Sitemap dan robots configuration benar.
- Tidak ada private token yang terekspos di browser.
- Error CMS memiliki fallback.
- Perubahan konten CMS mengikuti perilaku update yang telah didokumentasikan dan diuji.
- Deployment berhasil dan route utama diuji pada environment target.

## 25. REQUIRED HANDOVER

Sebelum pekerjaan dinyatakan selesai, sediakan:

1. Ringkasan arsitektur aktual.
2. Daftar halaman dan fitur yang telah diimplementasikan.
3. Panduan penggunaan Sanity Studio untuk pemilik bisnis.
4. Panduan menambah dan mengubah produk, paket, serta foto.
5. Panduan memperbarui konten dan memublikasikannya.
6. Daftar environment variables yang dibutuhkan tanpa membocorkan secret.
7. Panduan deployment dan rollback yang relevan.
8. Daftar layanan eksternal, batas paket, dan potensi biaya.
9. Hasil pengujian acceptance criteria.
10. Daftar fitur yang belum selesai atau menunggu data/keputusan pemilik.

Jangan menyatakan pekerjaan selesai jika terdapat blocker yang belum diungkapkan.

---

## FINAL IMPLEMENTATION PRINCIPLES

- Website harus berorientasi pada transaksi, bukan sekadar banyak halaman.
- CMS harus mempermudah pemilik mengelola konten tanpa coding.
- WhatsApp adalah kanal inquiry dan koordinasi, bukan bukti otomatis bahwa order diterima.
- Estimasi bukan quotation final.
- Penjadwalan inquiry bukan booking otomatis.
- Data bisnis yang belum dikonfirmasi tidak boleh diarang.
- Perubahan konten dan perubahan kode harus memiliki alur deployment yang jelas.
- Target biaya rendah tidak boleh mengorbankan keamanan, reliabilitas, atau kepatuhan terhadap batas layanan.
- Semua fitur harus diuji sebelum dinyatakan selesai.
- Jika ada konflik spesifikasi atau kebutuhan bisnis yang belum jelas, hentikan bagian yang terdampak dan minta keputusan sebelum meneruskan implementasi.


---

# ADDENDUM 2: IN-WEBSITE ADMIN DASHBOARD UNTUK UMKM
## Pengelolaan Konten Mandiri, Cepat, dan Ramah Pengguna Non-Teknis

**Latar Belakang & Kebutuhan Bisnis:**
Berdasarkan kebutuhan operasional nyata pelaku UMKM di Surakarta & Sukoharjo, tidak semua pengelola bisnis memiliki pemahaman teknis untuk mengelola CMS pihak ketiga yang kompleks (seperti membuat akun Sanity, konfigurasi API Token, atau memodifikasi file kode).

Untuk menghilangkan hambatan tersebut, website Rasanesia dilengkapi dengan **In-Website Admin Dashboard** di rute `/admin/` yang dapat diakses langsung oleh pemilik bisnis dari laptop maupun ponsel tanpa instalasi aplikasi tambahan.

---

### 1. Spesifikasi Fitur In-Website Admin

1. **Akses Terproteksi PIN**:
   - Rute `/admin/` dilindungi sistem keamanan PIN sederhana (PIN bawaan: `123456` yang dapat diubah kapan saja).
   - Tautan tersembunyi/discreet di bagian footer: *"Kelola Toko (Admin)"*.
2. **Pengelolaan Nomor WhatsApp & Profil Usaha**:
   - Pemilik dapat langsung mengganti nomor WhatsApp Business penerima pesanan.
   - Perubahan langsung memperbarui seluruh tautan Click-to-Chat di Beranda, Katalog, Formulir Custom, Katering, dan Keranjang Belanja.
   - Pengaturan jam buka dan pengumuman operasional dapur produksi.
3. **Pengelolaan Menu Jajanan Pasar & Harga**:
   - Mengubah harga per satuan kue secara instan.
   - Mengubah status produk: *Tersedia* atau *Habis/Tidak Aktif*.
   - Menambahkan varian jajanan tradisional baru dengan foto dan deskripsi.
   - Menghapus jajanan yang sudah tidak diproduksi.
4. **Pengelolaan Paket Snack Box**:
   - Mengubah harga paket snack box per box.
   - Mengubah komposisi daftar isian kue dalam box.
   - Mengubah batas minimal pemesanan (min order).
5. **Cadangan Data & Portabilitas (Backup & Restore)**:
   - Fitur **Download Backup JSON**: Pemilik dapat mengunduh salinan seluruh data toko ke file cadangan.
   - Fitur **Upload Restore JSON**: Memungkinkan pemindahan data toko ke perangkat lain dengan sekali klik.
   - Fitur **Reset ke Data Bawaan (Default)**: Mengembalikan seluruh menu dan harga ke konfigurasi awal jika terjadi kesalahan pengisian.

---

### 2. Prinsip Kemudahan UMKM

- **Zero-Code**: 100% menggunakan formulir visual dan tombol ramah sentuhan.
- **Mobile-Friendly**: Pemilik toko dapat mengupdate harga atau status stok langsung dari browser ponsel saat sedang berada di dapur produksi.
- **Instan**: Perubahan data langsung diterapkan tanpa perlu menunggu proses build atau deploy ulang.


---

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

---

# ADDENDUM SISTEM PENGELOLA TOKO UMKM (IN-WEBSITE ADMIN EXPANSION)
**Tanggal Pengesahan:** 2026-10-27  
**Fokus Pembaruan:** Fleksibilitas Pengelolaan Mandiri, Upload Foto Terkompresi, Full CRUD Snack Box, Kustomisasi Custom Snack, dan Manajemen Layanan Catering.

### 1. Fitur Upload Foto Mandiri dari HP & Komputer
- Pemilik toko dapat langsung memilih foto dari galeri kamera ponsel maupun komputer saat menambah jajanan, mengubah paket snack box, maupun menambah paket katering.
- **Auto-Compression Engine (HTML5 Canvas)**: Sistem secara otomatis me-resize gambar berukuran besar (misal 5MB - 12MB dari kamera ponsel) menjadi resolusi web-ready (maksimal 800px) dengan format JPEG (quality 0.8), menghasilkan string Data URL ringan (~60KB - 120KB). Hal ini menjamin performa website tetap gesit dan kuota penyimpanan lokal tidak cepat penuh.
- Opsi memasukkan tautan URL gambar statis tetap dipertahankan sebagai alternatif.

### 2. Full CRUD Paket Snack Box
- **Create**: Formulir penambahan paket snack box baru (Nama paket, harga per box, batas minimal pemesanan, deskripsi lengkap, rincian isian kue, dan upload foto).
- **Read**: Tampilan kartu paket rapi dengan visual foto dan indikator min order.
- **Update**: Modal formulir edit lengkap yang memungkinkan pengubahan seluruh atribut paket secara aman.
- **Delete**: Fasilitas penghapusan paket yang sudah tidak diproduksi dengan konfirmasi pencegahan salah klik.
- **Quick Batch Update**: Kemampuan mengubah harga per box dan batas min order langsung pada baris tabel daftar paket.

### 3. Pengelolaan Mandiri Custom Snack Box
- **Aturan Pemesanan**: Menentukan batas minimal kue (default: 2 kue) dan batas maksimal kue (default: 6 kue) per box yang dapat dipilih pengunjung.
- **Batas Min Order**: Menetapkan jumlah minimal pemesanan box (default: 20 box).
- **CRUD Kemasan & Wadah Box**: Menambah, mengedit, atau menghapus varian kemasan (misal: Kraft Eco Box, Besek Bambu Tradisional, Dus Motif Batik Surakarta, Box Jendela Mika) beserta biaya tambahannya (+Rp).
- **Live Sync**: Setiap perubahan aturan atau opsi kemasan langsung tersinkronisasi ke formulir rancang custom snack box publik.

### 4. Pengelolaan Mandiri Layanan Catering
- **Full CRUD Paket Katering**: Mengelola paket Buffet Prasmanan Mewah, Nasi Kotak / Bento Box, Coffee Break Tampah Jajanan Pasar, dan Tumpeng Tradisional.
- **Atribut Terkelola**: Nama paket, kategori layanan, tarif estimasi per pax/porsi, batas minimal pax (misal: min 30-50 pax), rincian menu hidangan, dan upload foto presentasi.
- **Integrasi Formulir Inquiry**: Pilihan paket yang dikelola otomatis tersinkronisasi ke dropdown formulir penawaran katering dan mengarahkan rincian pesan resmi ke WhatsApp Business.

### 5. Cadangan Data Terpadu (Full Backup & Restore v2.0)
- Tombol **Download Backup Toko (JSON)** mencakup seluruh data:
  1. Konfigurasi kontak WhatsApp & jam operasional toko.
  2. Seluruh katalog jajanan pasar, status stok, dan harga satuan.
  3. Seluruh paket snack box beserta isian dan fotonya.
  4. Seluruh paket katering beserta menu dan tarif per pax.
  5. Pengaturan aturan dan pilihan kemasan custom snack box.
- Fitur **Upload File Restore** memungkinkan pemulihan data instan saat berpindah perangkat.
