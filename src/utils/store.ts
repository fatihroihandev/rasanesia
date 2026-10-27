import { siteConfig as defaultSiteConfig, type SiteConfig } from '../data/siteConfig';
import { products as defaultProducts, type Product } from '../data/products';
import { snackBoxes as defaultSnackBoxes, type SnackBoxPackage } from '../data/snackBoxes';
import { defaultCateringPackages, type CateringPackage } from '../data/catering';
import { defaultCustomSnackConfig, type CustomSnackConfig } from '../data/customSnackConfig';

export const STORE_KEYS = {
  CONFIG: 'rasanesia_store_config',
  PRODUCTS: 'rasanesia_store_products',
  SNACK_BOXES: 'rasanesia_store_snackboxes',
  CATERING: 'rasanesia_store_catering',
  CUSTOM_CONFIG: 'rasanesia_store_custom_config',
  ADMIN_PIN: 'rasanesia_admin_pin',
  ADMIN_SESSION: 'rasanesia_admin_authenticated'
};

export const DEFAULT_PIN = '123456';

export function getAdminPin(): string {
  if (typeof window === 'undefined') return DEFAULT_PIN;
  return localStorage.getItem(STORE_KEYS.ADMIN_PIN) || DEFAULT_PIN;
}

export function setAdminPin(newPin: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORE_KEYS.ADMIN_PIN, newPin.trim());
}

export function getStoredConfig(): SiteConfig {
  if (typeof window === 'undefined') return defaultSiteConfig;
  try {
    const raw = localStorage.getItem(STORE_KEYS.CONFIG);
    if (!raw) return defaultSiteConfig;
    const parsed = JSON.parse(raw);
    return { ...defaultSiteConfig, ...parsed };
  } catch (e) {
    return defaultSiteConfig;
  }
}

export function saveStoredConfig(config: Partial<SiteConfig>): void {
  if (typeof window === 'undefined') return;
  const current = getStoredConfig();
  const updated = { ...current, ...config };
  localStorage.setItem(STORE_KEYS.CONFIG, JSON.stringify(updated));
}

export function getStoredProducts(): Product[] {
  if (typeof window === 'undefined') return defaultProducts;
  try {
    const raw = localStorage.getItem(STORE_KEYS.PRODUCTS);
    if (!raw) return defaultProducts;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultProducts;
  } catch (e) {
    return defaultProducts;
  }
}

export function saveStoredProducts(products: Product[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(products));
}

export function getStoredSnackBoxes(): SnackBoxPackage[] {
  if (typeof window === 'undefined') return defaultSnackBoxes;
  try {
    const raw = localStorage.getItem(STORE_KEYS.SNACK_BOXES);
    if (!raw) return defaultSnackBoxes;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultSnackBoxes;
  } catch (e) {
    return defaultSnackBoxes;
  }
}

export function saveStoredSnackBoxes(boxes: SnackBoxPackage[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORE_KEYS.SNACK_BOXES, JSON.stringify(boxes));
}

export function getStoredCatering(): CateringPackage[] {
  if (typeof window === 'undefined') return defaultCateringPackages;
  try {
    const raw = localStorage.getItem(STORE_KEYS.CATERING);
    if (!raw) return defaultCateringPackages;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultCateringPackages;
  } catch (e) {
    return defaultCateringPackages;
  }
}

export function saveStoredCatering(packages: CateringPackage[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORE_KEYS.CATERING, JSON.stringify(packages));
}

export function getStoredCustomConfig(): CustomSnackConfig {
  if (typeof window === 'undefined') return defaultCustomSnackConfig;
  try {
    const raw = localStorage.getItem(STORE_KEYS.CUSTOM_CONFIG);
    if (!raw) return defaultCustomSnackConfig;
    const parsed = JSON.parse(raw);
    return { ...defaultCustomSnackConfig, ...parsed };
  } catch (e) {
    return defaultCustomSnackConfig;
  }
}

export function saveStoredCustomConfig(config: Partial<CustomSnackConfig>): void {
  if (typeof window === 'undefined') return;
  const current = getStoredCustomConfig();
  const updated = { ...current, ...config };
  localStorage.setItem(STORE_KEYS.CUSTOM_CONFIG, JSON.stringify(updated));
}

export function resetAllToDefault(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORE_KEYS.CONFIG);
  localStorage.removeItem(STORE_KEYS.PRODUCTS);
  localStorage.removeItem(STORE_KEYS.SNACK_BOXES);
  localStorage.removeItem(STORE_KEYS.CATERING);
  localStorage.removeItem(STORE_KEYS.CUSTOM_CONFIG);
}
