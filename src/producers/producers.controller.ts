import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProducerDTO } from './DTO/create-produer.dto';
import { ProducersService } from './producers.service';

@ApiTags('producers')
@Controller('producers')
export class ProducersController {
  constructor(private producersService: ProducersService) {}

  @Get()
  async getAll() {
    return this.producersService.getAll();
  }

  @Post()
  async createOne(@Body() createProducerDto: CreateProducerDTO) {
    return this.producersService.createOne(createProducerDto);
  }
}
