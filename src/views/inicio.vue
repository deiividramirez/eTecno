<template>
  <v-container>
    <v-carousel hide-delimiters class="carrou">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

<a href="/asus">
 <v-img :src="require('@/assets/logo.png')"
 max-width="60"
 to="/afiliacion"
 width="100%">  </v-img> 
</a>


<v-divider></v-divider>
<v-card 
      class="d-flex justify-center " 
      
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
     
      flat
      
      tile
      
    >
      <v-card
        v-for="n in 4"
        :key="n"
        class="pa-15"
        outlined
        tile
      >
        Producto destacado.
      </v-card>
    </v-card>
<v-card
      class="d-flex justify-center mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        v-for="n in 4"
        :key="n"
        class="pa-15"
        outlined
        tile
        
      >
        Producto destacado.
      </v-card>
    </v-card>


  </v-container>
</template>




<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/Imágenes/Carou1.png"),
        },
        {
          src: require("../assets/Imágenes/Carou2.png"),
        },
        {
          src: require("../assets/Imágenes/Carou3.png"),
        },
      ],
    };
  },
};
</script>





<style scoped>
.carrou {
  width: 100%;
}
</style>
