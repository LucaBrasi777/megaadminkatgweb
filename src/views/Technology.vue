<template lang="">
    
       

    <main class="container mt-8">
      
        
      <div class="row row-cols-1 row-cols-md-4 g-4">
     
        <div class="col"
        v-for="(item,index) in articles.slice(1)" :key="index">
        <div class="card">
          <!-- <img class="img-fluid w-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
          <img class="img-fluid w-100" v-else src=" https://www.kingbruwaert.org/wp-content/uploads/2023/06/1.jpg" style="object-fit: cover;"> -->
          <img v-if="item.urlToImage" :src="item.urlToImage" class="card-img-top" >
          <img v-else  :src="image" class="card-img-top" alt="...">
          <div class="card-body">
            <a class="card-title text-black fw-bold" :href="item.url" target="_blank">{{item.title}}</a>
           
          </div>
          <span class="text-body text-center" href=""><small>  {{ formatDateTime(item.publishedAt) }}</small></span>
        </div>
      </div>
      
    </div>
      
    
      
    
     
    
      
    </main> 
        
    </template>
    <script>
    export default {
        data() {
            return {
              image:'https://www.thesun.co.uk/wp-content/uploads/2023/11/KS-ai-jobs-comp.jpg?strip=all&w=620&h=413&crop=1',
              articles: [],
              articles2: [], 
              currentPage: 1,    
              totalPages: 1,
              rows: 12,         
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
                
               
                const pageSize = 100;
          
                try {
                  const response = await fetch(
                    `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&WithImageOnly=true&Page=1&PageSize=${pageSize}`
                  );
                  const data = await response.json();
                  return data.items;
                } catch (error) {
                  console.error("Error fetching news:", error);
                  return [];
                }
              },
              async fetchNews() {
                const articles = await this.getData();
                this.articles = articles;
                this.totalPages = Math.ceil(articles.length / this.rows);
              },
    
              async getData2() {
                
               
                const pageSize = 1;
          
                try {
                  const response = await fetch(
                    `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${pageSize}`
                  );
                  const data = await response.json();
                  return data.items;
                } catch (error) {
                  console.error("Error fetching news:", error);
                  return [];
                }
              },
              async fetchNews2() {
                const articles = await this.getData2();
                this.articles2 = articles;
                this.totalPages = Math.ceil(articles.length / this.rows2);
              },
          },
          mounted() {
            // Fetch news data when the component is mounted
            this.fetchNews();
            this.fetchNews2();
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