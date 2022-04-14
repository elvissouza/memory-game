<template>
  <v-main class="pa-0">
    <AlertFinish :rounds="rounds" />

    <TopDeck :rounds="rounds" :resetGame="resetGame" />

    <v-row class="no-gutters justify-center align-center">
      <v-col
        cols="auto"
        class="flip-container ma-0 pa-0"
        :class="{ flipped: card.isInverted, matched: card.isMatched }"
        v-for="(card, index) in cardsData"
        :key="index"
      >
        <v-card
          max-width="150"
          max-height="150"
          class="ma-2"
          width="25vw"
          @click="flipCard(card)"
        >
          <v-img
            class="front"
            contain
            max-height="100%"
            max-width="100%"
            src="@/assets/img/carta-virada.png"
          />
          <v-img
            class="back"
            contain
            max-height="100%"
            max-width="100%"
            :src="getImgUrl(card.path)"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Vue from 'vue';
import TopDeck from './TopDeck.vue';
import AlertFinish from '../../Notification/AlertFinish.vue';

import { playerService } from '../../../services/_player';

export default {
  name: 'BodyDeck',
  components: { TopDeck, AlertFinish },
  data() {
    return {
      cardsData: [],
      flipCardData: [],
      currentValue: null,
      rounds: 0,
      finish: false,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets' + pic);
    },
    getImage() {
      let obj = [];
      for (var j = 1; j <= 2; j++) {
        // create 20 cards
        for (var i = 1; i <= 10; i++) {
          obj.push({
            id: i,
            path: `/img/cat-${i}.png`,
            isInverted: false,
            isMatched: false,
          });
        }
      }
      this.cardsData = obj.sort(() => Math.random() - 0.5); //Random Array Of Object
    },
    flipCard(card) {
      if (card.isMatched || card.isInverted || this.flipCardData.length === 2)
        return;

      card.isInverted = true;

      if (this.flipCardData.length < 2) this.flipCardData.push(card);
      if (this.flipCardData.length === 2) this.matchCards(card);
    },

    matchCards(card) {
      card;
      this.rounds++;
      if (this.flipCardData[0].path === this.flipCardData[1].path) {
        setTimeout(() => {
          this.flipCardData.forEach((card) => (card.isMatched = true));
          this.flipCardData = [];

          this.finishGame();
        }, 400);
      } else {
        setTimeout(() => {
          this.flipCardData.forEach((card) => {
            card.isInverted = false;
          });
          this.flipCardData = [];
        }, 800);
      }
    },
    finishGame() {
      let cards = this.cardsData;
      if (cards.every((card) => card.isMatched === true)) {
        this.finish = true;
        playerService.finishGame(this.finish);
        let playerFinish = {
          name: localStorage.getItem('playerName'),
          rounds: this.rounds,
        };
        playerService.addPlayer(playerFinish);
      }
    },
    resetGame() {
      this.cardsData.forEach((card) => {
        Vue.set(card, 'isInverted', false);
        Vue.set(card, 'isMatched', false);
      });

      setTimeout(() => {
        this.cardsData = this.cardsData.sort(() => Math.random() - 0.5);
        this.rounds = 0;
        this.finish = false;
        this.$store.commit('UPDATE_FINISHGAME', false);
        this.flipCardData = [];
      }, 600);
    },
  },
  mounted() {
    this.getImage();
  },
  created() {
    this.resetGame();
    this.cardsData.forEach((card) => {
      Vue.set(card, 'isInverted', false);
      Vue.set(card, 'isMatched', false);
    });
  },
};
</script>
<style scoped>
@import './style.css';
</style>
