<script setup lang="ts">
import ProfileImageCard from './components/ProfileImageCard.vue'
import GlassmorphicBackground from './GlassmorphicBackground.vue'
import BackgroundPattern from '@/BackgroundPattern.vue'
import TopNavbar from './TopNavbar.vue'
import PresentationCard from './components/PresentationCard.vue'
</script>

<template>
  <header>
    <TopNavbar />
  </header>

  <main>
    <div class="relative h-screen w-screen flex items-center justify-center">
      <GlassmorphicBackground />
      <BackgroundPattern />

      <div class="flex flex-col items-center px-2">
        <ProfileImageCard class="z-10 -mb-10" />
        <PresentationCard />
      </div>
    </div>
  </main>
</template>
