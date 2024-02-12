<script setup lang="ts">
import WindowActionsButtons from '@/components/cards/code/WindowActionsButtons.vue'

defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="relative rounded-lg bg-[#292d3e] p-2">
    <div class="relative flex text-center">
      <WindowActionsButtons />
      <span v-if="title" class="absolute inset-x-0 top-2 text-xs text-slate-500">{{ title }}</span>
    </div>
    <div class="mt-5 space-y-1.5 px-5 pb-10">
      <slot />
    </div>
  </div>
</template>
