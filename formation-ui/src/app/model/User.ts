import {Role} from './Role';

export class User {
  id?: number ;
  email!: string ;
  firstName!: string ;
  lastName!: string ;
  username!: string;
  password!: string;
  authorities?: Role;
  codePin!: boolean;
}
