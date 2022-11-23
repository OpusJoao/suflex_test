import { Module } from '@nestjs/common';
import { AssetModule } from './asset/asset.module';
import ProductModule from './product/product.module';

@Module({
  imports: [AssetModule, ProductModule],
})
export class AppModule {}
