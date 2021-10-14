<template>
<v-app>
     <v-system-bar app height="30" color="#256eef"></v-system-bar>

     <Header />

     <v-main>
          <v-container>
               <router-view></router-view>

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
