import { ApiProperty } from "@nestjs/swagger";

export class CreateVehicleResponse {
  @ApiProperty()
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}