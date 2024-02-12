<script setup lang="ts">
defineProps<{
  name: string
  inline?: boolean
  highlight?: boolean
  attributes?: { [index: string]: number | string }
}>()
</script>

<template>
  <div class="my-2 font-mono text-sm" :class="{ 'sm:flex gap-1 items-center': inline }">
    <p class="font-mono text-sm font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;</span>
      <span class="text-pink-400">{{ name }}</span>
      <template v-if="attributes">
        <span
          v-for="(value, attribute) in attributes"
          :key="attribute"
          class="ml-2 text-violet-400 max-sm:block"
        >
          {{ attribute }}<span class="text-slate-500">=</span>
          <span class="relative inline-block px-1">
            <span class="relative text-blue-400">"{{ value }}"</span>
          </span>
        </span>
      </template>
      <span class="text-slate-500">&gt;</span>
    </p>

    <div class="max-sm:pl-3.5" :class="{ 'sm:pl-3.5': !inline }">
      <template v-if="highlight">
        <span
          class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"
        >
          <span class="relative text-blue-400">
            <slot />
          </span>
        </span>
      </template>
      <template v-else>
        <slot />
      </template>
    </div>

    <p class="font-mono text-sm font-normal tracking-wide text-violet-400">
      <span class="text-slate-500">&lt;/</span>
      <span class="text-pink-400">{{ name }}</span>
      <span class="text-slate-500">&gt;</span>
    </p>
  </div>
</template>
