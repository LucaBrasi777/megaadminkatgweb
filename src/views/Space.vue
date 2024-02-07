<template>
  
  <div>
    <div id="top-of-page"></div>
    <br/>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            

           

            <v-row>
              <v-col cols="12" md="6" lg="4" v-for="item in paginatedArticles" :key="item">
                  <div class="d-flex align-center">
                   
                          <div class="pl-2">{{ formatDateTime(item.date) }}</div>
                        </div>
              
                  <div>
                
                    <v-card-text class="text">
                        <div class="text-h5 font-weight-bold info--text">
                          <a style="font-size:20px" :href="item.url" target="_blank"> {{item.title}}</a><br/>
                          <a class="a" style="font-size:16px" :href="item.url" target="_blank"> {{item.explanation}}</a>
                        </div>

                        <div class="text-body-1 py-4">
                         
                        </div>

                        
                      </v-card-text>
                  
                      <v-img
                        v-if="item.hdurl"
                        :src="item.hdurl"
                        
                      
                        
                       
                      >
                       
                      </v-img>
                    
                      <v-img
                        v-else
                        src="https://cdn0.sbnation.com/assets/3717901/shutterstock_152383346.jpg"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                       
                      >
                       
                      </v-img>
                 
                 
                  </div>
               
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <v-col>
       
      </v-col>
    </v-row>
    <!-- <div class="pagination">
 <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Prev</span>
 <span class="page-numbers text-dark">{{ currentPage }} / {{ pageCount }}</span>
 <span class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</span>
</div> -->
<!-- <div class="pagination">
             <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</span>
             <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
             <span class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</span>
           </div> -->

  </div>
</template>

<script>
export default {
  name: "Category",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data() {
      return {
        articles: [],       
        currentPage: 1,  
        
        totalPages: 1,     
        rows: 48, 
        img:'https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg'         
      };
    },
    computed: {
      paginatedArticles() {
       
        const start = (this.currentPage - 1) * this.rows;
        const end = start + this.rows;
        return this.articles.slice(start, end);
      },
    },
    methods: {
      formatDateTime(dateTime) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      // hour: '2-digit',
      // minute: '2-digit',
      // second: '2-digit',
    }
    return new Date(dateTime).toLocaleString(undefined, options); 
  },
      async getData() {
       
        
        const pageSize = 100;
        
        try {
          const response = await fetch(
              //0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4
              'https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=100'

           // ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
           // `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
          );
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching news:', error);
          return [];
        }
      },
      async fetchNews() {
       
        const articles = await this.getData();
        this.articles = articles;
        this.totalPages = Math.ceil(articles.length / this.rows);
      },
      nextPage() {
       
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
           this.scrollToTop()
        }
      },
      prevPage() {
      
        if (this.currentPage > 1) {
          this.currentPage--;
           this.scrollToTop()
        }
      },
       scrollToTop() {
   
   const el = document.getElementById('top-of-page');
   if (el) {
     el.scrollIntoView({ behavior: 'smooth' });
   }
 },
    },
   
    mounted() {
     
      this.fetchNews();
    },
};
</script>
<style scoped>
.text{
  overflow-x:hidden;
            overflow-y:auto;
            height: 310px;
}
a{
text-decoration: none ;
color:black ;
}
.prev-bt,
.next-bt {
margin: 8px;

color: rgb(248, 2, 2);

padding: 7px;
font-weight: bold;
}
.pagination {
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
cursor: pointer;
font-size: 10px;
}
</style>
 
