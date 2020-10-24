import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Authorization, AuthUser } from 'src/common/decorators/auth.decorator';
import { CellarsService } from './cellars.service';
import { CreateCellarDTO } from './DTO/create-cellar.dto';

@ApiTags('cellars')
@Controller('cellars')
export class CellarsController {
  constructor(private cellarsSerivce: CellarsService, private jwtService: JwtService) {}

  @Get()
  async getByUserId(@Req() req: Request, @Authorization() user: AuthUser) {
    return this.cellarsSerivce.getByUserId(user.userId);
  }

  @Post()
  async createOne(@Body() createCellarDto: CreateCellarDTO, @Req() req: Request) {
    const token = req.headers.authorization;
    const { user } = this.jwtService.decode(token.replace('Bearer ', '')) as {
      [key: string]: any;
    };
    return this.cellarsSerivce.createOne(user.id, createCellarDto);
  }
}
