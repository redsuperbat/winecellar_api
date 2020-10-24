import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Cellar } from './cellar.entity';
import { Country } from './country.entity';
import { District } from './district.entity';
import { Grape } from './grape.entity';
import { Image } from './image.entity';
import { Producer } from './producer.entity';
import { WineType } from './wine-type.entity';

@Entity()
export class Wine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vintage: number;

  @Column()
  name: string;

  @ManyToOne(
    () => WineType,
    wineType => wineType.wines
  )
  wineType: WineType;

  @ManyToOne(
    () => District,
    district => district.wines
  )
  district: District;

  @ManyToOne(
    () => Cellar,
    cellar => cellar.wines
  )
  cellar: Cellar;

  @ManyToOne(
    () => Country,
    country => country.wines
  )
  country: Country;

  @ManyToOne(
    () => Producer,
    producer => producer.wines
  )
  producer: Producer;

  @ManyToMany(() => Grape)
  @JoinTable()
  grapes: Grape[];

  @OneToOne(() => Image)
  @JoinColumn()
  image: Image;
}
