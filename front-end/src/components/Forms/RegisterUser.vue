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

// import { Component, Prop, Watch,Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "RegisterUser",
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions("User_Store", {
      REGISTER_USER: "REGISTER_USER"
    })
  }
})
export default class RegisterUser extends Vue {
  /*----------  Methods  ----------*/
  HandleFormSubmit() {
    console.log("Form submitted");
  }
}
</script>

<template>
  <form @submit.prevent="HandleFormSubmit">
    <h3>Register form</h3>
    <label>
      <span>Username:</span>
      <input type="text" />
    </label>
    <label>
      <span>Email:</span>
      <input type="email" />
    </label>
    <label>
      <span>Password:</span>
      <input type="password" />
    </label>
    <button type="submit" class="btn btn-primary btn-full">Register</button>
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
.btn {
  max-width: 400px;
  width: 100%;
  margin-top: 2rem;
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

h3 {
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
}
</style>
