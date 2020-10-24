import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grape } from 'src/entities/grape.entity';
import { GrapesController } from './grapes.controller';
import { GrapesService } from './grapes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grape])],
  controllers: [GrapesController],
  providers: [GrapesService]
})
export class GrapesModule {}
