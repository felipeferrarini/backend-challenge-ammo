import { PaginatedResponseDto, PaginationQueryDto } from 'src/common/dto';
import { Product } from '../../entities/product.entity';
import { ProductsRepository } from '../../interfaces/products-repository.interface';
import {
  ProductsInMemoryRepository,
  productsFactory,
} from '../../repositories/products-in-memory.repository';
import { GetAllProductsUseCase } from '../get-all-products.usecase';

describe('GetAllProductsUseCase', () => {
  let getAllProductsUseCase: GetAllProductsUseCase;
  let productRepository: ProductsRepository;
  const mockedProducts = productsFactory(10);

  beforeEach(() => {
    productRepository = new ProductsInMemoryRepository(mockedProducts);
    getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
  });

  it('should return all products', async () => {
    const products = await getAllProductsUseCase.execute();

    expect(products.items).toHaveLength(mockedProducts.length);
  });

  it('should return all products with pagination request', async () => {
    const query: PaginationQueryDto = {
      page: 1,
      itemsPerPage: 5,
    };

    const products = await getAllProductsUseCase.execute(query);

    expect(products.items).toHaveLength(5);
  });

  it('should return all products with pagination response', async () => {
    const query: PaginationQueryDto = {
      page: 2,
      itemsPerPage: 5,
    };

    const products = await getAllProductsUseCase.execute(query);

    expect(products.items).toHaveLength(5);

    const meta: PaginatedResponseDto<Product>['meta'] = {
      totalItems: mockedProducts.length,
      itemsPerPage: 5,
      totalPages: 2,
      currentPage: 2,
    };

    expect(products.meta).toEqual(meta);
  });
});
