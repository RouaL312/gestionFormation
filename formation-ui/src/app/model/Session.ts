import {Organismes} from "./Organismes";
import {Formateurs} from "./Formateurs";

export class Session {
  lieu!: string ;
  dateDebut!: Date ;
  dateFin!: Date ;
  nbParticipants!: number ;
  formateur!: Formateurs ;

}
