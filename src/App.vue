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
        <div class="logo">
          <div class="logo__title">{{ $t('title') }}</div>
          <div class="logo__description">{{ $t('subtitle') }}</div>
        </div>

        <div class="burger-icon" :class="isOpen ? 'burger-icon--close' : ''" @click="isOpen = !isOpen">
          <span class="burger-icon__line"></span>   
          <span class="burger-icon__line"></span>
          <span class="burger-icon__line"></span>
        </div>
      </div>

      <nav class="menu" :class="!isOpen ? 'menu--hidden' : ''">
        <language-select class="menu__item menu__item--language" />
        <router-link to="/" class="menu__item">{{ $t('menu.church') }}</router-link>
      </nav>
    </header>

    <RouterView />
  </div>
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
</style>
