
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}


async  showAll() {
    return await this.userRepository.find();
}

// async  create(data){
//     const user = await this.userRepository.create(data);
//     await this.userRepository.save(data);
//     return user;
// }


async update(id:number, data: Partial <UserDTO>){
    let user = await this.userRepository.findOne({where: {id}});
    await this.userRepository.update({id}, data)
   return user;
}  

async read(id: number){
    let user = await this.userRepository.findOne({where: {id}});
    return user;
}

async delete(id: number){
    let user = await this.userRepository.findOne({where: {id}});
    await this.userRepository.delete({id})
    return user;
}

////////////////
async findByUser(username: string): Promise<User> {
    return await this.userRepository.findOne({
        where: {
            username: username,
        }
    });
}

async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
        where: {
            id: id,
        }
    });
}

async create(user: User): Promise<User> {
    user.password = await this.getHash(user.password)
    
    return await this.userRepository.save(user);
}

async getHash(password: string|undefined): Promise<string> {
    return bcrypt.hash(password, 10);
}
}