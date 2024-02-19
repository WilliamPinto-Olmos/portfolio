<script setup lang="ts">
interface DropdownItemProps {
  as?: 'button' | 'a'
}

withDefaults(defineProps<DropdownItemProps>(), { as: 'button' })
</script>

<template>
  <component
    :is="as"
    class="block w-full text-left px-4 py-3 rounded-lg text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
  >
    <slot />
  </component>
</template>
