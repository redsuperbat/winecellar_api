import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProducerDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly country: number;
  @IsNumber()
  @IsNotEmpty()
  readonly district: number;
}
