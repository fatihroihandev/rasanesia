/**
 * Client-Side Live Sync Helper
 * Memastikan perubahan harga, ketersediaan produk, snack box, catering, dan nomor WhatsApp
 * yang disimpan pemilik toko di /admin/ langsung terlihat di seluruh halaman website
 * tanpa memerlukan build ulang.
 */

import { 
  getStoredProducts, 
  getStoredSnackBoxes, 
  getStoredConfig,
  getStoredCatering,
  getStoredCustomConfig 
} from './store';

export function initClientSync(): void {
  if (typeof window === 'undefined') return;

  try {
    // 1. Sync WhatsApp number across all wa.me links
    const config = getStoredConfig();
    if (config && config.whatsappNumber) {
      const cleanPhone = String(config.whatsappNumber).replace(/[^0-9]/g, '');
      document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
        try {
          const href = el.getAttribute('href') || '';
          const url = new URL(href);
          const currentText = url.searchParams.get('text') || '';
          el.setAttribute('href', `https://wa.me/${cleanPhone}?text=${encodeURIComponent(currentText)}`);
        } catch (e) {
          // ignore invalid URLs
        }
      });
    }

    // 2. Sync Products (Jajanan Pasar)
    const storedProducts = getStoredProducts();
    if (storedProducts && storedProducts.length > 0) {
      storedProducts.forEach(prod => {
        // Update price display
        document.querySelectorAll(`[data-sync-product-price="${prod.id}"]`).forEach(el => {
          if (prod.price) {
            el.textContent = `Rp ${prod.price.toLocaleString('id-ID')}`;
          } else {
            el.textContent = 'Hubungi via WA';
          }
        });

        // Update add-to-cart buttons
        document.querySelectorAll(`[data-add-to-cart][data-id="${prod.id}"]`).forEach(btn => {
          if (prod.price) {
            btn.setAttribute('data-price', String(prod.price));
          }
          if (prod.available === false) {
            btn.setAttribute('disabled', 'true');
            btn.classList.add('opacity-50', 'cursor-not-allowed');
            (btn as HTMLElement).innerText = 'Habis / Nonaktif';
          }
        });

        // Update availability badge if element exists
        document.querySelectorAll(`[data-sync-product-status="${prod.id}"]`).forEach(badge => {
          if (prod.available === false) {
            badge.textContent = 'Habis';
            badge.classList.remove('bg-brand-green/20', 'text-brand-green');
            badge.classList.add('bg-red-100', 'text-red-700');
          }
        });
      });
    }

    // 3. Sync Snack Boxes
    const storedBoxes = getStoredSnackBoxes();
    if (storedBoxes && storedBoxes.length > 0) {
      storedBoxes.forEach(box => {
        // Update price display
        document.querySelectorAll(`[data-sync-snackbox-price="${box.id}"]`).forEach(el => {
          el.textContent = `Rp ${box.price.toLocaleString('id-ID')}`;
        });

        // Update min order display
        document.querySelectorAll(`[data-sync-snackbox-min="${box.id}"]`).forEach(el => {
          el.textContent = `Min ${box.minOrder} box`;
        });

        // Update add-to-cart button
        document.querySelectorAll(`[data-add-to-cart][data-id="${box.id}"]`).forEach(btn => {
          btn.setAttribute('data-price', String(box.price));
        });
      });
    }

    // 4. Sync Catering Packages
    const storedCatering = getStoredCatering();
    if (storedCatering && storedCatering.length > 0) {
      storedCatering.forEach(cat => {
        document.querySelectorAll(`[data-sync-catering-price="${cat.id}"]`).forEach(el => {
          el.textContent = `Rp ${cat.pricePerPax.toLocaleString('id-ID')}`;
        });
        document.querySelectorAll(`[data-sync-catering-min="${cat.id}"]`).forEach(el => {
          el.textContent = `Min ${cat.minPax} pax`;
        });
      });
    }

    // 5. Sync Custom Snack Config
    const customCfg = getStoredCustomConfig();
    if (customCfg) {
      const minOrderNote = document.getElementById('custom-min-order-note');
      if (minOrderNote) {
        minOrderNote.textContent = `Minimal Pemesanan: ${customCfg.minOrderBoxes} box`;
      }
    }

  } catch (err) {
    console.warn('[Rasanesia] Client sync notice:', err);
  }
}
