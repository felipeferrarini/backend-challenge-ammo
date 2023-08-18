import { PrismaClient } from '@prisma/client';
import { productsFactory } from '../src/modules/products/repositories/products-in-memory.repository';
const prisma = new PrismaClient();

async function main() {
  for (const product of productsFactory(100)) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        promotionalPrice: product.promotionalPrice,
        category: product.category,
        images: {
          create: product.images.map((image) => ({
            url: image.url,
            alt: image.alt,
          })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
