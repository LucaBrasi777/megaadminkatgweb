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

const routes = [
   { path:'/',component:news},
   { path:'/articles',component:articles},
   { path:'/authentication',component:authentication},
   { path:'/payments',component:payments},
   { 
    path:'/preview',
    component:preview,
    children:[
       {path:"crypto",component:crypto},
       { path: "technology", component: Technology },
      { path: "entertainment", component: Entertainment },
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