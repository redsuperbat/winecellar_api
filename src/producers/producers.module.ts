import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from 'src/entities/producer.entity';
import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producer])],
  controllers: [ProducersController],
  providers: [ProducersService]
})
export class ProducersModule {}
