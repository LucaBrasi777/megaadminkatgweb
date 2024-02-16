<template>
  <div>
    <form ref="stripeForm" @submit.prevent="processPayment">
      <vue-stripe-checkout
        :publishable-key="publishableKey"
        :amount="1000"
        currency="USD"
        :ref-name="'stripe'"
        :options="stripeOptions"
      />
      <button type="submit">Оплатить</button>
    </form>
  </div>
</template>

<script>
import VueStripeCheckout from 'vue-stripe-checkout';

export default {
  components: {
    VueStripeCheckout,
  },
  data() {
    return {
      publishableKey: 'sk_test_51OazU7CEAUiVgq2v9f36loao1miREJDYbgb7nrsoQkm7wyO7irQqNU0j6STMvM8D5oF2HkSralI1SyfcbfNgRJ9X00vvJkSUO1',
      stripeOptions: {
        name: 'Ваше название магазина',
        description: 'Описание платежа',
      },
    };
  },
  methods: {
    processPayment() {
      // Возможно, не нужно вызывать ничего в этом методе
      // Оставьте этот метод пустым, если vue-stripe-checkout автоматически обрабатывает платежи
    },
  },
};
</script>

<style scoped>
  /* Ваши стили здесь */
</style>