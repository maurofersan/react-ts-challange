import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth/auth.controller';
import { DataController } from './controllers/data/data.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, DataController],
  providers: [AppService],
})
export class AppModule {}
