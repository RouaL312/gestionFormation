import {User} from "./User";

export interface AuthResponse {
  token: string | undefined;
  email: string | undefined;
  id: string | undefined;
  roles: [];
  tokenBearer: string | undefined;
  username: string | undefined;
  authorities: [];
  refreshToken: string;
  expiresAt: number;
  user: User;

}
