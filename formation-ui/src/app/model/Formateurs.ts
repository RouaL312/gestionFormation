import {Organismes} from './Organismes';
import {Session} from "./Session";

export class Formateurs {
  formateurId?:number;
  nom!: string ;
  prenom!: string ;
  email!: string ;
  tel?: number ;
  organisme?: Organismes;
  type!: string ;
}
