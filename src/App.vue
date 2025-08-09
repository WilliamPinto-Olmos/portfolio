<script setup lang="ts">
import ProfileImageCard from './components/ProfileImageCard.vue'
import GlassmorphicBackground from './GlassmorphicBackground.vue'
import BackgroundPattern from '@/BackgroundPattern.vue'
import BackgroundDivider from '@/BackgroundDivider.vue'
import TopNavbar from './TopNavbar.vue'
import PresentationCard from './components/PresentationCard.vue'
import HardSkills from '@/components/hard-skills/HardSkills.vue'
import SoftSkills from '@/components/soft-skills/SoftSkills.vue'
import WavesDivider from './WavesDivider.vue'
import TriangleDivider from '@/TriangleDivider.vue'
import ProjectsList from '@/components/projects/ProjectsList.vue'
import AboutMe from '@/components/about-me/AboutMe.vue'
</script>

<template>
  <header>
    <TopNavbar />
  </header>

  <main>
    <div class="relative min-h-screen w-full flex items-center justify-center">
      <GlassmorphicBackground />
      <BackgroundPattern />
      <BackgroundDivider class="bottom-0" />

      <div class="flex flex-col items-center px-2 pt-24 min-[445px]:pt-0">
        <ProfileImageCard class="z-10 -mb-10" />
        <PresentationCard />
      </div>
    </div>
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto max-w-3xl">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Hard skills
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Some of the tech stack that I've worked with but not limited to. I'm always eager to learn
          more and expand my skill set.
        </p>

        <section id="hard-skills">
          <HardSkills class="px-5 lg:px-10" />
        </section>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
          And the list continues to grow as I explore new technologies and frameworks. Not every
          technology I've worked with is listed here, maybe because some of them are for very
          specific use cases or they already fall within some of the tech listed before. But here's
          a brief list of non sorted nor categorized technologies that I also work with:
        </p>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Github, Gitlab, Bitbucket, Google Run Functions, Google Big Query, Google Cloud Storage,
          Google Compute Engine, Firebase Auth, Firebase Hosting, Firebase Storage, Figma Dev, Jira,
          Trello, Ollama, API Rest, Websockets, Prompting Engineering etc.
        </p>
      </div>
    </section>

    <section
      id="soft-skills"
      class="relative bg-gradient-to-l from-slate-600 to-slate-900 mt-10 pt-20 pb-32"
    >
      <WavesDivider />

      <div class="container px-6 py-10 mx-auto max-w-3xl">
        <h1 class="text-2xl font-semibold text-center text-gray-200 capitalize lg:text-3xl">
          Soft skills
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-100">
          Essential for effective collaboration and communication in any team environment.
        </p>

        <SoftSkills />
      </div>
    </section>

    <section id="projects" class="relative pt-10 pb-20">
      <TriangleDivider />

      <div class="container px-6 py-10 mx-auto max-w-3xl">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Projects
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Some of the public projects that I am co-author of and I'm allowed to publicly showcase.
          Even then they are mostly focused on administration management but they may show you a
          tease of my skills and experience.
        </p>

        <ProjectsList class="mt-20" />
      </div>
    </section>

    <section id="about-me" class="relative mt-10 bg-slate-800">
      <BackgroundDivider class="!rotate-0 top-0" />
      <AboutMe class="pt-20 pb-32" />
    </section>
  </main>
</template>
