import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from './country.entity';
import { District } from './district.entity';
import { Wine } from './wine.entity';

@Entity()
export class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => Country,
    country => country.producers
  )
  country: Country;

  @ManyToOne(
    () => District,
    district => district.producers
  )
  district: District;

  @OneToMany(
    () => Wine,
    wine => wine.producer
  )
  wines: Wine[];
}
