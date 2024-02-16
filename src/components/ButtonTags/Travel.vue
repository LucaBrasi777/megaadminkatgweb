
<template lang="">
    <div>
    
       <v-btn
          class="btn text-white  fw-bold cursor bg-primary text-white"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Сортируйте новости и устанавливайте время постинга"
          style="font-size:20p;border-radius:20px"
          @click="dialog1 = true"
          src="https://i.ytimg.com/vi/ySdf0BwtBlw/maxresdefault.jpg"
        >Путешествия и Приключения</v-btn>
     
       
   <v-dialog  v-model="dialog1" width="auto">
    <v-card  class="image-car bg-primary">
      <v-card-text>
        <v-card title="" class="bg-primary">
          <v-card-text>
            <div>
              <v-sheet width="300" class="mx-auto">
                <v-form class="fw-bold bg-primary">
                 
                  <v-text-field
                    v-model="channelName"
                    label="Название канала"
                  ></v-text-field>
                </v-form>
              </v-sheet>
            <br />
              <br />
              <h4 class="text-center text-white">Тег : Путешествия и Приключения</h4>
              <br />
              <br />
              <div>
                <VueDatePicker
                  calendar-cell-class-name="dp-custom-cell"
                  menu-class-name="dp-custom-menu"
                  dark
                  v-model="date"
                  input-class-name="dp-custom-input"
                  teleport-center
                  :enable-time-picker="true"
                />
              
                
              </div>
              <br />
  
              <div v-if="savedData.length > 0">
                <h6 class="text-white">Сохраненные данные:</h6>
                
                  <div v-for="(data, index) in savedData" :key="index">
                   
                    <span>Название канала: {{ data.channelname || "—" }}</span><br/>
                    <span>
                      Дата и время постинга новостей:
                      {{ formatDateTime(data.dateTime) || "—" }}
                    </span>
                    <hr />
                  </div>
                
              </div>
              <div>
  <h5>Удалить из постинга:</h5>
  <div v-for="id in selectedIdsDisplay" :key="id">
    <span>{{ id }}</span>
  </div>
</div>
              <v-btn class="mt-2" color="primary" @click="saveData"
                >Просмотр</v-btn
              >
              <v-btn class="mt-2" color="primary" @click="sendPostRequest">Отправить</v-btn>
              


<h6 class="mt-2 "></h6> 
      <div class="row row-cols-1  row-cols-md-4 g-4 mt-2">
        
        <div class="col mt-4" v-for="(item) in articles" :key="item.id">
  <button @click="toggleId(item.id)" 
          :class="{ 'selected-id': isSelected(item.id), 'red-text': isSelected(item.id) }">
   <span class="fw-bold"> {{ item.id }}</span>
  </button>
  <div class="card">
    <img v-if="item.urlToImage" :src="item.urlToImage" class="card-img-top" />
    <img v-else :src="image" class="card-img-top" alt="..." />
    <div class="card-body bg-primary">
      <a class="card-title bg-primary text-white fw-bold" :href="item.url" target="_blank">{{ item.title }}</a>
    </div>
  </div>
</div>
        
        
        
        
        
        
        
        
      </div>



            </div>
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
        <br />
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="text-white fw-bold"
          color="red"
          variant="text"
          @click="dialog1 = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
 </div>
  </template>
  <script>
import axios from "axios";
import cinema from "../TAGS/tagsEntertainment/kinoTv.vue";
import YourComponent from "../saveData.vue";
import logo from "../newsLogo.vue";
import hosting from "../posting.vue";
import dat from "../../components/data.vue";
import dat2 from "../../components/data2.vue";
export default {
  components: { dat, dat2, hosting, logo, YourComponent, cinema },
  data() {
    return {
      selectedIdsDisplay: [],
      selectedIds: [],
      savedData: [],
      date: new Date(),
      menu: false,
      modal: false,
      menu2: false,
      firstName: "",
      lastName: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0qiZNhj7gGZ88wx9rCMcl5juiagmuZg6iytAHOouX55W7k3HKa9n7z2PR5eT8jhitXw&usqp=CAU",
      currentYear: new Date().getFullYear(),
      articles: [],
      currentPage: 1,
      totalPages: 1,
      rows: 15,
      matchingArticles: [],
      dialog4: false,
      dialogCompose: false,
      activeMessage: {},
      composeMessage: {},
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog: false,
      tags: [
        {
          name: "Кино и ТВ",
          id: 51,
        },
        {
          name: "Музыка",
          id: 52,
        },
        {
          name: "Игры и Гейминг",
          id: 53,
        },
        {
          name: "Искусство и Литературa",
          id: 54,
        },
        {
          name: "События и Фестивали",
          id: 55,
        },
        {
          name: "Театр и Живые Выступления",
          id: 56,
        },
        {
          name: "Юмор и Развлечения",
          id: 57,
        },
        {
          name: "Спорт и Фитнес",
          id: 58,
        },
        {
          name: "Путешествия и Приключения",
          id: 59,
        },
      ],
      selectedTags: [],
      language: [
        {
          name: "Английский",
          id: 14,
        },
        {
          name: "Русский",
          id: 52,
        },
        {
          name: "Украинский",
          id: 50,
        },
      ],

      selectedLanguageName: null,
      selectedTags: null,
    };
  },
  watch: {
    selectedIds: {
      deep: true,
      handler(newSelectedIds) {
        localStorage.setItem("selectedIds", JSON.stringify(newSelectedIds));
      },
    },
  },
  computed: {},
  mounted() {
    this.fetchNews();

    const storedIds = JSON.parse(localStorage.getItem("selectedIds")) || [];

    if (storedIds.length > 0) {
      // Заполняем массив selectedIds сохраненными ID
      this.selectedIds = storedIds;
    }
  },
  methods: {
    toggleId(id) {
  const index = this.selectedIds.indexOf(id);
  if (index === -1) {
    this.selectedIds.push(id);
    this.selectedIdsDisplay.push(id); // Add the selected ID to the display array
  } else {
    this.selectedIds.splice(index, 1);
    this.selectedIdsDisplay.splice(this.selectedIdsDisplay.indexOf(id), 1); // Remove the unselected ID from the display array
  }
  localStorage.setItem("selectedIds", JSON.stringify(this.selectedIds));
},
    
    isSelected(id) {
      // Проверяем, является ли ID выбранным
      return this.selectedIds.includes(id);
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
    },
    async fetchNews() {
      try {
        const articles = await this.getData();
        this.articles = articles;
        this.totalPages = Math.ceil(articles.length / this.rows);
        console.log("Articles:", this.articles); // Добавьте эту строку
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },

    saveDataAndEmit() {
      const dataToSave = {
        tags: this.selectedTags,
        channelName: this.channelName,
        dateTime: this.formatDateTime(this.date),
      };

      // Добавляем данные в массив savedData
      this.savedData.push(dataToSave);

      // Эмитируем событие для обновления
      this.$emit("update:savedData", this.savedData);
    },

    saveDataAndSendPostRequest() {
      // Сначала сохраняем данные
      this.saveData();
      this.sendPostRequest();
    },
//     sendPostRequest() {
//   const dataToPost = {
//     channelname: this.channelName,
//     dateTime: this.date.toISOString(),
//   };

//   // Отправляем данные в телеграм-бот
//   this.sendTelegramMessage(dataToPost);

//   // Сохраняем данные в массив
//   this.savedData.push(dataToPost);

//   // Очищаем форму
//   this.channelName = "";
//   this.date = new Date();
// },

sendPostRequest() {
    const dataToPost = {
      channelname: this.channelName,
      dateTime: this.date.toISOString(),
    };

    // Отправляем данные в телеграм-бот
    this.sendTelegramMessage(dataToPost);

    // Очищаем localStorage
    localStorage.removeItem("selectedIds");

    // Очищаем массив с выбранными id
    this.selectedIds = [];
    this.selectedIdsDisplay = [];

    // Очищаем форму
    this.channelName = "";
    this.date = new Date();
  },
 

    sendTelegramMessage(data) {
  const botToken = "6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug";
  const telegramApiEndpoint = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  // Добавляем выбранные ID к сообщению
  const selectedIdsMessage = `<b>Удалить из постинга:</b> ${this.selectedIds.join(", ")}`;
  const tagsMessage = data.tags ? `Теги: ${data.tags.join(", ")}` : '';
const telegramMessage = `
  ${selectedIdsMessage}
  ${tagsMessage}
  <b>Название канала:</b> ${data.channelname}
  <b>Дата и время публикации новостей:</b> ${this.formatDateTime(data.dateTime)}
`;
  
  axios
    .post(telegramApiEndpoint, {
      chat_id: "1227459883",
      text: telegramMessage,
      parse_mode: "HTML",
    })
    .then((response) => {
      console.log("Сообщение успешно отправлено в Telegram:", response.data);
    })
    .catch((error) => {
      console.error("Ошибка при отправке сообщения в Telegram:", error);
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
    // username: this.firstName,
    // chatId: this.lastName,
    saveData() {
      const dataToSave = {
        channelname: this.channelName,

        dateTime: this.date.toISOString(),
      };
      this.savedData = [];

      this.savedData.push(dataToSave);

      console.log("Сохраненные данные:", this.savedData);
    },
  },
};
</script>
  
  <style scoped lang="scss">
  .red-text {
    padding: 3px;
    border-radius: 5px;
    background-color: white;
  color: red;
}
// .cursor{
//   border-radius: 25px;
// }
img {
  width: auto;
  height: auto;
}
.mt {
  margin-top: 200px;
}

.image-card {
  background-image: url("https://wtop.com/wp-content/uploads/2017/07/world-480x320.jpg");
  position: relative;
}
</style>