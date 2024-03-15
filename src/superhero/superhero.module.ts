/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { Superhero } from './entities/superhero.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { superHeroProvider } from './entities/superhero.provider';

@Module({
  imports: [SequelizeModule.forFeature([Superhero])],
  controllers: [SuperheroController],
  providers: [SuperheroService, ...superHeroProvider],
  exports: [SuperheroService],
})
export class SuperheroModule {}
