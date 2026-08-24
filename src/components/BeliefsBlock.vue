<script setup>
const beliefKeys = [5, 1, 2, 6, 3, 7, 8, 9, 4, 10];
</script>

<template>
  <section class="beliefs-section">
    <header class="beliefs-section__header">
      <div>
        <span class="beliefs-section__eyebrow">{{ $t('landing.beliefsEyebrow') }}</span>
        <h2>{{ $t('landing.beliefsTitle') }}</h2>
      </div>
      <p>{{ $t('landing.beliefsIntro') }}</p>
    </header>

    <div class="beliefs-grid">
      <article v-for="(belief, index) in beliefKeys" :key="belief">
        <span>{{ index < 9 ? `0${index + 1}` : index + 1 }}</span>
        <h3>{{ $t(`landing.belief${belief}Title`) }}</h3>
        <p>{{ $t(`landing.belief${belief}Text`) }}</p>
      </article>
    </div>

    <div class="beliefs-section__affiliation">
      <p>{{ $t('landing.bfpText') }}</p>
      <a href="https://bfp.de/de/" target="_blank" rel="noopener">{{ $t('landing.bfpLink') }} <span aria-hidden="true">↗</span></a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@assets/scss/main.scss' as *;

.beliefs-section { margin-bottom: clamp(1.25rem,3vw,2.5rem); padding: clamp(1.6rem,4vw,3.25rem); border-radius: 28px; background: linear-gradient(145deg,#fff9ec,#f6eddc); box-shadow: 0 18px 55px rgba(45,20,65,.06); }
.beliefs-section__header { display: grid; gap: 1rem; align-items: end; margin-bottom: clamp(1.5rem,4vw,2.3rem); }
.beliefs-section__eyebrow { color: $color-primarty-light; font-size: .72rem; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
.beliefs-section h2 { margin: .55rem 0 0; color: $color-primary; font-size: clamp(1.9rem,4vw,2.75rem); line-height: 1.08; letter-spacing: -.04em; }
.beliefs-section__header > p { max-width: 560px; margin: 0; color: $color-muted; }
.beliefs-grid { display: grid; gap: .8rem; }
.beliefs-grid article { padding: 1.25rem; border: 1px solid rgba($color-primary,.08); border-radius: 18px; background: rgba(255,255,255,.72); }
.beliefs-grid article > span { color: $color-primarty-light; font-size: .66rem; font-weight: 900; letter-spacing: .08em; }
.beliefs-grid h3 { margin: 1rem 0 .45rem; color: $color-primary; font-size: 1rem; }
.beliefs-grid p { margin: 0; color: $color-muted; font-size: .86rem; line-height: 1.65; }
.beliefs-section__affiliation { display: flex; flex-direction: column; align-items: flex-start; gap: .8rem; margin-top: 1rem; padding: 1rem 1.15rem; border-radius: 16px; background: $color-primary; color: $color-white; }
.beliefs-section__affiliation p { margin: 0; font-size: .87rem; }
.beliefs-section__affiliation a { flex: 0 0 auto; color: $color-secondary; font-size: .8rem; font-weight: 850; text-decoration: none; }
.beliefs-section__affiliation a:hover { text-decoration: underline; }
.beliefs-section__affiliation a:focus-visible { outline: 3px solid $color-secondary; outline-offset: 4px; }

@include breakpoint('s') {
  .beliefs-section__header { grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); }
  .beliefs-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .beliefs-section__affiliation { flex-direction: row; align-items: center; justify-content: space-between; }
}

@include breakpoint('l') {
  .beliefs-grid { grid-template-columns: repeat(5,minmax(0,1fr)); }
}
</style>
