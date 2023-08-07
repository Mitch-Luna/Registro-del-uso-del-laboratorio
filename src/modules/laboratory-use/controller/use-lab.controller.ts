import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { UsoLabService } from '../services/use-lab.service';
  import { LaboratoryUseDto } from '../dto/use_lab.dto';
  import { LaboratoryUse } from '../entities';
  
  @Controller('users')
  
  export class UseLabController {
    constructor(private readonly usersServices: UsoLabService) { }
  
    @Get('/')
    async getUsers() {
      const users = await this.usersServices.getUsers();
      const data = {
        data: users,
        message: 'ok',
      };
      return data;
    }
  
    @Post('/')
    async createUser(@Body() payload: LaboratoryUseDto) {
      return await this.usersServices.created(payload);
    }
  
    @Get('/:id')
    async getUser(@Param('id', ParseIntPipe) id: number, @GetUser() user: LaboratoryUse) {
      return await this.usersServices.getUser(id);
    }
  
    @Put('/:id')
    async updatedUser(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: UserPartialTypeDto,
    ) {
      return await this.usersServices.updated(id, payload);
    }
  
    @Delete('/:id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
      return await this.usersServices.deleted(id);
    }
  }
  