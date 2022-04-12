import {Role} from './Role';
import {Equipe} from './Equipe';

export class User {
  id?: number ;
  email!: string ;
  firstName!: string ;
  lastName!: string ;
  username!: string;
  password!: string;
  equipe?: Equipe ;
  authorities!: Array<Role>;
  codePin!: Boolean;
  numTelephone!:string

}
