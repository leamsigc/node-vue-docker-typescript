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

import { Options, Vue } from "vue-class-component";
import RegisterUser from "@/components/Forms/RegisterUser.vue";

@Options({
  name: "About",
  components: {
    RegisterUser
  }
})
export default class About extends Vue {}
</script>

<template>
  <div class="about">
    <h1>About</h1>
    <RegisterUser />
  </div>
</template>
<style scoped>
.about {
  background: linear-gradient(45deg, rgba(17, 3, 99, 0.63), rgba(45, 2, 146, 0.712)), url("../assets/registerbg.jpg");
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
  align-content: center;
}
</style>
