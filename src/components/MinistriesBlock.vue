<script setup>
  import { ref } from 'vue';

const ministries = ref([
  { name: 'text.ministries.man', image:"man.jpg" },
  { name: 'text.ministries.pray', image: "worship.jpg" },
  { name: 'text.ministries.woman', image: "woman.jpg" },
  { name: 'text.ministries.consulting', image: "consultations.jpg" },
  { name: 'text.ministries.main', image: "main.jpg" },
  { name: 'text.ministries.children', image: "children.jpg" },
  { name: 'text.ministries.sundaySchool', image: "sundayschool.jpg" },
  { name: 'text.ministries.bibleSchool', image:"leaderschool.jpg" },
  { name: 'text.ministries.internet', image:"internet.jpg" },
]);
</script>

<template>
    <media-block :title="$t('text.ministry.title')" :content="$t('text.ministry.text')">
      <div class="ministries">
        <div v-for="ministry in ministries" :key="ministry.name">
          <div :style="{ backgroundImage: 'url(' + '/img/' + ministry.image + ')' }" class="ministries__item">
            <p class="ministry__name">
              {{ $t(ministry.name) }}
            </p>
          </div>
        </div>
      </div>
    </media-block>
</template>

<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  .ministries {
    display: grid;
    grid-template-rows: repeat(3,minmax(0,1fr));
    grid-auto-flow: row;
    gap: $spacing-15;

    @include breakpoint('s') {
      grid-auto-flow: column;
    }
  }

  .ministries__item {
    height: 10rem;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
  }

  .ministry__name {
    background-color: $color-black;
    opacity: .5;
    color: $color-white;
    padding: $spacing-10;
  }
</style>