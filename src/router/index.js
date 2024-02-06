import { createRouter, createWebHistory } from "vue-router"; 
import news from "../views/News";
import articles from "../views/Articles";
import payments from "../views/Payments";
import authentication from "../views/Authentication";

const routes = [
   { path:'/',component:news},
   { path:'/articles',component:articles},
   { path:'/authentication',component:authentication},
   { path:'/payments',component:payments},
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