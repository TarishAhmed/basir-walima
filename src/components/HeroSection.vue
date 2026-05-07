<script setup lang="ts">
const scrollDown = () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
}
</script>

<template>
  <section class="hero-section">

    <!-- Top-right floral corner -->
    <svg class="floral-corner floral-tr" viewBox="0 0 220 265" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="rgba(212,175,112,0.55)" stroke-width="1.2">
        <!-- Stem -->
        <path d="M200 10 C170 40 140 80 110 130 C90 160 75 190 65 230 C52 245 35 255 20 262"/>
        <!-- Left branch -->
        <path d="M155 60 C135 45 110 48 90 60"/>
        <!-- Right branch -->
        <path d="M175 35 C185 20 200 18 215 22"/>
      </g>
      <!-- Tulip bloom top-right -->
      <g fill="rgba(180,60,70,0.65)" stroke="rgba(212,175,112,0.5)" stroke-width="0.8">
        <ellipse cx="200" cy="22" rx="9" ry="14" transform="rotate(-20,200,22)"/>
        <ellipse cx="213" cy="18" rx="7" ry="12" transform="rotate(10,213,18)"/>
        <ellipse cx="188" cy="18" rx="7" ry="12" transform="rotate(-40,188,18)"/>
      </g>
      <!-- Small side bloom -->
      <g fill="rgba(160,50,60,0.55)" stroke="rgba(212,175,112,0.4)" stroke-width="0.8">
        <ellipse cx="88" cy="63" rx="7" ry="11" transform="rotate(-60,88,63)"/>
        <ellipse cx="98" cy="57" rx="6" ry="10" transform="rotate(-30,98,57)"/>
        <ellipse cx="78" cy="60" rx="5" ry="9" transform="rotate(-80,78,60)"/>
      </g>
      <!-- Leaves -->
      <g fill="rgba(50,100,50,0.45)" stroke="rgba(100,160,80,0.35)" stroke-width="0.7">
        <path d="M165 52 C150 38 130 42 125 58 C140 55 158 50 165 52Z"/>
        <path d="M145 75 C130 90 130 110 145 115 C142 100 140 82 145 75Z"/>
      </g>
    </svg>

    <!-- Bottom-left floral corner -->
    <svg class="floral-corner floral-bl" viewBox="0 -25 220 265" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="rgba(212,175,112,0.55)" stroke-width="1.2">
        <path d="M20 230 C50 200 80 160 110 110 C130 80 145 50 155 10 C165 -8 185 -18 205 -22"/>
        <path d="M65 180 C85 195 110 192 130 180"/>
        <path d="M45 205 C35 220 20 222 5 218"/>
      </g>
      <!-- Bloom bottom-left -->
      <g fill="rgba(180,60,70,0.65)" stroke="rgba(212,175,112,0.5)" stroke-width="0.8">
        <ellipse cx="20" cy="218" rx="9" ry="14" transform="rotate(20,20,218)"/>
        <ellipse cx="7" cy="222" rx="7" ry="12" transform="rotate(-10,7,222)"/>
        <ellipse cx="32" cy="222" rx="7" ry="12" transform="rotate(40,32,222)"/>
      </g>
      <!-- Side bloom -->
      <g fill="rgba(160,50,60,0.55)" stroke="rgba(212,175,112,0.4)" stroke-width="0.8">
        <ellipse cx="132" cy="177" rx="7" ry="11" transform="rotate(60,132,177)"/>
        <ellipse cx="122" cy="183" rx="6" ry="10" transform="rotate(30,122,183)"/>
        <ellipse cx="142" cy="180" rx="5" ry="9" transform="rotate(80,142,180)"/>
      </g>
      <!-- Leaves -->
      <g fill="rgba(50,100,50,0.45)" stroke="rgba(100,160,80,0.35)" stroke-width="0.7">
        <path d="M55 188 C70 202 90 198 95 182 C80 185 62 190 55 188Z"/>
        <path d="M75 165 C90 150 90 130 75 125 C78 140 80 158 75 165Z"/>
      </g>
    </svg>

    <!-- Oval ornate frame for names -->
    <div class="oval-frame">
      <div class="oval-inner">
        <p class="bismillah" lang="ar">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <div class="names-block">
          <h1 class="groom-name">Basir Ahmad K</h1>
          <p class="ampersand">&amp;</p>
          <h1 class="bride-name">Tuba Jaleel M</h1>
        </div>
        <p class="event-label">RECEPTION CEREMONY</p>
      </div>
    </div>

    <button class="scroll-caret" @click="scrollDown" aria-label="Scroll down">&#8964;</button>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  position: relative;
  z-index: 1;
  text-align: center;
  border-top: none !important;
  overflow: hidden;
}

/* ── Floral SVG corners ─────────────────────────────────── */
.floral-corner {
  position: absolute;
  width: clamp(160px, 33vw, 460px);
  height: auto;
  pointer-events: none;
}

.floral-tr {
  top: 8px;
  right: 8px;
}

.floral-bl {
  bottom: 8px;
  left: 8px;
}

/* ── Oval frame ─────────────────────────────────────────── */
.oval-frame {
  position: relative;
  width: min(88%, 520px);
  padding: 3px;
  border-radius: 50% / 38%;
  background: linear-gradient(
    145deg,
    rgba(212,175,112,0.7) 0%,
    rgba(180,100,80,0.25) 35%,
    rgba(212,175,112,0.7) 65%,
    rgba(180,100,80,0.25) 100%
  );
  animation: pulse-glow 4s ease-in-out infinite;
}

.oval-inner {
  border-radius: 50% / 38%;
  background: radial-gradient(ellipse at center, rgba(58,10,20,0.92) 60%, rgba(26,4,10,0.98) 100%);
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

/* ── Bismillah ──────────────────────────────────────────── */
.bismillah {
  font-family: 'Scheherazade New', serif;
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  line-height: 1.6;
  color: var(--gold);
  direction: rtl;
  margin-bottom: 1.5rem;
}

/* ── Names ──────────────────────────────────────────────── */
.names-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.groom-name,
.bride-name {
  font-family: var(--font-script);
  font-size: clamp(2.8rem, 11vw, 5rem);
  font-weight: 400;
  line-height: 1.2;
  /* Gold shimmer gradient animation */
  background: linear-gradient(
    90deg,
    var(--gold) 0%,
    var(--gold-light) 30%,
    #fff8e0 50%,
    var(--gold-light) 70%,
    var(--gold) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s linear infinite;
  padding: 0 14px;
}

.ampersand {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 2rem;
  color: var(--gold);
  -webkit-text-fill-color: var(--gold);
  margin: 0.3rem 0;
  animation: none;
}

.event-label {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.35em;
  color: var(--gold);
  margin-top: 1.75rem;
}

/* ── Scroll chevron ────────────────────────────────────── */
.scroll-caret {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  color: var(--gold);
  font-size: 2.2rem;
  cursor: pointer;
  opacity: 0.65;
  animation: bounce 2.2s ease-in-out infinite;
  padding: 0.5rem;
  line-height: 1;
}

.scroll-caret:hover { opacity: 1; }

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(10px); }
}

@media (max-width: 600px) {
  .hero-section { padding: 2.5rem 1rem; }
  .oval-frame { width: min(95%, 460px); }
  .oval-inner { padding: 3rem 1.5rem; }
  .bismillah { font-size: clamp(1.2rem, 5vw, 1.8rem); margin-bottom: 1rem; }
  .groom-name, .bride-name { font-size: clamp(2rem, 12vw, 4rem); }
}

@media (max-width: 380px) {
  .oval-inner { padding: 2rem 1rem; }
  .bismillah { font-size: clamp(1rem, 5.5vw, 1.4rem); }
  .groom-name, .bride-name { font-size: clamp(1.7rem, 11.5vw, 2.5rem); }
  .event-label { font-size: 0.58rem; letter-spacing: 0.22em; }
}
</style>
