
import jsPDF from 'jspdf';
import { gamesData } from '../data/gamesData';
{/* Definición de la interfaz para los datos de la orden */}
export interface OrderData {
  orderNumber: string;
  date: string;
  paymentMethod: string;
  customerInfo: {
    email: string;
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    platform?: string;
  }>;
  subtotal: number;
  tax: number;
  total: number;
}
{/* Generador de PDF de recibo de orden */}
export const generateReceiptPDF = async (orderData: OrderData) => {
  const doc = new jsPDF();
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 210, 297, 'F');
  
  // Logo 
  const loadImage = (url: string): Promise<{data: string, width: number, height: number}> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve({
            data: canvas.toDataURL('image/png'),
            width: img.width,
            height: img.height
          });
        } else {
          reject();
        }
      };
      img.onerror = () => reject();
      img.src = url;
    });
  };

  try {
    const logoImage = await loadImage('/logo.png');
    if (logoImage) {
      // Calcular proporciones para mantener aspect ratio
      const maxWidth = 50;
      const maxHeight = 20;
      const ratio = Math.min(maxWidth / logoImage.width, maxHeight / logoImage.height);
      const width = logoImage.width * ratio;
      const height = logoImage.height * ratio;
      
      doc.addImage(logoImage.data, 'PNG', 20, 12, width, height);
    }
  } catch {
    // Fallback a texto si no se puede cargar la imagen
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('Devmike117', 20, 20);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Store', 20, 26);
  }
  
  doc.setTextColor(142, 142, 147);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'normal');
  doc.text('Factura', 180, 25, { align: 'right' });
  doc.setTextColor(142, 142, 147);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('CUENTA DE CLIENTE', 20, 50);
  doc.setTextColor(0, 122, 255);
  doc.setFontSize(9);
  doc.text(orderData.customerInfo.email, 20, 55);
  doc.setTextColor(142, 142, 147);
  doc.setFontSize(8);
  doc.text('FECHA DEL RECIBO', 20, 65);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.text(orderData.date, 20, 70);
  doc.setTextColor(142, 142, 147);
  doc.setFontSize(8);
  doc.text('ID DEL PEDIDO', 20, 80);
  doc.setTextColor(0, 122, 255);
  doc.setFontSize(9);
  doc.text(orderData.orderNumber, 20, 85);
  doc.setTextColor(142, 142, 147);
  doc.setFontSize(8);
  doc.text('NÚMERO DE DOCUMENTO', 20, 95);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.text(Math.floor(Math.random() * 1000000000000).toString(), 20, 100);
  doc.setTextColor(142, 142, 147);
  doc.setFontSize(8);
  doc.text('FACTURADO A', 110, 50);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.text(orderData.paymentMethod, 110, 55);
  doc.text(orderData.customerInfo.name, 110, 60);
  doc.text(orderData.customerInfo.address, 110, 65);
  doc.text('SN', 110, 70);
  doc.text(`${orderData.customerInfo.city}, ${orderData.customerInfo.country} ${orderData.customerInfo.postalCode}`, 110, 75);
  doc.text(orderData.customerInfo.country, 110, 80);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Licencias Digitales', 20, 120);
  let yPos = 130;
  
  // Función para cargar imágenes de productos
  const loadProductImage = (url: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/jpeg'));
      };
      img.onerror = () => resolve('');
      img.src = url;
    });
  };
  
  for (const item of orderData.items) {
    // Banner de imagen horizontal
    const game = gamesData[item.id];
    if (game && game.banner) {
      try {
        const imgData = await loadProductImage(game.banner);
        if (imgData) {
          doc.setFillColor(240, 240, 240);
          doc.roundedRect(20, yPos, 160, 35, 3, 3, 'F');
          doc.addImage(imgData, 'JPEG', 21, yPos + 1, 158, 33);
        }
      } catch {}
    }
    yPos += 40;
    
    // Información del producto
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(item.name, 20, yPos);
    
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(item.platform || 'Software', 20, yPos + 6);
    doc.text('Licencia Digital', 20, yPos + 11);
    doc.text(`LIC-${Math.random().toString(36).substring(2, 15).toUpperCase()}`, 20, yPos + 16);
    
    doc.setTextColor(0, 122, 255);
    doc.setFontSize(8);
    doc.text('Reportar un problema', 20, yPos + 22);
    
    // Precio
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`$${item.price.toFixed(2)}`, 180, yPos, { align: 'right' });
    
    yPos += 35;
  }
  yPos += 10;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Subtotal', 140, yPos, { align: 'right' });
  doc.text(`$${orderData.subtotal.toFixed(2)}`, 180, yPos, { align: 'right' });
  yPos += 7;
  doc.text('IVA 16%', 140, yPos, { align: 'right' });
  doc.text(`$${orderData.tax.toFixed(2)}`, 180, yPos, { align: 'right' });
  yPos += 5;
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, 180, yPos);
  yPos += 10;
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('TOTAL', 140, yPos, { align: 'right' });
  doc.setFontSize(16);
  doc.text(`$${orderData.total.toFixed(2)}`, 180, yPos, { align: 'right' });
  yPos += 20;
  doc.setTextColor(142, 142, 147);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Thank you for your purchase.', 105, yPos, { align: 'center' });
  yPos += 5;
  doc.text('Your licenses will be sent to your email shortly.', 105, yPos, { align: 'center' });
  yPos += 15;
  doc.setDrawColor(229, 229, 229);
  doc.setLineWidth(0.3);
  doc.line(20, yPos, 180, yPos);
  doc.setTextColor(142, 142, 147);
  doc.setFontSize(8);
  doc.text('Questions? Contact us at devmike117@icloud.com', 105, yPos + 5, { align: 'center' });
  doc.text(`© ${new Date().getFullYear()} Devmike117 Store. All rights reserved.`, 105, yPos + 10, { align: 'center' });
  doc.save(`Factura-${orderData.orderNumber}.pdf`);
};

{/* Generador de número de orden único */}
export const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `ORD-${timestamp}-${random}`;
};
