import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateWineTypeDTO } from './DTO/create-wine-type.dto';
import { WineTypesService } from './wine-types.service';

@ApiTags('wine-types')
@Controller('wine-types')
export class WineTypesController {
  constructor(private wineTypesService: WineTypesService) {}

  @Get()
  async getAll() {
    return this.wineTypesService.getAll();
  }

  @Post()
  async createOne(@Body() createWineTypeDto: CreateWineTypeDTO) {
    return this.wineTypesService.createOne(createWineTypeDto);
  }
}
