export interface RefreshTokenRequest {
  refreshToken: string | undefined;
  login: string | undefined;
  expiresAt: number | undefined;
}
