import {Domaine} from "./Domaine";

export class Formations {
  formationId?: number ;
  titre!: string ;
  typeFormation!: string ;
  nbSession?: number ;
  duree!: string ;
  domaine?: Domaine ;
  budget?: number ;
}
