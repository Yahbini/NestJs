import { Module } from '@nestjs/common';
import { Demo2Service } from './demo2.service';
import { Demo2Controller } from './demo2.controller';
import { CalculateService } from './calculate.service';

@Module({
  providers: [Demo2Service, CalculateService],
  controllers: [Demo2Controller]
})
export class Demo2Module {}
