<script lang="ts">
/**
 * Register user or login user
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

import { Options, Vue } from "vue-class-component";
import Login from "../components/Forms/Login.vue";
import RegisterUser from "../components/Forms/RegisterUser.vue";

@Options({
  name: "LoginRegister",
  components: {
    Login,
    RegisterUser
  }
})
export default class LoginRegister extends Vue {
  /*----------  Local data   ----------*/
  currentShow = "register";

  /*----------  Methods  ----------*/

  handleFormChange(form: string) {
    this.currentShow = form;
  }
}
</script>

<template>
  <section class="text-gray-600 body-font custom-h bg-white">
    <div class="md:container mx-auto grid auto-rows-auto grid-cols-4 gap-2 relative place-content-start">
      <div class="col-span-4 flex flex-col text-center w-full my-10">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Plan-it</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
          Please login if you have an account already or register if you don't.
        </p>
        <div class="flex md:hidden mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
          <button
            class="py-1 px-4 focus:outline-none transition"
            @click="handleFormChange('login')"
            :class="{ 'bg-indigo-500 text-white': currentShow === 'login' }"
          >
            Login
          </button>
          <button
            class="py-1 px-4 focus:outline-none transition"
            :class="{ 'bg-indigo-500 text-white': currentShow === 'register' }"
            @click="handleFormChange('register')"
          >
            Register
          </button>
        </div>
      </div>
      <div></div>
      <div class="col-span-4 md:col-span-2 relative w-full">
        <Login
          class="absolute w-full transition-opacity duration-1000 ease-in-out"
          :class="{ 'opacity-0 z-0': currentShow !== 'login', 'z-10': currentShow === 'login' }"
          v-on:change-form="handleFormChange"
        />
        <RegisterUser
          class="absolute w-full transition-opacity duration-1000 ease-in-out"
          :class="{ 'opacity-0 z-0': currentShow !== 'register', 'z-10': currentShow === 'register' }"
          v-on:change-form="handleFormChange"
        />
      </div>
      <div></div>
    </div>
  </section>
</template>
<style scoped >
.custom-h {
  min-height: 80vh;
}
</style>
