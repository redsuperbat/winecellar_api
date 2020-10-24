import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGrapeDTO } from './DTO/create-grape.dto';
import { GrapesService } from './grapes.service';

@ApiTags('grapes')
@Controller('grapes')
export class GrapesController {
  constructor(private grapesService: GrapesService) {}

  @Get()
  async getAll() {
    return this.grapesService.getAll();
  }

  @Post()
  async createOne(@Body() createGrapeDto: CreateGrapeDTO) {
    return this.grapesService.createOne(createGrapeDto);
  }
}
