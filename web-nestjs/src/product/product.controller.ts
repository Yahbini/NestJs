import { Controller, Get, Param } from '@nestjs/common'
import { ProductService } from './product.service'
import { Product } from '../entities/product.entity'

@Controller('api/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('findAll')
  findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }

  @Get('find-by-id/:id')
  findById(@Param('id') id: number): Promise<Product> {
    return this.productService.findById(id)
  }

  @Get('find-category/:id')
  findByCategory(@Param('id') id: number): Promise<Product[]> {
    return this.productService.findByCategoryId(id)
  }

  @Get('find-year-month/:year/:month')
  findByYearMonth(@Param('year') year: number, @Param('month') month: number): Promise<Product[]> {
    return this.productService.findByYearAndMonth(year, month)
  }

  @Get('latest/:n')
  latest(@Param('n') n: number): Promise<Product[]> {
    return this.productService.latest(n)
  }

  @Get('findByPrice/:min/:max')
  findByPrice(@Param('min') min: number, @Param('max') max: number): Promise<Product[]> {
    return this.productService.findByPrice(min, max)
  }

  @Get('find-by-date/:from/:to')
  findByDate(@Param('from') from: string, @Param('to') to: string): Promise<Product[]> {
    return this.productService.findByDate(from, to)
  }
}
