import { Test, TestingModule } from '@nestjs/testing';
import { ProductsRepositoryToken } from '../interfaces/products-repository.interface';
import { ProductsController } from '../products.controller';
import { GetAllProductsUseCase } from '../usecases';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        GetAllProductsUseCase,
        { provide: ProductsRepositoryToken, useValue: {} },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
