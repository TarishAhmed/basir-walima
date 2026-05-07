<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useReveal } from '../composables/useReveal'
const { elRef, revealed } = useReveal()

// June 18, 2026 at 11:30 AM (local time — Kerala is IST UTC+5:30)
const weddingDate = new Date('2026-06-18T11:30:00+05:30').getTime()

const now = ref(Date.now())
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const remaining = computed(() => {
  const diff = weddingDate - now.value
  if (diff <= 0) return null
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
})
</script>

<template>
  <section ref="elRef" class="section countdown-section reveal" :class="{ 'is-visible': revealed }">
    <h2 class="countdown-heading">Counting Down To The Big Day</h2>
    <div class="ornament-divider">✦</div>
    <div v-if="remaining" class="timer-grid">
      <div class="timer-unit">
        <span class="timer-value">{{ String(remaining.days).padStart(2, '0') }}</span>
        <span class="timer-label">Days</span>
      </div>
      <span class="timer-sep">:</span>
      <div class="timer-unit">
        <span class="timer-value">{{ String(remaining.hours).padStart(2, '0') }}</span>
        <span class="timer-label">Hours</span>
      </div>
      <span class="timer-sep">:</span>
      <div class="timer-unit">
        <span class="timer-value">{{ String(remaining.minutes).padStart(2, '0') }}</span>
        <span class="timer-label">Minutes</span>
      </div>
      <span class="timer-sep">:</span>
      <div class="timer-unit">
        <span class="timer-value">{{ String(remaining.seconds).padStart(2, '0') }}</span>
        <span class="timer-label">Seconds</span>
      </div>
    </div>
    <p v-else class="celebration-msg">The reception day has arrived! 🌸</p>
  </section>
</template>

<style scoped>
.countdown-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: rgba(22, 5, 12, 0.85);
}

.countdown-heading {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
}

.timer-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.timer-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 72px;
}

.timer-value {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 9vw, 3.5rem);
  font-weight: 300;
  color: var(--cream);
  line-height: 1;
}

.timer-label {
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-top: 0.4rem;
}

.timer-sep {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--gold-dim);
  line-height: 1;
  margin-bottom: 1.4rem;
  opacity: 0.6;
}

.celebration-msg {
  font-family: var(--font-script);
  font-size: 2.2rem;
  color: var(--gold);
}
</style>
