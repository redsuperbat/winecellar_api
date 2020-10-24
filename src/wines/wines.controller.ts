import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateWineDTO } from './DTO/create-wine.dto';
import { UpdateWineDTO } from './DTO/update-wine.dto';
import { WinesService } from './wines.service';

@ApiTags('wines')
@Controller('wines')
export class WinesController {
  constructor(private winesService: WinesService) {}

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.winesService.getById(id);
  }

  @Post()
  async createOne(@Body() createWineDto: CreateWineDTO) {
    return this.winesService.createOne(createWineDto);
  }

  @Put(':id')
  async updateOne(@Param('id', ParseIntPipe) id: number, @Body() updateWineDto: UpdateWineDTO) {
    return this.winesService.updateOne(id, updateWineDto);
  }

  @Get()
  async getByCellar(@Param('cellarId', ParseIntPipe) cellarId: number) {
    if (!cellarId) {
      throw new BadRequestException('Cellar Id required');
    }
    return this.winesService.getAllByCellar(cellarId);
  }
}
