import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
import { Demo2Module } from './demo2/demo2.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [Demo2Module, ProductModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
