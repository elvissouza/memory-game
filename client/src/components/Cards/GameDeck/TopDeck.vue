<template>
  <v-row class="no-gutters justify-center align-center">
    <v-col cols="auto">
      <div class="ma-2">
        <span id="typography" class="mx-5">Rounds: {{ rounds }}</span>
        <v-btn outlined color="info" class="ml-5" @click="resetGame">
          <v-icon left dark> mdi-cached </v-icon>
          Restart
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TopDeck',
  props: {
    rounds: Number,
    resetGame: Function,
  },
};
</script>

<style>
</style>