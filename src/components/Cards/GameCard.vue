<template>
  <v-container fluid>
    <p>{{ rounds }}</p>
    <v-row no-gutters>
      <v-col
        class="flip-container"
        :class="{ flipped: box.showImg }"
        align="center"
        justify="center"
        v-for="(box, index) in boxData"
        :key="index"
        cols="6"
        sm="3"
      >
        <v-card
          width="150"
          height="150"
          class="d-flex justify-center align-center mb-5"
          @click="showBox(index, box.path)"
        >
          <v-img
            class="front"
            contain
            height="150"
            width="150"
            src="../../assets/img/carta-virada.png"
          />
          <v-img
            class="back"
            contain
            max-height="100%"
            max-width="100%"
            :src="getImgUrl(box.path)"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'GameCard',
  data() {
    return {
      boxData: [],
      currentValue: null,
      result: '',
      rounds: 0,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('../../assets' + pic);
    },
    getImage() {
      let obj = [];
      for (var j = 1; j <= 2; j++) {
        for (var i = 1; i <= 10; i++) {
          obj.push({
            id: i,
            path: `/img/cat-${i}.png`,
            showImg: false,
          });
        }
      }
      this.boxData = obj.sort(() => Math.random() - 0.5); //Random Array Of Object
    },
    showBox(_id, _value) {
      console.log('Values', this.currentValue, _value);
      this.boxData[_id].showImg = true;
      if (this.currentValue === null) {
        this.currentValue = _value;
        this.rounds += 1;
      } else if (_value === this.currentValue) {
        this.result = 'Great!';
        this.currentValue = null;
      } else {
        this.result = 'Try again';
        setTimeout(() => {
          this.boxData.map((box) => (box.showImg = false));
        }, 1000);
        this.currentValue = null;
      }
    },
  },
  mounted() {
    this.getImage();
  },
  created() {
    this.boxData.forEach((box) => {
      Vue.set(box, 'showImg', false);
    });
  },
};
</script>

<style scoped>
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
  min-height: 120px;
  cursor: pointer;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>