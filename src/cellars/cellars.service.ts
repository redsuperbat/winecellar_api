import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cellar } from 'src/entities/cellar.entity';
import { Repository } from 'typeorm';
import { CreateCellarDTO } from './DTO/create-cellar.dto';

@Injectable()
export class CellarsService {
  constructor(@InjectRepository(Cellar) private cellarsRepository: Repository<Cellar>) {}

  async getByUserId(userId: number) {
    return this.cellarsRepository.find({ userId });
  }

  async createOne(userId: number, createCellarDto: CreateCellarDTO) {
    const payload = {
      userId,
      ...createCellarDto
    };
    return this.cellarsRepository.save(payload);
  }
}
