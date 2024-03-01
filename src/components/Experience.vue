<template>
    <div class="card experience">
      <h2>Experience</h2>
      <div class="job" v-for="job in jobExperiences" :key="job.title">
        <h3 @click="toggleDetails(job.title)">
          {{ job.title }} - {{ job.company }}
        </h3>
        <div v-if="job.showDetails">
          <p>{{ job.period }}</p>
          <ul>
            <li v-for="duty in job.duties" :key="duty">{{ duty }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const jobExperiences = ref([
    {
      title: 'Intern',
      company: 'IUT Sénart Fontainebleau',
      period: 'May 2023 - July 2023', // Replace with the actual period
      duties: [
        'Developed a module for managing virtual machines in IT classrooms.',
        'Collaborated with the IT department to assess needs and requirements.',
        'Implemented features for creating, monitoring, and managing virtual environments.',
        'Conducted testing to ensure functionality across different systems.'
      ],
      showDetails: true
    },
    {
    title: 'Computer Technician Intern',
    company: 'IBSF',
    period: 'June 2022 - July 2022', // Replace with the actual dates of your position
    duties: [
      'Assembled and configured computer hardware for company use.',
      'Installed and configured various operating systems and software packages.',
      'Performed hardware diagnostics and troubleshooting.',
      'Assisted in the maintenance and upgrading of computer systems.'
    ],
    showDetails: true // Set this to true to ensure the details are visible by default
    },
    // ... other jobs
  ]);
  
  const toggleDetails = (title) => {
    const job = jobExperiences.value.find((j) => j.title === title);
    if (job) {
      job.showDetails = !job.showDetails;
    }
  };
  </script>
  
  
  <style lang="scss" scoped>
  @import '../style.css';
  
  .experience {
    background: var(--color-background);
    color: var(--color-base);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
  
  .job {
    border-bottom: 1px solid var(--color-secondary);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  
    &:last-child {
      border-bottom: none;
    }
  
    h3 {
      color: var(--color-primary);
      cursor: pointer;
    }
  }
  
  .job-details {
    background-color: var(--color-card-background);
    padding: 0.5rem;
    border-radius: var(--border-radius);
    margin-top: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
    color: var(--color-secondary);
  
    &::before {
      content: '•';
      color: var(--color-primary);
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .experience {
      padding: calc(var(--padding-section) / 2)
    }
  }
  </style>
  