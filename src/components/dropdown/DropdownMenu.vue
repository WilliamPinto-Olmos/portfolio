<script setup lang="ts">
import { ref, useSlots } from 'vue'
import DropdownDivider from './DropdownDivider.vue'

const dropdownOpen = ref<boolean>(false)
const slots = useSlots()
</script>

<template>
  <div class="relative inline-block">
    <!-- Dropdown toggle button -->
    <button
      @click="dropdownOpen = !dropdownOpen"
      @blur="dropdownOpen = false"
      type="button"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-50/30 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      <slot name="trigger" />
    </button>

    <!-- Dropdown menu -->
    <Transition name="fade">
      <div
        v-show="dropdownOpen"
        class="absolute right-0 z-20 w-48 p-2 mt-2 origin-top-right bg-white rounded-lg shadow-xl"
      >
        <template v-if="slots.title">
          <p class="px-4 py-3 text-sm text-gray-600 uppercase">
            <slot name="title" />
          </p>
          <DropdownDivider />
        </template>

        <slot />
      </div>
    </Transition>
  </div>
</template>
