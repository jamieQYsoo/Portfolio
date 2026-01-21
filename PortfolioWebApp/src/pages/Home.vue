<script setup>
import { RouterLink } from "vue-router";
import { projects } from "../data/projects";

const name = "Jamie Soo";
const tagline = "A software engineering student with an interest in creating practical, accessible, and scalable solutions using secure networking.";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/jamie-qy-soo" },
  { label: "Email", href: "mailto:jamie.qy.soo@gmail.com" },
  { label: "GitHub", href: "https://github.com/jamieQYsoo" },
];

const education = [
  {
    title: "Bachelor of Engineering (Software) (Honours)",
    institution: "Swinburne University of Technology",
    dates: "2023 — Current",
    score: "Current GPA: 3.81 / 4.0",
    href: "",
  },
  {
    title: "ATAR",
    institution: "Wantirna College",
    dates: "2022",
    score: "Ranking: 85.3 / 99.95",
    href: "",
  },
];

const about = "I enjoy building tools with clean, intuitive interfaces and strong security, valuing accessibility, performance, and simple design. I have practical experience using AWS services as well as configuring networks on CISCO devices in lab-based environments. Additionally, I have an understanding of machine learning and algorithms. Outside of work, I'm interested in travelling, and casual gaming.";

</script>

<template>
  <main class="section-body">
    <!-- Header -->
    <section>
      <header>
        <h1>{{ name }}</h1>
        <p>{{ tagline }}</p>

        <p>
          <span v-for="(l, i) in links" :key="l.label">
            <a :href="l.href" target="_blank" rel="noreferrer">{{ l.label }}</a>
            <span v-if="i < links.length - 1"> · </span>
          </span>
        </p>
      </header>
    </section>

    <!-- Education / Certifications -->
    <section>
      <h2>Education / Certifications</h2>
      <div class="divider"></div>

      <div v-for="e in education" :key="e.title" class="row">
        <div>
          <div class="title">
            <a v-if="e.href" :href="e.href" target="_blank" rel="noreferrer">
              {{ e.title }}
            </a>
            <span v-else>{{ e.title }}</span>
          </div>

          <p>
            {{ e.institution }}
            <span v-if="e.score"> · {{ e.dates }}</span>
          </p>
        </div>

        <p>{{ e.score }}</p>
      </div>
    </section>

    <!-- Recent Projects -->
    <section>
      <h2>Recent Projects</h2>
      <div class="divider"></div>

      <div v-for="p in projects" :key="p.slug" class="row">
        <div>
          <div class="title">
            <RouterLink :to="`/projects/${p.slug}`">{{ p.title }}</RouterLink>
          </div>
          <p>{{ p.short }}</p>
        </div>

        <p>{{ p.meta }}</p>
      </div>
    </section>

    <!-- About -->
    <section>
      <h2>About</h2>
      <div class="divider"></div>
      <p> {{ about }} </p>
    </section>
  </main>
</template>
