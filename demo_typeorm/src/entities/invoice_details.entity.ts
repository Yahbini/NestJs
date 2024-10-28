import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Invoice } from "./invoice.entity";
import { Product } from "./product.entity";

@Index("product_id", ["productId"], {})
@Entity("invoice_details", { schema: "nest_demo" })
export class InvoiceDetails {
  @Column("int", { primary: true, name: "invoice_id" })
  invoiceId: number;

  @Column("int", { primary: true, name: "product_id" })
  productId: number;

  @Column("float", { name: "price", precision: 12 })
  price: number;

  @Column("int", { name: "quantity" })
  quantity: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceDetails, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoice;

  @ManyToOne(() => Product, (product) => product.invoiceDetails, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Product;
}
