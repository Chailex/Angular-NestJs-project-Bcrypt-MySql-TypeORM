import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findByUser(username: string): Promise<User>;
    findById(id: number): Promise<User>;
    create(user: User): Promise<User>;
}
