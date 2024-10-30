import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let productRepository = (await appDataSource.initialize()).getRepository(
  Product
);


let result = await productRepository
  .createQueryBuilder("p")
  .getCount()

console.log(result);

let result1 = await productRepository
  .createQueryBuilder("p")
  .where('p.status = :status', {status: true})
  .select('count(id)', 'count2')
  .getRawOne()

console.log(result1);