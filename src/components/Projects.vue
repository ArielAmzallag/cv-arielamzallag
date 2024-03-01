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
  
  <style scoped>
  .projects {
    background: var(--color-card-background);
    color: var(--color-base);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    margin-top: 2rem;
  }
  
  .project-entry {
    border-bottom: 1px solid var(--color-secondary);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  
    &:last-child {
      border-bottom: none;
    }
  
    h3 {
      color: var(--color-primary);
      margin-top: 0;
    }
  
    .description {
      margin: 0.5rem 0;
      color: var(--color-secondary);
    }
  
    .status {
      font-style: italic;
      color: var(--color-info);
    }
  
    .technologies {
      span {
        display: inline-block;
        background-color: var(--color-primary);
        color: var(--color-background);
        padding: 0.2rem 0.6rem;
        border-radius: var(--border-radius);
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: bold;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    .projects {
      padding: calc(var(--padding-section) / 2);
    }
  
    .project-entry {
      
    }
  }
  </style>
  