<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { projects } from "../data/projects";

const route = useRoute();
const project = computed(() => projects.find((p) => p.slug === route.params.slug));
</script>

<template>
  <main v-if="project" class="section-body">
    <header>
      <!-- Back -->
      <p>
        <RouterLink to="/">← Back</RouterLink>
      </p>

      <h1>{{ project.title }}</h1>
      <p v-if="project.meta">{{ project.meta }}</p>
      <p>{{ project.overview }}</p>
    </header>

    <!-- Sections -->
    <section v-for="(s, i) in (project.sections || [])" :key="i">
      <h2>{{ s.title }}</h2>
      <div class="divider"></div>

      <p v-if="s.text">{{ s.text }}</p>
    </section>

    <!-- Tech -->
    <section v-if="project.tech && project.tech.length">
      <h2>Technologies</h2>
      <div class="divider"></div>
      <p>{{ project.tech.join(" · ") }}</p>
    </section>

    <!-- Links -->
    <section v-if="project.links && project.links.length">
      <h2>Links</h2>
      <div class="divider"></div>

      <p>
        <span v-for="(l, i) in project.links" :key="l.href">
          <a :href="l.href" target="_blank" rel="noreferrer">{{ l.label }}</a>
          <span v-if="i < project.links.length - 1"> · </span>
        </span>
      </p>
    </section>
  </main>
</template>
