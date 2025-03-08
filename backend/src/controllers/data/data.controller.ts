import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { DataResponse } from './dataResponse.interface';
import { JwtAuthGuard } from 'src/guards/jwtAuth.guard';

@Controller('data')
export class DataController {
  @Get()
  @UseGuards(JwtAuthGuard)
  getData(
    @Query('page') page = '1',
    @Query('limit') limit = '100',
  ): DataResponse {
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const start = (pageNumber - 1) * limitNumber;
    const end = start + limitNumber;

    const items = Array.from({ length: 2000 }, (_, i) => {
      return {
        id: `${i + 1}`,
        name: `Item ${i + 1}`,
      };
    }).slice(start, end);

    return {
      items,
      page: pageNumber,
      totalPages: Math.ceil(2000 / limitNumber),
    };
  }
}
