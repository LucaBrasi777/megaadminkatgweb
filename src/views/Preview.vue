
<template>
  <div class="">
    <v-sheet class="mx-auto" max-width="600">
      <v-slide-group show-arrows>
        <v-slide-group-item v-for="(category, index) in categories" :key="index" v-slot="{ toggle }">
          <router-link :to="`/preview/${encodeURIComponent(category)}`">
            <v-btn  class="ma-2 bg-primary" rounded @click="toggle">
              {{ category }}
            </v-btn>
          </router-link>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <router-view></router-view>
    
           
           <!-- <div class="container">
               <div class="video-container">
                   <video 
                   playsinline="playsinline" 
                   autoplay="autoplay" 
                   muted="muted" 
                   loop="loop"
                   
                   src="../icons/1.mp4" 
                   title="YouTube video player" 
                   allowfullscreen>
               </video>
                 </div>
          </div> -->
         
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "crypto",
        "technology",
        "entertainment",
        "science",
        "health",
        "business",
        // "fauna",
         "space",
        // "art",
        // "it",
        // "political",
        "sport"
      ]
    };
  },
};
</script>

<style>
/* Ваши стили */
</style>
