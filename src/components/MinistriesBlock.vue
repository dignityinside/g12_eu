<script setup>
import MediaBlock from '@components/MediaBlock.vue';
import { language } from '@i18n';
</script>

<template>
  <media-block :title="$t('text.ministry.title')" :content="$t('text.ministry.text')" id="ministry">
    <div class="ministries">
      <div v-for="item in language?.messages[$i18n.locale]?.text?.ministriesList">
        <div class="day">{{ item.day }}</div>

        <div v-for="ministry in item.ministries">
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
  border-bottom: dotted 1px $color-grey;
}

.day {
  font-weight: bold;
  margin-top: $spacing-20;
  margin-bottom: $spacing-20;
}
</style>
