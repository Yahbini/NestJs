import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let productRepository = (await appDataSource.initialize()).getRepository(
  Product
);


let result = await productRepository
  .createQueryBuilder("p")
  .select('min(price)', 'min1')
  .getRawOne()

console.log(result['min1']);

let result2 = await productRepository
  .createQueryBuilder("p")
  .select('max(price)', 'max')
  .getRawOne()

console.log(`max ${result2['max']}`);

let result3 = await productRepository
  .createQueryBuilder("p")
  .select('avg(price)', 'avg')
  .getRawOne()

console.log(`avg ${result3['avg']}`);
