export type ProductCategory = 'Sportswear' | 'Casual' | 'Leather';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  image: string;
  moq: string;
}

export const products: Product[] = [
  { id: 1, name: 'Performance Track Jacket', category: 'Sportswear', image: '/prod-1.jpg', moq: 'MOQ 200' },
  { id: 2, name: 'Heavyweight Pullover Hoodie', category: 'Casual', image: '/prod-2.jpg', moq: 'MOQ 150' },
  { id: 3, name: 'Classic Biker Jacket', category: 'Leather', image: '/prod-3.jpg', moq: 'MOQ 100' },
  { id: 4, name: 'Compression Training Leggings', category: 'Sportswear', image: '/prod-4.jpg', moq: 'MOQ 300' },
  { id: 5, name: 'Stripe Panel Joggers', category: 'Casual', image: '/prod-5.jpg', moq: 'MOQ 200' },
  { id: 6, name: 'Hand-Stitched Driving Gloves', category: 'Leather', image: '/prod-6.jpg', moq: 'MOQ 100' },
  { id: 7, name: 'Mesh Panel Training Tee', category: 'Sportswear', image: '/prod-7.jpg', moq: 'MOQ 300' },
  { id: 8, name: 'Embossed Heavyweight Tee', category: 'Casual', image: '/prod-8.jpg', moq: 'MOQ 200' },
];
