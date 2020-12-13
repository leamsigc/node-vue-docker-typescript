import UserInformation from "@/Models/RegisterUser";
import axios from "axios";

export default class UserService {
  AxiosHelper() {
    return axios.create({
      baseURL: "localhost:8000"
    });
  }

  public RegisterUser(UserInformation: UserInformation) {
    return this.AxiosHelper().put("/register", UserInformation);
  }
}
