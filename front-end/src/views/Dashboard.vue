<script lang="ts">
/**
 * Abour page
 *
 * @author Leamsigc <ismael@leamsigc>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import AuthUser from "../Models/AuthUser";
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from "vuex";
import { useRouter } from "vue-router";

@Options({
  name: "Dashboard",
  computed: {
    ...mapGetters("UserStoreModule", {
      currentUser: "GET_CURRENT_USER_INFORMATION"
    })
  },
  methods: {
    ...mapActions("UserStoreModule", {
      userLogOut: "LOGOUT_USER"
    })
  }
})
export default class Dashboard extends Vue {
  private readonly currentUser!: AuthUser;
  private userLogOut!: Function;
  router = useRouter();

  async created() {
    if (!this.currentUser.UserHaveTokens()) {
      this.router.push("/login");
    }
  }

  /*---------- Methods  ----------*/
  async HandleLogOut() {
    try {
      console.log(this.currentUser.refreshToken);

      const res = await this.userLogOut(this.currentUser.refreshToken);
      console.log(res);
      if (res.status === 200) {
        this.router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<template>
  <div class="dashboard px-5 py-24 bg-indigo-300">
    <div class="container px-5 py-24 mx-auto">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1">
          <h1>Dashboard</h1>
        </div>
        <div class="col-span-2">
          <p class="overflow-ellipsis overflow-hidden">
            {{ currentUser }}
          </p>
        </div>
        <div></div>
        <div class="col-span-2">
          <button
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            @click="HandleLogOut"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dashboard {
  /* background: linear-gradient(45deg, rgba(17, 3, 99, 0.63), rgba(45, 2, 146, 0.712)); */
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
  align-content: center;
}
</style>
