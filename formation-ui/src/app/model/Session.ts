import {Formateurs} from "./Formateurs";

export class Session {
  sessionId?:number;
  lieu!: string ;
  dateDebut?: Date ;
  dateFin?: Date ;
  nbParticipants?: number ;
  formateur?: Formateurs ;

}
