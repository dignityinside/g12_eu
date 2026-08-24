<script setup>
import MediaBlock from '@components/MediaBlock.vue';
import { language } from '@i18n';
</script>

<template>
  <media-block :title="$t('text.ministry.title')" :content="$t('text.ministry.text')" id="ministry">
    <div class="ministries">
      <div v-for="item in language?.messages[$i18n.locale]?.text?.ministriesList" :key="item.day" class="ministry-day">
        <div class="day">{{ item.day }}</div>

        <div v-for="ministry in item.ministries" :key="ministry.name">
          <div class="item">
            <div class="item__name">{{ ministry.name }}</div>
            <div class="item__time">{{ ministry.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </media-block>
</template>

<style scoped lang="scss">
@import '@assets/scss/main.scss';
.item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: .55rem 0;
  border-bottom: 1px solid rgba($color-primary, .1);
}

.day {
  color: $color-primary;
  font-size: .75rem;
  font-weight: 850;
  letter-spacing: .08em;
  text-transform: uppercase;
  margin-bottom: .4rem;
}

.ministries { display: grid; gap: 1rem; }
.ministry-day { padding: 1.1rem; border-radius: 16px; background: $color-background; }
.item__name { font-weight: 650; }
.item__time { color: $color-primarty-light; font-weight: 800; white-space: nowrap; }

@include breakpoint('s') { .ministries { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@include breakpoint('m') { .ministries { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
</style>
