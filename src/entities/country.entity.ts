import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { District } from './district.entity';
import { Grape } from './grape.entity';
import { Producer } from './producer.entity';
import { Wine } from './wine.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => District,
    district => district.country
  )
  districts: District[];

  @OneToMany(
    () => Producer,
    producer => producer.country
  )
  producers: Producer[];

  @OneToMany(
    () => Grape,
    grape => grape.country
  )
  grapes: Grape[];

  @OneToMany(
    () => Wine,
    wine => wine.country
  )
  wines: Wine[];
}
