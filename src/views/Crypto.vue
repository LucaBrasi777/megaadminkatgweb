<template lang="">
    
       

  <main class="container mt-8">
    <!-- <h4>CoinDesk&CoinTelegraph</h4> -->
      
    <!-- <div class="row row-cols-1 row-cols-sm-2 g-4">
    -->
    <div class="row ">
      <h3 class="text-white text-center fw-bold">CRYPTOCURRENCY</h3>
      <div class="col-12 col-sm-6"
      v-for="(item, index) in articles.slice(1)" :key="index">
      <div class="card mt-2">
        <!-- <img class="img-fluid w-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
        <img class="img-fluid w-100" v-else src=" https://www.kingbruwaert.org/wp-content/uploads/2023/06/1.jpg" style="object-fit: cover;"> -->
        <img v-if="item.imageurl" :src="item.imageurl" class="card-img-top" >
        <img v-else  src="#" class="card-img-top" alt="...">
        <div class="card-body bg-primary">
          <a class="card-title text-white bg-primary fw-bold" :href="item.url" target="_blank">{{item.title}}</a>
         
        </div>
        <div class="container  bg-primary pb-4">
        <img :src="item.source_info.img" style="width:20px"><span class="text-white">{{item.source_info.name}}</span>
        </div>
      
      </div>
    </div>
    
  </div>
    
  
    
  
   
  
    
  </main> 
  <br/>
  </template>
  <script>
  export default {
    data() {
      return {
        articles: [],
        articles2: [],
        currentPage: 1,  
               totalPages: 1,  
        rows:1,
        
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



      async getData() {
               
       
             
               const pageSize = 52;
               
               try {
                 const response = await fetch(
                  // 'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored'
                  //'https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft&limit=1'
                  'https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,coindesk&extraParams=YourSite'
                  //'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite'

                 );
                 const data = await response.json();
                 return data.Data;
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
               }
             },
             prevPage() {
               
               if (this.currentPage > 1) {
                 this.currentPage--;
               }
             },


          formatDateTime(dateTime) {
          const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }
          return new Date(dateTime).toLocaleString(undefined, options); },
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
          box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.44);
        border: none !important;
                 // box-shadow: none !important;
      }
  </style>