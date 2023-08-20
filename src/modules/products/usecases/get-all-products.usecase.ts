import { Inject, Injectable } from '@nestjs/common';
import { PaginatedResponseDto, PaginationQueryDto } from '../../../common/dto';
import { Product } from '../entities/product.entity';
import {
  ProductsRepository,
  ProductsRepositoryToken,
} from '../interfaces/products-repository.interface';

@Injectable()
export class GetAllProductsUseCase {
  constructor(
    @Inject(ProductsRepositoryToken)
    private readonly productsRepository: ProductsRepository,
  ) {}

  async execute(
    params?: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Product>> {
    const { page = 1, itemsPerPage = 10, search } = params || {};

    const { limit, products, total } = await this.productsRepository.findAll({
      skip: (page - 1) * itemsPerPage,
      take: itemsPerPage,
      name: search,
      description: search,
    });

    return {
      items: products,
      meta: {
        currentPage: params?.page,
        itemsPerPage: params?.itemsPerPage,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
