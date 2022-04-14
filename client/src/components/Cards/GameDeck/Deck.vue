<template>
  <v-main class="pa-0">
    <v-row class="no-gutters justify-center">
      <v-col cols="12" lg="8" sm="10" xs="12">
        <BodyDeck />
      </v-col>
      <v-col cols="12" lg="4" sm="2" xs="12">
        <GridRanking />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import BodyDeck from './BodyDeck.vue';
import GridRanking from '../../Ranking/GridRanking.vue';

export default {
  name: 'GameDeck',
  components: { BodyDeck, GridRanking },
  data() {
    return {};
  },
  methods: {},
};
</script>
