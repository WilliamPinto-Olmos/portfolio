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
import ProjectCard from '@/components/cards/ProjectCard.vue'
</script>

<template>
  <header>
    <TopNavbar />
  </header>

  <main>
    <div class="relative h-screen w-full flex items-center justify-center">
      <GlassmorphicBackground />
      <BackgroundPattern />
      <BackgroundDivider />

      <div class="flex flex-col items-center px-2">
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
          Some of the technologies that I've used on different projects.
        </p>

        <section id="hard-skills">
          <HardSkills class="px-5 lg:px-10" />
        </section>
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
          The little kind of things that can make the difference.
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
          Some of the projects that I am co-author of. They are more kind of systems focused on
          intern management but they may show you that I have experience in web applications that
          made it to production
        </p>

        <div class="mt-20 flex max-lg:flex-wrap gap-20 justify-center">
          <ProjectCard
            title="Labsy"
            description="A laboratory management system for the University of Guadalajara and ITRANS"
            title-class="text-cyan-600"
            button-class="before:bg-cyan-600"
            :bubbles-colors="{ gradientStart: '#089bab', gradientEnd: '#10d0a1' }"
            project-link="https://laboratorios.cucei.udg.mx/registro-cita/1e8281c8-30bb-4fa4-8c9b-185f2ce2c43f/publico-general"
          />

          <ProjectCard
            title="EMS CUCEA"
            description="A school management system with shared workspace, finances control, statistics, etc"
            title-class="text-red-950"
            button-class="before:bg-red-950"
            :bubbles-colors="{ gradientStart: '#1b0456', gradientEnd: '#a31f15' }"
            project-link="https://ems.cucea.udg.mx/oferta"
          />

          <ProjectCard
            title="Patrimonio CUCEI"
            description="Inventory tracking and management system. Shared the control of an inventory with multiple users irt"
            title-class="text-slate-950"
            button-class="before:bg-slate-950"
            :bubbles-colors="{ gradientStart: '#202a36', gradientEnd: '#8c9099' }"
            project-link="https://patrimonio-upe.cgsait.udg.mx/login"
          />
        </div>
      </div>
    </section>
  </main>
</template>
