import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWineDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly producer: number;

  @IsNotEmpty()
  @IsNumber()
  readonly district: number;

  @IsNotEmpty()
  @IsNumber()
  readonly grapes: number[];

  @IsNotEmpty()
  @IsNumber()
  readonly country: number;

  @IsNotEmpty()
  @IsNumber()
  readonly vintage: number;

  @IsNotEmpty()
  @IsNumber()
  readonly wineType: number;

  @IsNotEmpty()
  @IsNumber()
  readonly cellar: number;

  @IsOptional()
  @IsNumber()
  readonly image: number;
}
