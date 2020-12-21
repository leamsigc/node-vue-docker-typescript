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
      const res = await this.AxiosHelper().put("/register", UserInformation);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
}
