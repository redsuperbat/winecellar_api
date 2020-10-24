import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

export class HttpExpress {
  public static retrieveTokenFromRequest(req: Request) {
    let authoriziationHeader = req.headers.authorization;
    if (!authoriziationHeader) throw new UnauthorizedException('Authorization Header not set');
    if (authoriziationHeader.startsWith('Bearer '))
      authoriziationHeader = authoriziationHeader.substring(
        'Bearer '.length,
        authoriziationHeader.length
      );
    return authoriziationHeader;
  }
}
