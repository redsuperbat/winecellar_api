import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from './country.entity';
import { Grape } from './grape.entity';
import { Producer } from './producer.entity';
import { Wine } from './wine.entity';

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => Country,
    country => country.districts
  )
  country: Country;

  @OneToMany(
    () => Wine,
    wine => wine.district
  )
  wines: Wine[];

  @OneToMany(
    () => Producer,
    producer => producer.district
  )
  producers: Producer[];

  @OneToMany(
    () => Grape,
    grape => grape.district
  )
  grapes: Grape[];
}
