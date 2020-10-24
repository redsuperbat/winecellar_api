import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DistrictsService } from './districts.service';
import { CreateDistrictDTO } from './DTO/create-district.dto';

@ApiTags('districts')
@Controller('districts')
export class DistrictsController {
  constructor(private districtsService: DistrictsService) {}

  @Get()
  async getAll() {
    return this.districtsService.getAll();
  }

  @Post()
  async createOne(@Body() createDistrictDto: CreateDistrictDTO) {
    return this.districtsService.createOne(createDistrictDto);
  }
}
