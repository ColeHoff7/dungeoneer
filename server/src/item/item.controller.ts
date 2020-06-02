import { Controller, Get, Param } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.interface';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  /*
  * Get all items
  */
  @Get()
  async get(): Promise<Item[]> {
    return this.itemService.get();
  }

  /*
  * Get item by name
  */
  @Get(':name([A-Za-z]+)')
  async getByName(@Param('name') name: string): Promise<Item[]> {
    return this.itemService.getByName(name);
  }

  /*
  * Get item by id
  */
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Item> {
    return this.itemService.getById(id);
  }

  /*
  * Get item by category
  */
  @Get('/category/:category([A-Za-z]+)')
  async getByCategory(@Param('category') category: string): Promise<Item[]> {
    return this.itemService.getByCategory(category);
  }
}
