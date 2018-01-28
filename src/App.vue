<template>
<div>
  <nav class="navbar navbar-inverse bg-primary">
    <a class="navbar-brand" href="#"><img src="./assets/guided-help-icon.png" width="50" height="50">&nbsp;Guided Help - Manage system parameters</a>
  </nav>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
