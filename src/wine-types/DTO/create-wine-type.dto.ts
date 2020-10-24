import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWineTypeDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
