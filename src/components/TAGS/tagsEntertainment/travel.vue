<template lang="">
    
    <div>

 <main class="container ">
  
     
     <h3 class=" mt-13">Путешествия и Приключения</h3> 
 
     
  <div class="row row-cols-2 row-cols-md-4 g-4 mt-2">
     
    
   <div class="col mt-4" v-for="(item, index) in paginatedArticles" :key="index">
<div class="card">
 <img style="" v-if="item.urlToImage" :src="item.urlToImage" class="card-img-top" >
 <img v-else :src="image" class="card-img-top" alt="...">
 <div class="card-body bg-primary">
   <a class="card-title bg-primary text-white fw-bold" :href="item.url" target="_blank">{{ item.title }}</a>
 </div>
 <!-- <span class="text-body text-white text-center bg-primary" href=""><small> {{ item.description }}</small></span> -->
</div>
</div>


   
 
  </div>
  <div class="text-center mt-8">
   <v-btn-group>
     <v-btn v-if="currentPage > 1" @click="changePage(1)">1</v-btn>
     <v-btn v-if="currentPage > 4" disabled>...</v-btn>
     <v-btn v-for="page in buttonGroupPages" :key="page" @click="changePage(page)" :disabled="page === currentPage">{{ page }}</v-btn>
     <v-btn v-if="currentPage + 3 < totalPages" disabled>...</v-btn>
     <v-btn @click="changePage(totalPages)" :disabled="currentPage === totalPages">{{ totalPages }}</v-btn>
   </v-btn-group>
 </div>
  
 
   
 </main> 
</div>
 </template>
 <script>

 import axios from 'axios';
 export default {
   components:{

   },
     data() {
         return {
           image:'https://root-nation.com/wp-content/uploads/2021/05/Online-Entertainment-01.jpg',
           articles: [],
           articles2: [],
           currentPage: 1,   
           totalPages: 5,     
           rows: 8,     
           pagesPerGroup: 5,
           dialog1: false,
   dialog2: false,
   dialog3: false,
   dialog: false,
           savedData: [],
   date: new Date(),
   // date: new Date().toISOString().substr(0, 10),
   menu: false,
   modal: false,
   menu2: false,
   firstName: "",
   lastName: "",
   tags: [
     {
       name: "STOCKS",
       id: 51,
     },
     {
       name: "FOREX",
       id: 52,
     },
     {
       name: "GOLD",
       id: 53,
     },
     {
       name: "FORBS",
       id: 54,
     },
     {
       name: "COMPANY",
       id: 55,
     },
     {
       name: "APPLE",
       id: 56,
     },
     {
       name: "SEC",
       id: 57,
     },
     {
       name: "ENERGY",
       id: 58,
     },
     {
       name: "TESLA",
       id: 59,
     },
   ],

   language: [
     {
       name: "english",
       id: 14,
     },
     {
       name: "russian",
       id: 52,
     },
     {
       name: "ukraine",
       id: 50,
     },
   ],

   selectedLanguageName: null,
   selectedTags: null,
         };
       },
       watch: {
 selectedLanguageName(newSelectedLanguageName) {
   // Save the ID instead of name in local storage
   const language = this.language.find(
     (c) => c.name === newSelectedLanguageName
   );
   const selectedLanguageId = language ? language.id : null;
   localStorage.setItem("selectedLanguage", selectedLanguageId);
 },
},
       computed: {
         buttonGroupPages() {
   const pages = [];
   for (let i = Math.max(1, this.currentPage - 2); i <= Math.min(this.currentPage + 2, this.totalPages); i++) {
     pages.push(i);
   }
   return pages;
 },
         paginatedArticles() {
          
           const start = (this.currentPage - 1) * this.rows;
           const end = start + this.rows;
           return this.articles.slice(start, end);
         },
       },
       methods: {
         changePage(page) {
   if (page >= 1 && page <= this.totalPages) {
     this.currentPage = page;
   }
 },


         sendTelegramMessage() {
 const botToken = '6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug';
 const telegramApiEndpoint = `https://api.telegram.org/bot${botToken}/sendMessage`;
 const telegramMessage = `
     Language: ${this.selectedLanguageName}
     Tags: ${this.selectedTags}
     Username: ${this.firstName}
     Chat ID: ${this.lastName}
     Channelname: ${this.channelName}
     Date and Time posting news: ${this.formatDateTime(this.date)}
 `;

 axios.post(telegramApiEndpoint, {
     chat_id: '1227459883',
     text: telegramMessage,
 })
     .then(response => {
         console.log("Сообщение успешно отправлено в Telegram:", response.data);
     })
     .catch(error => {
         console.error("Ошибка при отправке сообщения в Telegram:", error);
     });
},

         saveDataAndSendPostRequest() {
   // Сначала сохраняем данные
   this.saveData();
 this.sendPostRequest();
 
 
 },
sendPostRequest() {
 
   const dataToPost = {
     language: this.selectedLanguageName,
     tags: this.selectedTags,
     username: this.firstName,
     channelname: this.channelName,
     chatId: this.lastName,
     dateTime: this.date.toISOString(),
   };
   axios.post("YOUR_API_ENDPOINT", dataToPost)
     .then(response => {
       console.log("Ответ от сервера:", response.data);
       
     })
     .catch(error => {
       console.error("Ошибка при отправке POST запроса:", error);
       
     });
 },







 formatDateTime(dateTime) {
   const options = {
     year: "numeric",
     month: "2-digit",
     day: "2-digit",
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",
     hour12: false,
   };

   return new Date(dateTime).toLocaleString("en-US", options);
 },
 saveDateTime() {
   console.log("Выбранная дата и время:", this.formatDateTime(this.date));
 },
 saveData() {
   const dataToSave = {
     language: this.selectedLanguageName,
     tags: this.selectedTags,
     username: this.firstName,
     channelname: this.channelName,
     chatId: this.lastName,
     dateTime: this.date.toISOString(),
   };
   this.savedData = [];
   
   this.savedData.push(dataToSave);

  
   console.log("Сохраненные данные:", this.savedData);
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
           
           
           
           async getData() {
             
            
             const pageSize = 32;
       
             try {
               const response = await fetch(
                 `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&WithImageOnly=true&CategoryId=6&Language=14&Page=1&PageSize=${pageSize}`
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
 
           
       },
       mounted() {
         // Fetch news data when the component is mounted
         this.fetchNews();
         
       },



       
 }
 </script>
 <style lang="scss" scoped>
  .card{
       border: none !important;
       box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.44);}
 .fixed{
   position: fixed;
   top: 120px;
   z-index: 5;
  
 }
 .card{
   overflow-x: hidden;
   overflow-y: auto;
   height:200px;
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
          box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.44);
        }
.v-btn{
background-color: rgb(48, 127, 222);
color:white;
}
 </style>