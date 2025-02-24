import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit ${limit}, offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param() params) {
    return `This action returns #${params.id} coffee`;
  }
  // findOne(@Param('id') id: string) {
  //   return `This action returns #${id} coffee`;
  // }

  @Post()
  // @HttpCode(HttpStatus.NOT_FOUND)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
