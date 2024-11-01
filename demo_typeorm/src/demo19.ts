import { DataSource } from "typeorm";
import { appDataSource } from "./data_source";
import { Category } from "./entities/category.entity";
import { Role } from "./entities/role.entity";

let dataSource = await appDataSource.initialize();

let roleRepository = dataSource.getRepository(Role);

let roles = await roleRepository.createQueryBuilder().getMany();

for (let role of roles) {
  console.log(`id: ${role.id}`);
  console.log(`name: ${role.name}`);

  let accounts = await role.accounts;
  console.log(`account: ${accounts.length}`);
  for (let account of accounts) {
    console.log(`account name: ${account.fullName}`);
  }
  console.log("-------------------------------");
}
