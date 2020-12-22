<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Login />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Login from "@/components/Forms/Login.vue";

@Options({
  components: {
    Login
  }
})
export default class Home extends Vue {}
</script>
