import { appDataSource } from "./data_source";
import { Category } from "./entities/category.entity";

let categoryRepository = (await appDataSource.initialize()).getRepository(
  Category
);

let categories = await categoryRepository.find();
console.log(`category: ${categories.length}`);

categories.forEach((category) => {
    console.log(category);
    console.log("-----------------");
        
})