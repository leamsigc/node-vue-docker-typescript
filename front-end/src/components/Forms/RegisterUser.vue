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
  email: string;
  password: string;
  passwordConfirmation: string;
}
interface ActionState {
  class: string;
  msg: string;
}

import { mapGetters, mapActions } from "vuex";
import { Options, Vue } from "vue-class-component";
import { reactive } from "vue";

@Options({
  name: "RegisterUser",
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions("UserStoreModule", {
      REGISTER_USER: "REGISTER_USER"
    })
  }
})
export default class RegisterUser extends Vue {
  /*----------  VUex  ----------*/
  private REGISTER_USER!: Function;

  /*----------  Local data  ----------*/
  actionState: null | ActionState = null;
  user: User = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  /*---------- Computed  ----------*/
  get passwordConfgirmation() {
    if (this.user.password.length >= 6) {
      return this.user.password === this.user.passwordConfirmation;
    } else {
      return false;
    }
  }
  get isValidForm() {
    const isValid =
      this.user.username.length > 1 &&
      this.user.email.length > 1 &&
      this.user.password.length >= 6 &&
      this.passwordConfgirmation;
    return isValid;
  }

  /*----------  Methods  ----------*/
  async HandleFormSubmit() {
    this.actionState = null;
    if (this.isValidForm) {
      const RES = await this.REGISTER_USER({
        username: this.user.username,
        email: this.user.email,
        password: this.user.password
      });
      // console.log(RES);
    } else {
      this.actionState = {
        class: "danger",
        msg: "Please provide all the information"
      };
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-4 shadow-lg">
    <div class="md:col-span-2 hidden md:grid auto-rows-max bg-gray-100 py-10 place-items-cente place-content-center">
      <h2 class="mx-auto leading-relaxed text-base text-gray-500 py-10">You have an account already ?</h2>
      <button
        @click="$emit('change-form', 'login')"
        class="transition duration-500 ease-in-out mx-auto hover:text-white text-indigo-600 bg-transparent border-2 border-indigo-600 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Login
      </button>
    </div>

    <form
      class="col-span-4 md:col-span-2 bg-white flex flex-col w-full md:mt-0 p-10"
      @submit.prevent="HandleFormSubmit"
    >
      <div class="mb-2 p-2 text-center rounded-2xl border-current" :class="actionState.class" v-if="actionState">
        <span>{{ actionState.msg }}</span>
      </div>
      <h3 class="text-gray-900 text-lg mb-1 font-medium title-font text-center">Register</h3>
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
        <label for="name" class="leading-7 text-sm text-gray-600">Email</label>
        <input
          v-model.trim="user.email"
          type="email"
          id="email"
          name="email"
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
        <p v-show="user.password.length > 0 && user.password.length < 6">Min length for the password is 6</p>
      </div>
      <div class="relative mb-4" v-show="user.password.length >= 6">
        <label for="password" class="leading-7 text-sm text-gray-600">Confirm Password</label>
        <input
          v-model.trim="user.passwordConfirmation"
          type="passwordConfirm"
          id="passwordConfirm"
          name="passwordConfirm"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <input
        type="submit"
        class="transition duration-500 ease-in-out mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg disabled:opacity-40"
        :disabled="!isValidForm"
        value="Register"
      />
    </form>
  </div>
</template>

<style scoped>
</style>
