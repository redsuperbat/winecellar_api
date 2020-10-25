import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { imgurClientId, imgurUrl } from 'src/common/constants/endpoints.constants';
import { ImagesService } from './images.service';
import { ImgurResponse } from 'src/common/interfaces/imgur-response.interface';
import axios from 'axios';
import * as FormData from 'form-data';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file) {
    // create form data
    const formData = new FormData();

    // add uploaded file
    formData.append('image', file.buffer, file.originalname);

    const { data } = await axios.post<ImgurResponse>(imgurUrl, formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
        'Accept-Encoding': 'gzip, deflate, br',
        Accept: 'application/json',
        Host: 'api.imgur.com',
        Authorization: `Client-ID ${imgurClientId}`,
        Connection: 'keep-alive',
        ...formData.getHeaders()
      }
    });

    return this.imagesService.createOne({ url: data.data.link, fileName: data.data.name });
  }
}
