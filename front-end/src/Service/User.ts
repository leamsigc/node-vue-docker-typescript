import UserInformation from "@/Models/RegisterUser";
import axios from "axios";

export default class UserService {
  AxiosHelper() {
    return axios.create({
      baseURL: "http://localhost:8000"
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
      const res = await this.AxiosHelper().post("/login", UserInformation);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
}
