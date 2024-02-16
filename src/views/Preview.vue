
<template>
  <div >
    <v-sheet class="mx-auto" >
      <v-slide-group show-arrows>
        <v-slide-group-item v-for="category in categories" :key="category" v-slot="{ toggle }">
          <router-link :to="`/preview/${encodeURIComponent(category)}`">
            <v-btn  title="Предварительный просмотр новостей перед публикацией"  
            class="ma-2 bg-primary" 
            rounded 
            @click="toggle">
              {{ category}}
            </v-btn>
          </router-link>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <router-view></router-view>
    <div class="div">
           <img class="mt-6" style="width:280px;" src="https://cdn-www-v2.iccsafe.org/wp-content/uploads/chp_resource_icons_v1_Chapter_News2-300x300.png">
          </div>
         
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
      // "Криптовалюта",
        // "Технологии",
        // "Развлечение",
        // "Наука",
        // "Здоровье",
        // "Бизнес",
        // // "fauna",
        //  "Космос",
        // // "art",
        // "IT",
        // "Политический",
        // "Спорт"
        "entertainment",
        "cryptocurrency",
        "technology",
        "science",
        "health",
        "business",
        "it",
        "political",
        "sport",
      ]
    };
  },
};
</script>

<style scoped>
.div{
  text-align: center;
}
</style>
