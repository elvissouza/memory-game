<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="deep-purple lighten-1">
                <v-toolbar-title>Insira seu nome</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="name"
                    v-model="name"
                    label="Nome"
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="deep-purple lighten-1" @click="login(name)"
                  >Jogar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
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
    async login(name) {
      return await userService.login(name);
    },
  },
};
</script>

<style scoped>
</style>
