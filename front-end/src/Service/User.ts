import UserInformation from "@/Models/RegisterUser";
import axios from "axios";

export default class UserService {
  AxiosHelper() {
    return axios.create({
      baseURL: "http://localhost:8000",
      withCredentials: true
    });
  }

  public async RegisterUser(UserInformation: UserInformation) {
    try {
      const res = await this.AxiosHelper().post("/register", UserInformation);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
  public async LogUserInTheSystem(UserInformation: UserInformation) {
    try {
      const res = await this.AxiosHelper().post("/auth/login", UserInformation);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
  public async LogOutUser(refreshToken: string) {
    try {
      const res = await this.AxiosHelper().post("/auth/logout", { refreshToken });
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
  public async RefreshAuthToken(refreshToken: string) {
    try {
      const res = await this.AxiosHelper().post("/refresh-token", { refreshToken });
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
}
