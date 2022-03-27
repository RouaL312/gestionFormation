import {Equipe} from './Equipe';

export class EquipePeriode {
  id: number | undefined;
  libelle: string | undefined;
  tempsDebut = new Date();
  tempsFin = new Date() ;
  equipe: Equipe | undefined;

}
