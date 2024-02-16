<template>
    <div>
      <h2>Order History</h2>
    <YourComponent :savedData="savedData" v-if="showHistory" />
    <button @click="showHistory = !showHistory">Показать/Скрыть историю</button>
  </div>
    
  </template>
  
  <script>
  import YourComponent from "@/components/saveData.vue"; // Убедитесь, что путь верный
  
  export default {
    components: { YourComponent },
    data() {
      return {
        showHistory: false,
        savedData: [] // Передайте сохраненные данные из родительского компонента или получите их из хранилища
      };
    }
  };
  </script>
  