<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LanguageSelect from './components/LanguageSelect.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <language-select />
        <router-link to="/">{{ $t('menu.church') }}</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
