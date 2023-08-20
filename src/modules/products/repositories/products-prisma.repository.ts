import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../common/database/prisma.service';
import {
  FindAllParams,
  FindAllResponse,
  ProductsRepository,
} from '../interfaces/products-repository.interface';

@Injectable()
export class ProductsPrismaRepository implements ProductsRepository {
  constructor(private readonly repository: PrismaService) {}

  async findAll(params: FindAllParams): Promise<FindAllResponse> {
    const { skip, take, description = '', name = '' } = params;

    const where = {
      OR: [
        {
          description: {
            contains: description,
            mode: 'insensitive' as Prisma.QueryMode,
          },
        },
        {
          name: {
            contains: name,
            mode: 'insensitive' as Prisma.QueryMode,
          },
        },
      ],
    };

    const products = await this.repository.product.findMany({
      include: {
        images: true,
      },
      where,
      skip,
      take,
    });

    const total = await this.repository.product.count({ where });

    return {
      total,
      limit: take,
      products,
    };
  }
}
