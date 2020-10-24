import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wine } from './entities/wine.entity';
import { Cellar } from './entities/cellar.entity';
import { Country } from './entities/country.entity';
import { District } from './entities/district.entity';
import { Grape } from './entities/grape.entity';
import { Image } from './entities/image.entity';
import { Producer } from './entities/producer.entity';
import { WineType } from './entities/wine-type.entity';
import { WinesModule } from './wines/wines.module';
import { CountriesModule } from './countries/countries.module';
import { DistrictsModule } from './districts/districts.module';
import { GrapesModule } from './grapes/grapes.module';
import { WineTypesModule } from './wine-types/wine-types.module';
import { CellarsModule } from './cellars/cellars.module';
import { ProducersModule } from './producers/producers.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guards/auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'dev',
      entities: [Wine, Cellar, Country, District, Grape, Producer, WineType, Image],
      synchronize: true
    }),
    WinesModule,
    CountriesModule,
    DistrictsModule,
    GrapesModule,
    WineTypesModule,
    CellarsModule,
    ProducersModule
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard }]
})
export class AppModule {}
