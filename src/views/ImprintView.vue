<script setup>
import MediaBlock from '../components/MediaBlock.vue';
</script>

<template>
  <main>
    <div class="imprint">
      <media-block :title="$t('menu.imprint')" id="imprint" is-page-title>
        <p class="imprint__updated">Stand: August 2026</p>

        <section>
          <h2>Angaben gemäß § 5 DDG und § 18 MStV</h2>
          <address>
            <strong>Gemeinde Neues Leben e.V.</strong><br>
            Karlstraße 5–7<br>
            08523 Plauen<br>
            Deutschland
          </address>

          <p>
            Vertreten durch den Vorstand<br>
            Ansprechpartner: Vjaceslav Schilling
          </p>

          <p>
            Vereinsregister: Amtsgericht Chemnitz<br>
            Mitglied im Bund Freikirchlicher Pfingstgemeinden KdöR (BFP)
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4917624113132">+49 176 241 13 132</a><br>
            Telefon: <a href="tel:+4917661548530">+49 176 615 48 530</a><br>
            E-Mail: <a href="mailto:info@g12.eu">info@g12.eu</a>
          </p>
        </section>

        <section>
          <h2>Verantwortung für Inhalte</h2>
          <p>Wir erstellen und pflegen die Inhalte dieser Website mit größtmöglicher Sorgfalt. Eine Gewähr für die Vollständigkeit, Richtigkeit und jederzeitige Aktualität der bereitgestellten Informationen können wir dennoch nicht übernehmen. Gesetzliche Verpflichtungen zur Entfernung oder Sperrung von Informationen bleiben unberührt. Wenn uns eine konkrete Rechtsverletzung bekannt wird, entfernen wir die betreffenden Inhalte unverzüglich.</p>
        </section>

        <section>
          <h2>Externe Links</h2>
          <p>Diese Website enthält Links zu externen Websites, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren für uns keine Rechtsverstöße erkennbar. Wenn uns eine Rechtsverletzung bekannt wird, entfernen wir den betreffenden Link unverzüglich.</p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>Die von uns erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der gesetzlichen Grenzen des Urheberrechts bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers. Soweit Inhalte nicht von uns erstellt wurden, beachten wir die Rechte Dritter und kennzeichnen solche Inhalte entsprechend. Hinweise auf mögliche Urheberrechtsverletzungen nehmen wir unter der oben genannten E-Mail-Adresse entgegen.</p>
        </section>

        <section>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>

      </media-block>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '@assets/scss/main.scss' as *;

.imprint { max-width: 900px; margin: 0 auto; }
.imprint__updated { width: fit-content; margin: 0 0 1.5rem; padding: .35rem .65rem; border-radius: 999px; background: rgba($color-secondary,.2); color: $color-primary; font-size: .76rem; font-weight: 800; }
.imprint section + section { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba($color-primary,.1); }
.imprint h2 { margin: 0 0 .75rem; color: $color-primary; font-size: clamp(1.15rem,3vw,1.45rem); line-height: 1.25; }
.imprint p { color: $color-muted; }
.imprint address { color: $color-muted; font-style: normal; }
.imprint address strong { color: $color-primary; }
.imprint a { font-weight: 750; }
</style>
