import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Wine } from './wine.entity';

@Entity()
export class WineType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => Wine,
    wine => wine.wineType
  )
  wines: Wine[];
}
