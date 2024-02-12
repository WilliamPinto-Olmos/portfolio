<script setup lang="ts">
import GlassButton from '@/components/buttons/GlassButton.vue'
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import GmailIcon from '@/components/icons/GmailIcon.vue'
</script>

<template>
  <nav class="absolute top-5 inset-x-5 rounded-lg z-[999] p-3 flex gap-5 justify-end text-gray-200">
    <GlassButton
      as="link"
      href="https://github.com/WilliamPinto-Olmos"
      target="_blank"
      class="flex gap-2 px-3 py-2 before:bg-black"
    >
      <GithubIcon /> <span class="hidden sm:inline">Github</span>
    </GlassButton>
    <GlassButton
      as="link"
      href="https://www.linkedin.com/in/william-jair-pinto-olmos-1a38362a0/"
      target="_blank"
      class="flex gap-2 px-3 py-2 before:bg-blue-700"
    >
      <LinkedInIcon /> <span class="hidden sm:inline">LinkedIn</span>
    </GlassButton>
    <GlassButton
      as="link"
      href="mailto:williamp.olmos@gmail.com"
      target="_blank"
      class="flex gap-2 px-3 py-2 before:bg-gray-700"
    >
      <GmailIcon /> <span class="hidden sm:inline">Email me</span>
    </GlassButton>
  </nav>
</template>
