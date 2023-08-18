import { faker } from '@faker-js/faker';
import { ProductImage } from '../entities/product-image.entity';
import { Product } from '../entities/product.entity';
import {
  FindAllParams,
  ProductsRepository,
} from '../interfaces/products-repository.interface';

export const productsFactory = (length = 10): Product[] => {
  const products = Array.from({ length }).map(() => {
    const product = new Product();
    product.id = faker.string.uuid();
    product.name = faker.commerce.productName();
    product.description = faker.commerce.productDescription();
    product.price = Number(faker.commerce.price());
    product.promotionalPrice = Number(faker.commerce.price());
    product.category = faker.commerce.department();
    product.images = Array.from({ length: 3 }).map(() => {
      const image = new ProductImage();
      image.id = faker.string.uuid();
      image.url = faker.image.urlLoremFlickr({ category: product.category });
      image.alt = faker.commerce.productName();
      image.productId = product.id;

      return image;
    });

    return product;
  });

  return products;
};

export class ProductsInMemoryRepository implements ProductsRepository {
  constructor(private products: Product[] = productsFactory()) {}

  async findAll(params?: FindAllParams) {
    const { skip, take } = params || {};

    const products = this.products.slice(skip, skip + take);

    return {
      total: this.products.length,
      limit: take,
      products,
    };
  }
}
