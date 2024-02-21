<script setup lang="ts">
import HardSkillsList from '@/components/hard-skills/HardSkillsList.vue'
import DropdownMenu from '@/components/dropdown/DropdownMenu.vue'
import DropdownItem from '@/components/dropdown/DropdownItem.vue'
import { hardSkills } from './index'
import type { HardSkill } from './index'
import { computed, ref } from 'vue'
import { groupBy } from '@/utils/helpers'

const groupFilter = ref<'all' | 'experience' | 'category'>('all')
const skills = computed<Map<string, HardSkill[]>>(() =>
  groupBy(hardSkills, (skill) => getSkillGroup(skill))
)

const experienceTags: Array<string> = ['basics', 'medium', 'strong', 'advanced']
const categoryTags: Array<string> = ['frontend', 'backend', 'devops']

function getSkillGroup(skill: HardSkill): string[] {
  const filters = {
    all: (skill: HardSkill): string[] => ['all'],
    experience: (skill: HardSkill): string[] =>
      skill.tags.filter((tag: string) => experienceTags.includes(tag)),
    category: (skill: HardSkill): string[] =>
      skill.tags.filter((tag: string) => categoryTags.includes(tag))
  }

  return filters[groupFilter.value](skill)
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-end">
      <DropdownMenu>
        <template #trigger> Group: {{ groupFilter }} </template>
        <template #title> Group by </template>

        <DropdownItem
          :class="{ 'bg-gray-100/60': groupFilter === 'all' }"
          @click="groupFilter = 'all'"
          >All</DropdownItem
        >
        <DropdownItem
          :class="{ 'bg-gray-100/60': groupFilter === 'experience' }"
          @click="groupFilter = 'experience'"
          >Experience</DropdownItem
        >
        <DropdownItem
          :class="{ 'bg-gray-100/60': groupFilter === 'category' }"
          @click="groupFilter = 'category'"
          >Category</DropdownItem
        >
      </DropdownMenu>
    </div>
    <div class="flex flex-col gap-5">
      <template v-for="[key, subskills] in skills" :key="key">
        <div class="flex flex-col">
          <h4 v-show="groupFilter !== 'all'" class="text-lg capitalize mb-5">{{ key }}</h4>
          <HardSkillsList
            :skills="subskills"
            :class="{
              'justify-center': groupFilter === 'all',
              'max-sm:justify-evenly': groupFilter !== 'all'
            }"
          />
        </div>
      </template>
    </div>
  </div>
</template>
