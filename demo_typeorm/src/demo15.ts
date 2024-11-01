import { appDataSource } from "./data_source";
import { Category } from "./entities/category.entity";

let dataSource = await appDataSource.initialize();
let categoryRepository = dataSource.getRepository(Category);

// let result = await categoryRepository.delete(7)
// if(result.affected > 0) {
//     console.log("success");
// } else {
//     console.log("Failed");
    
// }


try {
    let category = await categoryRepository.findOne({
        where: {
            id: 7
        }
    })
    
    await categoryRepository.remove(category)
    console.log("success");
    
} catch {
    console.log("failed");
}


