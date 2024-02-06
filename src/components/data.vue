
<template>
  <div>
    <v-select
      class="mySelect"
      clearable
      label="Tags"
      :items="country.map(item => item.name)"
      v-model="selectedCountryName"
      variant="underlined"
    ></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: [
        {
          name: 'STOCKS',
          id: 51,
        },
        {
          name: 'FOREX',
          id: 41,
        },
        {
          name: 'GOLD',
          id: 50,
          
        },
        {
          name: 'FORBS',
          id: 51,
        },
        {
          name: 'COMPANY',
          id: 41,
        },
        {
          name: 'APPLE',
          id: 50,
        },
        {
          name: 'SEC',
          id: 50,
        },
        {
          name: 'ENERGY',
          id: 50,
        },
        {
          name: 'TESLA',
          id: 50,
        },
      ],
      selectedCountryName: null,
    };
  },
  watch: {
    selectedCountryName(newSelectedCountryName) {
      // Save the ID instead of name in local storage
      const country = this.country.find(c => c.name === newSelectedCountryName);
      const selectedCountryId = country ? country.id : null;
      localStorage.setItem('selectedCountry', selectedCountryId);
    },
  },
  mounted() {
    // Load the saved ID from local storage
    const savedSelectedCountryId = localStorage.getItem('selectedCountry');
    if (savedSelectedCountryId) {
      // Convert the ID back to name
      const selectedCountry = this.country.find(c => c.id === parseInt(savedSelectedCountryId));
      this.selectedCountryName = selectedCountry ? selectedCountry.name : null;
    }
  },
};
</script>

<style scoped lang="scss">
.mySelect::v-deep .v-chip {
  background-color: none !important;
}
</style>
