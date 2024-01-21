import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodo() {
    return this.todoService.getTodo();
  }

  @Post()
  async createTodo(@Body() todoData: Todo): Promise<Todo> {
    return this.todoService.createTodo(todoData);
  }

  @Put()
  async updateTodo(@Body() todoData: Todo): Promise<Todo> {
    return this.todoService.updateTodo(todoData);
  }

  @Delete()
  async deleteTodo(@Body() todoData: { id: number }): Promise<Todo> {
    return this.todoService.deleteTodo(todoData);
  }
}
