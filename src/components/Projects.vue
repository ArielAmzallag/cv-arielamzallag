<template>
    <div class="card projects">
      <h2>Projects</h2>
      <div class="project-entry" v-for="project in projectList" :key="project.name">
        <h3>{{ project.name }}</h3>
        <p class="description">{{ project.description }}</p>
        <p class="status">{{ project.status }}</p>
        <div class="technologies">
          <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const projectList = ref([
    {
      name: 'Spellbook',
      description: 'A Vue/Vite project integrated with Firebase, featuring an authentication system with email/password and Google sign-in, along with email verification.',
      status: 'In Progress: Implementing Firestore for database management.',
      technologies: ['Vue.js', 'Vite', 'Firebase Auth', 'Firestore']
    },
    // Add other projects here
  ]);
  </script>
  
  <style lang="scss" scoped>
  @import '../style.scss';
  .projects {
    @include hover-effect;
    @include tablet {
        padding: $padding-small;
      }
    .project-entry {
      border-bottom: 1px solid $color-secondary;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      &:last-child {
        border-bottom: none;
      }
      h3 {
        color: $color-primary;
        &:hover {
          color: $color-info;
        }
      }
    }
  }
  </style>
  
  