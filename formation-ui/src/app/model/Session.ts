import {Formateurs} from "./Formateurs";

export class Session {
  SessionId?:number;
  lieu!: string ;
  dateDebut?: Date ;
  dateFin?: Date ;
  nbParticipants?: number ;
  formateur?: Formateurs ;

}
