import {EquipePeriode} from './EquipePeriode';
import {User} from './User';
export class Equipe {
  id: number | undefined;
  codeEquipe: string | undefined;
  equipePeriode: EquipePeriode | undefined;
  users: Array<User> | undefined;
}
