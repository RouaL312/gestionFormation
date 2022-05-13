import {Pays} from "./Pays";

export class Participants {
  participantId?: number;
  nom!: string ;
  prenom!: string ;
  email!: string ;
  tel?: number ;
  pays?:Pays;
}
