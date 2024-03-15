/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
/* import { InjectRepository } from '@nestjs/typeorm'; */
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import { Superhero } from './entities/superhero.entity';
/* import { Repository } from 'typeorm'; */
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SuperheroService {
  constructor(
    @Inject('HERO_REPOSITORY')
    private characterRepository: typeof Superhero,
  ) {}
  async create(data: CreateSuperheroDto): Promise<Superhero> {
    const createCharacter = await this.characterRepository.create({
      ...data,
    });
    return createCharacter;
  }

  async findAll(): Promise<Superhero[]> {
    const findAll = await this.characterRepository.findAll<Superhero>();
    return findAll;
  }

  async findOne(id: number) {
    const findOne = await this.characterRepository.findOne({
      where: { id: id },
    });
    return findOne;
  }

  async update(id: number, data: UpdateSuperheroDto): Promise<Superhero> {
    const findOne = await this.characterRepository.findOne({
      where: { id: id },
    });
    if (!findOne) {
      throw new NotFoundException(`Hero with ID "${id}" not found`);
    } else {
      const update = await this.characterRepository.update(
        { ...data },
        {
          where: {
            id: id,
          },
        },
      );
      const res: any = {
        update: update,
        message: 'hoakfowaf',
        id: findOne.id,
      };
      return res;
    }
  }

  async remove(id: number): Promise<any> {
    const find: Superhero = await this.characterRepository.findOne({
      where: { id: id },
    });
    if (!find) {
      throw new NotFoundException('Character not found');
    } else {
      const remove = await this.characterRepository.destroy({
        where: {
          id: find.dataValues.id,
        },
      });

      const res: any = {
        delete: remove,
        message: `the character with ${id} was removed`,
      };
      return res;
    }
  }
}
