<script setup>
import { ref } from 'vue';
import MediaBlock from '../components/MediaBlock.vue';
import MinistriesBlock from '../components/MinistriesBlock.vue';

const showMap = ref(false);
</script>

<template>
  <main class="landing-page">
    <section class="quick-facts" :aria-label="$t('landing.quickTitle')">
      <article class="quick-fact">
        <span class="quick-fact__number">01</span>
        <div><span>{{ $t('landing.serviceLabel') }}</span><strong>{{ $t('landing.serviceValue') }}</strong></div>
      </article>
      <article class="quick-fact">
        <span class="quick-fact__number">02</span>
        <div><span>{{ $t('landing.locationLabel') }}</span><strong>{{ $t('landing.locationValue') }}</strong></div>
      </article>
      <article class="quick-fact">
        <span class="quick-fact__number">03</span>
        <div><span>{{ $t('landing.languagesLabel') }}</span><strong>{{ $t('landing.languagesValue') }}</strong></div>
      </article>
      <article class="quick-fact">
        <span class="quick-fact__number">04</span>
        <div><span>{{ $t('landing.familiesLabel') }}</span><strong>{{ $t('landing.familiesValue') }}</strong></div>
      </article>
    </section>

    <section id="welcome" class="welcome-section">
      <header class="section-heading">
        <span>{{ $t('landing.expectEyebrow') }}</span>
        <h2>{{ $t('landing.expectTitle') }}</h2>
        <p>{{ $t('landing.expectText') }}</p>
      </header>
      <div class="expectations">
        <article>
          <span>01</span>
          <h3>{{ $t('landing.communityTitle') }}</h3>
          <p>{{ $t('landing.communityText') }}</p>
        </article>
        <article>
          <span>02</span>
          <h3>{{ $t('landing.worshipTitle') }}</h3>
          <p>{{ $t('landing.worshipText') }}</p>
        </article>
        <article>
          <span>03</span>
          <h3>{{ $t('landing.translationTitle') }}</h3>
          <p>{{ $t('landing.translationText') }}</p>
        </article>
      </div>
    </section>

    <ministries-block />

    <media-block
      :title="$t('text.pastor.title')"
      :content="$t('text.pastor.text')"
      image="pastor.jpg"
      :image-width="1155"
      :image-height="1362"
      id="pastor"
    />

    <section id="sermons" class="sermon-section">
      <div>
        <span class="section-eyebrow section-eyebrow--gold">{{ $t('landing.sermonEyebrow') }}</span>
        <h2>{{ $t('text.sermons.title') }}</h2>
        <div class="sermon-section__text" v-html="$t('text.sermons.text')"></div>
      </div>
      <div class="sermon-section__actions">
        <a href="https://www.youtube.com/channel/UCgECrFqV9vn-yxOGARqHoVw" target="_blank" rel="noopener">{{ $t('landing.youtube') }} <span>↗</span></a>
        <a href="https://t.me/NeuesLebenPL" target="_blank" rel="noopener">{{ $t('landing.telegram') }} <span>↗</span></a>
      </div>
    </section>

    <section id="contacts" class="visit-section">
      <span class="section-eyebrow">{{ $t('landing.visitEyebrow') }}</span>
      <h2>{{ $t('landing.visitTitle') }}</h2>
      <p>{{ $t('landing.visitText') }}</p>
      <div class="visit-section__actions">
        <a class="landing-button landing-button--primary" href="https://www.google.com/maps/dir/?api=1&destination=Karlstra%C3%9Fe+7%2C+08523+Plauen" target="_blank" rel="noopener">{{ $t('text.contacts.openRoute') }}</a>
        <a class="landing-button landing-button--secondary" href="tel:+4917624113132">{{ $t('landing.callUs') }}</a>
      </div>
    </section>

    <section class="contact-section">
      <header class="section-heading section-heading--left">
        <span>{{ $t('site.name') }}</span>
        <h2>{{ $t('text.contacts.title') }}</h2>
      </header>
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

      <iframe
        v-else
        class="map"
        allowfullscreen
        loading="lazy"
        :title="$t('text.contacts.title')"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.8888418942242!2d12.133819957783263!3d50.501095282215616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1268a354f79c3%3A0x2b667815f5e3d45d!2sKarlstra%C3%9Fe+7%2C+08523+Plauen!5e0!3m2!1sde!2sde!4v1492103663904"
      />
    </section>

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

.landing-page { position: relative; }
.quick-facts { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .65rem; margin-top: -1.5rem; margin-bottom: clamp(4rem, 8vw, 7rem); padding: .7rem; border: 1px solid rgba($color-primary,.09); border-radius: 24px; background: rgba(255,255,255,.94); box-shadow: 0 24px 65px rgba(41,17,59,.14); backdrop-filter: blur(16px); }
.quick-fact { display: flex; align-items: flex-start; gap: .75rem; min-width: 0; padding: 1rem; border-radius: 17px; background: $color-background; }
.quick-fact__number { display: grid; place-items: center; flex: 0 0 1.9rem; width: 1.9rem; height: 1.9rem; border-radius: 50%; background: rgba($color-secondary,.28); color: $color-primary; font-size: .64rem; font-weight: 900; }
.quick-fact div { min-width: 0; }
.quick-fact div > span { display: block; color: $color-muted; font-size: .7rem; font-weight: 750; letter-spacing: .06em; text-transform: uppercase; }
.quick-fact strong { display: block; margin-top: .22rem; color: $color-primary; font-size: .82rem; line-height: 1.35; }

.welcome-section { padding: 0 0 clamp(4rem,8vw,7rem); scroll-margin-top: 95px; }
.section-heading { max-width: 760px; margin: 0 auto 2.25rem; text-align: center; }
.section-heading > span, .section-eyebrow { color: $color-primarty-light; font-size: .72rem; font-weight: 850; letter-spacing: .13em; text-transform: uppercase; }
.section-heading h2, .visit-section h2 { margin: .65rem 0 1rem; color: $color-primary; font-size: clamp(2rem,5vw,3.35rem); line-height: 1.04; letter-spacing: -.045em; }
.section-heading p { margin: 0; color: $color-muted; font-size: 1.03rem; }
.section-heading--left { margin-inline: 0; text-align: left; }
.expectations { display: grid; gap: 1rem; }
.expectations article { padding: clamp(1.4rem,3vw,2rem); border-top: 3px solid $color-secondary; border-radius: 0 0 20px 20px; background: $color-white; box-shadow: 0 14px 42px rgba(45,20,65,.07); }
.expectations article > span { color: $color-primarty-light; font-size: .68rem; font-weight: 900; letter-spacing: .08em; }
.expectations h3 { margin: 1.3rem 0 .55rem; color: $color-primary; font-size: 1.2rem; }
.expectations p { margin: 0; color: $color-muted; font-size: .92rem; }

.sermon-section { display: grid; gap: 2rem; margin-bottom: clamp(1.25rem,3vw,2.5rem); padding: clamp(1.7rem,5vw,3.5rem); border-radius: 28px; background: linear-gradient(135deg,#2b103f,#4b1d69); color: $color-white; box-shadow: 0 24px 60px rgba(41,16,59,.18); scroll-margin-top: 95px; }
.section-eyebrow--gold { color: $color-secondary; }
.sermon-section h2 { margin: .65rem 0 1rem; font-size: clamp(2rem,5vw,3.2rem); line-height: 1.05; letter-spacing: -.04em; }
.sermon-section__text { max-width: 680px; color: rgba(255,255,255,.7); }
.sermon-section__text :deep(a) { color: $color-secondary; font-weight: 750; }
.sermon-section__actions { display: grid; gap: .7rem; align-content: center; }
.sermon-section__actions a { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem 1.15rem; border: 1px solid rgba(255,255,255,.15); border-radius: 14px; background: rgba(255,255,255,.08); color: $color-white; font-weight: 750; text-decoration: none; transition: background-color .2s ease, transform .2s ease; }
.sermon-section__actions a:hover { background: rgba(255,255,255,.14); transform: translateY(-2px); }

.visit-section { margin-bottom: clamp(1.25rem,3vw,2.5rem); padding: clamp(2rem,6vw,4.5rem); border-radius: 28px; background: linear-gradient(135deg,#f7d98f,$color-secondary); text-align: center; scroll-margin-top: 95px; }
.visit-section h2 { max-width: 760px; margin-inline: auto; }
.visit-section p { max-width: 660px; margin: 0 auto; color: rgba(49,17,67,.72); font-size: 1.03rem; }
.visit-section__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: .75rem; margin-top: 1.6rem; }
.landing-button { display: inline-flex; align-items: center; justify-content: center; padding: .82rem 1.2rem; border-radius: 999px; font-weight: 800; text-decoration: none; }
.landing-button--primary { background: $color-primary; color: $color-white; }
.landing-button--secondary { border: 1px solid rgba($color-primary,.2); background: rgba(255,255,255,.52); color: $color-primary; }

.contact-section { margin-bottom: clamp(1.25rem,3vw,2.5rem); padding: clamp(1.6rem,4vw,3.25rem); border: 1px solid rgba($color-primary,.08); border-radius: 28px; background: $color-white; box-shadow: 0 18px 55px rgba(45,20,65,.07); }
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

@media (min-width: 667px) {
  .expectations { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .contact-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
}

@media (min-width: 800px) {
  .sermon-section { grid-template-columns: 1.45fr .55fr; align-items: center; }
}

@media (min-width: 900px) {
  .quick-facts { grid-template-columns: repeat(4,minmax(0,1fr)); gap: .4rem; }
}

@media (max-width: 420px) {
  .quick-facts { grid-template-columns: 1fr; }
  .visit-section__actions, .map-placeholder__actions { flex-direction: column; }
  .landing-button, .map-button, .route-link { width: 100%; }
}
</style>
