import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/entities/country.entity';
import { Repository } from 'typeorm';
import { CreateCountryDTO } from './DTO/create-country.dto';

@Injectable()
export class CountriesService {
  constructor(@InjectRepository(Country) private countriesRepository: Repository<Country>) {}

  async getAll() {
    return this.countriesRepository.find({});
  }

  async createOne(createCountryDto: CreateCountryDTO) {
    return this.countriesRepository.save(createCountryDto);
  }
}
