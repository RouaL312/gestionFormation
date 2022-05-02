import {User} from "./User";

export interface JwtAuthResponse {
  authenticationToken: string | undefined;
  login: string | undefined;
  refreshToken: string | undefined;
  expiresAt: number | undefined;
  authorities: [] | undefined;
  user: User | undefined;
}
