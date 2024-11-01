import { appDataSource } from "./data_source";
import { Account } from "./entities/account.entity";
import { Role } from "./entities/role.entity";

let dataSource = await appDataSource.initialize();

let accountRepository = dataSource.getRepository(Account);
let roleRepository = dataSource.getRepository(Role);

let role = new Role();
role.name = 'Role 4'
role.accounts = Promise.resolve([
  await accountRepository.findOne({
    where: {
      id: 2
    }
  }),
  await accountRepository.findOne({
    where: {
      id: 3
    }
  })
])

roleRepository.save(role)

