import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from './country.entity';
import { District } from './district.entity';
import { Wine } from './wine.entity';

@Entity()
export class Grape {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => Country,
    country => country.grapes
  )
  country: Country;

  @ManyToOne(
    () => District,
    district => district.grapes
  )
  district: District;
}
