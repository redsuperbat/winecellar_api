import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wine } from 'src/entities/wine.entity';
import { Repository } from 'typeorm';
import { CreateWineDTO } from './DTO/create-wine.dto';
import { UpdateWineDTO } from './DTO/update-wine.dto';

@Injectable()
export class WinesService {
  constructor(
    @InjectRepository(Wine)
    private winesRepository: Repository<Wine>
  ) {}

  async getAllByCellar(cellarId: number) {
    return this.winesRepository.find({ cellar: { id: cellarId } });
  }

  async getAll() {
    return this.winesRepository.find({});
  }

  async getById(wineId: number) {
    return this.winesRepository.find({ id: wineId });
  }

  async createOne(createWineDto: CreateWineDTO) {
    const payload = {
      cellar: { id: createWineDto.cellar },
      district: { id: createWineDto.district },
      name: createWineDto.name,
      vintage: createWineDto.vintage,
      grapes: createWineDto.grapes.map(id => ({ id })),
      producer: { id: createWineDto.producer },
      wineType: { id: createWineDto.wineType },
      country: { id: createWineDto.country },
      image: { id: createWineDto.image }
    };
    return this.winesRepository.save(payload);
  }

  async updateOne(id: number, updateWineDto: UpdateWineDTO) {
    const payload = {
      cellar: { id: updateWineDto.cellar },
      district: { id: updateWineDto.district },
      name: updateWineDto.name,
      vintage: updateWineDto.vintage,
      grapes: updateWineDto.grapes.map(id => ({ id })),
      producer: { id: updateWineDto.producer },
      wineType: { id: updateWineDto.wineType },
      country: { id: updateWineDto.country },
      image: { id: updateWineDto.image }
    };
    return this.winesRepository.update(id, payload);
  }
}
