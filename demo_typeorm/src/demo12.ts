import { appDataSource } from "./data_source";
import { Category } from "./entities/category.entity";
import { Product } from "./entities/product.entity";

let dataSource = await appDataSource.initialize();
let categoryRepository = dataSource.getRepository(Category);

let category = new Category();
category.name = "ABC";
categoryRepository.save(category)
