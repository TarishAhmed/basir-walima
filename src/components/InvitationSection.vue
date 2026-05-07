<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
const { elRef, revealed } = useReveal()
</script>

<template>
  <section ref="elRef" class="section invitation-section reveal" :class="{ 'is-visible': revealed }">
    <p class="blessing-line">In the name of Allah, the Most Gracious, the Most Merciful</p>
    <p class="blessing-sub">With hearts full of gratitude and joy,</p>

    <div class="ornament-divider">✦</div>

    <p class="parents-line">Mr. K Nasir Ahmad &amp; Mrs. Kadeeja PM</p>
    <p class="parents-role">— parents of the groom —</p>
    <p class="invite-text">cordially invite you and your family to grace the auspicious occasion of the</p>

    <p class="ceremony-label">Reception Ceremony</p>

    <p class="couple-full reveal reveal-delay-2" :class="{ 'is-visible': revealed }">
      Basir Ahmad K &amp; Tuba Jaleel M
    </p>
    <p class="bride-parents-line">Daughter of Jaleel Ahmad M &amp; Samseela K</p>

    <div class="ornament-divider">✦</div>

    <blockquote class="quran-verse reveal reveal-delay-3" :class="{ 'is-visible': revealed }">
      <p class="verse-text">"Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous."</p>
      <cite class="verse-ref">— Surah Al-Furqan 25:74</cite>
    </blockquote>
  </section>
</template>

<style scoped>
.invitation-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: rgba(22, 5, 12, 0.85);
}

.blessing-line {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--muted);
  letter-spacing: 0.04em;
  line-height: 1.8;
  margin-bottom: 0.4rem;
}

.blessing-sub {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--muted);
  font-style: italic;
}

.parents-line {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--cream);
  letter-spacing: 0.04em;
  margin-bottom: 0.3rem;
}

.parents-role {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 300;
  color: var(--gold);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
}

.invite-text {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.7;
  max-width: 380px;
  margin: 0 auto 0.6rem;
}

.ceremony-label {
  font-family: var(--font-script);
  font-size: clamp(1.6rem, 5vw, 2rem);
  color: var(--gold);
  margin-bottom: 0.75rem;
}

.couple-full {
  font-family: var(--font-serif);
  font-size: clamp(1.2rem, 4vw, 1.55rem);
  font-style: italic;
  color: var(--gold-light);
  letter-spacing: 0.04em;
  margin-bottom: 0.4rem;
}

.bride-parents-line {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--muted);
  letter-spacing: 0.04em;
}

.quran-verse {
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}

.verse-text {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-style: italic;
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 0.6rem;
}

.verse-ref {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-style: normal;
  color: var(--gold);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
</style>
