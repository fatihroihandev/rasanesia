/**
 * Client-Side Live Sync Helper
 * Memastikan penambahan produk, snack box, katering, serta perubahan harga dan nomor WhatsApp
 * yang disimpan pemilik toko di /admin/ langsung terlihat secara reaktif di seluruh halaman website
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
    const productGrid = document.getElementById('product-grid');
    const storedProducts = getStoredProducts();

    if (storedProducts && storedProducts.length > 0) {
      storedProducts.forEach(prod => {
        const existingEl = document.querySelector(`[data-sync-product-price="${prod.id}"]`);

        if (existingEl) {
          // Update existing item
          if (prod.price) {
            existingEl.textContent = `Rp ${prod.price.toLocaleString('id-ID')}`;
          } else {
            existingEl.textContent = 'Hubungi via WA';
          }

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

          document.querySelectorAll(`[data-sync-product-status="${prod.id}"]`).forEach(badge => {
            if (prod.available === false) {
              badge.textContent = 'Habis';
              badge.classList.remove('bg-brand-green/20', 'text-brand-green');
              badge.classList.add('bg-red-100', 'text-red-700');
            }
          });
        } else if (productGrid && prod.id.startsWith('prod-custom-')) {
          // Render newly added product dynamically
          const card = document.createElement('div');
          card.setAttribute('data-product-item', '');
          card.setAttribute('data-category', prod.category || 'jajanan');
          card.className = 'bg-brand-white border border-brand-cream-dark rounded-3xl overflow-hidden shadow-card hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group';

          card.innerHTML = `
            <div>
              <div class="aspect-[4/3] overflow-hidden bg-brand-cream relative">
                <img 
                  src="${prod.image}" 
                  alt="${prod.name}" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span class="absolute top-3 right-3 bg-brand-white/90 backdrop-blur-xs text-brand-brown text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  ${prod.tasteProfile || 'Tradisional'}
                </span>
              </div>
              <div class="p-5">
                <h3 class="font-serif font-bold text-base text-brand-dark mb-1 line-clamp-1">${prod.name}</h3>
                <p class="text-xs text-brand-muted line-clamp-2 leading-relaxed mb-4">${prod.description}</p>
                <div class="mb-4">
                  <span data-sync-product-price="${prod.id}" class="font-serif text-xl font-bold text-brand-brown">
                    Rp ${prod.price.toLocaleString('id-ID')}
                  </span>
                  <span class="text-xs text-brand-muted">/${prod.priceUnit || 'pcs'}</span>
                </div>
              </div>
            </div>
            <div class="p-5 pt-0">
              <button 
                type="button"
                data-add-to-cart
                data-id="${prod.id}"
                data-name="${prod.name}"
                data-price="${prod.price}"
                data-unit="${prod.priceUnit || 'pcs'}"
                data-image="${prod.image}"
                class="w-full bg-brand-brown hover:bg-brand-brown-dark text-brand-white text-xs font-semibold py-2.5 rounded-full shadow-xs transition-colors"
              >
                + Keranjang
              </button>
            </div>
          `;

          // Add to top of grid
          productGrid.prepend(card);

          // Bind add-to-cart event
          card.querySelector('[data-add-to-cart]')?.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('add-to-cart', {
              detail: {
                id: prod.id,
                name: prod.name,
                price: prod.price,
                unit: prod.priceUnit || 'pcs',
                image: prod.image,
                quantity: 1
              }
            }));
          });
        }
      });
    }

    // 3. Sync Snack Boxes
    const snackGrid = document.getElementById('snackbox-grid');
    const storedBoxes = getStoredSnackBoxes();

    if (storedBoxes && storedBoxes.length > 0) {
      storedBoxes.forEach(box => {
        const existingEl = document.querySelector(`[data-sync-snackbox-price="${box.id}"]`);

        if (existingEl) {
          existingEl.textContent = `Rp ${box.price.toLocaleString('id-ID')}`;
          document.querySelectorAll(`[data-sync-snackbox-min="${box.id}"]`).forEach(el => {
            el.textContent = `Min ${box.minOrder} box`;
          });
          document.querySelectorAll(`[data-add-to-cart][data-id="${box.id}"]`).forEach(btn => {
            btn.setAttribute('data-price', String(box.price));
          });
        } else if (snackGrid && box.id.startsWith('box-custom-')) {
          // Render newly added snackbox dynamically
          const card = document.createElement('div');
          card.className = 'bg-brand-white border border-brand-cream-dark rounded-3xl overflow-hidden shadow-card flex flex-col justify-between group hover:border-brand-gold/60 transition-all duration-300';

          card.innerHTML = `
            <div>
              <div class="aspect-[16/10] overflow-hidden bg-brand-cream relative">
                <img 
                  src="${box.image}" 
                  alt="${box.name}" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span data-sync-snackbox-min="${box.id}" class="absolute top-3 right-3 bg-brand-white/95 text-brand-brown text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  Min ${box.minOrder || 15} box
                </span>
              </div>
              <div class="p-6">
                <h3 class="font-serif text-xl font-bold text-brand-dark mb-2">${box.name}</h3>
                <p class="text-xs text-brand-muted leading-relaxed mb-4">${box.description}</p>
                <div class="space-y-1.5 mb-5 p-3.5 bg-brand-cream-light rounded-2xl border border-brand-cream-dark">
                  <span class="text-[11px] font-bold text-brand-gold uppercase tracking-wider block">Isian Kue:</span>
                  <ul class="text-xs text-brand-dark space-y-1">
                    ${(box.includes || []).map(inc => `<li class="flex items-center gap-1.5"><span class="text-brand-green font-bold">✓</span> ${inc}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0 border-t border-brand-cream-dark flex items-center justify-between">
              <div>
                <span class="text-[11px] text-brand-muted block">Harga per box:</span>
                <span data-sync-snackbox-price="${box.id}" class="font-serif text-xl font-bold text-brand-brown">
                  Rp ${box.price.toLocaleString('id-ID')}
                </span>
              </div>
              <button 
                type="button"
                data-add-to-cart
                data-id="${box.id}"
                data-name="${box.name}"
                data-price="${box.price}"
                data-unit="box"
                data-image="${box.image}"
                class="bg-brand-brown hover:bg-brand-brown-dark text-brand-white text-xs font-semibold py-2.5 px-5 rounded-full shadow-xs transition-colors"
              >
                + Keranjang
              </button>
            </div>
          `;

          snackGrid.prepend(card);

          card.querySelector('[data-add-to-cart]')?.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('add-to-cart', {
              detail: {
                id: box.id,
                name: box.name,
                price: box.price,
                unit: 'box',
                image: box.image,
                quantity: 1
              }
            }));
          });
        }
      });
    }

    // 4. Sync Catering Packages
    const cateringGrid = document.getElementById('catering-cards-grid');
    const storedCatering = getStoredCatering();

    if (storedCatering && storedCatering.length > 0) {
      storedCatering.forEach(cat => {
        const existingEl = document.querySelector(`[data-sync-catering-price="${cat.id}"]`);

        if (existingEl) {
          existingEl.textContent = `Rp ${cat.pricePerPax.toLocaleString('id-ID')}`;
          document.querySelectorAll(`[data-sync-catering-min="${cat.id}"]`).forEach(el => {
            el.textContent = `Min ${cat.minPax} pax`;
          });
        } else if (cateringGrid && cat.id.startsWith('cat-custom-')) {
          // Render newly added catering package dynamically
          const card = document.createElement('div');
          card.className = 'bg-brand-cream-light/60 border border-brand-cream-dark rounded-3xl overflow-hidden shadow-card flex flex-col justify-between hover:border-brand-gold/60 transition-all duration-300';

          card.innerHTML = `
            <div>
              <div class="aspect-[16/10] overflow-hidden bg-brand-cream relative">
                <img 
                  src="${cat.image}" 
                  alt="${cat.name}" 
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span data-sync-catering-min="${cat.id}" class="absolute top-3 right-3 bg-brand-white/95 text-brand-brown text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  Min ${cat.minPax} pax
                </span>
              </div>
              <div class="p-6">
                <span class="px-3 py-1 rounded-full bg-brand-brown/10 text-brand-brown text-xs font-semibold">
                  ${cat.categoryLabel || 'Catering'}
                </span>
                <h2 class="font-serif text-2xl font-bold text-brand-dark mt-2 mb-2">${cat.name}</h2>
                <div class="mb-3">
                  <span class="text-[11px] text-brand-muted block">Mulai dari:</span>
                  <span data-sync-catering-price="${cat.id}" class="font-serif text-2xl font-bold text-brand-brown">
                    Rp ${cat.pricePerPax.toLocaleString('id-ID')}
                  </span>
                  <span class="text-xs text-brand-muted"> / pax</span>
                </div>
                <p class="text-xs text-brand-muted leading-relaxed mb-4">${cat.description}</p>
                <div class="p-4 bg-brand-white rounded-2xl border border-brand-cream-dark/60 space-y-1.5 mb-4">
                  <span class="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">Rincian Menu:</span>
                  <ul class="space-y-1 text-xs text-brand-dark/90">
                    ${(cat.includes || []).map(inc => `<li class="flex items-start gap-2"><span class="text-brand-green font-bold shrink-0">✓</span> <span>${inc}</span></li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
            <div class="p-6 pt-0">
              <a 
                href="#catering-inquiry-form" 
                data-select-catering="${cat.name}"
                class="block w-full py-3 rounded-full text-center bg-brand-brown hover:bg-brand-brown-dark text-brand-white font-semibold text-xs shadow-soft transition-colors"
              >
                Ajukan Penawaran Paket Ini
              </a>
            </div>
          `;

          cateringGrid.prepend(card);
        }
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
