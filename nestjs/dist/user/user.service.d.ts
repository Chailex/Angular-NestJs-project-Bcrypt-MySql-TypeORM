import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    showAll(): Promise<User[]>;
    update(id: number, data: Partial<UserDTO>): Promise<User>;
    read(id: number): Promise<User>;
    delete(id: number): Promise<User>;
    findByUser(username: string): Promise<User>;
    findById(id: number): Promise<User>;
    create(user: User): Promise<User>;
    getHash(password: string | undefined): Promise<string>;
}
