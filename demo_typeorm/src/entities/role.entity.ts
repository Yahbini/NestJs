import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";

@Entity("role", { schema: "nest_demo" })
export class Role {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 250 })
  name: string;

  @ManyToMany(() => Account, (account) => account.roles)
  accounts: Account[];
}
