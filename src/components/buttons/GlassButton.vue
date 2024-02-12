<script setup lang="ts">
import { computed } from 'vue'

export interface GlassButtonProps {
  as: 'button' | 'link'
}

const props = withDefaults(defineProps<GlassButtonProps>(), {
  as: 'button'
})

const componentTagName = computed(() => (props.as === 'link' ? 'a' : 'button'))

console.log(props.as)
</script>

<template>
  <component :is="componentTagName" class="button">
    <slot></slot>
  </component>
</template>

<style scoped>
.button {
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  z-index: 1;
  cursor: pointer;
}

.button::after,
.button::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all 0.4s;
}

.button::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;

  border-radius: 10px;
}

.button::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  border-radius: 50px;
}

.button:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.button:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}
</style>
