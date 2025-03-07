import { Controller, Get } from '@nestjs/common';

@Controller('data')
export class DataController {
  @Get()
  getData() {
    return Array.from({ length: 2000 }, (_, i) => {
      return {
        id: `${i + 1}`,
        name: `Item ${i + 1}`,
      };
    });
  }
}
