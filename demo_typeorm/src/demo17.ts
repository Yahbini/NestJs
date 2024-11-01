import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let dataSource = await appDataSource.initialize();
let productRepository = dataSource.getRepository(Product);

let products = await productRepository.createQueryBuilder().getMany();

for (let product of products) {
  console.log(`\tproduct id: ${product.id}`);
  console.log(`\tproduct name: ${product.name}`);
  console.log(`\tproduct price: ${product.price}`);

  let category = await product.category;
  console.log(`\tcategory id: ${category.id}`);
  console.log(`\tcategory name: ${category.name}`);
  console.log('-----------------------------------');

}