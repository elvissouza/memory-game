<template>
  <v-footer dark padless>
    <v-card tile width="100%" class="white--text">
      <v-card-actions class="pa-0">
        <v-col>
          <span :key="index" v-for="(social, index) in socialMenus">
            <v-btn
              target="_blank"
              :href="social.url"
              class="mx-2 white--text"
              icon
            >
              <v-icon size="24px">{{ social.icon }}</v-icon>
            </v-btn>
          </span>
        </v-col>

        <v-col class="text-right">
          <v-card-text class="white--text">
            <a
              style="text-decoration: none; color: inherit"
              class="white--text"
              href="https://github.com/elvissouza"
              >Copyright {{ new Date().getFullYear() }} — Elvis Souza</a
            >
          </v-card-text>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socialMenus: [
      {
        url: 'https://github.com/elvissouza',
        icon: 'mdi-github',
      },
      {
        url: 'https://www.linkedin.com/in/souzaelvisjose/',
        icon: 'mdi-linkedin',
      },
    ],
  }),
};
</script>

<style>
</style>