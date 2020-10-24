import { createParamDecorator, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { HttpExpress } from '../helpers/http-express.helper';

export const Authorization = createParamDecorator((_, request: Request) => {
  const accessToken = HttpExpress.retrieveTokenFromRequest(request);
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_HASH) as object;
    return Number(decoded['userId']);
  } catch (error) {
    throw new UnauthorizedException('Token is not valid');
  }
});

export interface AuthUser {
  userId: number;
}
