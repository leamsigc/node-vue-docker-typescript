import { register } from "register-service-worker";
import UserInformation from "@/Models/RegisterUser";
import { AppState } from "../state";
import { ActionContext, ActionTree, MutationTree, GetterTree, Module } from "vuex";
import UserService from "@/Service/User";

class RegisterUser {
  currentUser = new UserInformation();
  constructor(registerUserStatus?: any) {
    Object.assign(this, registerUserStatus);
  }

  public set loginUser(userInfo: UserInformation) {
    this.currentUser = userInfo;
  }
}

export class UserStore {
  registerUser = new RegisterUser();
}

const getters: GetterTree<UserStore, AppState> = {};

const mutations: MutationTree<UserStore> = {};

const actions: ActionTree<UserStore, AppState> = {
  async REGISTER_USER({ commit }: ActionContext<UserStore, AppState>, User: UserInformation) {
    try {
      console.log(User);
      const res = await new UserService().RegisterUser(User);
      console.log(res);
      if (res.status === 202) {
        const responseUserLog = new RegisterUser(res.data);
        return res;
      }
      return res;
    } catch (error) {
      return error;
    }
  },
  async LOGIN_USER({ commit }: ActionContext<UserStore, AppState>, User: UserInformation) {
    try {
      console.log(User);
      const res = await new UserService().LogUserInTheSystem(User);
      console.log(res);
      if (res.status === 202) {
        const responseUserLog = new RegisterUser(res.data);
        return res;
      }
      return res;
    } catch (error) {
      return error;
    }
  }
};

const namespaced = true;

export const UserStoreModule: Module<UserStore, AppState> = {
  namespaced,
  state: new UserStore(),
  actions,
  getters,
  mutations
};
