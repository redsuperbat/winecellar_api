import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateWineDTO {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  readonly producer: number;

  @IsOptional()
  @IsNumber()
  readonly district: number;

  @IsOptional()
  @IsNumber()
  readonly grapes: number[];

  @IsOptional()
  @IsNumber()
  readonly country: number;

  @IsOptional()
  @IsNumber()
  readonly vintage: number;

  @IsOptional()
  @IsNumber()
  readonly wineType: number;

  @IsOptional()
  @IsNumber()
  readonly cellar: number;

  @IsOptional()
  @IsNumber()
  readonly image: number;
}
