<template>
  <v-dialog v-model="$store.state.finish" content-class="elevation-0">
    <v-alert transition="slide-y-transition">
      <p class="font-weight-regular mb-5">
        Thanks for playing <b>{{ playerName }}</b
        >, you finished in round <b>{{ rounds }}</b>
      </p>
      <div class="text--secondary font-weight-regular">
        <p>“Winning isn't everything, it's the only thing.”</p>
        <p class="font-italic text-end">Vince Lombardi</p>
      </div>
    </v-alert>
  </v-dialog>
</template>

<script>
export default {
  name: 'AlertFinish',
  props: {
    rounds: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      playerName: localStorage.getItem('playerName'),
    };
  },
};
</script>

<style>
</style>