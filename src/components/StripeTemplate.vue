<template>
  <div>
    <input v-model="paymentAmount" type="number" placeholder="Введите сумму в долларах">
    <div class="div" ref="cardElement"></div>
    <v-btn class="mt-2" color="primary" @click="handlePayment">Оплатить</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stripe: null,
      elements: null,
      cardElement: null,
      paymentAmount: 0,
    };
  },
  mounted() {
    this.loadStripe();
  },
  methods: {
    async loadStripe() {
      const { loadStripe } = await import('@stripe/stripe-js');
      this.stripe = await loadStripe('pk_test_51OazU7CEAUiVgq2v9f36loao1miREJDYbgb7nrsoQkm7wyO7irQqNU0j6STMvM8D5oF2HkSralI1SyfcbfNgRJ9X00vvJkSUO1');

      this.elements = this.stripe.elements();
      this.cardElement = this.elements.create('card');
      this.cardElement.mount(this.$refs.cardElement);
    },
    async handlePayment() {
      const paymentParams = {
        currency: 'USD',
        amount: this.paymentAmount * 100,
      };
      console.log('Оплата обработана с параметрами:', paymentParams);
    }
  },
};
</script>