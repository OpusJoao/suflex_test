import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetModule } from './asset/asset.module';
import ProductModule from './product/product.module';

@Module({
  imports: [AssetModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
