<template lang="">
    
       

    <main class="container mt-8">
      <h3 class="text-white text-center fw-bold">SCIENCE</h3>
        
      <div class="row row-cols-1 row-cols-md-3 g-4">
       
        <div class="col"
        v-for="(item, index) in uniqueArticles.slice(65)" :key="index">
        <div class="card">
          <!-- <img class="img-fluid w-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
          <img class="img-fluid w-100" v-else src=" https://www.kingbruwaert.org/wp-content/uploads/2023/06/1.jpg" style="object-fit: cover;"> -->
          <img v-if="item.urlToImage" :src="item.urlToImage" class="card-img-top" >
          <img v-else  :src="image" class="card-img-top" alt="...">
          <div class="card-body  bg-primary">
            <a class="card-title bg-primary text-white fw-bold" :href="item.url" target="_blank">{{item.title}}</a>
           
          </div>
          <span class="text-body text-white text-center bg-primary" href=""><small>  {{ formatDateTime(item.publishedAt) }}</small></span>
        </div>
      </div>
      
    </div>
      
    
      
    
     
    
      
    </main> 
        
    </template>
    <script>
    export default {
        data() {
            return {
              image:'https://www.science.org/do/10.1126/webinar.add3612/tilesitehome/quanterix-1698241472840.jpg',
              articles: [],
              articles2: [], 
              currentPage: 1,    
              totalPages: 1,    
              rows: 12,
              uniqueArticles: [],
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
              return new Date(dateTime).toLocaleString(undefined, options); },
              
              
              
              async getData() {
        const pageSize = 86;
  
        try {
          const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=2&PageSize=${pageSize}`
          );
          const data = await response.json();
          return data.items;
        } catch (error) {
          console.error('Error fetching news:', error);
          return [];
        }
      },
      async fetchNews() {
        const articles = await this.getData();
        const uniqueArticlesSet = new Set();
  
        this.uniqueArticles = articles.filter((article) => {
          const identifier = `${article.title}${article.content}${article.urlToImage}`;
          if (!uniqueArticlesSet.has(identifier)) {
            uniqueArticlesSet.add(identifier);
            return true;
          }
          return false;
        });
      },
          },
          mounted() {
            
            this.fetchNews();
            
          },
    }
    </script>
    <style lang="scss" scoped>
    .card-body{
      overflow-x: hidden;
      overflow-y: auto;
      height: 60px;
    }
    a{
        text-decoration: none;
        color: white;
    }
    a:hover{
        text-decoration: underline;
    }
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }
    
          @media (min-width: 768px) {
            .bd-placeholder-img-lg {
              font-size: 3.5rem;
            }
          }
          .card{
          border: none !important;
                    box-shadow: none !important;
        }
    </style>