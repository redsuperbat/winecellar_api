import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageDTO {
  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @IsNotEmpty()
  @IsString()
  readonly fileName: string;
}
