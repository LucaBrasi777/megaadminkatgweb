<template>
  <div>
   
    <ul>
      <li v-for="(data, index) in savedData" :key="index">
        <p><strong>Tags:</strong> {{ data.tags ? data.tags.join(', ') : 'N/A' }}</p>
        <p><strong>Channel Name:</strong> {{ data.channelname ? data.channelname : 'N/A' }}</p>
        <p><strong>Date and Time:</strong> {{ data.dateTime ? formatDateTime(data.dateTime) : 'N/A' }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    savedData: Array,
  },
  methods: {
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

      return new Date(dateTime).toLocaleString("ru-RU", options);
    },
  },
};
</script>
