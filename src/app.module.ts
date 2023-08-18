import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environment } from './config/environment';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [environment] }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
