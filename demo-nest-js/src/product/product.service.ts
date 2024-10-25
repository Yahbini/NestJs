import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  products: Product[];

  constructor() {
    this.products = [
      new Product({
        id: 1,
        name: 'tiivi',
        photo: 'a.jpg',
        status: false,
        price: 2.3,
        createdAt: new Date(2024, 4, 2),
      }),
      new Product({
        id: 2,
        name: 'phone',
        photo: 'b.jpg',
        status: false,
        price: 2.3,
        createdAt: new Date(2024, 4, 2),
      }),
      new Product( {
        id: 3,
        name: 'laptop',
        photo: 'c.jpg',
        status: false,
        price: 2.3,
        createdAt: new Date(2024, 4, 2),
      })
    ];
  }

  findById(id: number): Product {
    return this.products.find((p) => p.id == id);
  }

  findAll(): Product[] {
    return this.products;
  }
}
