import { ApiProperty } from '@nestjs/swagger';
import { ProductImage } from './product-image.entity';

export class Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  promotionalPrice: number;

  @ApiProperty()
  category: string;

  @ApiProperty()
  images: ProductImage[];
}
