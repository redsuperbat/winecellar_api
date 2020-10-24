import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
