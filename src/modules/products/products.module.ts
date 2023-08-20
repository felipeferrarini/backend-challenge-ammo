import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/database';
import { ProductsRepositoryToken } from './interfaces/products-repository.interface';
import { ProductsController } from './products.controller';
import { ProductsPrismaRepository } from './repositories/products-prisma.repository';
import { GetAllProductsUseCase } from './usecases';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [
    {
      provide: ProductsRepositoryToken,
      useClass: ProductsPrismaRepository,
    },
    GetAllProductsUseCase,
  ],
})
export class ProductsModule {}
