<script setup>
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router'
import LanguageSelect from '@components/LanguageSelect.vue';

const props = defineProps({
  items: Array,
  hideLanguageSelect:  {
    type:    Boolean,
    default: false
  },
  hideBackLink:  {
    type:    Boolean,
    default: false
  },
  isFooter: {
    type:    Boolean,
    default: false
  },
  hideOnLocale: {
    type:    Array,
  }
})

const isOpen = ref(false);
const route = useRoute();
const path = computed(() => route.path);

function scrollTo(id, offset = document.querySelector('.header').offsetHeight) {
  window.scrollTo({
    behavior: 'smooth',
    top:
      document.getElementById(id).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  })
}
</script>

<template>
  <div class="navigation" :class="isFooter ? 'navigation--footer' : ''">
    <nav class="navigation__wrapper">
      <div class="navigation__toggle" @click="isOpen = !isOpen">
        <font-awesome-icon v-show="!isOpen" icon="fa-solid fa-bars" />
      </div>

      <div class="navigation__items" :class="{ 'navigation__items--hidden': !isOpen }">
        <language-select v-if="!hideLanguageSelect" class="navigation__item navigation__item--language" />

        <template v-for="item in items" :key="item.name">
          <template v-if="item.id">
            <span v-if="path === '/'" @click="scrollTo(item.id)" class="navigation__item">{{ $t(item.name) }}</span>
          </template>

          <template v-else>
            <router-link v-if="(item.to && item.external === undefined)" :to="item.to" class="navigation__item" :class="{ 'navigation__item--active': path === item.to }">
              <template v-if="(item.i18n === undefined)">{{ $t(item.name) }}</template>
              <template v-else>{{ item.name }}</template>
            </router-link>

            <a v-if="(item.to && item.external === true && (item.hideOnLocale && !item.hideOnLocale.includes($i18n.locale) || item.hideOnLocale == undefined))" :href="item.to" ref="nofollow" target="_blank" class="navigation__item">
              <template v-if="(item.i18n === undefined)">{{ $t(item.name) }}</template>
              <template v-else>{{ item.name }}</template>
            </a>
          </template>
        </template>

        <router-link v-if="!hideBackLink && path !== '/'" to="/" class="navigation__item">{{ $t('menu.back') }}</router-link>
      </div>

      <div v-show="isOpen" class="navigation__toggle" @click="isOpen = !isOpen">
        <font-awesome-icon icon="fa-solid fa-x" />
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "@assets/scss/main.scss";

.navigation {
  background-color: $color-primary;
  padding: 0;

  @include breakpoint('s') {
    padding: $spacing-5;
  }
}

.navigation--footer {
  border-bottom-left-radius: $spacing-10;
  border-bottom-right-radius: $spacing-10;
  padding: $spacing-5;

  @include breakpoint('s') {
    padding: 0;
  }
}

.navigation__wrapper {
  max-width: $max-width-100;
  margin: 0 auto;
}

.navigation__toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $color-white;
  padding: $spacing-10;
  font-size: $size-20;

  @include breakpoint('s') {
    display: none;
  }
}

.navigation__items {
  display: flex;
  flex-direction: column;

  @include breakpoint('s') {
    flex-direction: row;
  }

  a {
    color: $color-white;
    text-decoration: none;
    font-size: $size-15;

    &:hover {
      background: $color-primarty-light;
      border-radius: $spacing-5;
      cursor: pointer;
    }
  }

  .navigation__item {
    margin: $spacing-5;
    padding: $spacing-10;
    color: $color-white;

    &:hover {
      background: $color-primarty-light;
      border-radius: $spacing-5;
      cursor: pointer;
    }
  }

  .navigation__item--active {
    background: $color-primarty-light;
    border-radius: $spacing-5;
    cursor: pointer;
  }

  .navigation__item--language {
    background: $color-primarty-light;
    border: none;
    border-radius: $spacing-5;
    color: $color-white;
  }
}

.navigation__items--hidden {
  display: none;

  @include breakpoint('s') {
    display: flex;
  }
}
</style>