import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DemoModule } from './demo/demo.module'
import { DatabaseModule } from './database.module'
import { CategoryModule } from './category/category.module'
import { ProductModule } from './product/product.module'

import { AutomapperModule } from '@automapper/nestjs'
import { classes } from '@automapper/classes'

@Module({
  imports: [
    DatabaseModule,
    DemoModule,
    CategoryModule,
    ProductModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes()
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
