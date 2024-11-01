import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let dataSource = await appDataSource.initialize();
let productRepository = dataSource.getRepository(Product);

let product = new Product();
product.name = "phone2";
product.categoryId = 1;
product.created = "30/10/24";
product.description = "";
product.photo = "a.png";
product.price = 32.1;
product.quantity = 12;
product.status = true
await productRepository.save(product);
