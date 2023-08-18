import { ApiProperty } from '@nestjs/swagger';

export class ProductImage {
  @ApiProperty()
  id: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  alt: string;

  @ApiProperty()
  productId: string;
}
