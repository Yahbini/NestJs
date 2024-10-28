import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./account.entity";
import { InvoiceDetails } from "./invoice_details.entity";

@Index("account_id", ["accountId"], {})
@Entity("invoice", { schema: "nest_demo" })
export class Invoice {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("date", { name: "created" })
  created: string;

  @Column("varchar", { name: "status", length: 250 })
  status: string;

  @Column("varchar", { name: "payment", length: 250 })
  payment: string;

  @Column("int", { name: "account_id" })
  accountId: number;

  @ManyToOne(() => Account, (account) => account.invoices, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Account;

  @OneToMany(() => InvoiceDetails, (invoiceDetails) => invoiceDetails.invoice)
  invoiceDetails: InvoiceDetails[];
}
