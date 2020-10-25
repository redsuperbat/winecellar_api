import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'src/entities/image.entity';
import { Repository } from 'typeorm';
import { CreateImageDTO } from './DTO/create-image.dto';

@Injectable()
export class ImagesService {
  constructor(@InjectRepository(Image) private imagesRepository: Repository<Image>) {}

  async createOne(createImageDto: CreateImageDTO) {
    return this.imagesRepository.save(createImageDto);
  }

  async getOne(imageId: number) {
    return this.imagesRepository.find({ id: imageId });
  }
}
