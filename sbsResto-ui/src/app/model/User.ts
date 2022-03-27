import {Role} from './Role';
import {Equipe} from './Equipe';

export class User {
  id: number | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  login: string | undefined;
  password: string | undefined;
  equipe: Equipe | undefined;
  authorities: Array<Role> | undefined;
}
