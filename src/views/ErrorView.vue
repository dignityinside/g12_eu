<script setup>
  import MediaBlock from '../components/MediaBlock.vue';
</script>

<template>
  <main>
    <div class="error404">
      <media-block :title="$t('text.error404.title')" :content="$t('text.error404.text')" id="error404" />
    </div>
  </main>
</template>
