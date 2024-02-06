<template lang="">
     <div>
        <div class="row">
  <div class="col-sm-4">
    
        <tech />
    
  </div>
  
  <div class="col-sm-4">
   
        <business />
     
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  <div class="col-sm-4">
    
        <crypto />
    
  </div>
  
  
  
  <div class="col-sm-4">
   
        <it />
    
  </div>


  
  <div class="col-sm-4">
   
        <science />
     
    </div>
  
 <div class="col-sm-4">
    
        <space />
    
  </div>
 
</div>
    </div>
</template>
<script>
import business from "../components/ARTICLES/BusinessArt.vue";
import crypto from "../components/ARTICLES/CryptoArt.vue";
import it from "../components/ARTICLES/ItArt.vue";
import tech from "../components/ARTICLES/TechnologyArt.vue";
export default {
      components:{business,crypto,tech,it},
    data()
  {
    return{
    google:" https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_news_logo.png",
    rt:" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Russia-today-logo.svg/1024px-Russia-today-logo.svg.png",
    mk:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0000/2234/brand.gif?itok=H83iNOOt ",
    bbc:"https://logos-world.net/wp-content/uploads/2022/01/BBC-Emblem.png",
    cbc:" https://i.cbc.ca/1.4066392.1541713557!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/cbc-logo-horizontal.jpg",
    abc:" https://logos-world.net/wp-content/uploads/2020/06/ABC-Logo-2007-2013.png",
    medium:" https://cdn-static.ntv.ru/home/news/2023/20230601/medium_io.jpg",
    wp:" https://logodix.com/logo/277410.png",
    gurd:" https://assets-legacy.floridarrc.com/2023/01/the-guardian-logo.jpeg",
    up:" https://pbs.twimg.com/profile_images/1597208679257980930/Ujzp_V8C_400x400.jpg",
    cnn:" https://static-00.iconduck.com/assets.00/cnn-icon-2048x2048-u9wibi0x.png",
    nbc:" https://iconape.com/wp-content/files/ey/83599/svg/nbc-1.svg",
   } }, 
}
</script>
<style lang="">
    
</style>