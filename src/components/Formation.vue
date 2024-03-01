<template>
    <div class="card formation">
      <h2>Education</h2>
      <div class="education-entry" v-for="education in educationHistory" :key="education.school">
        <div class="education-header">
          <div class="school-logo">
            <img :src="education.logoUrl" alt="School logo">
          </div>
          <h3>{{ education.degree }}</h3>
        </div>
        <h4>{{ education.school }}</h4>
        <p class="date">{{ education.period }}</p>
        <p class="description">{{ education.description }}</p>
        <ul>
          <li v-for="skill in education.skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    // Importing images using ES6 syntax
    import efreiLogo from '../assets/efrei-logo.png';
    import mareCarreeLogo from '../assets/mare-carrée-logo.png';
  
  const educationHistory = ref([
    // Most recent education first
    {
      school: 'EFREI - Grande école du numérique',
      degree: 'European bachelor, Programming / computer developer, general',
      period: 'Sept 2022 - July 2025',
      description: 'A comprehensive program covering various aspects of software development and computer science.',
      skills: ['CSS', 'SQL', 'HTML5', 'JavaScript'],
    logoUrl: efreiLogo
    },
    {
      school: 'EFREI - Grande école du numérique',
      degree: 'Computer Science',
      period: 'Sept 2021 - July 2022',
      description: 'Focused on the fundamentals of computer science, including programming languages and project management.',
      skills: ['Python (programming language)', 'C (programming language)', 'Project management'],
    logoUrl: efreiLogo
    },
    {
      school: 'Polyvalent high school of Mare Carrée',
      degree: 'General Baccalaureate, Computer Science',
      period: 'Sept 2018 - July 2021',
      description: 'High school diploma with a focus on computer science, awarded with Honorable Mention.',
      skills: [],
      logoUrl: mareCarreeLogo
    },
  ]);
  </script>
  
  <style scoped>
.formation {
  background: var(--color-card-background);
  color: var(--color-base);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin-top: 2rem;
}
  
.education-entry {
    border-bottom: 1px solid var(--color-secondary);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  
    &:last-child {
      border-bottom: none;
    }
  
    .education-header {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }
      
      .school-logo img {
        max-width: 100px;
        max-height: 50px;
        object-fit: contain;
        display: block;
        margin-right: 1rem;
        background-color: var(--color-base);
        border-radius: var(--border-radius);
      }
      
      .school-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      h3 {
        color: var(--color-primary);
        margin: 0;
      }
      

      .school-logo {
        flex: 0 0 auto; 
      }
  
    .school-info {
      flex: 1;
  
      h3 {
        color: var(--color-primary);
        margin-top: 0;
      }
  
      .date {
        font-style: italic;
        color: var(--color-secondary);
      }
  
      .description {
        margin: 0.5rem 0;
        color: var(--color-secondary);
      }
  
      ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0.5rem;
  
        li {
          margin-bottom: 0.5rem;
          &::before {
            content: '•';
            color: var(--color-primary);
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
        }
      }
    }
  }
  
  
  @media (max-width: 768px) {
    .education-entry {
      flex-direction: column;
    }
  }
  </style>
  