import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WineType } from 'src/entities/wine-type.entity';
import { WineTypesController } from './wine-types.controller';
import { WineTypesService } from './wine-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([WineType])],
  controllers: [WineTypesController],
  providers: [WineTypesService]
})
export class WineTypesModule {}
