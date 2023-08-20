import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PaginatedResponseDto, PaginationQueryDto } from '../../common/dto';
import { Product } from './entities/product.entity';
import { GetAllProductsUseCase } from './usecases';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly getAllProducts: GetAllProductsUseCase) {}

  @ApiOkResponse({
    description: 'Returns all products',
    type: [PaginatedResponseDto<Product>],
  })
  @Get()
  async getAll(
    @Query() query: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Product>> {
    return await this.getAllProducts.execute(query);
  }
}
