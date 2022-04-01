import {User} from "./User";

export class AuthResponse {
  token!: string;
  email!: string;
  id!: string;
  roles!: [];
  tokenBearer!: string;
  username!: string;
  authorities!: [];
  refreshToken!: string;
  expiresAt!: number;
  user!: User;

}
