import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('categories')
class Category {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

}

export { Category };