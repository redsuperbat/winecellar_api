import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCellarDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
