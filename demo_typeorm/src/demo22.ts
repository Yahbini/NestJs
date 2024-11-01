import { appDataSource } from "./data_source";
import { Account } from "./entities/account.entity";

let dataSource = await appDataSource.initialize();

let accountRepository = dataSource.getRepository(Account);

let account = await accountRepository.findOne({
  where: {
    id: 12,
  },
  relations: {
    roles: true,
  },
});

accountRepository.remove(account);
