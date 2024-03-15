/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';

@Controller('superhero')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Get()
  findAll() {
    const findAll = this.superheroService.findAll();
    return findAll;
  }

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroService.create(createSuperheroDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.superheroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateSuperheroDto) {
    return this.superheroService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.superheroService.remove(id);
  }
}
