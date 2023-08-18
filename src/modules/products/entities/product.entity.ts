import { ProductImage } from './product-image.entity';

export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promotionalPrice: number;
  images: ProductImage[];
  category: string;
}
