import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { District } from 'src/entities/district.entity';
import { Repository } from 'typeorm';
import { CreateDistrictDTO } from './DTO/create-district.dto';

@Injectable()
export class DistrictsService {
  constructor(@InjectRepository(District) private districtsRepository: Repository<District>) {}

  async getAll() {
    return this.districtsRepository.find({});
  }

  async createOne(createDistrictDto: CreateDistrictDTO) {
    const payload = {
      name: createDistrictDto.name,
      country: { id: createDistrictDto.country }
    };
    return this.districtsRepository.save(payload);
  }
}
