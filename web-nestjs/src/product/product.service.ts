import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from '../entities/product.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find()
  }

  findById(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: {
        id: id
      }
    })
  }

  findByCategoryId(categoryId: number): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        categoryId: categoryId
      }
    })
  }

  findByYearAndMonth(year: number, month: number): Promise<Product[]> {
    return this.productRepository
      .createQueryBuilder()
      .where('year(created) = :year and month(created) = :month', {
        year: year,
        month: month
      })
      .getMany()
  }

  latest(n: number): Promise<Product[]> {
    return this.productRepository.createQueryBuilder().orderBy('id', 'DESC').limit(n).getMany()
  }

  findByPrice(min: number, max: number): Promise<Product[]> {
    return this.productRepository
      .createQueryBuilder()
      .where('price >= :min and price <= :max', {
        min: min,
        max: max
      })
      .getMany()
  }

  findByDate(from: string, to: string): Promise<Product[]> {
    return this.productRepository
      .createQueryBuilder()
      .where('created >= :from and created <= :to', {
        from: from,
        to: to
      })
      .getMany()
  }
}
