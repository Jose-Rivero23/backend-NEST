import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { iTask } from './models/task.model';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly Task: Model<iTask>) {} // inyectar el modelo

  async create(createTaskDto: CreateTaskDto) {
    return this.Task.create(createTaskDto);
  }

  async findAll() {
    return this.Task.find({});
  }

  async findOne(id: string) {
    return this.Task.findById(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.Task.findByIdAndUpdate(id, updateTaskDto, { new: true }); // el new:true es para devolver el cambio ya realizado
  }

  remove(id: string) {
    return this.Task.findByIdAndDelete(id);
  }
}
