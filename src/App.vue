<template>
  <v-app id="app">
    <div class="nav">
      <v-layout class="overflow-visible" style="height: 56px;">
        <v-bottom-navigation class="text-lowercase" v-model="value" :bg-color="color" mode="shift">
          <router-link to="/">
            <v-btn>
              <v-icon class="pb-4">
                <img style="width: 30px;" :src="news">
              </v-icon>
              <span  style="font-size:10px;">News</span>
            </v-btn>
          </router-link>

          <router-link to="/articles">
            <v-btn>
              <!-- <img style="width: 30px;" :src="art"> -->
             
              <v-icon class="pb-4">mdi-book</v-icon>
              <span style="font-size:10px">Articles</span>
            </v-btn>
          </router-link>


          <router-link to="/payments">
          <v-btn > 
            <v-icon class="pb-4">
              <img style="width: 40px;" :src="pay">
            </v-icon>
            <span style="font-size:10px">Pay</span>
          </v-btn>
        </router-link>
         
        <router-link to="/authentication">
        <v-btn > 
         
          <v-icon class="pb-4">
              <img style="width: 40px;" :src=" auth">
            </v-icon>
            <span style="font-size:10px">Auth</span>
          </v-btn>
        </router-link>
        </v-bottom-navigation>
      </v-layout>
    </div>
    <!-- <v-footer-component/> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
//import vFooterComponent from './components/footer/v-footer-component.vue';

export default {
  components: {  },
  computed: {
    color() {
      switch (this.value) {
        case 0: return 'indigo';
        case 1: return 'black';
        case 2: return 'blue-grey';
        case 3: return 'primary';
        default: return 'blue-grey';
      }
    },
  },
  data() {
    return {
      value: 0,
      isScrolled: false,
      showButton: false,
      art:' https://images-platform.99static.com/_7EPAKTtZSNLJmg0oEVJCOEe8cc=/500x500/top/smart/99designs-contests-attachments/8/8071/attachment_8071474',
      news:'https://higherlogicdownload.s3.amazonaws.com/WISE/2bca7ce0-ebe7-4737-b23a-43e76c2e44f3/UploadedImages/Images/Blog_Icons/news.png',
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
a{
  text-decoration: none;
  color: white;
}
</style>
