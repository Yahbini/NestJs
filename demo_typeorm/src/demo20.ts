import { appDataSource } from "./data_source";
import { Account } from "./entities/account.entity";
import * as bcrypt from "bcrypt";
import { Role } from "./entities/role.entity";

let dataSource = await appDataSource.initialize();

let accountRepository = dataSource.getRepository(Account);
let roleRepository = dataSource.getRepository(Role);

let account = new Account();

account.email = "acc1@gmail.com";
account.dob = "2004-03-12";
account.fullName = "Ryan";
account.password = await bcrypt.hash("123", await bcrypt.genSalt());
account.stastus = true;
account.roles = Promise.resolve([
  await roleRepository.findOne({
    where: {
      id: 1,
    },
    relations: {
      accounts: true,
    },
  }),
  await roleRepository.findOne({
    where: {
      id: 2,
    },
    relations: {
      accounts: true,
    },
  }),
]);
account = await accountRepository.save(account);
