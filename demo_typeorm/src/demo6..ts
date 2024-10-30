import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let productRepository = (await appDataSource.initialize()).getRepository(
  Product
);

let keyword= ''

let products = await productRepository
  .createQueryBuilder('p')
  .where('p.name like = :keyword', {keyword : `%${keyword}%`})
  .getMany();

console.log(`products ${products.length}`);

products.forEach((p) => {
  console.log(p);
  console.log("-----------------");
});
