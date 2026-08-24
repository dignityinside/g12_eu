<script setup>
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();

  // update on change language
  function languageChanged() {
    localStorage.setItem('locale', locale.value);
  }

</script>

<template>
  <select v-model="$i18n.locale" :aria-label="$t('site.description')" @change="languageChanged()">
    <option v-for="(language, index) in $i18n.availableLocales" :key="`language-${index}`" :value="language">
      {{ language.toUpperCase() }}
    </option>
  </select>
</template>

<style scoped lang="scss">
select {
  min-width: 4.25rem;
  padding: .55rem 2rem .55rem .75rem;
  border: 1px solid rgba(255, 255, 255, .15);
  border-radius: 999px;
  appearance: none;
  background-color: rgba(255, 255, 255, .1);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='m1 1 5 5 5-5' fill='none' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right .7rem center;
  background-size: .65rem auto;
  color: #ffffff;
  font-size: .78rem;
  font-weight: 750;
  line-height: 1.2;
  letter-spacing: .06em;
  cursor: pointer;
  transition: background-color .2s ease, border-color .2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, .16);
    border-color: rgba(255, 255, 255, .28);
  }

  &:focus-visible {
    outline: 2px solid #f2b84b;
    outline-offset: 2px;
  }
}

option {
  background: #ffffff;
  color: #17131f;
  font-weight: 600;
  letter-spacing: normal;
}
</style>
