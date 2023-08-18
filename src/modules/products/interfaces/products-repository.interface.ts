import { Product } from '../entities/product.entity';

export interface FindAllParams {
  skip: number;
  take: number;
}

export const ProductsRepositoryToken = Symbol('ProductsRepositoryToken');

export interface ProductsRepository {
  findAll(params?: FindAllParams): Promise<{
    total: number;
    limit: number;
    products: Product[];
  }>;
}
