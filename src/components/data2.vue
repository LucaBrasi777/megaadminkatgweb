

<!-- <template>
  <VueDatePicker v-model="date" :enable-time-picker="true" />
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());
</script> -->


<!-- <template>
  <div>
    <VueDatePicker v-model="selectedDate" :enable-time-picker="true" />
    <p>Выбранная дата и время: {{ selectedDate }}</p>
    <button @click="saveDateTime">Сохранить</button>

    <v-btn
                
                class="mt-2 span-tag bg-primary text-white"
               
              >
            SEND
    </v-btn>

</div>
</template> -->

<!-- <script setup>
import { ref } from 'vue';

const selectedDate = ref(new Date());

const saveDateTime = () => {
  // Ваш код для сохранения выбранной даты и времени
  console.log('Выбранная дата и время:', selectedDate.value);
};
</script> -->

<!-- <template>
  <div>
    <VueDatePicker 
    menu-class-name="dp-custom-menu"
    input-class-name="dp-custom-input"
    :state="true"
    :offset="0"
    dark 
    v-model="selectedDate" 
    :enable-time-picker="true"
     />
    <p>Выбранная дата и время постинга: {{ selectedDate }}</p>
    <button @click="saveDateTime">Сохранить</button>
<br/><br/><br/>
    <v-btn class="mt-2 span-tag bg-primary text-white" @click="sendData">Oтправлять</v-btn>
  </div>
</template>







<script setup>
import { ref } from 'vue';
const dark = ref(false);
const selectedDate = ref(new Date());

const saveDateTime = () => {
  // Ваш код для сохранения выбранной даты и времени
  console.log('Выбранная дата и время:', selectedDate.value);
};

const sendData = async () => {
  try {
    const response = await fetch('https://api-epicnews404.azurewebsites.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dateTime: selectedDate.value.toISOString(),
      }),
    });

    if (response.ok) {
      console.log('Данные успешно отправлены');
    } else {
      console.error('Ошибка при отправке данных');
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
};
</script>


 -->

 <!-- <template>
  <VueDatePicker 
  calendar-cell-class-name="dp-custom-cell" 
  menu-class-name="dp-custom-menu"
  dark v-model="date" 
  input-class-name="dp-custom-input" 
  
  teleport-center

 
  />
  <p>Выбранная дата и время постинга: {{ date }}</p>
    <button @click="saveDateTime">Сохранить</button>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());


const saveDateTime = () => {
  
  console.log('Выбранная дата и время:', date.value);
};
</script>

<style lang="scss">
.dp-custom-input {
box-shadow: 0 0 6px #1976d2;
color: #1976d2;

&:hover {
  border-color: #1976d2;
}
}
.dp-custom-menu {
  box-shadow: 0 0 6px #f7f8f9;
  @media screen and (max-width:330px ){
  width: 200px;}
}
.dp-custom-cell {
  border-radius: 50%;
}
</style> -->
<template>
  <div>
    <VueDatePicker 
      calendar-cell-class-name="dp-custom-cell" 
      menu-class-name="dp-custom-menu"
      dark 
      v-model="date" 
      input-class-name="dp-custom-input" 
      teleport-center
      :enable-time-picker="true" />
    <p>Выбранная дата и время: {{ date }}</p>
    <button @click="saveDateTime">Сохранить</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    saveDateTime() {
      console.log('Выбранная дата и время:', this.date);
    }
  }
};
</script>

<style lang="scss">
.dp-custom-input {
  box-shadow: 0 0 6px #1976d2;
  color: #1976d2;

  &:hover {
    border-color: #1976d2;
  }
}

.dp-custom-menu {
  box-shadow: 0 0 6px #f7f8f9;
  
  @media screen and (max-width: 330px) {
    width: 200px;
  }
}

.dp-custom-cell {
  border-radius: 50%;
}
</style>
