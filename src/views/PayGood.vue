<template>
    <div class="payment-confirmation">
      <h1 class="confirmation-title">Оплата прошла успешно!</h1>
      <p class="confirmation-message">Спасибо за ваш заказ. Ваш платеж успешно обработан.</p>
      <div class="order-details">
        <h2 class="text-black">Детали заказа</h2>
        <!-- Вставьте здесь дополнительные детали вашего заказа, если необходимо -->
      </div>
      <!-- <router-link to="/" class="back-to-home-link">Вернуться на главную страницу</router-link> -->
      <a href="https://t.me/webtg_bot" target="_blank" class="">Вернуться в Telegram-бот</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "PaymentConfirmation",
  };
  </script>
  
  <style scoped>
  .payment-confirmation {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .confirmation-title {
    color: #27ae60;
  }
  
  .confirmation-message {
    color: #333;
  }
  
  .order-details {
    margin-top: 20px;
  }
  
  .back-to-home-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .back-to-home-link:hover {
    background-color: #2980b9;
  }
  </style>