import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGrapeDTO {
  @IsNumber()
  @IsNotEmpty()
  readonly district: number;

  @IsNumber()
  @IsNotEmpty()
  readonly country: number;

  @IsNumber()
  @IsNotEmpty()
  readonly wines: number[];

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
