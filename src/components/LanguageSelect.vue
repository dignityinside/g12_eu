<script setup>
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();

function languageChanged() {
  localStorage.setItem('locale', locale.value);
}
</script>

<template>
  <label class="language-select">
    <span class="language-select__value" aria-hidden="true">{{ locale.toUpperCase() }}</span>
    <svg class="language-select__arrow" aria-hidden="true" width="12" height="8" viewBox="0 0 12 8">
      <path d="m1 1 5 5 5-5" />
    </svg>
    <select v-model="locale" :aria-label="$t('site.description')" @change="languageChanged">
      <option v-for="language in availableLocales" :key="language" :value="language">
        {{ language.toUpperCase() }}
      </option>
    </select>
  </label>
</template>

<style scoped lang="scss">
.language-select {
  position: relative;
  display: grid;
  place-items: center;
  min-width: 5.25rem;
  height: 2.4rem;
  padding: 0;
  cursor: pointer;
  transition: background-color .2s ease, border-color .2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, .16);
    border-color: rgba(255, 255, 255, .28);
  }

  &:focus-within {
    outline: 2px solid #f2b84b;
    outline-offset: 2px;
  }
}

.language-select__value {
  color: #ffffff;
  font-size: .78rem;
  font-weight: 750;
  line-height: 1;
  letter-spacing: .06em;
  pointer-events: none;
}

.language-select__arrow {
  position: absolute;
  top: 50%;
  right: .75rem;
  fill: none;
  stroke: #ffffff;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: translateY(-50%);
  pointer-events: none;
}

select {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
  -webkit-text-fill-color: transparent;
  opacity: 0 !important;
  cursor: pointer;
}

option {
  background: #ffffff;
  color: #17131f;
  -webkit-text-fill-color: #17131f;
}
</style>
