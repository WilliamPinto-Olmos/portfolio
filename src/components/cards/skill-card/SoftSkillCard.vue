<script setup lang="ts">
import LucideIcon from '@/components/icons/LucideIcon.vue'
import { useElementVisibility } from '@vueuse/core'
import { ref } from 'vue'

const props = defineProps<{
  title: string
  icon: string
  animateFrom: 'right' | 'left'
}>()

const card = ref<HTMLElement | null>(null)
const cardIsVisible = useElementVisibility(card)
const animationClass =
  props.animateFrom === 'right' ? 'sm:animatecss-fadeInRight' : 'sm:animatecss-fadeInLeft'
</script>

<template>
  <div
    ref="card"
    class="flex items-center px-3 py-2 w-fit bg-gradient-to-l from-slate-300 to-slate-100 rounded-md shadow-lg animatecss"
    :class="[cardIsVisible ? animationClass : '']"
  >
    <section
      class="flex justify-center items-center w-10 h-10 rounded-full shadow-md bg-gradient-to-r from-[#C9A9E9] to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300"
    >
      <LucideIcon :name="icon" default-class="w-5 h-5" color="#334152" />
    </section>

    <section class="block border-l border-gray-300 m-3">
      <div class="pl-3">
        <h3 class="text-gray-600 font-semibold text-sm">{{ title }}</h3>
      </div>
    </section>
  </div>
</template>

<!-- <div
      class="w-fit bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid justify-center px-4 py-2 rounded-lg shadow-md"
    >
      <div class="text-base font-bold capitalize rounded-md">Empathy</div>
    </div> -->
