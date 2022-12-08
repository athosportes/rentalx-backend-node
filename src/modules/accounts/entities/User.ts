import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class User {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text', {
    unique: true
  })
  username: string;

  @Column('text')
  password:string;

  @Column('text', {
    unique: true
  })
  email: string;

  @Column('text', {
    name: 'driver_license',
    unique: true
  })
  driverLicense: string;

  @Column('boolean', {
    default: false
  })
  isAdmin: boolean;

  @CreateDateColumn()
  @Column({ name: 'created_at'})
  createdAt: Date;

}

export { User }

