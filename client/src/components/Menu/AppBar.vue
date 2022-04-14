<template>
  <v-app-bar app dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('../../assets/logo.png')"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title> Memory Game </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>
    <v-tooltip bottom v-if="$store.state.playerName">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" target="_blank" @click="logout" text>
          <v-icon class="mr-2">mdi-logout</v-icon>
        </v-btn>
      </template>
      <span>Logout</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import { userService } from '../../services/_user';
export default {
  name: 'Login',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    async logout() {
      return await userService.logout();
    },
  },
};
</script>

<style>
</style>