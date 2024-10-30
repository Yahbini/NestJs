import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let productRepository = (await appDataSource.initialize()).getRepository(
  Product
);

let { sum2 } = await productRepository
  .createQueryBuilder("p")
  .select("sum(p.quantity)", "sum2")
  .getRawOne();

console.log(sum2);

let result = await productRepository
  .createQueryBuilder("p")
  .select("sum(p.quantity)", "sum1")
  .getRawOne();

console.log(result['sum1']);

let result2 = await productRepository
  .createQueryBuilder("p")
  .select("sum(p.quantity * p.price)", "total")
  .getRawOne();

console.log(result2['total']);
