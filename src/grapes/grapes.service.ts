import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grape } from 'src/entities/grape.entity';
import { Repository } from 'typeorm';
import { CreateGrapeDTO } from './DTO/create-grape.dto';

@Injectable()
export class GrapesService {
  constructor(@InjectRepository(Grape) private grapesRepository: Repository<Grape>) {}

  async createOne(createGrapeDto: CreateGrapeDTO) {
    const payload = {
      wines: createGrapeDto.wines.map(id => ({ id })),
      district: { id: createGrapeDto.district },
      country: { id: createGrapeDto.country },
      name: createGrapeDto.name
    };
    return this.grapesRepository.save(payload);
  }

  async getAll() {
    return this.grapesRepository.find({});
  }
}
