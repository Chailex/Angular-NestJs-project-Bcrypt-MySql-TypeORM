import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  // @BeforeInsert()
  // hashPassword() {
  //   this.password = crypto.createHmac('sha256', this.password).digest('hex');
  // }
  // @BeforeInsert()
  // async hashPassword() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
  @Column()
  password : string

  // @Column()
  // passwordHash: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  topic: string;

  @Column()
  address: string;
}