<template>
  <div id="nav">
    <router-link to="/">MEVN Auth</router-link>
    <span></span>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
    <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
    <router-link to="/dashboard" v-if="isLoggedIn">Dashboard</router-link>
    <a v-if="isLoggedIn" style="cursor: pointer;" @click="logoutUser">LogOut</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>

<style scoped>
#nav {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin-bottom: 15px;
}
#nav span {
  flex: auto;
}

#nav a {
  font-weight: bold;
  color: #000;
  padding: 0 15px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
