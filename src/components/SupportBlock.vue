<template>
  <section class="support-section">
    <div class="support-section__copy">
      <span>{{ $t('landing.supportEyebrow') }}</span>
      <h2>{{ $t('landing.supportTitle') }}</h2>
      <p>{{ $t('landing.supportText') }}</p>
      <small>{{ $t('landing.supportPrivacy') }}</small>
    </div>

    <div class="support-section__actions">
      <a href="mailto:info@g12.eu">
        <span class="support-section__number">01</span>
        <span><strong>{{ $t('landing.prayerRequest') }}</strong><small>info@g12.eu</small></span>
        <span aria-hidden="true">↗</span>
      </a>
      <a href="tel:+4917624113132">
        <span class="support-section__number">02</span>
        <span><strong>{{ $t('landing.personalTalk') }}</strong><small>+49 176 241 13 132</small></span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@assets/scss/main.scss' as *;

.support-section { display: grid; gap: clamp(1.5rem,4vw,3rem); align-items: center; margin-bottom: clamp(1.25rem,3vw,2.5rem); padding: clamp(1.7rem,5vw,3.5rem); border-radius: 28px; background: $color-white; box-shadow: 0 18px 55px rgba(45,20,65,.07); }
.support-section__copy > span { color: $color-primarty-light; font-size: .72rem; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
.support-section h2 { max-width: 620px; margin: .55rem 0 .85rem; color: $color-primary; font-size: clamp(1.9rem,4vw,2.75rem); line-height: 1.08; letter-spacing: -.04em; }
.support-section__copy > p { max-width: 620px; margin: 0; color: $color-muted; }
.support-section__copy > small { display: block; margin-top: 1rem; color: $color-primarty-light; font-size: .76rem; font-weight: 750; }
.support-section__actions { display: grid; gap: .7rem; }
.support-section__actions a { display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: .85rem; padding: .9rem; border: 1px solid rgba($color-primary,.1); border-radius: 16px; background: $color-background; color: $color-primary; text-decoration: none; transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease; }
.support-section__actions a:hover { border-color: rgba($color-primary,.25); box-shadow: 0 10px 28px rgba(45,20,65,.08); transform: translateY(-2px); }
.support-section__actions a:focus-visible { outline: 3px solid $color-secondary; outline-offset: 3px; }
.support-section__number { display: grid; place-items: center; width: 2.2rem; height: 2.2rem; border-radius: 11px; background: rgba($color-secondary,.28); font-size: .65rem; font-weight: 900; }
.support-section__actions a > span:nth-child(2) { display: grid; min-width: 0; }
.support-section__actions strong { font-size: .86rem; }
.support-section__actions small { overflow: hidden; color: $color-muted; font-size: .72rem; text-overflow: ellipsis; white-space: nowrap; }

@include breakpoint('s') {
  .support-section { grid-template-columns: minmax(0,1.2fr) minmax(270px,.8fr); }
}
</style>
