import { appDataSource } from "./data_source";
import { Account } from "./entities/account.entity";
import { Role } from "./entities/role.entity";

let dataSource = await appDataSource.initialize();

let accountRepository = dataSource.getRepository(Account);
let roleRepository = dataSource.getRepository(Role);

let role = await roleRepository.findOne({
  where: {
    id: 4
  }, 
  relations: {
    accounts: true
  }
});
role.accounts = Promise.resolve([
  await accountRepository.findOne({
    where: {
      id: 1
    }
  }),
  await accountRepository.findOne({
    where: {
      id: 13
    }
  })
])

roleRepository.save(role)

