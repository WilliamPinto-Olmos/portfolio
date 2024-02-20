<script setup lang="ts">
import ProjectCard from '@/components/cards/ProjectCard.vue'
</script>

<template>
  <div class="flex max-lg:flex-wrap gap-20 justify-center">
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
</template>
