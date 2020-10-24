import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producer } from 'src/entities/producer.entity';
import { Repository } from 'typeorm';
import { CreateProducerDTO } from './DTO/create-produer.dto';

@Injectable()
export class ProducersService {
  constructor(@InjectRepository(Producer) private producerRepository: Repository<Producer>) {}

  async getAll() {
    return this.producerRepository.find({});
  }

  async createOne(createProducerDto: CreateProducerDTO) {
    const payload = {
      country: { id: createProducerDto.country },
      district: { id: createProducerDto.district },
      name: createProducerDto.name
    };
    return this.producerRepository.save(payload);
  }
}
