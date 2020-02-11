<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
// components
import Header from "@/components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style>
*,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f5f6fa;
}
#app {
  width: 100%;
  margin: 0 auto;
}
.form-wrrap {
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
}
.form-wrrap input {
  width: 100%;
  background: #edeef6;
  height: 35px;
  border: 1px solid #edeef6;
  margin-bottom: 15px;
  padding-left: 10px;
}
.form-wrrap input[type="submit"] {
  margin-bottom: 0px;
  padding-left: 0px;
  cursor: pointer;
  background: #42b983;
  border: 1px solid #42b983;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
