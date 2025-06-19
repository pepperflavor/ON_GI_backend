import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from './cache/cache.module';
import { AgencyModule } from './agency/agency.module';

@Module({
  imports: [UserModule, AuthModule, CacheModule, AgencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
