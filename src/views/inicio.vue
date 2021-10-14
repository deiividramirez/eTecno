<template>
<v-container>
<v-carousel hide-delimiters>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
</v-carousel>

</v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
        }
    },
}
</script>
<script>
     <div class="flex-container-novedades">
          <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
               <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
               <label class="btn btn-outline-primary" for="btncheck1">Producto destacado 1</label>

               <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
               <label class="btn btn-outline-primary" for="btncheck2">Producto destacado 2</label>

               <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
               <label class="btn btn-outline-primary" for="btncheck3">Producto destacado 3</label>

               <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
               <label class="btn btn-outline-primary" for="btncheck3">Producto destacado 4</label>
          </div>
     </div>
</script>