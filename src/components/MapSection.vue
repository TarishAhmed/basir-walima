<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
const { elRef, revealed } = useReveal()
</script>

<template>
  <section ref="elRef" class="section map-section reveal" :class="{ 'is-visible': revealed }">
    <h2 class="section-title">Venue</h2>
    <div class="ornament-divider">✦</div>
    <div class="map-wrapper">
      <iframe
        title="Janakiram Auditorium, Chelakkara, Kerala"
        src="https://maps.google.com/maps?q=Janakiram+Auditorium+Chelakkara+Kerala&output=embed"
        width="100%"
        height="300"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>
    <div class="venue-footer">
      <p class="venue-text">📍 Janakiram Auditorium, Opp: SMTHS School, Chelakkara, Kerala</p>
      <a
        class="directions-link"
        href="https://www.google.com/maps/search/?api=1&query=Janakiram+Auditorium+Chelakkara+Kerala"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Directions ↗
      </a>
    </div>
  </section>
</template>

<style scoped>
.map-section {
  padding-bottom: 5rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
}

.map-wrapper {
  overflow: hidden;
  border: 1px solid var(--border);
  margin-top: 1rem;
  transition: border-color 0.3s;
}

.map-wrapper:hover {
  border-color: var(--border-hi);
}

.venue-footer {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.venue-text {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--muted);
  letter-spacing: 0.03em;
}

.directions-link {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  text-decoration: none;
  border: 1px solid var(--border);
  padding: 0.6rem 1.5rem;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.directions-link:hover {
  border-color: var(--border-hi);
  background: rgba(212,175,112,0.1);
  color: var(--cream);
}
</style>
