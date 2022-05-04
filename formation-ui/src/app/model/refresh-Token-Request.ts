export interface RefreshTokenRequest {
  refreshToken: string | undefined;
  username: string | undefined;
  expiresAt: number | undefined;
}
