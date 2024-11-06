import { Controller, Get, Param } from '@nestjs/common'
import { CategoryService } from './category.service'
import { Category } from '../entities/category.entity'

@Controller('api/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('findAll')
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Get('find/:id')
  find(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findById(id)
  }

  @Get('find-by-keyword/:keyword')
  findByKeyword(@Param('keyword') keyword: string): Promise<Category[]> {
    return this.categoryService.findByKeyword(keyword)
  }
}
