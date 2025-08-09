<script setup lang="ts">
import ProfileImageCard from '@/components/ProfileImageCard.vue'
import GlassButton from '@/components/buttons/GlassButton.vue'
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import GmailIcon from '@/components/icons/GmailIcon.vue'
import LucideIcon from '@/components/icons/LucideIcon.vue'

const glassStyles = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0 4px 30px rgba(255, 255, 255, 0.1)',
  'backdrop-filter': 'blur(6px)',
  '-webkit-backdrop-filter': 'blur(6px)',
  border: '1px solid rgba(255, 255, 255, 0.1)'
}
</script>

<template>
  <div
    class="flex sm:p-20 w-full"
    style="
      background: radial-gradient(rgba(200, 200, 200, 0.4) 2px, transparent 1%);
      background-size: 30px 30px;
      background-position: -5px -5px;
    "
  >
    <div class="flex flex-col items-center px-6 py-10 mx-auto max-w-3xl">
      <div class="w-fit flex justify-center rounded-lg px-3 py-2" :style="glassStyles">
        <h1 class="text-2xl font-semibold text-center text-gray-200 capitalize lg:text-3xl">
          More about me
        </h1>
      </div>

      <div class="flex flex-col items-center mt-20">
        <ProfileImageCard
          class="-mb-10 z-50"
          classes="before:!bg-gradient-to-t before:!from-slate-600 before:!to-slate-300 after:!bg-gradient-to-t after:!from-slate-600 after:!to-slate-300"
        />

        <div
          class="relative rounded-lg px-8 sm:px-12 py-16 text-gray-200 text-base text-justify"
          :style="glassStyles"
        >
          Hey! As you may have already seen above, my name is William Pinto. I have always enjoyed
          building things and solving problems, which is why I became an Informatics Engineer.
          During my journey, I discovered web development, and from that moment I fell in love with
          it and I set the goal of becoming a full-stack web developer because it allows me to craft
          elegant and responsive user interfaces while building the logic that actual solves
          problems. I have followed the self-learning path since the very beginning, and I'm going
          to stick with it to the very end; there's always room for improvement!
        </div>
      </div>

      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center rounded-lg px-3 py-2 gap-5 sm:gap-10 mt-10"
      >
        <GlassButton
          as="link"
          href="https://github.com/WilliamPinto-Olmos"
          target="_blank"
          class="flex items-center justify-center gap-2 px-3 py-2 before:bg-black min-w-[9rem]"
        >
          <GithubIcon /> <span>Github</span>
        </GlassButton>
        <GlassButton
          as="link"
          href="https://www.linkedin.com/in/william-jair-pinto-olmos-1a38362a0/"
          target="_blank"
          class="flex items-center justify-center gap-2 px-3 py-2 before:bg-blue-700 min-w-[9rem]"
        >
          <LinkedInIcon /> <span>LinkedIn</span>
        </GlassButton>
        <GlassButton
          as="link"
          href="mailto:williamp.olmos@gmail.com"
          target="_blank"
          class="flex items-center justify-center gap-2 px-3 py-2 before:bg-gray-700 min-w-[9rem]"
        >
          <GmailIcon /> <span>Email me</span>
        </GlassButton>
        <GlassButton
          as="link"
          href="/docs/Resume.pdf"
          download
          class="flex items-center justify-center gap-2 px-3 py-2 before:bg-rose-700 min-w-[9rem]"
        >
          <LucideIcon name="FileCode" /> <span>Resume</span>
        </GlassButton>
      </div>
    </div>
  </div>
</template>
