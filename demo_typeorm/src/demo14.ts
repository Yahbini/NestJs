import { appDataSource } from "./data_source";
import { Product } from "./entities/product.entity";

let dataSource = await appDataSource.initialize();
let productRepository = dataSource.getRepository(Product);

let product = await productRepository.createQueryBuilder().where('id = :id', {id: 6}).getOne()

product.name  = "phone3"
productRepository.save(product)


