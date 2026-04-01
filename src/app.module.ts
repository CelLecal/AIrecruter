import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CandidatesModule } from './candidates/candidates.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    CandidatesModule,
    //   TypeOrmModule.forRoot({
    //     type: 'postgres',
    //     host: 'localhost',
    //     port: 5432,
    //     username: 'your_username',
    //     password: 'your_password',
    //     database: 'your_database',
    //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //     synchronize: true, // ВАЖНО: false для продакшена],
    //   }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
