<template>
    <div class="resume">
      <aside class="sidebar">
        <div class="sidebar-content">
          <Contact />
          <Language />
          <Skills />
          <InterestsHobbies/>
        </div>
      </aside>
      <main class="main-content">
        <Presentation />
        <Experience />
        <Formation/>
        <Projects/>
      </main>
    </div>
  </template>
  
  <script setup>
  import Presentation from '../components/Presentation.vue';
  import Contact from '../components/Contact.vue';
  import Skills from '../components/Skills.vue';
  import Language from '../components/Language.vue';
  import Experience from '../components/Experience.vue';
  import Formation from '../components/Formation.vue';
  import Projects from '../components/Projects.vue';
  import InterestsHobbies from '../components/InterestsHobbies.vue';
  </script>
  
  <style lang="scss" scoped>
  @import '../style.scss';
  
  .resume {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem; 
    max-width: var(--resume-max-width, 100%);
    margin: var(--padding-section) auto;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    background: linear-gradient(145deg, #012e40, #011627);
    perspective: 1000px;
    @include tablet {
        grid-template-columns: 1fr; // Stack sidebar and main content on tablet and below
        .sidebar, .main-content {
          padding: $padding-small;
        }
      }
    
      @include mobile {
        .sidebar {
          display: none; // Optionally hide sidebar on very small screens
        }

        .sidebar, .main-content {
            padding: 0%;
          }
      }

      #app {
        padding: 0;
      }
    
      body {
        padding: 0; // Alternatively, remove padding from the body if #app doesn't wrap everything
      }
      
      @media (min-width: $breakpoint-tablet) {
        flex-direction: row;
      }
    
      .sidebar, .main-content {
        width: 100%;
    
        @media (min-width: $breakpoint-tablet) {
          width: auto;
        }
      }
  }
  
  .sidebar {
    background-color: var(--color-background);
    color: var(--color-base);
    padding: var(--padding-section);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 2%;
  }

  .sidebar, .main-content {
    transform: rotateY(0deg) translateZ(0);
    transition: transform 0.5s, box-shadow 0.5s; 
    &:hover {
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    }
    }
  
  .profile-card {
    background: var(--color-primary);
    color: var(--color-background-page);
    text-align: center;
    padding: var(--padding-section);
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
  }
  
  .main-content {
    background-color: var(--color-background-page);
    color: var(--color-base);
    padding: var(--padding-section);
  }
  
  .card {
    background-color: var(--color-card-background);
    margin-bottom: 2rem;
    padding: var(--padding-section);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    &:last-child {
      margin-bottom: 0;
    }
  }
  

  </style>
  
