<template lang="">
  <div class="container-fluid p-0 ">
<nav class="navbar  navbar-expand-xl  navbar-dark py-2 py-lg-0 px-lg-5">
  <li class="nav-item ">
      
      <v-row
        justify="center"
      >
        <span
       
        class="btn  text-white  fw-bold   cursor "
         data-bs-toggle="tooltip" 
         data-bs-placement="bottom" 
         title="choose news according to your preferences: language, country, and service news near me"
        style="font-size:px"
        
          @click="dialog1 = true"
        >
          My news
        </span>
       
       
       
       
       
        
       
       
       
        <v-dialog
          v-model="dialog1"
          width="auto"
        >
          <v-card>
            <v-card-title class="fw-bold"> 
              Selection of news by language
            </v-card-title>
            
            <v-card-text>
              <v-card title="My news"  class=" ">
        <v-card-text>
         
    
    
      <div>
        <v-select
          class="mySelect"
          clearable
          label="News and articles filter by language"
          :items="language.map(item => item.name)"
          v-model="selectedLanguageName"
          variant="underlined"
        ></v-select>
      </div>
        </v-card-text>
    
        <v-card-actions>
          <v-spacer></v-spacer>
    
          <v-btn
            text="GO"
            @click="sendUserDataToServer"
          ></v-btn>
        </v-card-actions>
      </v-card>
              <v-btn
                color=""
                class="ma-2"
                @click="dialog2 = true"
              >
                Open country
              </v-btn>
            </v-card-text>
            <v-card-actions>
              <v-btn
              class="text-white"
                color="red"
                variant="text"
                @click="dialog1 = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    
        <v-dialog
          v-model="dialog2"
          width="auto"
        >
          <v-card>
            <v-card-title class="fw-bold">
              Selection of news by country
            </v-card-title>
            <v-card-text>
              
              <dat/>
              <v-btn
            text="GO"
           
          ></v-btn>
              <v-btn
                color=""
                @click="dialog3 = !dialog3"
              >
                 location news
              </v-btn>
             
            </v-card-text>
            <v-card-actions>
              <v-btn
              class="text-white"
                color="red"
                variant="text"
                @click="dialog2 = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    
        <v-dialog
          v-model="dialog3"
          width="auto"
        >
          <v-card>
            <v-card-title>
              <span class="fw-bold">My location news</span>
            </v-card-title>
            <v-card-actions>
              <v-btn
              class="text-white"
                color="red"
                variant="text"
                @click="dialog3 = false"
              >
                Close
              </v-btn>
              <dat2/>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    
    
          </li>
      
         
        
       




               
        
       
       
       
       
       

      
     




  





  <span type="" 
  style="font-size:8px" 
  class="navbar-toggler border-none text-white menu" 
  data-toggle="collapse" 
  data-target="#navbarCollapse" >
      menu
     </span> 
 
     <pogoda/>
 
                </nav>
   
   
   
   
   
   
                <span class="marquee"
v-for="item in news2"
:key="item"
>

    <p>
     
      
      
     <span style="font-size:13px;color:white">{{item.title}}{{item.content}}</span> </p>
    </span>
    
   
   
  </div>
 
</template>
<script>
// 1fb27fc9978d48ecadb4bdc77705325e API tech
import search from '../../components/searchNews.vue'
import geo from '../../components/GeoApi.vue'
import pogoda from '../../components/pogoda.vue'
import dat from '../../components/data.vue'
import dat2 from '../../components/data2.vue'
import bread from '../Bread/breadCrums.vue'
import axios from "axios";
export default {
components:{bread,geo,dat,dat2,pogoda,search},
data() {
  return {
    image2:'https://biz-news.biz/wp-content/uploads/2021/10/logobn2.png',
    image:'https://biz-news.biz/wp-content/uploads/2021/10/logobn2.png',
    matchingArticles: [],
    dialog: false,
    dialogCompose: false,
      activeMessage: {},
      composeMessage: {},
      valid: true,
      dialog77: false,
        notifications: false,
        sound: true,
        widgets: false,

      
  dialog1: false,
  dialog2: false,
  dialog3: false,
  dialog: false,







    
    showSearchInput: false,
    news: [],
    searchT: "",
    news2: [],
    
  
  dialog: false,
 language: [
        {
          name: 'english',
          id: 14,
        },
        {
          name: 'russian',
          id: 52,
        },
        {
          name: 'ukraine',
          id: 50,
        },
      ],
      selectedLanguageName: null,
  };
},
watch: {

selectedLanguageName(newSelectedLanguageName) {
      // Save the ID instead of name in local storage
      const language = this.language.find(c => c.name === newSelectedLanguageName);
      const selectedLanguageId = language ? language.id : null;
      localStorage.setItem('selectedLanguage', selectedLanguageId);
    },
},
  mounted() {

const savedSelectedLanguageId = localStorage.getItem('selectedLanguage');
    if (savedSelectedLanguageId) {
      // Convert the ID back to name
      const selectedLanguage = this.language.find(c => c.id === parseInt(savedSelectedLanguageId));
      this.selectedLanguageName = selectedLanguage ? selectedLanguage.name : null;
    }


  },
mounted() {
  document.addEventListener("click", this.handleDocumentClick);
  axios
    .get(
      "https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=2&PageSize=1"
    )
    .then((response) => {
      this.news2 = response.data.items;
    })
    .catch((error) => {
      console.log("error");
    });
},

beforeDestroy() {

document.removeEventListener("click", this.searchClose);
},
methods: {
//   async sendUserDataToServer() {
//   try {
//     const response = await axios.post('https://api-epicnews404.azurewebsites.net/', {
//       languageId: this.selectedLanguageId,
//       countryId: this.selectedCountryId,
//     });
//     console.log(response.data); // Здесь вы можете обрабатывать ответ от сервера
//   } catch (error) {
//     console.error('Error sending user data to server:', error);
//   }
// },
// async sendUserDataToServer() {
//     try {
//       const response = await axios.post('https://api-epicnews404.azurewebsites.net/', {
//         // latitude: this.location.latitude,
//         // longitude: this.location.longitude,
//         languageId: this.selectedLanguageId,
//         countryId: this.selectedCountryId,
//       });

//       if (response.status === 200) {
//         console.log('Данные успешно отправлены на сервер.');
//       } else {
//         console.error('Ошибка при отправке данных на сервер:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Ошибка при отправке данных на сервер:', error.message);
//     }
//   },



  highlightSearch(title) {
  if (!this.searchT) return title;

  const regex = new RegExp(`(${this.searchT})`, 'gi');
  return title.replace(regex, '<span style="background-color: rgb(7, 123, 239);color:white;">$1</span>');
},


 
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

  compose() {
      this.dialogCompose = true
  },
  saveDraft() {
      this.dialogCompose = false
  },
  handleMenuItemClick (lang) {
    this.activeLang = lang.title;
  },
  handleAddLanguage () {
    alert('handle add new language!');
  },
  // toggleSearch() {
  //   this.showSearchInput = !this.showSearchInput;
  // },
  handleDocumentClick(event) {
   
    const searchContainer = document.querySelector(".div");
    if (searchContainer && !searchContainer.contains(event.target)) {
     this.searchClose();
      
    }
  },
  
  

//     closedHome() {
//  setTimeout(() => {
//     const closeHome = document.getElementById('home');
//     if (closeHome) {
//       closeHome.style.display = "none";
//     }
//   }, 0);
// },
  

  onSearchType: function () {
    const search = (document.querySelector(".div").style.display = "block");
    var url =
      "https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=2&PageSize=100" +
      "&q=" +
      this.searchT;

    axios
      .get(url)
      .then((response) => {
        this.news = response.data.items;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  
  searchClose() {
     
      const searchClosed = document.querySelector(".div");
    if (searchClosed) {
      searchClosed.style.display = "none";
    }
      this.searchT = ""
  },
},
};
</script>
<style lang="scss" scoped>
.dropdown-menu{
  vertical-align: center;
}
.menu{
  font-size: 8px;
}
.navbar{
  background-color: rgb(3, 3, 33);
 
}
nav a {
  font-size: 14px;
}
nav span {
  font-size: 14px;
}

.navbar,.container-fluid,nav{
  z-index: 220px;
}
.li{
  list-style: none;
}
.dial{
  margin-top: none !important;
}

.btn{
  margin-right: 65px;
}
.mySelect::v-deep .v-chip {
background-color: none !important;
color: black;
}



.img{
width:200px;
@media screen and(max-width:368px){
  width:100px;
}
}
.link:hover{
// background-color:white;
// color:black;
text-decoration:underline;
}
.link{
color:white;
}

.mySelect::v-deep .v-chip {
background-color:rgb(136, 132, 132);
color: white;
border:2px solid white;
font-weight:bold;
button {
color: white;
}
}
.n{
z-index:10000;
}

.span{
font-size: 10px;
}
.h1{
font-family: cursive;
font-size: 40px;

}
::placeholder{
color: rgb(5, 5, 5);
font-size:12px
}
.form-control{
color: rgb(0, 0, 0);

box-shadow: none !important;
border: none !important;
border-radius:none !important;

}


a{
color: black;
text-decoration: none;
margin: 15px;
}
.marquee {
position: fixed;
bottom: 0;
width: 100%;
background-color: rgb(7, 123, 239);
color: white;
white-space: nowrap;
overflow: hidden;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
z-index: 100;
height: 23px;
// padding: 5px 0;
}

.marquee p {
display: inline-block;
padding-left: 100%; 
animation: marquee 45s linear infinite; 
}

@keyframes marquee {
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(-100%);
}
}

.input{
box-shadow:1px 2px 3px black;
 z-index: 20000;

}
.close{
position: fixed;
left:258px;
top:105px;
}
.div {

position: fixed;

display: none;


border-radius: 5px;

top: px;
padding: 20px;

height: 75vh;
overflow-x: hidden;
overflow-y: auto;
background-color: white;
color: rgb(3, 3, 3);
z-index: 5000;
//   display: none;
@media screen and (max-width: 1279px) {

}
// @media screen and (max-width: 367px) {
//   width: 300px;
// }
// @media screen and (max-width: 330px) {
//   width: 270px;
// }
// @media screen and (max-width: 300px) {
//   width: 250px;
// }
}
.title{
  color: black;
  text-decoration: none;
}
.msj{
box-shadow: none;
@media screen and(max-width:1150px){
  display: none;
}
}
.img-brand{
//width:100px;
@media screen and(max-width: 1120px){
  width:120px ;
}
// @media screen and(max-width: 1074px){
//   width:100px ;
// }


}
// .navbar-toggler{
//   @media screen and(max-width: 280px){
//     width:50px ;
//   }
// }
.navbar-toggle{
border:none !important;
box-shadow: none !important;
color: black;
}
.cursor{
  margin-top: 13px;
}
// .pogoda{
//   @media screen and  (max-width: 471px){
//     margin-right: 40px;
//     display: none;
//   }
// }

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
.imgLog{
width:30px;
  @media screen and (max-width:300px){
    width: 30px;
  }
  @media screen and (max-width:275px){
    width: 25px;
  }
}
.menu{
  font-size:12px;
  @media screen and (max-width:350px){
    font-size:7px;
  }
}
// .menu{
//   @media screen and (max-width:600px){
//     margin-top: 10px;
//   }
  
// }
.svg{
  @media screen and (max-width: 380px){
    width: 25%;
    height: 25%;
  }
}
</style>

























