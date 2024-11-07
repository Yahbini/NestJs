import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CategoryService } from './category.service'
import { Category } from '../entities/category.entity'
import { CategoryDTO } from '../dtos/category.dto'

@Controller('api/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('findAll')
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Get('findAll2')
  async findAll2(): Promise<CategoryDTO[]> {
    return await this.categoryService.findAll2()
  }

  @Get('find/:id')
  find(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findById(id)
  }

  @Get('find2/:id')
  find2(@Param('id') id: number): Promise<CategoryDTO> {
    return this.categoryService.findById2(id)
  }

  @Get('find-by-keyword/:keyword')
  findByKeyword(@Param('keyword') keyword: string): Promise<Category[]> {
    return this.categoryService.findByKeyword(keyword)
  }

  @Post('create')
  async create(@Body() category: Category): Promise<any> {
    return {
      result: await this.categoryService.save(category)
    }
  }

  @Put('update')
  async update(@Body() category: Category): Promise<any> {
    return {
      result: await this.categoryService.save(category)
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return {
      result: await this.categoryService.delete(id)
    }
  }
}
