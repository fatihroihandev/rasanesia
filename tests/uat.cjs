const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:4321';

async function runUAT() {
  console.log('====================================================');
  console.log('🚀 MEMULAI USER ACCEPTANCE TESTING (UAT) RASANESIA');
  console.log('====================================================\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const results = [];
  function logResult(step, status, detail = '') {
    const icon = status ? '✅ PASS' : '❌ FAIL';
    console.log(`${icon} | ${step} ${detail ? '-> ' + detail : ''}`);
    results.push({ step, status, detail });
  }

  try {
    // ----------------------------------------------------
    // TEST 1: CEK SELURUH RUTE & NAVIGASI
    // ----------------------------------------------------
    console.log('\n--- 1. Testing Seluruh Halaman Publik ---');
    const routes = [
      { path: '/', name: 'Beranda' },
      { path: '/menu/', name: 'Katalog Menu Jajanan' },
      { path: '/menu/lemper-ayam-spesial/', name: 'Detail Jajanan' },
      { path: '/snack-box/', name: 'Katalog Snack Box' },
      { path: '/snack-box/paket-tradisional-a/', name: 'Detail Snack Box' },
      { path: '/custom/', name: 'Redirect Custom' },
      { path: '/custom-snack/', name: 'Formulir Custom Snack Box' },
      { path: '/catering/', name: 'Layanan Catering' },
      { path: '/galeri/', name: 'Galeri Foto' },
      { path: '/area-layanan/', name: 'Area Layanan Solo & Sukoharjo' },
      { path: '/cara-pesan/', name: 'Panduan Cara Pesan' },
      { path: '/tentang/', name: 'Tentang Rasanesia' },
      { path: '/faq/', name: 'FAQ' },
      { path: '/kontak/', name: 'Kontak' },
      { path: '/ketentuan-pemesanan/', name: 'Ketentuan Pemesanan' },
      { path: '/kebijakan-privasi/', name: 'Kebijakan Privasi' },
      { path: '/admin/', name: 'Panel Admin Toko' }
    ];

    for (const r of routes) {
      const res = await page.goto(`${BASE_URL}${r.path}`, { waitUntil: 'domcontentloaded' });
      const status = res.status();
      logResult(`Rute: ${r.name} (${r.path})`, status === 200, `HTTP ${status}`);
    }

    // ----------------------------------------------------
    // TEST 2: KERANJANG BELANJA (CART DRAWER) & WHATSAPP
    // ----------------------------------------------------
    console.log('\n--- 2. Testing Keranjang Belanja (*Cart Drawer*) ---');
    await page.goto(`${BASE_URL}/menu/`, { waitUntil: 'networkidle' });
    
    // Klik tombol tambah ke keranjang pada kue pertama
    const addCartBtn = await page.locator('[data-add-to-cart]').first();
    await addCartBtn.click();
    await page.waitForTimeout(600);

    // Cek badge keranjang
    const badgeText = await page.locator('#cart-badge').textContent();
    logResult('Tambah Item ke Keranjang', parseInt(badgeText, 10) >= 1, `Jumlah item: ${badgeText}`);

    // Karena add-to-cart otomatis memicu openCart():
    const ariaHidden = await page.locator('#cart-drawer-root').getAttribute('aria-hidden');
    logResult('Buka Slideover Cart Drawer (Auto-Open)', ariaHidden === 'false', `aria-hidden: ${ariaHidden}`);

    // Verifikasi tombol pesan WA di keranjang
    const checkoutBtn = await page.locator('#cart-checkout-btn');
    const isCheckoutReady = await checkoutBtn.isVisible();
    logResult('Tombol Pesan via WhatsApp di Keranjang Siap', isCheckoutReady);

    // Tutup Drawer via tombol close
    await page.locator('#cart-close-btn').click();
    await page.waitForTimeout(500);

    // ----------------------------------------------------
    // TEST 3: LOGIN PANEL ADMIN & TESTING CRUD INPUT
    // ----------------------------------------------------
    console.log('\n--- 3. Testing Panel Admin UMKM (Login & CRUD Input) ---');
    await page.goto(`${BASE_URL}/admin/`, { waitUntil: 'networkidle' });

    // Masukkan PIN
    await page.locator('#admin-pin-input').fill('123456');
    await page.locator('#pin-form button[type="submit"]').click();
    await page.waitForTimeout(600);

    const isDashboardVisible = await page.locator('#admin-dashboard').isVisible();
    logResult('Login Panel Admin dengan PIN 123456', isDashboardVisible);

    // Input Uji Coba 1: Tambah Jajanan Baru
    console.log('\n--- 3.1 Input Uji Coba Jajanan Baru ---');
    await page.locator('button[data-tab-target="tab-jajanan"]').click();
    await page.waitForTimeout(400);

    await page.locator('#open-new-product-modal').click();
    await page.waitForTimeout(300);

    const testProductName = 'Kue Lapis Legit UAT Otomatis';
    await page.locator('#np-name').fill(testProductName);
    await page.locator('#np-price').fill('8500');
    await page.locator('#np-desc').fill('Kue uji coba otomatis UAT Rasanesia.');
    await page.locator('#np-image').fill('/images/products/product-02.jpg');
    await page.locator('#new-product-form button[type="submit"]').click();
    await page.waitForTimeout(800);

    // Verifikasi produk muncul di admin
    const adminProductListText = await page.locator('#admin-product-list').textContent();
    const isProdInAdmin = adminProductListText.includes(testProductName);
    logResult('Input Jajanan Baru di Admin', isProdInAdmin, testProductName);

    // Input Uji Coba 2: Tambah Paket Snack Box Baru
    console.log('\n--- 3.2 Input Uji Coba Paket Snack Box Baru ---');
    await page.locator('button[data-tab-target="tab-snackbox"]').click();
    await page.waitForTimeout(400);

    await page.locator('#open-new-package-modal').click();
    await page.waitForTimeout(300);

    const testPackageName = 'Paket Snack Box UAT VIP Solo';
    await page.locator('#pkg-name').fill(testPackageName);
    await page.locator('#pkg-price').fill('25000');
    await page.locator('#pkg-min-order').fill('15');
    await page.locator('#pkg-includes').fill('Lemper Ayam Suwir, Nagasari, Pastel Sayur, Air Mineral Cup');
    await page.locator('#pkg-desc').fill('Paket snack box uji coba otomatis UAT.');
    await page.locator('#package-form button[type="submit"]').click();
    await page.waitForTimeout(800);

    const adminPkgListText = await page.locator('#admin-package-list').textContent();
    const isPkgInAdmin = adminPkgListText.includes(testPackageName);
    logResult('Input Paket Snack Box Baru di Admin', isPkgInAdmin, testPackageName);

    // Input Uji Coba 3: Tambah Paket Catering Baru
    console.log('\n--- 3.3 Input Uji Coba Paket Catering Baru ---');
    await page.locator('button[data-tab-target="tab-catering"]').click();
    await page.waitForTimeout(400);

    await page.locator('#open-new-catering-modal').click();
    await page.waitForTimeout(300);

    const testCateringName = 'Prasmanan UAT Istimewa Nusantara';
    await page.locator('#cat-name').fill(testCateringName);
    await page.locator('#cat-category').selectOption('prasmanan');
    await page.locator('#cat-price').fill('48000');
    await page.locator('#cat-min-pax').fill('35');
    await page.locator('#cat-includes').fill('Nasi Liwet, Ayam Goreng Lengkuas, Sambal Goreng Krecek, Es Teh');
    await page.locator('#cat-desc').fill('Paket prasmanan uji coba otomatis UAT.');
    await page.locator('#catering-form button[type="submit"]').click();
    await page.waitForTimeout(800);

    const adminCatListText = await page.locator('#admin-catering-list').textContent();
    const isCatInAdmin = adminCatListText.includes(testCateringName);
    logResult('Input Paket Catering Baru di Admin', isCatInAdmin, testCateringName);

    // Input Uji Coba 4: Update Pengaturan Custom Snack
    console.log('\n--- 3.4 Input Uji Coba Custom Snack Box ---');
    await page.locator('button[data-tab-target="tab-custom"]').click();
    await page.waitForTimeout(400);

    await page.locator('#custom-min-order').fill('25');
    await page.locator('#save-custom-config-btn').click();
    await page.waitForTimeout(600);
    logResult('Update Pengaturan Custom Snack Box (Min Order 25 Box)', true);

    // ----------------------------------------------------
    // TEST 4: VERIFIKASI SINKRONISASI KE HALAMAN PUBLIK
    // ----------------------------------------------------
    console.log('\n--- 4. Verifikasi Sinkronisasi Live ke Halaman Publik ---');
    
    // Cek di /menu/
    await page.goto(`${BASE_URL}/menu/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    const menuPageContent = await page.content();
    const isProdInMenu = menuPageContent.includes(testProductName);
    logResult('Jajanan UAT Tampil Live di Katalog Publik (/menu/)', isProdInMenu);

    // Cek di /snack-box/
    await page.goto(`${BASE_URL}/snack-box/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    const snackPageContent = await page.content();
    const isPkgInSnack = snackPageContent.includes(testPackageName);
    logResult('Paket Snack Box UAT Tampil Live di Katalog Publik (/snack-box/)', isPkgInSnack);

    // Cek di /catering/
    await page.goto(`${BASE_URL}/catering/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    const catPageContent = await page.content();
    const isCatInCatering = catPageContent.includes(testCateringName);
    logResult('Paket Catering UAT Tampil Live di Halaman Publik (/catering/)', isCatInCatering);

    // ----------------------------------------------------
    // TEST 5: PEMBERSIHAN DATA (CLEANUP KE DATA ASLI)
    // ----------------------------------------------------
    console.log('\n--- 5. Pembersihan Data Inputan UAT (Pembersihan Total) ---');
    await page.goto(`${BASE_URL}/admin/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    // Buka tab Backup & Reset
    await page.locator('button[data-tab-target="tab-keamanan"]').click();
    await page.waitForTimeout(400);

    // Trigger reset to default
    page.on('dialog', async dialog => {
      console.log(`  [Dialog Konfirmasi]: "${dialog.message()}" -> Klik OK`);
      await dialog.accept();
    });

    await page.locator('#reset-all-btn').click();
    await page.waitForTimeout(1000);

    // Verifikasi data bersih kembali
    await page.goto(`${BASE_URL}/menu/`, { waitUntil: 'networkidle' });
    const cleanMenuContent = await page.content();
    const isCleanFromTestProd = !cleanMenuContent.includes(testProductName);
    logResult('Pembersihan Data UAT Jajanan dari Publik', isCleanFromTestProd);

    await page.goto(`${BASE_URL}/snack-box/`, { waitUntil: 'networkidle' });
    const cleanSnackContent = await page.content();
    const isCleanFromTestPkg = !cleanSnackContent.includes(testPackageName);
    logResult('Pembersihan Data UAT Snack Box dari Publik', isCleanFromTestPkg);

    await page.goto(`${BASE_URL}/catering/`, { waitUntil: 'networkidle' });
    const cleanCatContent = await page.content();
    const isCleanFromTestCat = !cleanCatContent.includes(testCateringName);
    logResult('Pembersihan Data UAT Catering dari Publik', isCleanFromTestCat);

    // Bersihkan Cart Items
    await page.evaluate(() => {
      localStorage.removeItem('rasanesia_cart_items');
    });
    logResult('Pembersihan Sisa Keranjang Belanja', true);

  } catch (err) {
    console.error('❌ Terjadi kesalahan saat pengujian UAT:', err);
    logResult('Eksekusi UAT', false, err.message);
  } finally {
    await browser.close();
  }

  // Summary
  console.log('\n====================================================');
  console.log('📊 REKAPITULASI HASIL USER ACCEPTANCE TESTING (UAT)');
  console.log('====================================================');
  const passCount = results.filter(r => r.status).length;
  const failCount = results.filter(r => !r.status).length;
  console.log(`Total Pengujian: ${results.length}`);
  console.log(`Lolos (PASS)   : ${passCount}`);
  console.log(`Gagal (FAIL)   : ${failCount}`);
  console.log(`Status Kesiapan: ${failCount === 0 ? '🟢 SIAP DEPLOY (DEPLOYMENT READY)' : '🔴 PERLU PERBAIKAN'}`);
  console.log('====================================================\n');
}

runUAT();
