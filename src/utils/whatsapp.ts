import { siteConfig } from '../data/siteConfig';

export interface CartItemOrder {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category?: string;
}

export interface CustomSnackOrderDetails {
  boxType: string;
  selectedSnacks: string[];
  quantity: number;
  budgetPerBox?: number;
  eventDate: string;
  notes?: string;
}

export function buildWhatsAppUrl(message: string): string {
  const cleanPhone = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function createGeneralInquiryUrl(): string {
  const text = `Halo Rasanesia, saya ingin bertanya seputar layanan dan produk jajanan / snack box. Mohon informasinya. Terima kasih!`;
  return buildWhatsAppUrl(text);
}

export function createProductInquiryUrl(productName: string, priceText?: string): string {
  let text = `Halo Rasanesia, saya tertarik untuk memesan:\n`;
  text += `• Produk: ${productName}\n`;
  if (priceText) {
    text += `• Estimasi Harga: ${priceText}\n`;
  }
  text += `\nMohon info ketersediaan dan ketentuan minimal pemesanannya. Terima kasih!`;
  return buildWhatsAppUrl(text);
}

export function createSnackBoxOrderUrl(packageName: string, priceText: string, minOrder?: number): string {
  let text = `Halo Rasanesia, saya ingin memesan Paket Snack Box:\n`;
  text += `• Paket: ${packageName}\n`;
  text += `• Harga: ${priceText}\n`;
  if (minOrder) {
    text += `• Minimal Pesanan: ${minOrder} box\n`;
  }
  text += `\nMohon konfirmasi ketersediaan untuk tanggal acara saya. Terima kasih!`;
  return buildWhatsAppUrl(text);
}

export function createCustomSnackOrderUrl(data: CustomSnackOrderDetails): string {
  let text = `Halo Rasanesia, saya ingin konsultasi Custom Snack Box:\n\n`;
  text += `• Tipe Kemasan: ${data.boxType}\n`;
  text += `• Jumlah Pax: ${data.quantity} box\n`;
  text += `• Tanggal Acara: ${data.eventDate || '-'}\n`;
  if (data.budgetPerBox) {
    text += `• Estimasi Budget: Rp ${data.budgetPerBox.toLocaleString('id-ID')} / box\n`;
  }
  if (data.selectedSnacks.length > 0) {
    text += `• Pilihan Isian Kue:\n`;
    data.selectedSnacks.forEach((snack, idx) => {
      text += `  ${idx + 1}. ${snack}\n`;
    });
  }
  if (data.notes) {
    text += `• Catatan Khusus: ${data.notes}\n`;
  }
  text += `\nMohon rekomendasi paket terbaik dan rincian biayanya. Terima kasih!`;
  return buildWhatsAppUrl(text);
}

export function createCateringInquiryUrl(eventType?: string, guestCount?: number): string {
  let text = `Halo Rasanesia, saya ingin menanyakan penawaran Layanan Catering:\n`;
  if (eventType) text += `• Jenis Acara: ${eventType}\n`;
  if (guestCount) text += `• Estimasi Jumlah Tamu: ${guestCount} porsi\n`;
  text += `\nMohon kirimkan menu lengkap dan proposal penawarannya. Terima kasih!`;
  return buildWhatsAppUrl(text);
}

export function createCartCheckoutUrl(items: CartItemOrder[], customerNotes?: string): string {
  let text = `Halo Rasanesia, saya ingin memesan beberapa produk dari keranjang website:\n\n`;
  let total = 0;

  items.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    text += `${index + 1}. ${item.name}\n`;
    text += `   Jumlah: ${item.quantity} x Rp ${item.price.toLocaleString('id-ID')} = Rp ${subtotal.toLocaleString('id-ID')}\n`;
  });

  text += `\nTotal Estimasi: Rp ${total.toLocaleString('id-ID')}\n`;
  if (customerNotes && customerNotes.trim()) {
    text += `Catatan / Tanggal Acara: ${customerNotes.trim()}\n`;
  }
  text += `\nMohon konfirmasi ketersediaan, total ongkir, dan nomor rekening pembayarannya. Terima kasih!`;

  return buildWhatsAppUrl(text);
}
