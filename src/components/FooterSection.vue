<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
const { elRef, revealed } = useReveal()
</script>

<template>
  <footer ref="elRef" class="section footer-section reveal" :class="{ 'is-visible': revealed }">
    <p class="dua-arabic" lang="ar">بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</p>
    <p class="dua-transliteration">"Barakallahu lakuma wa baraka alaykuma wa jama'a baynakuma fi khayr"</p>
    <div class="ornament-divider">✦</div>
    <p class="couple-footer">Basir &amp; Tuba</p>
    <p class="year-footer">2026</p>
  </footer>
</template>

<style scoped>
.footer-section {
  padding-top: 4rem;
  padding-bottom: 5rem;
  background: linear-gradient(180deg, transparent 0%, rgba(26,4,10,0.7) 100%);
}

.dua-arabic {
  font-family: 'Scheherazade New', serif;
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  line-height: 2;
  color: var(--gold);
  direction: rtl;
  max-width: 500px;
  margin: 0 auto 0.75rem;
}

.dua-transliteration {
  font-family: var(--font-serif);
  font-size: 0.85rem;
  font-style: italic;
  color: var(--muted);
  max-width: 460px;
  margin: 0 auto;
  line-height: 1.7;
}

.couple-footer {
  font-family: var(--font-script);
  font-size: 2rem;
  color: var(--gold-light);
  margin-bottom: 0.25rem;
}

.year-footer {
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  color: var(--muted);
}
</style>
