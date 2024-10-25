import { Controller, Get, Param } from '@nestjs/common';
import { Demo2Service } from './demo2.service';
import { CalculateService } from './calculate.service';

@Controller('api/demo2')
export class Demo2Controller {
    constructor(
        private demo2: Demo2Service, private calService: CalculateService
    ) {}

    @Get()
    index(): string {
        return this.demo2.hello()
    }

    @Get('hi/:name')
    index2(@Param('name')name: string): string {
        return this.demo2.hi(name)
    }

    @Get('add/:a/:b')
    add(@Param('a') a: number, @Param('b') b: number): any {
        let number1 = Number(a)
        let number2 = Number(b)

        return {
            result1: this.calService.add(number1, number2),
            result2: this.calService.mul(number1, number2)

        }
    }

}
