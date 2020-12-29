export default class AuthUser {
  id = "";
  username = "";
  email = "";
  token = "";
  refreshToken = "";
  constructor(userInformation?: any) {
    Object.assign(this, userInformation);
  }
  public UserHaveTokens() {
    return this.token.length > 10 && this.refreshToken.length > 10;
  }
}
