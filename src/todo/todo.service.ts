import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private TodosRepository: Repository<Todo>
  ){}
  async create(createTodoDto) {
    console.log("service", createTodoDto);
    
    const data= await this.TodosRepository.save(createTodoDto)
                      .then(res=>{
                        console.log("mon res",res);
                        return res 
                      })
                      .catch(erreur=>{
                        console.log("mon erreur",erreur);
                        return erreur
                      })
    console.log("service", data
    );
    return data
  }

  async findAll() {
      const todos = await this.TodosRepository.find()
                    .then(res=>{
                      console.log("findAll", res);
                      
                      return res
                    })
                    .catch(erreur=>{
                      console.log("finderreur",erreur);
                      
                      return erreur
                    })
      return todos              
  }

  findOne(id: number) {
    return this.TodosRepository.findOneBy({id})
  }

  update(id: number, updateTodoDto) {
    return this.TodosRepository.update(id,updateTodoDto);
  }

  remove(id: number) {
    return this.TodosRepository.delete(id);
  }
}
