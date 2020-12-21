import UserInformation from "@/Models/RegisterUser";
import { AppState } from "../state";
import { ActionContext, ActionTree, MutationTree, GetterTree, Module } from "vuex";
import UserService from "@/Service/User";

class RegisterUser {
  constructor(registerUserStatus?: any) {
    Object.assign(this, registerUserStatus);
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
