import { createRouter, createWebHistory } from "vue-router"; 
import news from "../views/News";
import articles from "../views/Articles";
import payments from "../views/Payments";
import authentication from "../views/Authentication";
import preview from "../views/Preview.vue";
import Space from "../views/Space.vue";
import crypto from "../views/Crypto.vue";
import Technology from "../views/Technology";
import Entertainment from "../views/Entertainment.vue";
import Science from "../views/Science.vue";
import Health from "../views/Health.vue";
import Sport from "../views/Sport.vue";
import Business from "../views/Business.vue";
import Good from "../views/PayGood.vue";
import No from "../views/PayNo.vue";
import Video from "../views/Video.vue";
import Save from "../views/SaveData.vue";
import enter from "../views/EnterTags/EntertainmentTag.vue";
const routes = [
   { path:'/',component:news},
   { path:'/video',component:Video},
   { path:'/save',component:Save},
   { path: "/good", component: Good },
   { path: "/no", component: No },
   { path:'/articles',component:articles},
   { path:'/authentication',component:authentication},
   { path:'/payments',component:payments},
   
   { 
    path:'/preview',
    component:preview,
    children:[
       {path:"cryptocurrency",component:crypto},
       { path: "technology", component: Technology },
      { path: "entertainment",
       component: Entertainment ,
       children:[
        { 
          path:'enterTag',
          component:enter
        }
       ]
      },
      { path: "science", component: Science },
      { path: "health", component: Health },
      { path: "sport", component: Sport },
      { path: "business", component: Business },
      { path: "space", component: Space },
     
    ]
  
  },
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0 };
    },
  });
  
  export default router;