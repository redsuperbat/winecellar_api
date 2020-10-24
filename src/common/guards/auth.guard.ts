import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { HttpExpress } from '../helpers/http-express.helper';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = HttpExpress.retrieveTokenFromRequest(request);

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return true;
    } catch {
      return false;
    }
  }
}
