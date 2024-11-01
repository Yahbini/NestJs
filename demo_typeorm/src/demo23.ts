import { appDataSource } from "./data_source";
import { Account } from "./entities/account.entity";

let dataSource = await appDataSource.initialize();

let accountRepository = dataSource.getRepository(Account);

let account = await accountRepository.findOne({
  where: {
    id: 1,
  },
  relations: {
    roles: true,
  },
});
account.password = "123"
account.email = "sa@gmail.com"
accountRepository.save(account);
