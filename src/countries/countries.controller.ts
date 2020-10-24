import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CreateCountryDTO } from './DTO/create-country.dto';

@ApiTags('countries')
@Controller('countries')
export class CountriesController {
  constructor(private countiresService: CountriesService) {}

  @Get()
  async getAll() {
    return this.countiresService.getAll();
  }

  @Post()
  async createOne(@Body() createCountryDto: CreateCountryDTO) {
    return this.countiresService.createOne(createCountryDto);
  }
}
