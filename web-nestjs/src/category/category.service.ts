import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from '../entities/category.entity'
import { Repository } from 'typeorm'
import { CategoryDTO } from '../dtos/category.dto'
import { InjectMapper } from '@automapper/nestjs'
import { Mapper } from '@automapper/core'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectMapper()
    private mapper: Mapper
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find()
  }

  findById(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: {
        id: id
      }
    })
  }

  findByKeyword(keyword: string): Promise<Category[]> {
    return this.categoryRepository
      .createQueryBuilder('c')
      .where('c.name like :keyword', { keyword: `%${keyword}%` })
      .getMany()
  }

  async save(category: Category): Promise<boolean> {
    try {
      await this.categoryRepository.save(category)
      return true
    } catch (ex) {
      console.log(ex)
      return false
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.categoryRepository.delete(id)
      return result.affected > 0
    } catch (ex) {
      console.log(ex)
      return false
    }
  }

  async findById2(id: number): Promise<CategoryDTO> {
    const category = await this.categoryRepository.findOne({
      where: {
        id: id
      }
    })

    return this.mapper.map(category, Category, CategoryDTO)
  }

  async findAll2(): Promise<CategoryDTO[]> {
    const category = await this.categoryRepository.find()
    return this.mapper.mapArray(category, Category, CategoryDTO)
  }
}
