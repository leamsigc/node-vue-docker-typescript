<script lang="ts">
/**
 * Register User Component Here
 *
 * @author Leamsigc <Leamsigc>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

interface User {
  username: string;
  password: string;
}
interface ActionState {
  class: string;
  msg: string;
}

import { mapGetters, mapActions } from "vuex";
import { Options, Vue } from "vue-class-component";
import { reactive } from "vue";
import { useRouter } from "vue-router";

@Options({
  name: "Login",
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions("UserStoreModule", {
      LOGIN_USER: "LOGIN_USER"
    })
  }
})
export default class Login extends Vue {
  /*----------  VUex  ----------*/
  private LOGIN_USER!: Function;

  /*----------  Local data  ----------*/
  actionState: null | ActionState = null;
  user: User = {
    username: "",
    password: ""
  };
  router = useRouter();

  /*---------- Computed  ----------*/

  get isValidForm() {
    const isValid = this.user.username.length > 1 && this.user.password.length >= 6;
    return isValid;
  }

  /*----------  Methods  ----------*/
  async HandleFormSubmit() {
    this.actionState = null;
    if (this.isValidForm) {
      try {
        const RES = await this.LOGIN_USER({
          username: this.user.username,
          password: this.user.password
        });
        if (RES.status === 200) {
          this.actionState = {
            class: "alert-success",
            msg: "You will be redirect shortly"
          };
          this.router.push("/dashboard");
        } else {
          this.actionState = {
            class: "alert-danger",
            msg: RES.response.data.error.message
          };
        }
      } catch (error) {
        this.actionState = {
          class: "alert-danger",
          msg: "Please provide all the information"
        };
      }
    }
  }
  handleClose() {
    this.actionState = null;
  }
}
</script>

<template>
  <div class="grid grid-cols-4 shadow-lg">
    <form
      class="col-span-4 md:col-span-2 bg-white flex flex-col w-full md:mt-0 p-10"
      @submit.prevent="HandleFormSubmit"
    >
      <div class="mb-2 p-2 text-center relative rounded border-current" :class="actionState.class" v-if="actionState">
        <span>{{ actionState.msg }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-1 py-2" @click="handleClose">
          <svg
            class="fill-current h-6 w-6 text-white-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
      <h3 class="text-gray-900 text-lg mb-1 font-medium title-font text-center">Log in</h3>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Username</label>
        <input
          v-model.trim="user.username"
          type="text"
          id="username"
          name="username"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
        <input
          v-model.trim="user.password"
          type="password"
          id="password"
          name="password"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <input
        type="submit"
        class="transition duration-500 ease-in-out mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg disabled:opacity-50"
        :disabled="!isValidForm"
        value="Login"
      />
    </form>

    <div class="md:col-span-2 hidden md:grid auto-rows-max bg-gray-100 py-10 place-items-cente place-content-center">
      <h2 class="mx-auto leading-relaxed text-base text-gray-500 py-10">You dont have an account yet?</h2>
      <button
        @click="$emit('change-form', 'register')"
        class="transition duration-500 ease-in-out mx-auto hover:text-white text-indigo-600 bg-transparent border-2 border-indigo-600 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Sign up
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
