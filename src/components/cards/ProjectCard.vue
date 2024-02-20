<script setup lang="ts">
import GlassButton from '@/components/buttons/GlassButton.vue'

defineProps<{
  title: string
  description: string
  titleClass: string
  bubblesColors: { gradientStart: string; gradientEnd: string }
  buttonClass: string
  projectLink: string
}>()
</script>

<template>
  <div class="card">
    <div
      class="circle"
      :style="{
        background: `repeating-linear-gradient(48deg, ${bubblesColors.gradientStart} 0%, ${bubblesColors.gradientEnd} 100%)`
      }"
    ></div>
    <div
      class="circle"
      :style="{
        background: `repeating-linear-gradient(48deg, ${bubblesColors.gradientStart} 0%, ${bubblesColors.gradientEnd} 100%)`
      }"
    ></div>
    <div class="card-inner flex flex-col items-center justify-evenly p-2">
      <h3 class="font-semibold text-2xl text-center" :class="titleClass">{{ title }}</h3>

      <h3 class="text-slate-700 font-semibold text-sm text-center">{{ description }}</h3>

      <GlassButton
        as="link"
        :href="projectLink"
        target="_blank"
        class="flex justify-center gap-2 px-3 py-2 w-32"
        :class="buttonClass"
      >
        Explore
      </GlassButton>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  height: 250px;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.card-inner {
  width: inherit;
  height: inherit;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.04) rotate(1deg);
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 35% 30% 75% 30% / 49% 30% 70% 51%;
  position: absolute;
  animation: move-up6 2s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circle:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
}

@keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(10px);
  }
}
</style>
