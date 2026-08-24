<template>
  <section class="history-section">
    <div class="history-section__intro">
      <span>{{ $t('landing.historyEyebrow') }}</span>
      <strong>2005</strong>
      <h2>{{ $t('landing.historyTitle') }}</h2>
      <p>{{ $t('landing.historyIntro') }}</p>
    </div>

    <div class="history-timeline">
      <article>
        <span>01</span>
        <div><h3>{{ $t('landing.historyBeginningTitle') }}</h3><p>{{ $t('landing.historyBeginningText') }}</p></div>
      </article>
      <article>
        <span>02</span>
        <div><h3>{{ $t('landing.historyTodayTitle') }}</h3><p>{{ $t('landing.historyTodayText') }}</p></div>
      </article>
      <article>
        <span>03</span>
        <div><h3>{{ $t('landing.historyPlauenTitle') }}</h3><p>{{ $t('landing.historyPlauenText') }}</p></div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@assets/scss/main.scss' as *;

.history-section { display: grid; gap: clamp(1.8rem,5vw,4rem); margin-bottom: clamp(1.25rem,3vw,2.5rem); padding: clamp(1.7rem,5vw,3.5rem); border-radius: 28px; background: linear-gradient(135deg,#2b103f,#4b1d69); color: $color-white; box-shadow: 0 24px 60px rgba(41,16,59,.16); }
.history-section__intro > span { color: $color-secondary; font-size: .72rem; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
.history-section__intro > strong { display: block; margin-top: .75rem; color: rgba(242,184,75,.2); font-size: clamp(4.5rem,13vw,8.5rem); font-weight: 900; line-height: .85; letter-spacing: -.075em; }
.history-section h2 { margin: 1.2rem 0 .8rem; font-size: clamp(1.9rem,4vw,2.75rem); line-height: 1.08; letter-spacing: -.04em; }
.history-section__intro p { max-width: 580px; margin: 0; color: rgba(255,255,255,.7); }
.history-timeline { position: relative; display: grid; gap: .65rem; }
.history-timeline::before { position: absolute; top: 1.25rem; bottom: 1.25rem; left: 1.12rem; width: 1px; background: rgba(255,255,255,.15); content: ''; }
.history-timeline article { position: relative; display: grid; grid-template-columns: auto minmax(0,1fr); gap: 1rem; padding: 1rem; border: 1px solid rgba(255,255,255,.1); border-radius: 17px; background: rgba(255,255,255,.07); }
.history-timeline article > span { z-index: 1; display: grid; place-items: center; width: 2.25rem; height: 2.25rem; border-radius: 11px; background: $color-secondary; color: $color-primary; font-size: .65rem; font-weight: 900; }
.history-timeline h3 { margin: 0 0 .35rem; color: $color-white; font-size: .95rem; }
.history-timeline p { margin: 0; color: rgba(255,255,255,.66); font-size: .82rem; line-height: 1.6; }

@include breakpoint('s') {
  .history-section { grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); align-items: center; }
}
</style>
