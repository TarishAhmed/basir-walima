<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
const { elRef, revealed } = useReveal()

/*
 * ─── HOW TO CONNECT YOUR GOOGLE FORM ────────────────────────────────
 *  1. Go to https://forms.google.com and create a new form.
 *  2. Add fields: Full Name (short answer), Attending (multiple choice: Yes / No),
 *     Number of Guests (short answer / linear scale).
 *  3. Click "Send" (top right) → choose the "<>" embed icon.
 *  4. Copy the URL that appears inside  src="..."  of the shown <iframe>.
 *  5. Replace the GOOGLE_FORMS_EMBED_URL string below with that URL.
 * ────────────────────────────────────────────────────────────────────
 */
const GOOGLE_FORMS_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfqoQP4sgjlb-cTkV-PwSQOnSqYiifxzAmalVIpbXp4dyXlOA/viewform?embedded=true'

// Fallback "open form" URL (same form, not embedded — replace the same ID)
const GOOGLE_FORMS_OPEN_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfqoQP4sgjlb-cTkV-PwSQOnSqYiifxzAmalVIpbXp4dyXlOA/viewform'
</script>

<template>
  <section ref="elRef" class="section rsvp-section reveal" :class="{ 'is-visible': revealed }">
    <h2 class="section-title">RSVP</h2>
    <div class="ornament-divider">✦</div>

    <p class="rsvp-message">
      We would be honoured by your presence.<br>
      Please let us know if you will be joining us on this blessed occasion.
    </p>

    <!-- ── Google Forms iframe embed ── -->
    <div class="form-container">
      <iframe
        class="form-iframe"
        :src="GOOGLE_FORMS_EMBED_URL"
        title="Reception RSVP Form"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
      >
        Loading form…
      </iframe>

      <!-- Fallback link shown below the iframe -->
      <div class="form-fallback">
        <p class="fallback-hint">Having trouble? Open the form directly:</p>
        <a
          class="form-link"
          :href="GOOGLE_FORMS_OPEN_URL"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open RSVP Form ↗
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rsvp-section {
  padding-top: 5rem;
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

.rsvp-message {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-style: italic;
  color: var(--muted);
  line-height: 1.9;
  max-width: 400px;
  margin: 0 auto 2rem;
}

/* ── Form container ─────────────────────────────────────── */
.form-container {
  width: 100%;
  max-width: 580px;
  margin: 0 auto 2rem;
  border: 1px solid var(--border);
  background: rgba(58, 10, 20, 0.45);
  padding: 4px;
  transition: border-color 0.3s;
  animation: pulse-glow 5s ease-in-out infinite;
}

.form-iframe {
  width: 100%;
  height: 560px;
  display: block;
  border: none;
  background: transparent;
}

/* ── Fallback ───────────────────────────────────────────── */
.form-fallback {
  padding: 1rem 1rem 0.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.fallback-hint {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 300;
  color: var(--muted);
}

.form-link {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1px;
  transition: color 0.2s, border-color 0.2s;
}

.form-link:hover {
  color: var(--gold-light);
  border-color: var(--border-hi);
}

.reception-note {
  font-family: var(--font-script);
  font-size: 1.7rem;
  color: var(--gold);
  opacity: 0.8;
}
</style>
