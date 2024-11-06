import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from '../entities/category.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
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
}
