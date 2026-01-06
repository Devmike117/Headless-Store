{/* Generador de claves de licencia para productos */}
export const generateLicenseKey = (productName: string): string => {
  const prefix = productName.substring(0, 3).toUpperCase();
  const timestamp = Date.now().toString(36).toUpperCase();
  const random1 = Math.random().toString(36).substring(2, 6).toUpperCase();
  const random2 = Math.random().toString(36).substring(2, 6).toUpperCase();
  const random3 = Math.random().toString(36).substring(2, 6).toUpperCase();
  
  return `${prefix}-${timestamp}-${random1}-${random2}-${random3}`;
};

{/* Generador de enlaces de descarga para productos */}
export const generateDownloadLink = (productId: string, platform?: string): string => {
  return `https://download.tiendadigital.com/products/${productId}/${platform || 'default'}`;
};
