<template>
  <v-app class="" id="inspire">
   

    <v-main>
      <v-container >
        <v-row >
          <v-col
            v-for="item in packaje"
            :key="item.id"
            cols="12" md="4" lg="4"
          >
            <v-card class="card  " height="">
              <img style="max-width: 200px;" :src="item.img">
              <p>{{ item.text }}</p>
              <p>{{ item.price }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


        <!-- <div class="container mt-5">
  <div class="row">
                    <div class="col-4 mb-3"
                    
                    >
                       
                  <img style="width:80px;" :src="gurd">
                    
                  </div>
                    
                  <div class="col-4 mb-3"
                    
                    >
                       
                    <img style="width:80px;" :src="wp">
                    
                    
                  </div>
                  <div class="col-4 mb-3"
                    
                    >
                       
                    <img style="width:80px;" :src="bbc">
                    
                    
                  </div>
                  <div class="col-4 mb-3"
                    
                    >
                       
                    <img style="width:80px;" :src="cbc">
                   
                    
                  </div>
                  <div class="col-4 mb-3"
                    
                    >
                       
                    <img style="width:80px;" :src="abc">
                   
                    
                  </div>
                  <div class="col-4 mb-3"
                    
                    >
                       
                    <img style="width:80px;" :src="mk">
                   
                    
                  </div>
                  <div class="col-4 mb-3"
                    
                    >
                       
                    <img style="width:80px;" :src="nbc">
                   
                    
                  </div>
                  <div class="col-4 mb-3"
                    
                    >
                       
                    <img style="width:80px;" :src="google">
                   
                    
                  </div>
               
               
                  <div class="col-4 mb-3"
                    
                    >
                       
                    <img style="width:80px;" :src="cnn">
                   
                    
                  </div>
               
                

  </div>
              </div> -->
    <!-- </div> -->
   

<script>
//import stripe from '../../src/components/Stripe.vue'
export default {
  // methods: {
  //   async redirectToCheckout() {
  //     // Получите публичный ключ Stripe
  //     const publicKey = 'sk_test_51OazU7CEAUiVgq2v9f36loao1miREJDYbgb7nrsoQkm7wyO7irQqNU0j6STMvM8D5oF2HkSralI1SyfcbfNgRJ9X00vvJkSUO1';

  //     // Создайте сессию оплаты на вашем сервере и получите идентификатор сессии
  //     const sessionId = await this.createCheckoutSession();

  //     // Инициализируйте Stripe
  //     const stripe = Stripe(publicKey);

  //     // Перенаправьте пользователя на страницу оплаты
  //     const { error } = await stripe.redirectToCheckout({
  //       sessionId: sessionId,
  //     });

  //     if (error) {
  //       console.error('Ошибка при перенаправлении на страницу оплаты:', error);
  //       alert(error.message);
  //     }
  //   },

  //   // Замените этот метод на свой серверный код для создания сессии оплаты
  //   async createCheckoutSession() {
  //     // Ваш серверный код для создания сессии оплаты
  //     // Возвращайте идентификатор сессии
  //     // Пример:
  //     const response = await fetch('ваш_серверный_эндпоинт', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         // Ваши параметры для создания сессии оплаты
  //       }),
  //     });

  //     const session = await response.json();
  //     return session.id;
  //   },
  // },
  // components:{stripe},
  data()
  {
    return{
      packaje:[
     { img:'https://cdn.filestackcontent.com/pbMe99njQ6ea8tAfsg1Z',
       id:1,
       text:'Basic packaje 10 tags',
       price: '100 $' ,
    },
      {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQ9a8ugxjdOlq_lNMUkiWT2IraWJgPDbMFxNC6devl62b2Zb8T3G-QoBIZmQCaEQusOk&usqp=CAU',
        id:2,
        text:'Standart packaje 50 tags',
        price: '300 $' ,
      },
      {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn05xXIKEJWcA386f5pbslYx4cZOG86CwkxnSslCcjcXkFAK2FxCTpGB-fR_gOFu5K1g4&usqp=CAU',
       id:3,
       text:'Premium packaje 100 tags',
       price: '500 $' ,
      },
   
    ],
   
   
   
   
      google:" https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/langru-640px-Ethereum-icon-purple.svg.png&w=640&q=50",
    rt:" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Russia-today-logo.svg/1024px-Russia-today-logo.svg.png",
    mk:"https://lh3.googleusercontent.com/Okq5LGhgExR0nekEACHQnzC3ZLmXpmuMcEtUUpyFVg0NJp49SWXf3t5CThxJ8Iq_W4BQmKSGBLNBBv1ULds9P6fyvYlevgoc-j1365h9KJMdZBAmQYA=s0",
    bbc:"https://www.oschadbank.ua/uploads/0/1989-visa.png",
    cbc:" https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png",
    abc:" https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png",
    medium:" https://cdn-static.ntv.ru/home/news/2023/20230601/medium_io.jpg",
    wp:" https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png",
    gurd:" https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
    up:" https://pbs.twimg.com/profile_images/1597208679257980930/Ujzp_V8C_400x400.jpg",
    cnn:" https://changenow.io/images/cached/usdt.png",
    nbc:" https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
   } 

  },
}
</script>
<style lang="scss" scoped>
p{
  font-weight: bold;
}
    .containe{
      background-color: rgb(162, 196, 196);
    }
    .card{
      border: none !important;
      box-shadow: none !important;
      text-align: center;
    }
</style>