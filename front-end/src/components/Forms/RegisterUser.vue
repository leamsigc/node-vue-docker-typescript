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
  <form @submit.prevent="HandleFormSubmit">
    <div class="alert" :class="actionState.class" v-if="actionState">
      <span>{{ actionState.msg }}</span>
    </div>
    <h3>Register form</h3>
    <label>
      <span>Username:</span>
      <input type="text" v-model.trim="user.username" />
    </label>
    <label>
      <span>Email:</span>
      <input type="email" v-model.trim="user.email" />
    </label>
    <label>
      <span>Password:</span>
      <input type="password" v-model.trim="user.password" />
      <span v-show="user.password.length > 0 && user.password.length < 6">Min length for the password is 6</span>
    </label>
    <label v-show="user.password.length >= 6">
      <span>Confirm Password:</span>
      <input type="password" v-model.trim="user.passwordConfirmation" />
    </label>
    <input type="submit" class="btn btn-primary btn-full" :disabled="!isValidForm" value="Register" />
  </form>
</template>

<style scoped>
form {
  --bg-main: #eee;
  --text-color-main: #333;
  --main-font: "Montserat", "roboto";
  --main-line-height: 1.5;
  font-family: var(--main-font);
  line-height: var(--main-line-height);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--bg-main);

  padding: 2rem 1rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  color: var(--text-color-main);
  border-radius: 10px;
}
label {
  text-align: left;
  max-width: 400px;
  width: 100%;
}
label span {
  display: block;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  padding: 1rem;
  border: 0 transparent;
  display: block;
  font-size: 1rem;
}

.btn {
  max-width: 400px;
  width: 100%;
  margin-top: 2rem;
  border: 1px solid var(--primary-color);
}
h3 {
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
}
</style>
