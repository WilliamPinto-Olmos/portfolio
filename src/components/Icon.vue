<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
}>()

const Icon = defineAsyncComponent(() => import(`@/components/icons/${props.name}Icon.vue`))
</script>
<template>
  <component :is="Icon" />
</template>
