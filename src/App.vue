<script setup lang="ts">
import StarBackground from './components/StarBackground.vue'
import HeroSection from './components/HeroSection.vue'
import InvitationSection from './components/InvitationSection.vue'
import EventDetails from './components/EventDetails.vue'
import CountdownTimer from './components/CountdownTimer.vue'
import MapSection from './components/MapSection.vue'
import RSVPSection from './components/RSVPSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <StarBackground />
  <HeroSection />
  <div class="page-wrapper">
    <InvitationSection />
    <EventDetails />
    <CountdownTimer />
    <MapSection />
    <RSVPSection />
    <FooterSection />
  </div>
</template>

<style>
@import './assets/main.css';
</style>