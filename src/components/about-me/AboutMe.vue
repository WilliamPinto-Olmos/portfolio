<script setup lang="ts">
import ProfileImageCard from '@/components/ProfileImageCard.vue'
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
      <div
        class="w-fit flex justify-center rounded-lg px-3 py-2"
        style="
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        "
      >
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
          style="
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          "
        >
          Hey! As you may have already seen above, my name is William Pinto. I have always enjoyed
          building things and solving problems, which is why I became an Informatics Engineer.
          During my journey, I discovered web development, and from that moment I fell in love with
          it and I set the goal of becoming a full-stack web developer because it allows me to craft
          elegant and responsive user interfaces while building the logic that actual solves
          problems. I have followed the self-learning path since the very beginning, and I'm going
          to stick with it to the very end; there's always room for improvement.
        </div>
      </div>
    </div>
  </div>
</template>
