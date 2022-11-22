import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import ProductService from 'src/product/product.service';
import { AssetController } from './asset.controller';

@Module({
  controllers: [AssetController],
  providers: [ProductService, PrismaService]
})
export class AssetModule {}
