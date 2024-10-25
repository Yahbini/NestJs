import { Body, Controller, Get, Header, Param, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { Product } from './entities/product.entity';

@Controller('/api/demo')
export class DemoController {

    @Get()
    index1(): string {
        return "hello"
    }

    @Get(['index2', 'abc'])
    index2(): string {
        return "hello phoebe"
    }

    @Get('index3/:id')
    index3(@Param('id') id: number): string {
        return "hi " + id
    }

    @Get('index4/:id/:username')
    index4(@Param('id') id: number, @Param('username') username: string): string {
        return "hi " + id + " username " + username
    }

    @Get('index5')
    index5(@Query('id') id: number, @Query('username') username: string): string {
        return "hi " + id + " username " + username
    }

    @Get('index6')
    index6(@Req() request: Request): string {
        let id = request.query.id
        let username= request.query.username
        return "hi " + id + " username " + username
    }

    @Header('Content-Type', 'text/plain')
    @Get('index7')
    index7(): string {
        return 'Hello Phoebe'
    }

    @Header('Content-Type', 'text/html')
    @Get('index8')
    index8(): string {
        return '<b><i>Hello Phoebe</i></b>'
    }

    @Header('Content-Type', 'application/json')
    @Get('index9')
    index9(): any {
        return {
            id: 123,
            name: 'phoebe'
        }
    }

    @Header('Content-Type', 'application/json')
    @Get('index11')
    index11(): Product[] {
        return [
            {
                id: 123,
                name: 'phoebe',
                price: 123,
                status: true
            },
            {
                id: 124,
                name: 'phuong anh',
                price: 1223,
                status: false
            }
        ]
    }

    @Post('create')
    create(@Body() product: Product): any {
        console.log(product);
        
        return product
    }

    @Put('update')
    update(@Body() product: Product): any {
        console.log(product);
        
        return product
    }
}
