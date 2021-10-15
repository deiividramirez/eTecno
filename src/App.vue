<template>
<v-app>
     <v-system-bar app height="30" color="#256eef"></v-system-bar>

     <Header />

     <v-main>
          <v-container>
               <router-view></router-view>

<<<<<<< HEAD
    
    <v-main>
      <v-container>
        <router-view></router-view>
      <!-- <v-footer app>Soy un footer</v-footer> -->
        <!-- <v-bottom-navigation app color="secondary"></v-bottom-navigation> -->
      </v-container>
    </v-main>

    <Footer />
  </v-app>
=======
          </v-container>
     </v-main>

     <Footer />
</v-app>
>>>>>>> 796fba6fcae48ee999d2c1a967eecde01e7c5417
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from './components/Footer.vue';

export default {
     name: "App",

     data: () => ({
          //
     }),

<<<<<<< HEAD
  components: {
    Header,
    Footer,
    
  },
=======
     components: {
          Header,
          Footer,
     },
>>>>>>> 796fba6fcae48ee999d2c1a967eecde01e7c5417
};
</script>
