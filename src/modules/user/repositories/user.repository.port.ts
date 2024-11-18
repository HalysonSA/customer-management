import { CreateUserPrisma, ResponseUserPrisma } from '../dtos/userDTO';

export interface UserRepositoryPort {
  create(data: CreateUserPrisma): Promise<ResponseUserPrisma>;
  findByAuth0(auth0_id: string): Promise<ResponseUserPrisma>;
}
