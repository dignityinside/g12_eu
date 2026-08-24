<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
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
const activeId = ref(null);
const navigationWrapper = ref(null);
const route = useRoute();
const path = computed(() => route.path);
const navigationId = computed(() => props.isFooter ? 'footer-navigation' : 'main-navigation');

let sectionObserver;

watch(path, async (newPath) => {
  closeMenu();
  activeId.value = null;
  sectionObserver?.disconnect();
  if (newPath === '/') {
    await nextTick();
    observeSections();
  }
});

watch(isOpen, async (open) => {
  if (props.isFooter) return;
  document.body.classList.toggle('navigation-open', open);
  if (open) {
    await nextTick();
    navigationWrapper.value?.querySelector('.navigation__items button.navigation__item, .navigation__items a.navigation__item')?.focus();
  }
});

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsideClick);
  observeSections();
});

onBeforeUnmount(() => {
  document.body.classList.remove('navigation-open');
  document.removeEventListener('pointerdown', handleOutsideClick);
  sectionObserver?.disconnect();
});

function observeSections() {
  if (props.isFooter || path.value !== '/') return;
  const sections = props.items.filter((item) => item.id).map((item) => document.getElementById(item.id)).filter(Boolean);
  sectionObserver?.disconnect();
  sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]) activeId.value = visible[0].target.id;
  }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .1, .25, .5] });
  sections.forEach((section) => sectionObserver.observe(section));
}

function handleOutsideClick(event) {
  if (isOpen.value && !navigationWrapper.value?.contains(event.target)) closeMenu();
}

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
  activeId.value = id;
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
        <language-select v-if="!hideLanguageSelect" class="navigation__item navigation__item--language" @change="closeMenu" />

        <template v-for="item in items" :key="item.name">
          <template v-if="item.id">
            <button v-if="path === '/'" type="button" @click="scrollTo(item.id)" class="navigation__item" :class="{ 'navigation__item--accent': item.accent, 'navigation__item--active': activeId === item.id }">{{ $t(item.name) }}</button>
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

.navigation { flex-shrink: 0; padding: 0; }

.navigation--footer { padding: 0; }

.navigation__wrapper {
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
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
  padding: 0;
  border-radius: 14px;
  font-size: 1.05rem;
  cursor: pointer;
  transition: background .2s ease;
}

.navigation__toggle:hover { background: rgba(255,255,255,.15); }
.navigation__toggle[aria-expanded='true'] { border-color: $color-secondary; background: $color-secondary; color: $color-primary; }

.navigation__items {
  display: none;
  flex-direction: column;

  .navigation__item {
    margin: 0;
    padding: .58rem .72rem;
    border: 0;
    background-color: transparent;
    color: rgba(255,255,255,.8);
    text-decoration: none;
    border-radius: 999px;
    font-size: .8rem;
    font-weight: 700;
    white-space: nowrap;
    transition: color .2s ease, background-color .2s ease, transform .2s ease;

    &:hover {
      background-color: rgba(255,255,255,.1);
      color: $color-white;
      transform: translateY(-1px);
      cursor: pointer;
    }
  }

  .navigation__item--active {
    background: rgba(255,255,255,.12);
    border-radius: 999px;
    cursor: pointer;
  }

  .navigation__item--accent {
    padding-inline: .9rem;
    background: $color-secondary;
    color: #311143;
    box-shadow: 0 5px 16px rgba($color-secondary, .18);

    &:hover {
      background-color: #ffd16d;
      color: #25102f;
    }
  }

  .navigation__item--language {
    align-self: center;
    display: grid;
    place-items: center;
    min-width: 5.75rem;
    height: 2.4rem;
    padding: 0;
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
    position: fixed;
    top: 80px;
    right: 1rem;
    display: flex;
    width: min(360px, calc(100vw - 2rem));
    max-height: calc(100svh - 96px);
    padding: .75rem;
    background: rgba(31,11,48,.985);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 18px;
    box-shadow: 0 24px 60px rgba(17,5,28,.48), inset 0 1px 0 rgba(255,255,255,.05);
    backdrop-filter: blur(20px);
    overflow-y: auto;
    overscroll-behavior: contain;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-8px) scale(.985);
    transform-origin: top right;
    transition: opacity .18s ease, transform .18s ease, visibility .18s ease;
  }
  .navigation:not(.navigation--footer) .navigation__items--open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0) scale(1);
    box-shadow: 0 0 0 100vmax rgba(17,5,28,.38), 0 24px 60px rgba(17,5,28,.48), inset 0 1px 0 rgba(255,255,255,.05);
  }
  .navigation:not(.navigation--footer) .navigation__items .navigation__item {
    width: 100%;
    margin: 0;
    padding: .82rem .9rem;
    text-align: left;
    border-radius: 11px;
    font-size: .9rem;
    transform: none;
  }
  .navigation:not(.navigation--footer) .navigation__items .navigation__item:hover {
    transform: none;
  }
  .navigation:not(.navigation--footer) .navigation__items .navigation__item--active {
    padding-left: .75rem;
    border-left: 3px solid $color-secondary;
    background: rgba(255,255,255,.1);
    color: $color-white;
  }
  .navigation:not(.navigation--footer) .navigation__items .navigation__item--language {
    order: 2;
    grid-template-columns: minmax(0,1fr) auto;
    place-items: center stretch;
    width: 100%;
    height: 2.75rem;
    margin-top: .45rem;
    padding: 0 .9rem;
    border-top: 1px solid rgba(255,255,255,.06);
    background: rgba(255,255,255,.08);
  }
  .navigation:not(.navigation--footer) .navigation__item--language :deep(.language-select__label) {
    display: block;
    color: rgba(255,255,255,.66);
    font-size: .76rem;
    font-weight: 700;
  }
  .navigation:not(.navigation--footer) .navigation__item--language :deep(.language-select__current) {
    justify-self: end;
    margin-right: .65rem;
  }
  .navigation:not(.navigation--footer) .navigation__items .navigation__item--accent {
    margin-top: .35rem;
    text-align: center;
  }
  .navigation--footer .navigation__item { width: auto; }
}

@media (max-width: 480px) {
  .navigation:not(.navigation--footer) .navigation__items {
    top: 76px;
    right: .65rem;
    width: calc(100vw - 1.3rem);
    max-height: calc(100svh - 88px);
  }
}

@media (min-width: 1024px) {
  .navigation__toggle { display: none; }
  .navigation:not(.navigation--footer) .navigation__items {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .08rem;
  }
}
</style>
