<script setup>
  const props = defineProps({
    title: String,
    content: String,
    image: String,
    id: String,
  })
</script>

<template>
  <h3 :id="id" class="headline">{{ title }}</h3>
  
  <div v-if="image" class="image">
    <div class="content" v-html="content"></div>
    <img :src="`/img/${image}`" alt="" />
  </div>

  <div v-if="!image && content" class="content" v-html="content"></div>

  <div class="slot">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  @import "@assets/scss/main.scss";

  .headline {
    padding: 0;
    margin: 0;
    padding: 0 $spacing-20;
    color: $color-primary;
  }

  .image {
    padding-right: $spacing-20;

    @include breakpoint('s') {
      display: flex;
    }

    img {
      height: 100%;
      max-width: 100%;
      padding: $spacing-20;
    }
  }

  .content {
    padding: $spacing-20;
  }

  .slot {
    padding: 0 $spacing-20 $spacing-20;
  }
</style>
