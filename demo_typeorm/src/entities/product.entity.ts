import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceDetails } from "./invoice_details.entity";
import { Category } from "./category.entity";

@Index("category_id", ["categoryId"], {})
@Entity("product", { schema: "nest_demo" })
export class Product {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 250 })
  name: string;

  @Column("float", { name: "price", precision: 12 })
  price: number;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("text", { name: "description" })
  description: string;

  @Column("varchar", { name: "photo", length: 250 })
  photo: string;

  @Column("date", { name: "created" })
  created: string;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @OneToMany(() => InvoiceDetails, (invoiceDetails) => invoiceDetails.product)
  invoiceDetails: InvoiceDetails[];

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: Category;
}
