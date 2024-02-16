<template>
    <div class="payment-failure">
      <h1 class="failure-title">Произошла ошибка!</h1>
      <p class="failure-message">Оплата не прошла успешно. Пожалуйста, повторите попытку или свяжитесь с поддержкой.</p>
      <div class="order-details">
        <h2 class="text-black">Детали заказа</h2>
        <!-- Вставьте здесь дополнительные детали вашего заказа, если необходимо -->
      </div>
      <router-link to="/" class="back-to-home-link">Вернуться на главную страницу</router-link>
      <router-link to="/" class="back-to-home-link">Вернуться bot</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "PaymentFailure",
  };
  </script>
  
  <style scoped>
  .payment-failure {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .failure-title {
    color: #e74c3c;
  }
  
  .failure-message {
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