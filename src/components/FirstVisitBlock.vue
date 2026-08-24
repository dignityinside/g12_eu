<script setup>
const questions = [
  'duration',
  'expectations',
  'children',
  'parking',
  'accessibility',
  'language',
  'registration',
  'everyone',
  'preparation',
];
</script>

<template>
  <section class="first-visit-section" aria-labelledby="first-visit-title">
    <header class="first-visit-section__header">
      <div>
        <span>{{ $t('landing.firstVisitEyebrow') }}</span>
        <h2 id="first-visit-title">{{ $t('landing.firstVisitTitle') }}</h2>
      </div>
      <p>{{ $t('landing.firstVisitIntro') }}</p>
    </header>

    <div class="first-visit-faq">
      <details v-for="(question, index) in questions" :key="question">
        <summary>
          <span>0{{ index + 1 }}</span>
          <strong>{{ $t(`landing.firstVisit.${question}Title`) }}</strong>
          <span class="first-visit-faq__icon" aria-hidden="true">+</span>
        </summary>
        <p>{{ $t(`landing.firstVisit.${question}Text`) }}</p>
      </details>
    </div>

    <footer class="first-visit-section__footer">
      <p>{{ $t('landing.firstVisitQuestions') }}</p>
      <div>
        <a class="first-visit-section__contact" href="mailto:info@g12.eu">{{ $t('landing.contactUs') }}</a>
        <a class="first-visit-section__route" href="https://www.google.com/maps/dir/?api=1&destination=Karlstra%C3%9Fe+7%2C+08523+Plauen" target="_blank" rel="noopener">{{ $t('text.contacts.openRoute') }} ↗</a>
      </div>
    </footer>
  </section>
</template>

<style scoped lang="scss">
@use '@assets/scss/main.scss' as *;

.first-visit-section { margin-bottom: clamp(1.25rem,3vw,2.5rem); padding: clamp(1.6rem,4vw,3.25rem); border-radius: 28px; background: $color-primary; color: $color-white; box-shadow: 0 22px 58px rgba(41,16,59,.16); scroll-margin-top: 100px; }
.first-visit-section__header { display: grid; gap: 1rem; align-items: end; margin-bottom: clamp(1.5rem,4vw,2.3rem); }
.first-visit-section__header span { color: $color-secondary; font-size: .72rem; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
.first-visit-section h2 { margin: .55rem 0 0; font-size: clamp(1.9rem,4vw,2.75rem); line-height: 1.08; letter-spacing: -.04em; }
.first-visit-section__header > p { max-width: 560px; margin: 0; color: rgba(255,255,255,.72); }
.first-visit-faq { display: grid; gap: .65rem; }
.first-visit-faq details { border: 1px solid rgba(255,255,255,.1); border-radius: 16px; background: rgba(255,255,255,.07); }
.first-visit-faq summary { display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: .85rem; min-height: 64px; padding: .85rem 1rem; cursor: pointer; list-style: none; }
.first-visit-faq summary::-webkit-details-marker { display: none; }
.first-visit-faq summary > span:first-child { color: $color-secondary; font-size: .66rem; font-weight: 900; letter-spacing: .08em; }
.first-visit-faq summary strong { color: $color-white; font-size: .92rem; line-height: 1.4; }
.first-visit-faq__icon { display: grid; place-items: center; width: 1.8rem; height: 1.8rem; border-radius: 50%; background: rgba(255,255,255,.1); color: $color-secondary; font-size: 1.2rem; transition: transform .2s ease, background-color .2s ease; }
.first-visit-faq details[open] .first-visit-faq__icon { background: $color-secondary; color: $color-primary; transform: rotate(45deg); }
.first-visit-faq details > p { margin: 0; padding: 0 1rem 1rem 3rem; color: rgba(255,255,255,.7); font-size: .86rem; line-height: 1.65; }
.first-visit-faq summary:focus-visible { outline: 3px solid $color-secondary; outline-offset: 3px; border-radius: 16px; }
.first-visit-section__footer { display: flex; flex-direction: column; align-items: flex-start; gap: 1rem; margin-top: 1rem; padding: 1rem 1.15rem; border-radius: 16px; background: rgba(255,255,255,.08); }
.first-visit-section__footer p { margin: 0; color: rgba(255,255,255,.78); font-size: .87rem; }
.first-visit-section__footer > div { display: flex; flex-wrap: wrap; gap: .55rem; }
.first-visit-section__footer a { display: inline-flex; align-items: center; justify-content: center; min-height: 42px; padding: .65rem .9rem; border-radius: 999px; font-size: .78rem; font-weight: 850; text-decoration: none; }
.first-visit-section__contact { background: $color-secondary; color: $color-primary; }
.first-visit-section__route { border: 1px solid rgba(255,255,255,.2); color: $color-white; }
.first-visit-section__footer a:focus-visible { outline: 3px solid $color-secondary; outline-offset: 3px; }

@include breakpoint('s') {
  .first-visit-section__header { grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); }
  .first-visit-faq { grid-template-columns: repeat(2,minmax(0,1fr)); align-items: start; }
  .first-visit-section__footer { flex-direction: row; align-items: center; justify-content: space-between; }
}
</style>
