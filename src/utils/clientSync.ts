/**
 * Client-Side Live Sync Helper
 * Memastikan penambahan produk, snack box, katering, serta perubahan harga dan nomor WhatsApp
 * yang disimpan pemilik toko di /admin/ langsung terlihat secara reaktif di seluruh halaman website
 * dengan struktur HTML5 Semantik (<article>, <figure>, <header>, <dl>, <footer>).
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

    // 1b. Sync Google Maps embed URL, address, and direct map links (with deferred IntersectionObserver loading)
    if (config) {
      if (config.locationMapEmbedUrl) {
        document.querySelectorAll('iframe[data-sync-map], iframe[src*="google.com/maps"]').forEach(el => {
          const iframe = el as HTMLIFrameElement;
          iframe.setAttribute('data-map-src', config.locationMapEmbedUrl);
          if (iframe.getAttribute('src') && iframe.getAttribute('src') !== 'about:blank') {
            if (iframe.getAttribute('src') !== config.locationMapEmbedUrl) {
              iframe.setAttribute('src', config.locationMapEmbedUrl);
            }
          }
        });
      }
      if (config.locationAddress) {
        document.querySelectorAll('[data-sync-address]').forEach(el => {
          el.textContent = config.locationAddress!;
        });
      }
      if (config.locationMapDirectUrl) {
        document.querySelectorAll('a[data-sync-map-link]').forEach(el => {
          (el as HTMLAnchorElement).setAttribute('href', config.locationMapDirectUrl!);
        });
      }
    }

    // Hydrate deferred map iframes when scrolled into view
    const mapIframes = document.querySelectorAll('iframe[data-sync-map]');
    if (mapIframes.length > 0 && 'IntersectionObserver' in window) {
      const mapObs = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const iframe = entry.target as HTMLIFrameElement;
            const targetSrc = iframe.getAttribute('data-map-src') || config.locationMapEmbedUrl;
            if (targetSrc && (!iframe.getAttribute('src') || iframe.getAttribute('src') === 'about:blank')) {
              iframe.setAttribute('src', targetSrc);
            }
            obs.unobserve(iframe);
          }
        });
      }, { rootMargin: '250px 0px' });

      mapIframes.forEach(iframe => mapObs.observe(iframe));
    }

    // 2. Sync Products (Jajanan Pasar)
    const productGrid = document.getElementById('product-grid');
    const storedProducts = getStoredProducts();

    if (storedProducts && storedProducts.length > 0) {
      storedProducts.forEach(prod => {
        const existingEl = document.querySelector(`[data-sync-product-price="${prod.id}"]`);

        if (existingEl) {
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
          const card = document.createElement('article');
          card.setAttribute('data-product-item', '');
          card.setAttribute('data-taste', prod.tasteProfile || 'Tradisional');
          card.setAttribute('data-name-search', (prod.name || '').toLowerCase());
          card.setAttribute('data-category', prod.category || 'jajanan');
          card.className = 'semantic-card flex flex-col justify-between group';

          card.innerHTML = `
            <div>
              <figure class="aspect-square overflow-hidden bg-surface-subtle relative m-0">
                <img 
                  src="${prod.image}" 
                  alt="${prod.name}" 
                  width="400"
                  height="400"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <figcaption class="absolute top-3 left-3 bg-surface-primary/95 text-content-accent text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  ${prod.tasteProfile || 'Tradisional'}
                </figcaption>
              </figure>
              <div class="p-5">
                <header>
                  <h2 class="font-serif font-bold text-lg text-content-primary mb-1 line-clamp-1">${prod.name}</h2>
                </header>
                <p class="text-xs text-content-secondary line-clamp-2 leading-relaxed mb-4">${prod.description}</p>
                <dl class="mb-2 m-0">
                  <dt class="sr-only">Harga</dt>
                  <dd class="m-0">
                    <span data-sync-product-price="${prod.id}" class="font-serif text-xl font-bold text-content-accent tabular-price">
                      Rp ${prod.price.toLocaleString('id-ID')}
                    </span>
                    <span class="text-xs text-content-secondary">/${prod.priceUnit || 'pcs'}</span>
                  </dd>
                </dl>
              </div>
            </div>
            <footer class="p-5 pt-0">
              <button 
                type="button"
                data-add-to-cart
                data-id="${prod.id}"
                data-name="${prod.name}"
                data-price="${prod.price}"
                data-unit="${prod.priceUnit || 'pcs'}"
                data-image="${prod.image}"
                class="w-full min-h-[44px] bg-action-primary hover:bg-action-primary-hover text-content-inverse text-xs font-semibold py-2.5 rounded-full shadow-xs transition-colors"
              >
                + Keranjang
              </button>
            </footer>
          `;

          productGrid.prepend(card);

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
          const card = document.createElement('article');
          card.className = 'semantic-card flex flex-col justify-between group';

          card.innerHTML = `
            <div>
              <figure class="aspect-[16/10] overflow-hidden bg-surface-subtle relative m-0">
                <img 
                  src="${box.image}" 
                  alt="${box.name}" 
                  width="500"
                  height="320"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <figcaption data-sync-snackbox-min="${box.id}" class="absolute top-3 right-3 bg-surface-primary/95 text-content-accent text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  Min ${box.minOrder || 15} box
                </figcaption>
              </figure>
              <div class="p-6">
                <header>
                  <h2 class="font-serif text-xl font-bold text-content-primary mb-2">${box.name}</h2>
                </header>
                <p class="text-xs text-content-secondary leading-relaxed mb-4">${box.description}</p>
                <section aria-label="Komposisi kue dalam box" class="space-y-1.5 mb-5 p-3.5 bg-surface-canvas rounded-2xl border border-line-subtle">
                  <h3 class="text-[11px] font-bold text-brand-gold uppercase tracking-wider block">Isian Kue:</h3>
                  <ul class="text-xs text-content-primary space-y-1 list-none m-0 p-0">
                    ${(box.includes || []).map(inc => `<li class="flex items-center gap-1.5"><span class="text-brand-green font-bold" aria-hidden="true">✓</span> <span>${inc}</span></li>`).join('')}
                  </ul>
                </section>
              </div>
            </div>
            <footer class="p-6 pt-3 border-t border-line-subtle flex items-center justify-between">
              <dl class="m-0">
                <dt class="text-[11px] text-content-secondary block">Harga per box:</dt>
                <dd data-sync-snackbox-price="${box.id}" class="font-serif text-xl font-bold text-content-accent tabular-price m-0">
                  Rp ${box.price.toLocaleString('id-ID')}
                </dd>
              </dl>
              <button 
                type="button"
                data-add-to-cart
                data-id="${box.id}"
                data-name="${box.name}"
                data-price="${box.price}"
                data-unit="box"
                data-image="${box.image}"
                class="min-h-[44px] bg-action-primary hover:bg-action-primary-hover text-content-inverse text-xs font-semibold py-2.5 px-5 rounded-full shadow-xs transition-colors"
              >
                + Keranjang
              </button>
            </footer>
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
          const card = document.createElement('article');
          card.className = 'semantic-card flex flex-col justify-between';

          card.innerHTML = `
            <div>
              <figure class="aspect-[16/10] overflow-hidden bg-surface-subtle relative m-0">
                <img 
                  src="${cat.image}" 
                  alt="${cat.name}" 
                  width="500"
                  height="320"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <figcaption data-sync-catering-min="${cat.id}" class="absolute top-3 right-3 bg-surface-primary/95 text-content-accent text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  Min ${cat.minPax} pax
                </figcaption>
              </figure>
              <div class="p-6">
                <header>
                  <span class="px-3 py-1 rounded-full bg-brand-brown/10 text-content-accent text-xs font-semibold">
                    ${cat.categoryLabel || 'Catering'}
                  </span>
                  <h2 class="font-serif text-2xl font-bold text-content-primary mt-2 mb-2">${cat.name}</h2>
                </header>
                <dl class="mb-3 m-0">
                  <dt class="text-[11px] text-content-secondary block">Mulai dari:</dt>
                  <dd class="m-0">
                    <span data-sync-catering-price="${cat.id}" class="font-serif text-2xl font-bold text-content-accent tabular-price">
                      Rp ${cat.pricePerPax.toLocaleString('id-ID')}
                    </span>
                    <span class="text-xs text-content-secondary"> / pax</span>
                  </dd>
                </dl>
                <p class="text-xs text-content-secondary leading-relaxed mb-4">${cat.description}</p>
                <section aria-label="Rincian menu hidangan" class="p-4 bg-surface-canvas rounded-2xl border border-line-subtle/60 space-y-1.5 mb-4">
                  <h3 class="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">Rincian Menu:</h3>
                  <ul class="space-y-1 text-xs text-content-primary/90 list-none m-0 p-0">
                    ${(cat.includes || []).map(inc => `<li class="flex items-start gap-2"><span class="text-brand-green font-bold shrink-0" aria-hidden="true">✓</span> <span>${inc}</span></li>`).join('')}
                  </ul>
                </section>
              </div>
            </div>
            <footer class="p-6 pt-0">
              <a 
                href="#catering-inquiry-form" 
                data-select-catering="${cat.name}"
                class="min-h-[44px] flex items-center justify-center w-full py-3 rounded-full text-center bg-action-primary hover:bg-action-primary-hover text-content-inverse font-semibold text-xs shadow-soft transition-colors"
              >
                Ajukan Penawaran Paket Ini
              </a>
            </footer>
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
