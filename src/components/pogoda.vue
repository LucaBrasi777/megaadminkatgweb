<template>
    <div class="pogoda">
      <!-- <h1>Weather App</h1> -->
      <div v-if="loading">...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="weather">
        <!-- <h6>{{ weather.name }}, {{ weather.sys.country }}</h6> -->
        <p class="text-white mt-1 pl-2"><small> {{ weather.main.temp }}°C</small></p>
        <!-- <p>Weather: {{ weather.weather[0].description }}</p> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: false,
        error: null,
        weather: null,
      };
    },
    methods: {
      async getWeatherByLocation(latitude, longitude) {
        const apiKey = '08b5dec056effb0ef9edae9038f2d95a';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  
        try {
          this.loading = true;
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          if (response.ok) {
            this.weather = data;
            this.error = null;
          } else {
            this.weather = null;
            this.error = data.message || 'Error fetching weather.';
          }
        } catch (error) {
          console.error('Error fetching weather:', error);
          this.weather = null;
          this.error = 'Unexpected error occurred.';
        } finally {
          this.loading = false;
        }
      },
      async getLocation() {
        try {
          const position = await this.getCurrentPosition();
          this.getWeatherByLocation(position.coords.latitude, position.coords.longitude);
        } catch (error) {
          console.error('Error getting location:', error);
          this.error = 'Unable to determine your location.';
        }
      },
      getCurrentPosition() {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      },
    },
    mounted() {
      this.getLocation();
    },
  };
  </script>
  <style scoped lang="scss">
  .pogoda{
    @media screen and(max-width:400px){
      margin-top:5px
    }
  }
  .pl-2{font-size: 10px;}
  </style>
  