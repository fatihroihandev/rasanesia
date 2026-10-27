import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { products as localProducts, type Product } from '../data/products';
import { snackBoxes as localSnackBoxes, type SnackBoxPackage } from '../data/snackBoxes';
import { faqs as localFaqs, type FAQItem } from '../data/faqs';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';
const apiVersion = import.meta.env.SANITY_API_VERSION || '2024-01-01';

export const isSanityConfigured = Boolean(projectId && projectId.trim() !== '');

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true
    })
  : null;

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function urlFor(source: any): string {
  if (!source) return '';
  if (typeof source === 'string') return source;
  if (builder && source.asset) {
    return builder.image(source).auto('format').fit('max').url();
  }
  return '';
}

// 1. Fetch Products with Graceful Fallback
export async function getProducts(): Promise<Product[]> {
  if (!sanityClient) return localProducts;
  try {
    const query = `*[_type == "product" && isAvailable != false] | order(displayOrder asc, _createdAt desc) {
      "id": _id,
      "slug": slug.current,
      name,
      category,
      "categoryLabel": "Jajanan Tradisional",
      price,
      priceUnit,
      description,
      ingredients,
      "tasteProfile": category,
      minOrder,
      "image": mainImage.asset->url,
      isFeatured
    }`;
    const data = await sanityClient.fetch<Product[]>(query);
    return data && data.length > 0 ? data : localProducts;
  } catch (error) {
    console.warn('Sanity fetch failed for products, using local fallback:', error);
    return localProducts;
  }
}

// 2. Fetch Single Product
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!sanityClient) {
    return localProducts.find(p => p.slug === slug);
  }
  try {
    const query = `*[_type == "product" && slug.current == $slug][0] {
      "id": _id,
      "slug": slug.current,
      name,
      category,
      "categoryLabel": "Jajanan Tradisional",
      price,
      priceUnit,
      description,
      ingredients,
      "tasteProfile": category,
      minOrder,
      "image": mainImage.asset->url,
      isFeatured
    }`;
    const data = await sanityClient.fetch<Product>(query, { slug });
    return data || localProducts.find(p => p.slug === slug);
  } catch (error) {
    return localProducts.find(p => p.slug === slug);
  }
}

// 3. Fetch Snack Boxes with Graceful Fallback
export async function getSnackBoxes(): Promise<SnackBoxPackage[]> {
  if (!sanityClient) return localSnackBoxes;
  try {
    const query = `*[_type == "snackBoxPackage"] | order(displayOrder asc, _createdAt desc) {
      "id": _id,
      "slug": slug.current,
      name,
      price,
      priceUnit,
      shortDescription,
      description,
      includes,
      minOrder,
      packagingType,
      "image": image.asset->url,
      isFeatured
    }`;
    const data = await sanityClient.fetch<SnackBoxPackage[]>(query);
    return data && data.length > 0 ? data : localSnackBoxes;
  } catch (error) {
    console.warn('Sanity fetch failed for snack boxes, using local fallback:', error);
    return localSnackBoxes;
  }
}

// 4. Fetch Single Snack Box
export async function getSnackBoxBySlug(slug: string): Promise<SnackBoxPackage | undefined> {
  if (!sanityClient) {
    return localSnackBoxes.find(b => b.slug === slug);
  }
  try {
    const query = `*[_type == "snackBoxPackage" && slug.current == $slug][0] {
      "id": _id,
      "slug": slug.current,
      name,
      price,
      priceUnit,
      shortDescription,
      description,
      includes,
      minOrder,
      packagingType,
      "image": image.asset->url,
      isFeatured
    }`;
    const data = await sanityClient.fetch<SnackBoxPackage>(query, { slug });
    return data || localSnackBoxes.find(b => b.slug === slug);
  } catch (error) {
    return localSnackBoxes.find(b => b.slug === slug);
  }
}

// 5. Fetch FAQs with Graceful Fallback
export async function getFAQs(): Promise<FAQItem[]> {
  if (!sanityClient) return localFaqs;
  try {
    const query = `*[_type == "faq" && isPublished != false] | order(displayOrder asc) {
      "id": _id,
      question,
      answer,
      category
    }`;
    const data = await sanityClient.fetch<FAQItem[]>(query);
    return data && data.length > 0 ? data : localFaqs;
  } catch (error) {
    return localFaqs;
  }
}
