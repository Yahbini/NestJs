import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity("category", { schema: "nest_demo" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 250 })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
