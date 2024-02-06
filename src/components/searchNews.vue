<template lang="">
    <div>
        <div  v-if="showSearchInput">
     
     <input
       v-model="searchT"
       placeholder="Search news"
       v-on:input="searchArticles"
       class="form-control input"
       aria-label="Search"
       type="text"
     >
     
   </div> 
   <div class="wrap">
<div class="div mt-3" > 
 

<div v-for="item in  matchingArticles"

:key="item">


<img class="img-fluid w-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
<img class="img-fluid w-100" v-else src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/science/global-international-connections.jpg" style="object-fit: cover;">
                           

       <a class="title fw-bold" :href="item.url" target="_blank ">
<p class="p-3">
  <span v-html="highlightSearch(item.title)"></span>
</p>
</a>
    

</div> 
</div>
</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
    showSearchInput: false,
    news: [],
    searchT: "",
        }
    },
    methods:{
        async searchArticles() {
try {
  const search = (document.querySelector(".div").style.display = "block");
  const response = await axios.get('https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Language=14&Page=1&PageSize=100');

  // Use directly response.data.items for matchingArticles
  this.matchingArticles = response.data.items.filter(article =>
    article.title.toLowerCase().includes(this.searchT.toLowerCase())
  );
} catch (error) {
  console.error('Error fetching articles:', error);
}
},
    },
}
</script>
<style lang="">
    
</style>