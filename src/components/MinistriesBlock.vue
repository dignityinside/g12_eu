<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { language } from '@i18n';

const { locale } = useI18n();
const ministryDays = computed(() => {
  const days = language.messages[locale.value]?.text?.ministriesList ?? [];
  return [...days.filter(day => day.id === 'sunday'), ...days.filter(day => day.id !== 'sunday')];
});
</script>

<template>
  <section id="ministry" class="service-section">
    <header class="service-section__header">
      <div class="service-section__copy">
        <h2>{{ $t('text.ministry.title') }}</h2>
        <p>{{ $t('text.ministry.text') }}</p>
      </div>
    </header>

    <div class="ministries">
      <article
        v-for="item in ministryDays"
        :key="item.day"
        class="ministry-day"
        :class="{ 'ministry-day--featured': item.id === 'sunday' }"
      >
        <div class="ministry-day__header">
          <h3>{{ item.day }}</h3>
        </div>
        <div class="ministry-day__events">
          <div v-for="ministry in item.ministries" :key="ministry.name" class="item">
            <strong class="item__name">{{ ministry.name }}</strong>
            <a v-if="ministry.timeUponRequest" class="item__time item__time--contact" href="mailto:kontakt.neuesleben@gmail.com">{{ ministry.time }}</a>
            <span v-else class="item__time">{{ ministry.time }}</span>
          </div>
        </div>
      </article>
    </div>

    <footer class="service-section__note">
      <span aria-hidden="true">✓</span>
      <div class="service-section__visit">
        <p>{{ $t('landing.scheduleNote') }}</p>
        <address>Karlstraße 5–7, 08523 Plauen</address>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Karlstra%C3%9Fe+7%2C+08523+Plauen" target="_blank" rel="noopener">{{ $t('text.contacts.openRoute') }}</a>
      </div>
    </footer>
  </section>
</template>

<style scoped lang="scss">
@use '@assets/scss/main.scss' as *;
.service-section { margin-bottom: clamp(1.25rem,3vw,2.5rem); padding: clamp(1.6rem,4vw,3.25rem); border-top: 1px solid rgba($color-primary,.16); background: transparent; scroll-margin-top: 100px; }
.service-section__header { display: grid; gap: 1.4rem; align-items: end; margin-bottom: clamp(1.5rem,4vw,2.2rem); }
.service-section__copy { max-width: 680px; }
.service-section h2 { margin: .55rem 0 .8rem; color: $color-primary; font-size: clamp(1.9rem,4vw,2.75rem); line-height: 1.08; letter-spacing: -.04em; }
.service-section__copy p { margin: 0; color: $color-muted; }
.ministries { display: grid; gap: .75rem; }
.ministry-day { min-width: 0; padding: 1.1rem; border: 1px solid rgba($color-primary,.07); border-radius: 12px; background: $color-background; }
.ministry-day__header { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; padding-bottom: .8rem; border-bottom: 1px solid rgba($color-primary,.1); }
.ministry-day__header span { color: rgba($color-primary,.38); font-size: .66rem; font-weight: 900; letter-spacing: .08em; }
.ministry-day h3 { margin: 0; color: $color-primary; font-size: .82rem; font-weight: 850; letter-spacing: .06em; text-transform: uppercase; }
.ministry-day__events { display: grid; gap: .8rem; padding-top: .85rem; }
.item { display: grid; gap: .25rem; }
.item__name { color: $color-black; font-size: .9rem; line-height: 1.35; }
.item__time { width: fit-content; padding: .18rem .5rem; border-radius: 999px; background: rgba($color-primary,.08); color: $color-primarty-light; font-size: .85rem; font-weight: 750; font-variant-numeric: tabular-nums; white-space: nowrap; }
.item__time--contact { max-width: 100%; white-space: normal; overflow-wrap: anywhere; text-decoration: underline; }
.item__time--contact:hover { background: rgba($color-primary,.15); }
.ministry-day--featured { border-color: transparent; background: $color-primary; }
.ministry-day--featured .ministry-day__header { border-color: rgba(255,255,255,.15); }
.ministry-day--featured .ministry-day__header span { color: $color-secondary; }
.ministry-day--featured h3, .ministry-day--featured .item__name { color: $color-white; }
.ministry-day--featured .item__time { background: $color-secondary; color: $color-primary; }
.service-section__note { display: flex; align-items: flex-start; gap: .7rem; margin-top: 1rem; padding: .85rem 1rem; border-radius: 14px; background: rgba($color-secondary,.15); color: $color-primary; }
.service-section__note > span { display: grid; flex: 0 0 auto; place-items: center; width: 1.55rem; height: 1.55rem; border-radius: 50%; background: $color-secondary; font-size: .72rem; font-weight: 900; }
.service-section__visit { display: grid; gap: .35rem; min-width: 0; }
.service-section__visit address { font-style: normal; overflow-wrap: anywhere; font-size: .92rem; }
.service-section__visit a { width: fit-content; padding-block: .5rem; font-size: .9rem; font-weight: 750; }
.service-section__note p { margin: 0; font-size: .82rem; font-weight: 700; }

@include breakpoint('s') {
  .ministries { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .ministry-day--featured { grid-column: 1 / -1; }
}

@include breakpoint('m') {
  .ministries { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .ministry-day { grid-column: span 1; }
  .ministry-day--featured { grid-column: span 2; }
}
</style>
