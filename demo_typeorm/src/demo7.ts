import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let productRepository = (await appDataSource.initialize()).getRepository(
  Product
);

let keyword= ''

let products = await productRepository
  .createQueryBuilder('p')
  // .where('year(created) = :year', {year : 2024})
  .where('p.created= :date', {date : '2024-10-28'})
  .getMany();

console.log(`products ${products.length}`);

products.forEach((p) => {
  console.log(p);
  console.log("-----------------");
});
