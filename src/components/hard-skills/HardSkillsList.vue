<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import SkillCard from '@/components/cards/skill-card/HardSkillCard.vue'
import type { HardSkill } from './index.ts'

defineProps<{
  skills: Array<HardSkill>
}>()
</script>

<template>
  <div class="flex gap-10 flex-wrap">
    <SkillCard
      v-for="skill in skills"
      :key="skill.name"
      :class="skill.cardClass"
      :circle-background="`radial-gradient(${skill.colors.gradientStart}, ${skill.colors.gradientEnd})`"
    >
      <Icon :name="skill.icon" :class="skill.iconClass" />
    </SkillCard>
  </div>
</template>
