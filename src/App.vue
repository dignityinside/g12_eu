<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue';
import Navigation from '@components/Navigation.vue'

const mainMenuItems = ref([
  { id: 'welcome', name: 'menu.church' },
  { id: 'pastor', name: 'menu.pastor' },
  { id: 'ministry', name:'menu.ministries' },
  { id: 'sermons', name:'menu.sermons' },
  { id: 'contacts', name:'menu.contacts' },
  { id: 'donate', name:'menu.donate' }
]);

const footerItems = ref([
  { to: 'https://t.me/NeuesLebenPL', name: 'Telegram', external: true, i18n: false },
  { to: 'https://www.youtube.com/user/g12eu', name: 'YouTube', external: true, i18n: false },
  { to: 'https://www.instagram.com/g12eu/', name: 'Instagram', external: true, i18n: false },
  { to: 'http://imbf.mobi', name: 'menu.bible', external: true, hideOnLocale: ['en','de'] },
  { to: 'https://www.bibleserver.com', name: 'menu.bible', external: true, hideOnLocale: ['ru','ua','en'] },
  { to: 'http://www.ihopkc.org/prayerroom/', name: 'iHOP', external: true, i18n: false },
  { to: 'https://gnctv.org', name: 'GNC', external: true, i18n: false, hideOnLocale: ['de','en'] },
  { to: 'https://tbn-tv.com', name: 'TBN', external: true, i18n: false, hideOnLocale: ['de','en'] },
  { to: 'https://www.tbn.org', name: 'TBN', external: true, i18n: false, hideOnLocale: ['ru','ua'] },
  { to: 'https://www.bibeltv.de', name: 'BibelTV', external: true, i18n: false, hideOnLocale: ['ru','ua'] },
  { to: '/imprint', name: 'menu.imprint' },
]);
</script>

<template>
  <div class="container">
    <header class="header">
      <div class="logo-wrapper">
        <a href="/">
          <div class="logo">
            <div class="logo__title">{{ $t('site.name') }}</div>
            <div class="logo__description">{{ $t('site.description') }}</div>
          </div>
        </a>
      </div>

      <navigation :items="mainMenuItems" />
    </header>

    <img src="/img/header.jpg" :alt="$t('site.name')" class="header__image" />

    <RouterView />

    <navigation :is-footer="true" :hide-language-select="true" :hide-back-link="true" :items="footerItems"  />
  </div>

  <footer class="copyright">
    © 2005-{{ new Date().getFullYear() }} {{ $t('site.copyright') }}<br>{{ $t('site.powered') }}
  </footer>
</template>

<style lang="scss">
@import "@assets/scss/main.scss";

.container {
  background: $color-white;
  max-width: $max-width-100;
  margin: 0 auto;
}

.header {
  display: flex;
  flex-direction: row;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: $spacing-10 $spacing-20;
  background-color: $color-primary;
  border-bottom-left-radius: $spacing-10;
  border-bottom-right-radius: $spacing-10;

  @include breakpoint('s') {
    flex-direction: row;
    justify-content: space-between;
  }
}

.logo-wrapper {
  display: flex;
  align-items: center;
  align-self: center;
}

.logo__title {
  font-size: $size-20;
  color: $color-secondary;
  text-transform: uppercase;  
}

.logo__description {
  font-size: $size-15;
  color: $color-white;
}

.header__image {
  max-width: calc(100% - $spacing-20);
  border: solid $spacing-10 $color-white;
  border-top: solid $spacing-5 $color-white;
  -webkit-font-smoothing: antialiased;
}

.copyright {
  padding: $spacing-20;
  text-align: center;
}
</style>
