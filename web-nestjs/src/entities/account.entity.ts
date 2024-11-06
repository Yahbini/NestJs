import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from './role.entity'
import { Invoice } from './invoice.entity'

@Entity('account', { schema: 'nest_demo' })
export class Account {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number

  @Column('varchar', { name: 'email', length: 250 })
  email: string

  @Column('varchar', { name: 'password', length: 250 })
  password: string

  @Column('varchar', { name: 'full_name', length: 250 })
  fullName: string

  @Column('tinyint', { name: 'stastus', width: 1 })
  stastus: boolean

  @Column('date', { name: 'dob' })
  dob: string

  @ManyToMany(() => Role, (role) => role.accounts, {
    lazy: true
  })
  @JoinTable({
    name: 'account_role',
    joinColumns: [{ name: 'account_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'role_id', referencedColumnName: 'id' }],
    schema: 'nest_demo'
  })
  roles: Promise<Role[]>

  @OneToMany(() => Invoice, (invoice) => invoice.account, {
    lazy: true
  })
  invoices: Promise<Invoice[]>
}
