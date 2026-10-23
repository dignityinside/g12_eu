<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const visible = ref(false);

function updateVisibility() {
  visible.value = window.scrollY > 400;
}

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  });
  document.querySelector('.header .brand')?.focus({ preventScroll: true });
}

onMounted(() => {
  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility);
});
</script>

<template>
  <button
    v-show="visible"
    type="button"
    class="back-to-top"
    :aria-label="$t('menu.backToTop')"
    :title="$t('menu.backToTop')"
    @click="backToTop"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 14 6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<style scoped lang="scss">
@use '@assets/scss/main.scss' as *;

.back-to-top {
  position: fixed;
  right: max(1.25rem, env(safe-area-inset-right));
  bottom: calc(1.25rem + env(safe-area-inset-bottom));
  z-index: 9;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid $color-secondary;
  border-radius: 12px;
  background: $color-primary;
  color: $color-secondary;
  box-shadow: 0 6px 20px rgba(31, 11, 48, .2);
  cursor: pointer;
  transition: background-color .2s ease, color .2s ease;
}

.back-to-top:hover { background: $color-secondary; color: $color-primary; }
.back-to-top:focus-visible { outline: 3px solid $color-secondary; outline-offset: 3px; }
:global(body.navigation-open) .back-to-top { visibility: hidden; }
</style>
