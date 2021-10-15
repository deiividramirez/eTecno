<template>
<v-container>
     <v-carousel hide-delimiters class="carrou">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
     </v-carousel>

</v-container>
</template>

<script>
export default {
     data() {
          return {
               items: [{
                         src: require('../assets/Imágenes/Carou1.png'),
                    },
                    {
                         src: require('../assets/Imágenes/Carou2.png'),
                    },
                    {
                         src: require('../assets/Imágenes/Carou3.png'),
                    }
               ],
          }
     },
}
</script>

<style scoped>
.carrou {
     width: 100%;

}
</style>