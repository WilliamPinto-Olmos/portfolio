<script setup lang="ts">
import CodeCard from '@/components/cards/code/CodeCard.vue'
import TagItem from '@/components/cards/code/TagItem.vue'
</script>

<template>
  <CodeCard class="max-w-[32rem]">
    <TagItem name="Portfolio" :attributes="{ lang: 'vue' }">
      <TagItem name="Intro" highlight :attributes="{ age: 22, location: 'Jalisco, México' }">
        <span class="block"> Hey! I am William Pinto, welcome to my portfolio 👋</span>
      </TagItem>
      <TagItem name="AboutMe" highlight>
        Passionate full stack web developer, focused on responsive and fast web applications. I
        really enjoy coding and building solutions that helps people to do things easier, that is
        what I think coding is about.
      </TagItem>
    </TagItem>
  </CodeCard>
</template>
