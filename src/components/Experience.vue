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
  @import '../style.scss';

  .experience {
    @include card-style;
    @include tablet {
        padding: $padding-small;
      }
  
    .job {
      border-bottom: 1px solid $color-secondary;
      padding-bottom: $padding-small;
      margin-bottom: $padding-small;
      position: relative;
      overflow: hidden;
  
      &:hover {
        background-color: darken($color-card-background, 5%);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
        // Sliding gradient effect
        &:before {
          @include slide-in;
        }
      }
  
      &:last-child {
        border-bottom: none;
      }
  
      h3 {
        color: $color-primary;
        cursor: pointer;
        margin: 0;
        padding: $padding-small;
        position: relative;
        z-index: 2; 
        transition: color 0.3s ease;
  
        &:hover {
          color: $color-info;
        }
      }
  
      .job-details {
        @include card-style;
        background-color: $color-background-page;
        margin-top: $padding-small;
        padding: $padding-small;
        border-radius: $border-radius-small;
        transition: background-color 0.3s ease;
  
        &:hover {
          background-color: darken($color-background-page, 5%);
        }
      }
  
      ul {
        list-style: none;
        padding-left: 0;
      }
  
      li {
        margin-bottom: 0.5rem;
        color: $color-secondary;
  
        &::before {
          content: '•';
          color: $color-primary;
          font-weight: bold;
          margin-right: 0.5rem;
        }
      }
    }
  }
  
  @include media-query(small-screen) {
    .experience {
      padding: $padding-small;
    }
  }
  

  @mixin slide-in {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0) 50%, $color-background-page 100%);
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }
  
  @mixin media-query($size) {
    @if $size == small-screen {
      @media (max-width: 768px) {
        @content;
      }
    }
  }
  
  
  </style>
  