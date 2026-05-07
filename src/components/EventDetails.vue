<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
const { elRef, revealed } = useReveal()
</script>

<template>
  <section ref="elRef" class="section event-section reveal" :class="{ 'is-visible': revealed }">
    <h2 class="section-title">Event Details</h2>
    <div class="ornament-divider">✦</div>

    <div class="details-grid">
      <div class="detail-card reveal reveal-delay-1" :class="{ 'is-visible': revealed }">
        <span class="detail-icon">📅</span>
        <h3 class="detail-label">Date</h3>
        <p class="detail-value">Thursday, June 18, 2026</p>
      </div>
      <div class="detail-card reveal reveal-delay-2" :class="{ 'is-visible': revealed }">
        <span class="detail-icon">🕛</span>
        <h3 class="detail-label">Time</h3>
        <p class="detail-value">11:30 AM</p>
      </div>
      <div class="detail-card reveal reveal-delay-3" :class="{ 'is-visible': revealed }">
        <span class="detail-icon">📍</span>
        <h3 class="detail-label">Venue</h3>
        <p class="detail-value">Janakiram Auditorium<br><span class="detail-sub">Opp: SMTHS School, Chelakkara, Kerala</span></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.event-section {
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

.details-grid {
  display: flex;
  gap: 1px;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.detail-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: rgba(58,10,20,0.55);
  border: 1px solid var(--border);
  padding: 1.75rem 1.5rem;
  flex: 1;
  min-width: 150px;
  max-width: 195px;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.detail-card:hover {
  border-color: var(--border-hi);
  box-shadow: 0 0 20px rgba(212,175,112,0.18);
  transform: translateY(-4px);
}

.detail-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.detail-label {
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}

.detail-value {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--cream);
  line-height: 1.5;
}

.detail-sub {
  font-size: 0.8rem;
  color: var(--muted);
}
</style>
