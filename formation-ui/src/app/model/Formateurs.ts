import {Organismes} from './Organismes';
import {Session} from "./Session";

export class Formateurs {
  idFormateur?:number;
  nom!: string ;
  prenom!: string ;
  email!: string ;
  tel!: string ;
  organisme?: Organismes ;
  session?: Session ;
  type!: string ;
}
