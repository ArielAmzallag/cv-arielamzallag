<template>
    <div class="card skills">
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill.name">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-level">{{ skill.level }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define your skills and their corresponding proficiency levels
  const skills = ref([
    { name: 'Python', level: 'Intermediate' },
    { name: 'C#', level: 'Beginner' },
    { name: 'Project Management', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    // ... add all your other skills here with the appropriate level
    { name: 'Kotlin', level: 'Beginner' },
  ]);
  </script>
  
  <style scoped>
  .skills {
    background-color: var(--color-card-background);
    padding: var(--padding-section);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    align-items: center;
  }
  
  .skill-name {
    color: var(--color-base);
  }
  
  .skill-level {
    background-color: var(--color-primary);
    color: var(--color-background);
    padding: 0.2rem 0.6rem;
    border-radius: var(--border-radius);
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
  }
  </style>
  