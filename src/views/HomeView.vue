<script setup>
import { ref } from 'vue';
import MediaBlock from '../components/MediaBlock.vue';
import MinistriesBlock from '../components/MinistriesBlock.vue';

const showMap = ref(false);
</script>

<template>
  <main>
    <media-block :title="$t('text.welcome.title')" :content="$t('text.welcome.text')" id="welcome" />
    <media-block :title="$t('text.pastor.title')" :content="$t('text.pastor.text')" image="pastor.jpg" :image-width="330" :image-height="389" id="pastor" />
    <ministries-block />
    <media-block :title="$t('text.sermons.title')" :content="$t('text.sermons.text')" id="sermons" />

    <media-block :title="$t('text.contacts.title')" id="contacts">
      <div class="contact-grid">
        <div class="contact-card">
          <span class="contact-card__icon">01</span>
          <strong>{{ $t('text.ministries.address') }}</strong>
          <p>Karlstr. 5–7<br />08523 Plauen, Germany</p>
          <p>{{ $t('text.ministries.sundayLong') }}</p>
        </div>
        <div class="contact-card">
          <span class="contact-card__icon">02</span>
          <strong>{{ $t('text.address') }}</strong>
          <p>Karlstr. 5–7<br />08523 Plauen, Germany</p>
        </div>
        <div class="contact-card">
          <span class="contact-card__icon">03</span>
          <strong>{{ $t('menu.contacts') }}</strong>
          <p><a href="tel:+4917624113132">+49 176 241 13 132</a><br /><a href="tel:+4917661548530">+49 176 615 48 530</a></p>
          <a href="mailto:info@g12.eu">info@g12.eu</a>
        </div>
      </div>

      <div v-if="!showMap" class="map-placeholder">
        <p>{{ $t('text.contacts.mapHint') }}</p>
        <div class="map-placeholder__actions">
          <button type="button" class="map-button" @click="showMap = true">{{ $t('text.contacts.showMap') }}</button>
          <a class="route-link" href="https://www.google.com/maps/dir/?api=1&destination=Karlstra%C3%9Fe+7%2C+08523+Plauen" target="_blank" rel="noopener">{{ $t('text.contacts.openRoute') }}</a>
        </div>
      </div>

      <iframe v-else
        class="map"
        allowfullscreen
        loading="lazy"
        :title="$t('text.contacts.title')"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.8888418942242!2d12.133819957783263!3d50.501095282215616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1268a354f79c3%3A0x2b667815f5e3d45d!2sKarlstra%C3%9Fe+7%2C+08523+Plauen!5e0!3m2!1sde!2sde!4v1492103663904"
      />
    </media-block>

    <media-block :title="$t('text.donate.title')" id="donate">
      <div class="donation">
        <div>{{ $t('site.donation.receiver') }}</div>
        <div>{{ $t('site.donation.iban') }}</div>
        <div>{{ $t('site.donation.bic') }}</div>
        <div>{{ $t('site.donation.bank') }}</div>
        <div>{{ $t('site.donation.purpose') }}</div>
      </div>
    </media-block>
  </main>
</template>

<style scoped lang="scss">
@use '@assets/scss/main.scss' as *;

.contact-grid { display: grid; gap: .8rem; }
.contact-card { padding: 1.25rem; border-radius: 18px; background: $color-background; overflow: hidden; }
.contact-card__icon { display: inline-grid; place-items: center; width: 2rem; height: 2rem; margin-bottom: .8rem; border-radius: 50%; background: rgba($color-secondary,.32); color: $color-primary; font-size: .7rem; font-weight: 900; }
.contact-card strong { display: block; color: $color-primary; }
.contact-card p { color: $color-muted; font-size: .92rem; }
.contact-card a { font-weight: 750; }
.map { display: block; width: 100%; height: 420px; margin-top: 1rem; border: 0; border-radius: 20px; filter: saturate(.78) contrast(.96); }
.map-placeholder { display: grid; place-items: center; min-height: 280px; margin-top: 1rem; padding: 2rem; border-radius: 20px; background: linear-gradient(135deg, rgba($color-primary,.09), rgba($color-secondary,.18)); text-align: center; }
.map-placeholder p { max-width: 470px; color: $color-muted; }
.map-placeholder__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: .75rem; }
.map-button, .route-link { display: inline-flex; align-items: center; justify-content: center; padding: .75rem 1.1rem; border-radius: 999px; font-weight: 800; text-decoration: none; cursor: pointer; }
.map-button { border: 0; background: $color-primary; color: $color-white; }
.route-link { border: 1px solid rgba($color-primary,.2); background: rgba(255,255,255,.7); color: $color-primary; }
.donation { display: grid; gap: .55rem; padding: 1.25rem; border-radius: 18px; background: $color-background; color: $color-muted; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .9rem; overflow-wrap: anywhere; }

@include breakpoint('s') { .contact-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
</style>
