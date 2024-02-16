<template>
  <v-app id="app" class="bg-primary">



  
    <div class="nav fixed-top">
      <v-layout class="overflow-visible" style="height: 56px;">
        
        <v-bottom-navigation class="text-lowercase" v-model="value" :bg-color="color" mode="shift">
          
          <router-link to="/authentication">
        <v-btn > 
         
          <v-icon class="pb-4">
              <img style="width: 30px;" :src=" auth">
            </v-icon>
            <!-- <span style="font-size:10px">Auth</span> -->
          </v-btn>
        </router-link>
       
        <router-link to="/payments">
          <v-btn > 
            <v-icon class="pb-4">
              <img style="width: 40px;" :src="pay">
            </v-icon>
            <!-- <span style="font-size:10px">Pay</span> -->
          </v-btn>
        </router-link>
          
          <router-link to="/">
            <v-btn>
              <v-icon class="pb-4">
                <img style="width: 20px;" :src="news">
              </v-icon>
              <!-- <span  style="font-size:10px;">News</span> -->
            </v-btn>
          </router-link>



          
          <!-- <router-link to="/articles">
            <v-btn>
              <img style="width: 30px;" :src="art">
             
             
              <span style="font-size:10px">Articles</span>
            </v-btn>
          </router-link> -->


          
         
      
        </v-bottom-navigation>
      </v-layout>
    </div>
    <div class="mt-14"></div>
    <router-view></router-view>
   
    <a href="#" style="width:20px;height:20px;color:rgb(58, 127, 218)" class="container top mdi mdi-arrow-up-circle mt-4   back-to-top"></a>

</v-app>
</template>

<script>
import strp from './components/StripeTemplate.vue';

export default {
  components: { strp },
  computed: {
    color() {
      switch (this.value) {
        case 0: return 'primary';
        case 1: return 'primary';
        case 2: return 'primary';
        
        default: return 'black';
      }
    },
  },
  data() {
    return {
      value: 0,
      isScrolled: false,
      showButton: false,
      art:' https://w7.pngwing.com/pngs/888/521/png-transparent-computer-icons-symbol-logo-login-button-miscellaneous-angle-text.png',
      news:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Google_account_icon.svg/470px-Google_account_icon.svg.png ',
      pay:'https://cdn-icons-png.flaticon.com/512/9721/9721127.png',
      auth:'https://cdn-icons-png.flaticon.com/512/10993/10993955.png',
      
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    checkScroll() {
      this.showButton = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#app{
  .card{
      border-radius: none !important;
    }
}
a{
  text-decoration: none;
  color: white;
}
.top{
  width: 10px;
  left: 0;
  position: fixed;
  top:135px;
  z-index:10;
  
}
</style>
