<template lang="">
    <div>
        <div class="card">
        <img
          class="btn text-white fw-bold cursor"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Выбирайте новости по своим предпочтениям: язык, страна и время постинга"
          style="font-size: px"
          @click="dialog1 = true"
          src="https://2.bp.blogspot.com/-wmpjDTTFPOw/VCqpYOshnSI/AAAAAAAAJn4/IxMzk9AnT40/s1600/Principal.jpg"
        />
      </div>
   
   
   
   
   
      <v-dialog v-model="dialog1" width="auto">
    <v-card class="image-car bg-primary">
      <v-card-text>
        <v-card title="" class="bg-primary">
          <v-card-text>
            <div>
              <!--v-select language-->
              <v-select
                class="mySelect"
                clearable
                label="Language"
                :items="language.map((item) => item.name)"
                v-model="selectedLanguageName"
                variant="underlined"
              ></v-select>
              <!--v-select tags-->

              <v-select
                class="mySelect"
                clearable
                label="Tags"
                :items="tags.map((item) => item.name)"
                v-model="selectedTags"
                variant="underlined"
              ></v-select>

              <v-sheet width="300" class="mx-auto">
                <v-form class="fw-bold bg-primary">
                  <!--userName-->
                  <v-text-field
                    v-model="firstName"
                    label="User name"
                  ></v-text-field>
                  <!--userId-->
                  <v-text-field
                    v-model="lastName"
                    label="Chat id"
                  ></v-text-field>
                  <!--channelName-->
                  <v-text-field
                    v-model="channelName"
                    label="Название канала"
                  ></v-text-field>
                </v-form>
              </v-sheet>

              <!--DateTime-->
              <br />
              <br />
              <h1 class="text-center text-white">FAUNA</h1>
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
                <!-- <p>Выбранная дата и время: {{ date }}</p>
                <p>Выбранная дата и время: {{ formatDateTime(date) }}</p>
                <button @click="saveDateTime">Сохранить</button> -->
              </div>
              <br />

              <div v-if="savedData.length > 0">
                <h6 class="text-white">Сохраненные данные:</h6>
                <ul>
                  <li v-for="(data, index) in savedData" :key="index">
                    <p>Language: {{ data.language || "—" }}</p>
                    <p>Tags: {{ data.tags || "—" }}</p>
                    <p>Username: {{ data.username || "—" }}</p>
                   <p>Chat ID: {{ data.chatId || "—" }}</p>
                    <p>Channelname: {{ data.channelname || "—" }}</p>
                    <p>
                      Date and Time posting news:
                      {{ formatDateTime(data.dateTime) || "—" }}
                    </p>
                    <hr />
                  </li>
                </ul>
              </div>

              <v-btn class="mt-2" color="primary" @click="saveData"
                >Просмотр</v-btn
              >

              <v-btn class="mt-2" color="primary" @click="saveDataAndSendPostRequest">
      Oтправить данные
    </v-btn>
              <!-- <dat2/> -->
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
import logo from "../newsLogo.vue";
import hosting from "../posting.vue";
import dat from "../../components/data.vue";
import dat2 from "../../components/data2.vue";
export default {
  components: { dat, dat2, hosting, logo },
  data() {
    return {
      savedData: [],
      date: new Date(),
      // date: new Date().toISOString().substr(0, 10),
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
          name: "STOCKS",
          id: 51,
        },
        {
          name: "FOREX",
          id: 52,
        },
        {
          name: "GOLD",
          id: 53,
        },
        {
          name: "FORBS",
          id: 54,
        },
        {
          name: "COMPANY",
          id: 55,
        },
        {
          name: "APPLE",
          id: 56,
        },
        {
          name: "SEC",
          id: 57,
        },
        {
          name: "ENERGY",
          id: 58,
        },
        {
          name: "TESLA",
          id: 59,
        },
      ],

      language: [
        {
          name: "english",
          id: 14,
        },
        {
          name: "russian",
          id: 52,
        },
        {
          name: "ukraine",
          id: 50,
        },
      ],

      selectedLanguageName: null,
      selectedTags: null,
    };
  },
  watch: {
    selectedLanguageName(newSelectedLanguageName) {
      // Save the ID instead of name in local storage
      const language = this.language.find(
        (c) => c.name === newSelectedLanguageName
      );
      const selectedLanguageId = language ? language.id : null;
      localStorage.setItem("selectedLanguage", selectedLanguageId);
    },
  },
  computed: {
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.rows;
      const end = start + this.rows;
      return this.articles.slice(start, end);
    },
  },

  methods: {
saveDataAndSendPostRequest() {
      // Сначала сохраняем данные
      this.saveData();
    this.sendPostRequest();
    
    
    },
sendPostRequest() {
    
      const dataToPost = {
        language: this.selectedLanguageName,
        tags: this.selectedTags,
        username: this.firstName,
        channelname: this.channelName,
        chatId: this.lastName,
        dateTime: this.date.toISOString(),
      };
      axios.post("YOUR_API_ENDPOINT", dataToPost)
        .then(response => {
          console.log("Ответ от сервера:", response.data);
          
        })
        .catch(error => {
          console.error("Ошибка при отправке POST запроса:", error);
          
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
    saveData() {
      const dataToSave = {
        language: this.selectedLanguageName,
        tags: this.selectedTags,
        username: this.firstName,
        channelname: this.channelName,
        chatId: this.lastName,
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
img {
  width: auto;
  height: 250px;
}
.mt {
  margin-top: 200px;
}

.image-card {
  background-image: url("https://wtop.com/wp-content/uploads/2017/07/world-480x320.jpg");
  position: relative;
}



.mySelect .v-select-list {
 // background-color: rgb(29, 131, 234); /* Черный фон для выпадающего списка */
}

.mySelect .v-list-item {
 // color: white; /* Белый текст для каждого элемента в выпадающем списке */
}

.dp-custom-input {
  // box-shadow: 0 0 6px #1976d2;
  // color: #1976d2;

  // &:hover {
  //   border-color: #1976d2;
  // }
}

.dp-custom-menu {
  //box-shadow: 0 0 6px #f7f8f9;
 
  
}

.dp-custom-cell {
  // border-radius: 50%;
  // box-shadow: 0 0 3px #f7f8f9;
}














li {
  list-style: none;
}

.li-2 {
  border-radius: 5px;
  padding: 5px;
  margin: 1px;
  position: relative;
  left: 20px;
  font-size: 40px;
  list-style-type: none;
  background-image: linear-gradient(to right, #040d1d, #053684);
}
.ul-2 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}








.footer-section {
  flex: 1;
  margin-bottom: 20px; /* Добавим отступ между разделами */
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #030303;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #f39c12;
}

.footer-bottom {
  margin-top: 20px;
  display: flex;
  flex-direction: column; /* Изменяем направление на вертикальное для мобильных устройств */
}



.social-icons a:hover {
  color: #f39c12;
}

@media (max-width: 768px) {
}

.footer {
  @media screen and(max-width: 700px) {
    display: none;
  }
}
.footer-2 {
  @media screen and(max-width: 700px) {
    display: block;
  }
}
.btn-second {
  background-color: rgb(247, 50, 0);
  color: rgb(4, 4, 4);
}
.btn-second:hover {
  color: white;
}
.btn-one {
  background-color: rgb(179, 193, 26);
  color: rgb(6, 5, 5);
}
.btn-one:hover {
  color: white;
}
.btn-three {
  background-color: rgb(72, 159, 246);
  color: rgb(6, 5, 5);
}
.btn-three:hover {
  color: white;
}
</style>
