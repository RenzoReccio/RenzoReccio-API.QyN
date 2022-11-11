import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class SignInDto {
  @ApiProperty()
  @IsEmail({message: 'El correo no tiene el formato correcto'})
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  typeDocumentId: number;
  
  @ApiProperty()
  numberDocument: string;
  
  @ApiProperty()
  companyName: string;
  
  @ApiProperty()
  phone: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  surName: string;
  
  @ApiProperty()
  bornDate: Date;
}