<script setup lang="ts">
import SoftSkillCard from '@/components/cards/skill-card/SoftSkillCard.vue'
import { useObserver } from '@/composables/useObserver'
import { ref, onMounted } from 'vue'

const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (container.value) {
    useObserver(container.value, () => container.value?.classList.add('animatecss-fadeInUp'))
  }
})
</script>

<template>
  <div ref="container" class="flex flex-wrap justify-center gap-10 animatecss">
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Great communication"
      icon="AudioLines"
      animateFrom="left"
    />
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Self-awareness"
      icon="Brain"
      animateFrom="right"
    />
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Self-learning"
      icon="BookOpenText"
      animateFrom="left"
    />
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Design patterns"
      icon="Blocks"
      animateFrom="right"
    />
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Adaptability"
      icon="Waves"
      animateFrom="right"
    />
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Time management"
      icon="CalendarCheck"
      animateFrom="left"
    />
    <SoftSkillCard class="max-[580px]:w-full" title="Open mind" icon="Globe" animateFrom="right" />
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Problem solver"
      icon="LocateFixed"
      animateFrom="left"
    />
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Empathy"
      icon="PersonStanding"
      animateFrom="right"
    />
    <SoftSkillCard
      class="max-[580px]:w-full"
      title="Emotional intelligence"
      icon="Heart"
      animateFrom="left"
    />
    <SoftSkillCard class="max-[580px]:w-full" title="Team work" icon="Users" animateFrom="right" />
  </div>
</template>
