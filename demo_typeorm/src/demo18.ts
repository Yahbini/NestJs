import { appDataSource } from "./data_source";
import { Account } from "./entities/account.entity";
import { Product } from "./entities/product.entity";

let dataSource = await appDataSource.initialize();
let accountRepository = dataSource.getRepository(Account);

let accounts = await accountRepository.createQueryBuilder().getMany();

for (let account of accounts) {
  console.log(`\account id: ${account.id}`);
  console.log(`\taccount fullname: ${account.fullName}`);
  console.log(`\taccount email: ${account.email}`);

  let roles = await account.roles;
  for(let role of roles) {
    console.log(`\trole name: ${role.name}`);

  }
  console.log('-----------------------------------');

}