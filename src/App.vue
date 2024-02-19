<script setup lang="ts">
import ProfileImageCard from './components/ProfileImageCard.vue'
import GlassmorphicBackground from './GlassmorphicBackground.vue'
import BackgroundPattern from '@/BackgroundPattern.vue'
import BackgroundDivider from '@/BackgroundDivider.vue'
import TopNavbar from './TopNavbar.vue'
import PresentationCard from './components/PresentationCard.vue'
import HardSkills from '@/components/hard-skills/HardSkills.vue'
import SoftSkills from '@/components/soft-skills/SoftSkills.vue'
import WavesDivider from './WavesDivider.vue'
</script>

<template>
  <header>
    <TopNavbar />
  </header>

  <main>
    <div class="relative h-screen w-full flex items-center justify-center">
      <GlassmorphicBackground />
      <BackgroundPattern />
      <BackgroundDivider />

      <div class="flex flex-col items-center px-2">
        <ProfileImageCard class="z-10 -mb-10" />
        <PresentationCard />
      </div>
    </div>
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto max-w-3xl">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Hard skills
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Some of the technologies that I've used on different projects.
        </p>

        <section id="hard-skills">
          <HardSkills class="px-5 lg:px-10" />
        </section>
      </div>
    </section>

    <section id="soft-skills" class="relative bg-slate-800 mt-10 py-20">
      <WavesDivider />

      <div class="container px-6 py-10 mx-auto max-w-3xl">
        <h1 class="text-2xl font-semibold text-center text-gray-200 capitalize lg:text-3xl">
          Soft skills
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-100">
          The kind of little things that can make the difference.
        </p>

        <SoftSkills />
      </div>
    </section>
  </main>
</template>
