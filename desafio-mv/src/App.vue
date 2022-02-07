<template>
  <v-app id="app">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>
<style>
body{
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}
nav a{
  color: white !important;
  font-weight: bold;
  text-decoration: none !important;
}
nav{
  text-align: center;
  background-color: mediumslateblue;
  padding: 0.5rem;
}
</style>
