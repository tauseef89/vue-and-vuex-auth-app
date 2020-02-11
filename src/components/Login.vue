<template>
  <div class="form-wrrap">
    <form @submit.prevent="loginUser">
      <input type="text" v-model="email" placeholder="Enter email id" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/dashboard");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
