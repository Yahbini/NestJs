import { appDataSource } from "./data_source";
import { Category } from "./entities/category.entity";

let dataSource = await appDataSource.initialize();
let categoryRepository = dataSource.getRepository(Category);

let categories = await categoryRepository.createQueryBuilder().getMany();

for (let category of categories) {
  console.log(`id: ${category.id}`);
  console.log(`name: ${category.name}`);

  let products = await category.products;
  if (products.length > 0) {
    for (let product of products) {
      console.log(`\tproduct id: ${product.id}`);
      console.log(`\tproduct name: ${product.name}`);
      console.log(`\tproduct price: ${product.price}`);
    }
  }
  console.log("-------------------------");
}
