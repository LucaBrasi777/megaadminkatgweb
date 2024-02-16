<template>
  <div>
    <main class="container">
      <h6 class="mt-2 ">Кино и ТВ</h6> 
      <div class="row row-cols-1  row-cols-md-4 g-4 mt-2">
        <div class="col mt-4" v-for="(item) in paginatedArticles" :key="item.id">
         
          <button @click="toggleId(item.id)" 
          :class="{ 'selected-id': isSelected(item.id) }">{{ item.id }}</button>
          <div class="card" >
            
           
            <img v-if="item.urlToImage" :src="item.urlToImage" class="card-img-top" />
            <img v-else :src="image" class="card-img-top" alt="..." />
            <div class="card-body bg-primary">
              <a class="card-title bg-primary text-white fw-bold" :href="item.url" target="_blank">{{ item.title }}</a>
            
            </div>
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
              selectedIds: [],
             
              articles: [],
              
              currentPage: 1,   
              totalPages: 5,     
              rows: 50,     
              pagesPerGroup: 5,
          
              savedData: [],
    
  


    
            };
          },
          watch: {
            selectedIds: {
      deep: true,
      handler(newSelectedIds) {
        localStorage.setItem('selectedIds', JSON.stringify(newSelectedIds));
      },
    },
    // selectedLanguageName(newSelectedLanguageName) {
      
    //   const language = this.language.find(
    //     (c) => c.name === newSelectedLanguageName
    //   );
    //   const selectedLanguageId = language ? language.id : null;
    //   localStorage.setItem("selectedLanguage", selectedLanguageId);
    // },
  },
          computed: {





            buttonGroupPages() {
  const pages = new Set(); // Используем Set для уникальных значений
  for (let i = Math.max(1, this.currentPage - 2); i <= Math.min(this.currentPage + 2, this.totalPages); i++) {
    pages.add(i);
  }

  // Преобразуем Set обратно в массив
  const uniquePages = Array.from(pages);

  return uniquePages;
},


          
            paginatedArticles() {
             
              const start = (this.currentPage - 1) * this.rows;
              const end = start + this.rows;
              return this.articles.slice(start, end);
            },
          },
          methods: {




    toggleId(id) {
      // Проверяем, есть ли ID в массиве
      const index = this.selectedIds.indexOf(id);
      
      if (index === -1) {
        // Если ID не найден, добавляем его
        this.selectedIds.push(id);
      } else {
// Если ID найден, удаляем его
        this.selectedIds.splice(index, 1);
      }

      // Сохраняем изменения в локальном хранилище
      localStorage.setItem('selectedIds', JSON.stringify(this.selectedIds));
    },
    isSelected(id) {
      // Проверяем, является ли ID выбранным
      return this.selectedIds.includes(id);
    },


            changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  

            






    
              
              async getData() {
  const pageSize = 100;

  try {
    const response = await fetch(
      `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&WithImageOnly=true&CategoryId=6&Language=14&Page=1&PageSize=${pageSize}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching news:", error.message);
    return [];
  }
}
,
              
    
              async fetchNews() {
  try {
    const articles = await this.getData();
    this.articles = articles;
    this.totalPages = Math.ceil(articles.length / this.rows);
    console.log('Articles:', this.articles);  // Добавьте эту строку
  } catch (error) {
    console.error("Error fetching news:", error);
  }
},

          },
          mounted() {
            // Fetch news data when the component is mounted
            this.fetchNews();
    
            
    const storedIds = JSON.parse(localStorage.getItem('selectedIds')) || [];

    if (storedIds.length > 0) {
      // Заполняем массив selectedIds сохраненными ID
      this.selectedIds = storedIds;
    }
          },



          
    }
    </script>
    <style lang="scss" scoped>
    /* CSS-стили для изменения цвета фона при активации чекбокса */

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
        // .bd-placeholder-img {
        //     font-size: 1.125rem;
        //     text-anchor: middle;
        //     -webkit-user-select: none;
        //     -moz-user-select: none;
        //     user-select: none;
        //   }
    
        //   @media (min-width: 768px) {
        //     .bd-placeholder-img-lg {
        //       font-size: 3.5rem;
        //     }
        //   }
          
.v-btn{
  background-color: rgb(48, 127, 222);
  color:white;
}
    </style>