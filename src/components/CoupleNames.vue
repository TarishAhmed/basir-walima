<template>
  <section class="section couple-section">
    <h1 class="groom-name">Basir Ahmad K</h1>
    <p class="ampersand">&amp;</p>
    <h1 class="bride-name">Tuba Jaleel M</h1>
    <div class="ornament-divider">✦</div>
    <p class="bride-parents">Jaleel Ahmad M &amp; Samseela K</p>
  </section>
</template>

<style scoped>
.couple-section {
  padding-top: 1rem;
  padding-bottom: 1.5rem;
}

.groom-name,
.bride-name {
  font-family: 'Luxurious Script', cursive;
  font-size: clamp(3.2rem, 12vw, 4.0rem);
  font-weight: 400;
  color: var(--charcoal);
  line-height: 1.2;
  letter-spacing: 0.01em;
}

.ampersand {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.6rem;
  color: var(--gold);
  margin: 0.25rem 0;
}

.bride-parents {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--charcoal-light);
  letter-spacing: 0.04em;
  margin-top: 0.25rem;
}
</style>
