import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('specification')
export class Specification {
  
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  
  @Column()
  name: string;
  
  @Column()
  description: string;
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  
}