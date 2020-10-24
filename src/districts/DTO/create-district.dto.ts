import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDistrictDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsOptional()
  readonly country: number;
}
