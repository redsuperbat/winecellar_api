import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cellar } from 'src/entities/cellar.entity';
import { CellarsController } from './cellars.controller';
import { CellarsService } from './cellars.service';

@Module({
  imports: [
    JwtModule.register({ secret: 'hard!to-guess_secret' || process.env.JWT_SECRET }),
    TypeOrmModule.forFeature([Cellar])
  ],
  controllers: [CellarsController],
  providers: [CellarsService]
})
export class CellarsModule {}
