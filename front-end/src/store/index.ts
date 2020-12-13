import { AppState } from "./state";

import { createStore } from "vuex";
import { UserStoreModule } from "@/store/Modules/User";
export default createStore({
  modules: {
    UserStoreModule
  }
});
