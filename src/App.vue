<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LanguageSelect from './components/LanguageSelect.vue'
import { ref } from 'vue';
  
const isOpen = ref(false);
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

        <div class="burger-icon" :class="isOpen ? 'burger-icon--close' : ''" @click="isOpen = !isOpen">
          <span class="burger-icon__line"></span>   
          <span class="burger-icon__line"></span>
          <span class="burger-icon__line"></span>
        </div>
      </div>

      <nav class="menu" :class="!isOpen ? 'menu--hidden' : ''">
        <language-select class="menu__item menu__item--language" />
        <router-link to="/#welcome" class="menu__item">{{ $t('menu.church') }}</router-link>
        <router-link to="/#pastor" class="menu__item">{{ $t('menu.pastor') }}</router-link>
        <router-link to="/#ministries" class="menu__item">{{ $t('menu.ministries') }}</router-link>
        <router-link to="/#sermons" class="menu__item">{{ $t('menu.sermons') }}</router-link>
        <router-link to="/#contacts" class="menu__item">{{ $t('menu.contacts') }}</router-link>
      </nav>
    </header>

    <img src="./assets/images/header.jpg" :alt="$t('site.name')" class="header__image" />

    <RouterView />

    <nav class="footer menu">
      <a href="https://t.me/NeuesLebenPL" target="_blank" class="menu__item">Telegram</a>
      <a href="https://www.youtube.com/user/g12eu" target="_blank" class="menu__item">YouTube</a>
      <a href="https://www.instagram.com/g12eu/" target="_blank" class="menu__item">Instagram</a>
      <a :href="$i18n.locale === 'ru' ? 'http://imbf.mobi' : 'https://www.bibleserver.com'" target="_blank" class="menu__item">{{ $t('menu.bible') }}</a>
      <a href="http://www.ihopkc.org/prayerroom/" target="_blank" class="menu__item">iHOP</a>
      <router-link to="/imprint" class="menu__item">
        {{ $t('menu.imprint') }}
      </router-link>
    </nav>
  </div>

  <footer class="copyright">
    © 2005-{{ new Date().getFullYear() }} {{ $t('site.copyright') }}<br>{{ $t('site.powered') }}
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

.container {
  background: $color-white;
  max-width: $max-width-100;
  margin: 0 auto;
}

.header {
  display: flex;
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
  justify-content: space-between;
  padding-bottom: $spacing-10;
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

.menu {
  display: flex;
  flex-direction: column;
  
  @include breakpoint('s') {
    flex-direction: row;
    align-items: center;
  }

  a {
    color: $color-white;
    text-decoration: none;
    font-size: $size-15;

    &:hover {
      background: $color-primarty-light;
      border-radius: $spacing-5;
    }
  }

  .menu__item {
    padding: $spacing-5 $spacing-10;
  }

  .menu__item--language {
    background: $color-primarty-light;
    border-radius: $spacing-5;
    border: none;
    color: $color-white;
    padding: calc($spacing-10 - 2px);
    margin-bottom: $spacing-10;

    @include breakpoint('s') {
      margin-right: $spacing-10;
      margin-bottom: 0;
    }
  }
}

.menu--hidden {
  display: none;

  @include breakpoint('s') {
    display: flex;
  }
}

.burger-icon {
   width: $spacing-30;
   border-radius: 4px;
   align-self: center;

   @include breakpoint('s') {
    display: none;
  }

   .burger-icon__line { 
    display: block; 
    height: 2px;
    background: $color-white;
    border-radius: 2px;  
    margin-bottom: 4px;
    transition: 0.5s; 
    transform-origin: center; 
   }
}

.burger-icon--close {
  .burger-icon__line:nth-child(1){
    transform: translateY(-2px) rotate(-45deg);
  }

  .burger-icon__line:nth-child(2){
    opacity: 0;
  }

  .burger-icon__line:nth-child(3){
    transform: translateY(-14px) rotate(45deg);
  }
}

.header__image {
  max-width: calc(100% - $spacing-20);
  border: solid $spacing-10 $color-white;
  border-top: solid $spacing-5 $color-white;
  -webkit-font-smoothing: antialiased;
}

.footer {
  display: flex;
  flex-direction: column;
  padding: $spacing-20;
  background-color: $color-primary;
  border-bottom-left-radius: $spacing-10;
  border-bottom-right-radius: $spacing-10;

  @include breakpoint('s') {
    flex-direction: row;
  }
}

.copyright {
  padding: $spacing-20;
  text-align: center;
}
</style>
