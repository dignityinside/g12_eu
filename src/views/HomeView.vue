<script setup>
  import MediaBlock from '../components/MediaBlock.vue';
  import MinistriesBlock from '../components/MinistriesBlock.vue';
</script>

<template>
  <main>
    <div class="home">
      <media-block :title="$t('text.welcome.title')" :content="$t('text.welcome.text')" id="welcome" />
      
      <media-block :title="$t('text.pastor.title')" :content="$t('text.pastor.text')" image="pastor.jpg" id="pastor" />

      <media-block :title="$t('text.ministry.title')" :content="$t('text.ministry.text')" id="ministry">
        <ministries-block />
      </media-block>

      <media-block :title="$t('text.sermons.title')" :content="$t('text.sermons.text')" id="sermons" />

      <media-block :title="$t('text.contacts.title')" id="contacts">
        <p><strong>{{ $t('text.ministries.address') }}:</strong></p>
        <p>Germany, 08523 Plauen, Karlstr. 5-7, Gemeinde Neues Leben e.V.</p>
        <p>{{ $t('text.ministries.sundayLong') }}</p>
        <p><strong>{{ $t('text.address') }}</strong></p>
        <p>Germany, 08523 Plauen, Karlstr. 5-7, Gemeinde Neues Leben e.V.</p>
        <p>{{ $t('text.phone') }} +4917624113132, +4917661548530</p>
        <p>E-mail: info@g12.eu</p>

        <iframe
          allowfullscreen
          height="450"
          style="width: 100%; border: none;"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.8888418942242!2d12.133819957783263!3d50.501095282215616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1268a354f79c3%3A0x2b667815f5e3d45d!2sKarlstra%C3%9Fe+7%2C+08523+Plauen!5e0!3m2!1sde!2sde!4v1492103663904" />
      </media-block>

      <media-block :title="$t('text.donate.title')" id="donate">
        <p>
          {{ $t('site.donation.receiver') }}<br>
          {{ $t('site.donation.iban') }}<br>
          {{ $t('site.donation.bic') }}<br>
          {{ $t('site.donation.bank') }}<br>
          {{ $t('site.donation.purpose') }}
        </p>
      </media-block>
    </div>
  </main>
</template>
