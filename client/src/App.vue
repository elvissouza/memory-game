<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from './components/Menu/AppBar.vue';
import Footer from './components/Menu/Footer.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: { AppBar, Footer },
};
</script>
