import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let productRepository = (await appDataSource.initialize()).getRepository(
  Product
);

let products = await productRepository.find({
  where: {
    status: true
  }
});

console.log(`products ${products.length}`);

products.forEach((p) => {
    console.log(p);
    console.log("-----------------");
        
})