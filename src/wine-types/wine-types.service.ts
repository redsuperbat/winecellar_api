import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WineType } from 'src/entities/wine-type.entity';
import { Repository } from 'typeorm';
import { CreateWineTypeDTO } from './DTO/create-wine-type.dto';

@Injectable()
export class WineTypesService {
  constructor(@InjectRepository(WineType) private wineTypesRepository: Repository<WineType>) {}

  async getAll() {
    return this.wineTypesRepository.find({});
  }

  async createOne(createWineTypeDto: CreateWineTypeDTO) {
    return this.wineTypesRepository.save(createWineTypeDto);
  }
}
