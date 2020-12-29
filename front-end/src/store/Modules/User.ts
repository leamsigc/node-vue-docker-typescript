import UserInformation from "@/Models/RegisterUser";
import { AppState } from "../state";
import { ActionContext, ActionTree, MutationTree, GetterTree, Module } from "vuex";
import UserService from "@/Service/User";
import AuthUser from "@/Models/AuthUser";

export class UserStore {
  currentUser = new AuthUser();
}

const getters: GetterTree<UserStore, AppState> = {
  GET_CURRENT_USER_INFORMATION(state: UserStore) {
    return state.currentUser;
  }
};

const mutations: MutationTree<UserStore> = {
  async SET_USER_INFORMATION(state: UserStore, userInformation: AuthUser) {
    state.currentUser = userInformation;
  }
};

const actions: ActionTree<UserStore, AppState> = {
  async REGISTER_USER({ commit }: ActionContext<UserStore, AppState>, User: UserInformation) {
    try {
      const res = await new UserService().RegisterUser(User);
      if (res.status === 200) {
        const responseUserLog = new AuthUser(res.data);
        commit("SET_USER_INFORMATION", responseUserLog);
        return res;
      }
      return res;
    } catch (error) {
      return error;
    }
  },
  async LOGIN_USER({ commit }: ActionContext<UserStore, AppState>, User: UserInformation) {
    try {
      const res = await new UserService().LogUserInTheSystem(User);
      console.log(res);
      if (res.status === 200) {
        const responseUserLog = new AuthUser(res.data);
        commit("SET_USER_INFORMATION", responseUserLog);
        return res;
      }
      return res;
    } catch (error) {
      return error;
    }
  },
  async REFRESH_TOKEN({ commit }: ActionContext<UserStore, AppState>, token: string) {
    try {
      const res = await new UserService().RefreshAuthToken(token);
      if (res.status === 200) {
        const responseUserLog = new AuthUser(res.data);
        commit("SET_USER_INFORMATION", responseUserLog);
        return res;
      }
      return res;
    } catch (error) {
      return error;
    }
  },
  async LOGOUT_USER({ commit }: ActionContext<UserStore, AppState>, token: string) {
    try {
      const res = await new UserService().LogOutUser(token);
      if (res.status === 200) {
        const responseUserLog = new AuthUser();
        commit("SET_USER_INFORMATION", responseUserLog);
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
