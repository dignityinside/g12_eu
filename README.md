# g12eu

Die Website der Gemeinde Neues Leben nutzt Astro und erzeugt statische HTML-Seiten. Vue, Vue Router und Vue I18n werden nicht mehr benötigt.

## Entwicklung

Node.js 22.23.4 oder neuer verwenden.

```sh
npm install
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

## Seiten und Sprachen

Wie bei Spieldock besitzt jede Sprache eigene URLs. Für `de`, `en`, `ru`, `uk` und `be` entstehen eine Startseite unter `/<sprache>/` und ein Impressum unter `/<sprache>/imprint/`. Die Texte stehen in `src/i18n/messages/`. `ua.js` enthält die ukrainischen Texte für den Sprachcode `uk`.

`/` und die bisherige URL `/imprint/` leiten zur gespeicherten oder zur Browsersprache weiter. Ohne JavaScript öffnen sie die deutsche Seite. Bestehende Abschnittsanker bleiben erhalten. Der Sprachschalter speichert die Auswahl, wechselt zur entsprechenden Seite und übernimmt den Abschnittsanker.

`src/layouts/BaseLayout.astro` enthält das gemeinsame Layout und die Metadaten. `src/components/` enthält die Astro-Komponenten. `src/scripts/site.js` steuert das mobile Menü, die Sprachwahl, die erst nach einem Klick geladene Karte, die Pastor-Biografie und das Kopieren der IBAN.

## Veröffentlichung

```sh
npm run build
npm run deploy
```

`npm run deploy` erstellt über `predeploy` zuerst einen aktuellen Build und veröffentlicht `dist` über `gh-pages`. Die Option `--nojekyll` verhindert, dass GitHub Pages den `_astro`-Ordner durch Jekyll herausfiltert. In GitHub Pages den Branch `gh-pages`, dessen Wurzelverzeichnis und die Domain `neuesleben.church` konfigurieren. Der Build übernimmt `public/CNAME` und erzeugt eine eigene `404.html`.

Für Nginx enthält `nginx/site.conf` die Konfiguration für statische Seiten und echte 404-Antworten. Eine Veröffentlichung oder Änderung am laufenden Server erfolgt nicht durch den Build.
