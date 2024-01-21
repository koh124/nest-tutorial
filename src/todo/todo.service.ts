import { Injectable } from '@nestjs/common';
import { Todo, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type TodoInputWithId = {
  id: number;
} & Prisma.TodoUpdateInput;

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async getTodo(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  async updateTodo(data: TodoInputWithId): Promise<Todo> {
    return this.prisma.todo.update({
      where: {
        id: Number(data.id),
      },
      data: {
        name: data.name,
        status: data.status,
      },
    });
  }

  async deleteTodo(data: TodoInputWithId): Promise<Todo> {
    return this.prisma.todo.delete({
      where: {
        id: Number(data.id),
      },
    });
  }
}
