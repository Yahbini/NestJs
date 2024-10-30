import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let productRepository = (await appDataSource.initialize()).getRepository(
  Product
);

let keyword = "";

let products = await productRepository
  .createQueryBuilder("p")
  .where("p.status = :status", { status: true })
  .orderBy("p.price", "ASC")
  .skip(1)
  .take(2)
  .getMany();

console.log(`products ${products.length}`);

products.forEach((p) => {
  console.log(p);
  console.log("-----------------");
});
