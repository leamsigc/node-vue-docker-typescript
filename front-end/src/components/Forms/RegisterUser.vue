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
export default class RegisterUser extends Vue {}
</script>

<template>
  <div></div>
</template>
<style scoped></style>
