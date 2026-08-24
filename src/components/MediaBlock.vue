<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  content: String,
  image: String,
  id: String,
  isPageTitle: Boolean,
  imageWidth: Number,
  imageHeight: Number,
});

const imageBase = computed(() => props.image?.replace(/\.[^.]+$/, ''));
</script>

<template>
  <section :id="id" class="section" :class="{ 'section--image': image }">
    <div class="section__copy">
      <div class="section__label">{{ $t('site.name') }}</div>
      <component :is="isPageTitle ? 'h1' : 'h2'" class="headline">{{ title }}</component>
      <div v-if="content" class="content" v-html="content"></div>
      <div class="slot"><slot /></div>
    </div>
    <div v-if="image" class="image-wrap">
      <picture>
        <source :srcset="`/img/${imageBase}.avif`" type="image/avif" />
        <source :srcset="`/img/${imageBase}.webp`" type="image/webp" />
        <img :src="`/img/${image}`" :alt="title" :width="imageWidth" :height="imageHeight" loading="lazy" decoding="async" />
      </picture>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@assets/scss/main.scss" as *;

.section {
  margin-bottom: clamp(1.25rem, 3vw, 2.5rem);
  padding: clamp(1.6rem, 4vw, 3.25rem);
  border: 1px solid rgba($color-primary, .08);
  border-radius: 28px;
  background: rgba(255,255,255,.86);
  box-shadow: 0 18px 55px rgba(45, 20, 65, .07);
  scroll-margin-top: 100px;
}

.section__label { margin-bottom: .55rem; color: $color-primarty-light; font-size: .72rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.headline { margin: 0; color: $color-primary; font-size: clamp(1.75rem, 4vw, 2.65rem); line-height: 1.08; letter-spacing: -.035em; }
.content { max-width: 760px; margin-top: 1.25rem; color: $color-muted; }
.content :deep(p:first-child) { margin-top: 0; }
.content :deep(a) { font-weight: 700; }
.slot:not(:empty) { margin-top: 1.4rem; }
.slot :deep(p) { margin: .45rem 0; }

.section--image { display: grid; gap: 2rem; padding: 0; overflow: hidden; }
.section--image .section__copy { padding: clamp(1.6rem, 4vw, 3.25rem); }
.image-wrap { min-height: 360px; }
.image-wrap picture { display: block; width: 100%; height: 100%; }
.image-wrap img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center top; }

@include breakpoint('s') {
  .section--image { grid-template-columns: 1.15fr .85fr; align-items: stretch; }
}
</style>
