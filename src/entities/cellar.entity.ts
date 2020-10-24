import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Wine } from './wine.entity';

@Entity()
export class Cellar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userId: number;

  @OneToMany(
    () => Wine,
    wine => wine.cellar
  )
  wines: Wine[];
}
