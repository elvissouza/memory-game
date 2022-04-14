<template>
  <v-row class="no-gutters justify-center align-center">
    <v-col cols="auto">
      <v-card max-width="300px">
        <v-card-title class="pb-0 mb-0">
          <p>Ranking</p>
          <v-spacer></v-spacer>
          <p>
            <v-icon color="amber">mdi-star</v-icon>
          </p>
        </v-card-title>
        <v-card-title class="pt-0 mt-0">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Pesquisar"
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="ranking"
          :sort-by="['rounds']"
          :sort-desc="[false]"
          :search="search"
          :items-per-page="5"
          :hide-default-footer="true"
        ></v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import fakeRanking from './fakeRanking.json';
import { playerService } from '../../services/_player';

export default {
  name: 'GridRanking',
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Player',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Rounds', sortable: false, value: 'rounds' },
      ],
      ranking: [],
    };
  },
  watch: {
    '$store.state.finish': {
      handler() {
        this.getPlayer();
      },
      deep: true,
    },
  },
  methods: {
    async getPlayer() {
      this.ranking = [];
      let result = await playerService.getPlayers();
      result.map((pl) => {
        this.ranking.push({
          name: pl.name,
          rounds: pl.rounds,
        });
      });
    },
  },
  created() {
    this.getPlayer();
  },
};
</script>

<style>
</style>