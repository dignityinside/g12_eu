<script setup>
  import { ref } from 'vue';
  
  const languages = ref(['ru', 'de', 'en']);
</script>

<template>
  <select v-model="$i18n.locale">
    <option v-for="(language, index) in languages" :key="`language-${index}`" :value="language">
      {{ language }}
    </option>
  </select>
</template>

<style scoped>

</style>
