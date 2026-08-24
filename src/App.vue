<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import Navigation from '@components/Navigation.vue';

const route = useRoute();
const { t, locale } = useI18n();
const isHome = computed(() => route.path === '/');

const mainMenuItems = ref([
  { id: 'welcome', name: 'menu.church' },
  { id: 'pastor', name: 'menu.pastor' },
  { id: 'ministry', name: 'menu.ministries' },
  { id: 'sermons', name: 'menu.sermons' },
  { id: 'contacts', name: 'menu.contacts' },
  { id: 'donate', name: 'menu.donate', accent: true },
]);

const footerItems = ref([
  { to: 'https://t.me/NeuesLebenPL', name: 'Telegram', external: true, i18n: false },
  { to: 'https://www.youtube.com/channel/UCgECrFqV9vn-yxOGARqHoVw', name: 'YouTube', external: true, i18n: false },
  { to: 'https://www.instagram.com/neuesleben.church/', name: 'Instagram', external: true, i18n: false },
  { to: 'http://imbf.mobi', name: 'menu.bible', external: true, hideOnLocale: ['en', 'de'] },
  { to: 'https://www.bibleserver.com', name: 'menu.bible', external: true, hideOnLocale: ['ru', 'uk', 'en'] },
  { to: 'http://www.ihopkc.org/prayerroom/', name: 'iHOP', external: true, i18n: false },
  { to: 'https://gnctv.org', name: 'GNC', external: true, i18n: false, hideOnLocale: ['de', 'en'] },
  { to: 'https://tbn-tv.com', name: 'TBN', external: true, i18n: false, hideOnLocale: ['de', 'en'] },
  { to: 'https://www.tbn.org', name: 'TBN', external: true, i18n: false, hideOnLocale: ['ru', 'uk'] },
  { to: 'https://www.bibeltv.de', name: 'BibelTV', external: true, i18n: false, hideOnLocale: ['ru', 'uk', 'en'] },
  { to: '/imprint', name: 'menu.imprint' },
]);

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

watchEffect(() => {
  const routeTitle = route.name === 'imprint'
    ? t('menu.imprint')
    : route.name === 'Error404'
      ? t('text.error404.title')
      : t('site.name');
  const fullTitle = route.name === 'home' ? `${routeTitle} · Plauen` : `${routeTitle} · ${t('site.name')}`;
  const description = t('site.metaDescription');
  const canonicalUrl = `https://g12.eu${route.path}`;

  document.documentElement.lang = locale.value;
  document.title = fullTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', fullTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale.value);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
});
</script>

<template>
  <a class="skip-link" href="#main-content">{{ $t('menu.skipContent') }}</a>

  <header class="header">
    <div class="header__inner">
      <router-link to="/" class="brand" aria-label="Neues Leben Startseite">
        <span class="brand__mark">NL</span>
        <span class="brand__copy">
          <span class="brand__title">{{ $t('site.name') }}</span>
          <span class="brand__description">{{ $t('site.description') }}</span>
        </span>
      </router-link>
      <navigation :items="mainMenuItems" />
    </div>
  </header>

  <div v-if="isHome" class="hero">
    <picture class="hero__media">
      <source srcset="/img/header.avif" type="image/avif" />
      <source srcset="/img/header.webp" type="image/webp" />
      <img src="/img/header.jpg" :alt="$t('site.name')" class="hero__image" width="1707" height="921" fetchpriority="high" decoding="async" />
    </picture>
    <div class="hero__shade"></div>
    <div class="hero__content">
      <div class="hero__eyebrow">Plauen · {{ $t('site.description') }}</div>
      <h1>{{ $t('text.welcome.title') }}</h1>
      <p>{{ $t('text.ministries.sundayLong') }}</p>
      <div class="hero__actions">
        <button class="button button--primary" @click="scrollToSection('contacts')">{{ $t('menu.contacts') }}</button>
        <button class="button button--ghost" @click="scrollToSection('ministry')">{{ $t('menu.ministries') }}</button>
      </div>
    </div>
  </div>

  <div id="main-content" class="page-shell" :class="{ 'page-shell--subpage': !isHome }" tabindex="-1">
    <RouterView />
  </div>

  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <span class="brand__mark brand__mark--small">NL</span>
        <div><strong>{{ $t('site.name') }}</strong><div>Karlstr. 5–7 · 08523 Plauen</div></div>
      </div>
      <navigation :is-footer="true" :hide-language-select="true" :hide-back-link="true" :items="footerItems" />
    </div>
    <div class="copyright">© 2005-{{ new Date().getFullYear() }} {{ $t('site.copyright') }} · {{ $t('site.powered') }}</div>
  </footer>
</template>

<style lang="scss">
@use '@assets/scss/main.scss' as *;

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(31, 11, 48, .96);
  border-bottom: 1px solid rgba(255,255,255,.1);
  box-shadow: 0 8px 28px rgba(21, 7, 33, .16);
  backdrop-filter: blur(18px) saturate(130%);
}
.skip-link { position: fixed; top: .75rem; left: .75rem; z-index: 100; padding: .7rem 1rem; border-radius: 10px; background: $color-secondary; color: #281137; font-weight: 800; text-decoration: none; transform: translateY(-150%); transition: transform .2s ease; }
.skip-link:focus { transform: translateY(0); }
.header__inner {
  width: 100%;
  max-width: $max-width-100;
  min-height: 72px;
  margin: 0 auto;
  padding: 0 $spacing-20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.brand { display: flex; align-items: center; gap: .72rem; min-width: 0; color: $color-white; text-decoration: none; flex-shrink: 1; }
.brand__mark { width: 42px; height: 42px; display: grid; place-items: center; flex: 0 0 42px; border: 1px solid rgba(255,255,255,.35); border-radius: 14px; background: linear-gradient(145deg, #ffd878, $color-secondary); color: #301048; font-size: .78rem; font-weight: 900; letter-spacing: -.03em; box-shadow: 0 8px 24px rgba(242,184,75,.2), inset 0 1px 0 rgba(255,255,255,.65); }
.brand__mark--small { width: 38px; height: 38px; flex-basis: 38px; }
.brand__copy { display: flex; min-width: 0; flex-direction: column; line-height: 1.1; }
.brand__title { overflow: hidden; font-size: .88rem; font-weight: 850; letter-spacing: .075em; text-overflow: ellipsis; white-space: nowrap; }
.brand__description { margin-top: .28rem; overflow: hidden; color: rgba(255,255,255,.56); font-size: .62rem; font-weight: 650; text-transform: uppercase; letter-spacing: .11em; text-overflow: ellipsis; white-space: nowrap; }

.hero { position: relative; min-height: min(680px, calc(100svh - 72px)); display: flex; align-items: flex-end; overflow: hidden; background: $color-primary; }
.hero__media { position: absolute; inset: 0; }
.hero__image { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center 48%; }
.hero__shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(28,10,45,.92) 0%, rgba(43,16,68,.66) 45%, rgba(26,10,39,.15) 100%), linear-gradient(0deg, rgba(26,10,39,.6), transparent 55%); }
.hero__content { position: relative; width: 100%; max-width: $max-width-100; margin: 0 auto; padding: clamp(4rem, 10vw, 8rem) $spacing-20; color: $color-white; }
.hero__eyebrow { margin-bottom: 1.1rem; color: $color-secondary; font-size: .82rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.hero h1 { max-width: 760px; margin: 0; font-size: clamp(2.6rem, 7vw, 5.5rem); line-height: .98; letter-spacing: -.055em; }
.hero p { margin: 1.5rem 0 0; max-width: 560px; color: rgba(255,255,255,.82); font-size: clamp(1rem, 2vw, 1.2rem); }
.hero__actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 2rem; }
.button { border: 0; border-radius: 999px; padding: .85rem 1.3rem; font-weight: 750; cursor: pointer; transition: transform .2s ease, background .2s ease; }
.button:hover { transform: translateY(-2px); }
.button--primary { background: $color-secondary; color: #2d123e; }
.button--ghost { background: rgba(255,255,255,.12); color: $color-white; border: 1px solid rgba(255,255,255,.3); backdrop-filter: blur(8px); }

.page-shell { max-width: $max-width-100; margin: 0 auto; padding: clamp(3rem, 7vw, 6rem) $spacing-20; }
.page-shell--subpage { min-height: 65vh; padding-top: 4rem; }
.footer { background: #21102e; color: rgba(255,255,255,.72); }
.footer__inner { max-width: $max-width-100; margin: 0 auto; padding: 2.5rem $spacing-20 1.5rem; display: flex; flex-direction: column; gap: 2rem; }
.footer__brand { display: flex; align-items: center; gap: .9rem; font-size: .86rem; }
.footer__brand strong { display: block; color: white; letter-spacing: .06em; }
.copyright { border-top: 1px solid rgba(255,255,255,.1); padding: 1.2rem $spacing-20; text-align: center; font-size: .78rem; color: rgba(255,255,255,.48); }

@include breakpoint('s') { .footer__inner { flex-direction: row; align-items: center; justify-content: space-between; } }
@media (min-width: 1024px) {
  .header__inner { min-height: 76px; }
  .brand { gap: .8rem; flex-shrink: 0; }
  .brand__title { font-size: .93rem; }
  .brand__description { font-size: .64rem; }
  .hero { min-height: min(680px, calc(100svh - 76px)); }
}
@media (max-width: 360px) { .brand__description { display: none; } .hero { min-height: 590px; } }
</style>
