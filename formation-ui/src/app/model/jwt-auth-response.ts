import {User} from "./User";

export interface JwtAuthResponse {
  authenticationToken: string | undefined;
  username: string | undefined;
  refreshToken: string | undefined;
  expiresAt: number | undefined;
  authorities: [] | undefined;
  user: User | undefined;
}
