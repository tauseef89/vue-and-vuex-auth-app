<template>
  <div class="form-wrrap">
    <form @submit.prevent="registerUser">
      <input type="text" v-model="name" placeholder="Enter name" />
      <input type="text" v-model="email" placeholder="Enter email id" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style scoped></style>
