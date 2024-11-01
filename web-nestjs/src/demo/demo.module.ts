import { Module } from '@nestjs/common'
import { DemoService } from './demo.service'
import { DemoController } from './demo.controller'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [DemoService],
  controllers: [DemoController]
})
export class DemoModule {}
