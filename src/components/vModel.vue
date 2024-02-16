<template>
  <div>
    <input v-model="userName" placeholder="Введите имя" />
    <button @click="sendMessage">Отправить в Telegram</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      botToken: "6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug",
      chatId: "1227459883",
    };
  },
  methods: {
    sendMessage() {
  if (!this.userName) {
    console.error("Имя пользователя не указано.");
    return;
  }

  const telegramEndpoint = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
  const message = `Привет, ${this.userName}! Это сообщение из Vue.js.`;

  const dataToPost = new URLSearchParams();
  dataToPost.append('chat_id', this.chatId);
  dataToPost.append('text', message);

  axios
    .post(telegramEndpoint, dataToPost)
    .then((response) => {
      console.log("Сообщение успешно отправлено в Telegram:", response.data);
    })
    .catch((error) => {
      console.error("Ошибка при отправке сообщения в Telegram:", error);

      if (error.response) {
        // Ошибка с ответом от сервера
        console.error("Данные ответа:", error.response.data);
        console.error("Статус кода:", error.response.status);
        console.error("Заголовки ответа:", error.response.headers);
      } else if (error.request) {
        // Ошибка без ответа от сервера
        console.error("Запрос был сделан, но не получен ответ");
      } else {
        // Ошибка настройки запроса
        console.error("Ошибка настройки запроса:", error.message);
      }
    });
},


  },
};
</script>
