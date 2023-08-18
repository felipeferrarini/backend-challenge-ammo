import { Product } from '../entities/product.entity';

export interface FindAllParams {
  skip: number;
  take: number;
  name?: string;
  description?: string;
}

export interface FindAllResponse {
  total: number;
  limit: number;
  products: Product[];
}

export const ProductsRepositoryToken = Symbol('ProductsRepositoryToken');

export interface ProductsRepository {
  findAll(params?: FindAllParams): Promise<FindAllResponse>;
}
