<script setup lang="ts">
defineProps<{
  circleBackground: string
}>()

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="card">
    <div class="circle-area animatecss animatecss-fadeInUp">
      <div class="circle" :style="{ background: circleBackground }"></div>
    </div>
    <div class="card-inner animatecss animatecss-fadeInUp" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.card-inner {
  padding: 1rem;
  width: inherit;
  height: inherit;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.04) rotate(1deg);
}

.circle-area {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  animation: move-diagonal 5s ease-in infinite;
}

.circle:nth-child(1) {
  top: 0;
  left: 0;
}

@keyframes move-diagonal {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(-35%, -35%);
  }
  50% {
    transform: translate(0px, 0px);
  }
  75% {
    transform: translate(35%, 35%);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
