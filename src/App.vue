<script setup lang="ts">
import ProfileImageCard from './components/ProfileImageCard.vue'
import GlassmorphicBackground from './GlassmorphicBackground.vue'
import BackgroundPattern from '@/BackgroundPattern.vue'
import BackgroundDivider from '@/BackgroundDivider.vue'
import TopNavbar from './TopNavbar.vue'
import PresentationCard from './components/PresentationCard.vue'
import VueIcon from '@/components/icons/VueIcon.vue'
</script>

<template>
  <header>
    <TopNavbar />
  </header>

  <main>
    <div class="relative h-dvh w-full flex items-center justify-center">
      <GlassmorphicBackground />
      <BackgroundPattern />
      <BackgroundDivider />

      <div class="flex flex-col items-center px-2">
        <ProfileImageCard class="z-10 -mb-10" />
        <PresentationCard />
      </div>
    </div>
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Hard skills
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi
          magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <div class="flex gap-5 flex-nowrap mt-8 xl:mt-16 bg-gray-50 p-10 rounded-lg">
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
          <div
            class="h-16 w-16 p-3"
            style="
              background: rgba(255, 255, 255, 0.48);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(6.6px);
              -webkit-backdrop-filter: blur(6.6px);
              border: 1px solid rgba(255, 255, 255, 0.52);
            "
          >
            <VueIcon />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
