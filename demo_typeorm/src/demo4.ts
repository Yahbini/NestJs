import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let productRepository = (await appDataSource.initialize()).getRepository(
  Product
);

let products = await productRepository
  .createQueryBuilder()
  .where("status = :sta", { sta: true })
  .andWhere('price >= :min and price <= :max', {min: 10, max: 12})
  .getMany();

console.log(`products ${products.length}`);

products.forEach((p) => {
  console.log(p);
  console.log("-----------------");
});
