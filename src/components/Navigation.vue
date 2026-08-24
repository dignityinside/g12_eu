<script setup>
import { ref, computed, watch, nextTick, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
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
});

const isOpen = ref(false);
const navigationWrapper = ref(null);
const route = useRoute();
const path = computed(() => route.path);
const navigationId = computed(() => props.isFooter ? 'footer-navigation' : 'main-navigation');

watch(path, () => {
  closeMenu();
});

watch(isOpen, async (open) => {
  if (props.isFooter) return;
  document.body.classList.toggle('navigation-open', open);
  if (open) {
    await nextTick();
    navigationWrapper.value?.querySelector('.navigation__items .navigation__item')?.focus();
  }
});

onBeforeUnmount(() => document.body.classList.remove('navigation-open'));

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu(returnFocus = false) {
  isOpen.value = false;
  if (returnFocus) {
    nextTick(() => navigationWrapper.value?.querySelector('.navigation__toggle')?.focus());
  }
}

function handleKeydown(event) {
  if (!isOpen.value) return;
  if (event.key === 'Escape') {
    closeMenu(true);
    return;
  }
  if (event.key !== 'Tab') return;

  const focusable = [...navigationWrapper.value.querySelectorAll('button, a, select')]
    .filter((element) => !element.disabled && element.offsetParent !== null);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function scrollTo(id, offset = document.querySelector('.header').offsetHeight + 10) {
  window.scrollTo({
    behavior: 'smooth',
    top:
      document.getElementById(id).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
  closeMenu();
}
</script>

<template>
  <div class="navigation" :class="isFooter ? 'navigation--footer' : ''">
    <nav ref="navigationWrapper" class="navigation__wrapper" @keydown="handleKeydown">
      <button
        v-if="!isFooter"
        class="navigation__toggle"
        type="button"
        :aria-expanded="isOpen"
        :aria-controls="navigationId"
        :aria-label="isOpen ? $t('menu.closeNavigation') : $t('menu.openNavigation')"
        @click="toggleMenu"
      >
        <font-awesome-icon :icon="isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'" />
      </button>

      <div :id="navigationId" class="navigation__items" :class="{ 'navigation__items--open': isOpen }">
        <language-select v-if="!hideLanguageSelect" class="navigation__item navigation__item--language" />

        <template v-for="item in items" :key="item.name">
          <template v-if="item.id">
            <button v-if="path === '/'" type="button" @click="scrollTo(item.id)" class="navigation__item">{{ $t(item.name) }}</button>
          </template>

          <template v-else>
            <router-link v-if="(item.to && item.external === undefined)" :to="item.to" class="navigation__item" :class="{ 'navigation__item--active': path === item.to }">
              <template v-if="(item.i18n === undefined)">{{ $t(item.name) }}</template>
              <template v-else>{{ item.name }}</template>
            </router-link>

            <a v-if="(item.to && item.external === true && (item.hideOnLocale && !item.hideOnLocale.includes($i18n.locale) || item.hideOnLocale == undefined))" :href="item.to" rel="nofollow noopener" target="_blank" class="navigation__item">
              <template v-if="(item.i18n === undefined)">{{ $t(item.name) }}</template>
              <template v-else>{{ item.name }}</template>
            </a>
          </template>
        </template>

        <router-link v-if="!hideBackLink && path !== '/'" to="/" class="navigation__item">{{ $t('menu.back') }}</router-link>
      </div>

    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "@assets/scss/main.scss" as *;

.navigation { padding: 0; }

.navigation--footer { padding: 0; }

.navigation__wrapper {
  max-width: $max-width-100;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.navigation__toggle {
  display: flex;
  justify-content: center;
  width: 44px;
  height: 44px;
  align-items: center;
  color: $color-white;
  background: transparent;
  border: 0;
  padding: 0;
  border-radius: 12px;
  font-size: $size-20;
  cursor: pointer;
  transition: background .2s ease;
}

.navigation__toggle:hover { background: rgba(255,255,255,.1); }

.navigation__items {
  display: none;
  flex-direction: column;

  .navigation__item {
    margin: 0.1rem;
    padding: .55rem .65rem;
    border: 0;
    background-color: transparent;
    color: rgba(255,255,255,.8);
    text-decoration: none;
    font-size: .83rem;
    font-weight: 650;
    white-space: nowrap;
    transition: color .2s ease, background .2s ease;

    &:hover {
      background-color: rgba(255,255,255,.1);
      color: $color-white;
      border-radius: 999px;
      cursor: pointer;
    }
  }

  .navigation__item--active {
    background: rgba(255,255,255,.12);
    border-radius: 999px;
    cursor: pointer;
  }

  .navigation__item--language {
    background-color: rgba(255,255,255,.1);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 999px;
    color: $color-white;
  }
}

.navigation__items--open { display: flex; }

.navigation--footer .navigation__items { display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-end; }
.navigation--footer .navigation__item { color: rgba(255,255,255,.62); font-size: .78rem; }

@media (max-width: 1023px) {
  .navigation:not(.navigation--footer) .navigation__items {
    position: absolute;
    top: 78px;
    left: 0;
    right: 0;
    max-height: calc(100vh - 78px);
    padding: .85rem $spacing-20 1.25rem;
    background: rgba(35,14,57,.98);
    border-top: 1px solid rgba(255,255,255,.08);
    box-shadow: 0 20px 35px rgba(25,7,38,.28);
    overflow-y: auto;
  }
  .navigation:not(.navigation--footer) .navigation__items .navigation__item {
    width: 100%;
    margin: .08rem 0;
    padding: .75rem .8rem;
    text-align: left;
    border-radius: 10px;
  }
  .navigation--footer .navigation__item { width: auto; }
}

@media (min-width: 1024px) {
  .navigation__toggle { display: none; }
  .navigation:not(.navigation--footer) .navigation__items { display: flex; flex-direction: row; align-items: center; }
}
</style>
