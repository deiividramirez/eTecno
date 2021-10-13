<template>
  <v-app>
    <v-system-bar app height="30" color="#256eef"></v-system-bar>

    <!-- <v-app-bar app color="#256eef" dense dark> </v-app-bar> -->

    <Header/>


    <v-main>
      <v-container>
        <router-view></router-view>
      <!-- <v-footer app>Soy un footer</v-footer> -->
        <!-- <v-bottom-navigation app color="secondary"></v-bottom-navigation> -->
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from './components/Footer.vue';

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    Header,
    Footer,
  },
};
</script>
