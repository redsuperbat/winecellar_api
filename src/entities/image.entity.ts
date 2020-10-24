import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Wine } from './wine.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  fileName: string;
}
