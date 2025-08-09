<script setup lang="ts">
import CodeCard from '@/components/cards/code/CodeCard.vue'
import TagItem from '@/components/cards/code/TagItem.vue'
</script>

<template>
  <CodeCard class="max-w-[32rem]">
    <TagItem name="Portfolio" :attributes="{ lang: 'vue' }">
      <TagItem name="Intro" highlight :attributes="{ age: 24, location: 'Jalisco, México' }">
        <span class="block"> Hey! I'm William, this is my portfolio 👋</span>
      </TagItem>
      <TagItem name="AboutMe" highlight>
        Passionate full stack web developer and software consultant, focused on responsive,
        efficient, scalable and fast web applications and helping clients achieve their goals in the
        most effective way. I really enjoy coding, solving problems and building solutions that
        helps people to do things easier, that is what I think coding is about.
      </TagItem>
    </TagItem>
  </CodeCard>
</template>
