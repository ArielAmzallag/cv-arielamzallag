<template>
    <div class="resume">
      <aside class="sidebar">
        <div class="sidebar-content">
          <div class="name-title">
            <h1>Ariel Amzallag</h1>
            <p class="subtitle">Aspiring Web Developer</p>
          </div>
          <Language />
          <Skills />
          <Contact />
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
  </script>
  
  <style lang="scss" scoped>
  @import '../style.css'; // Import global styles
  
  .resume {
    display: grid;
    grid-template-columns: 1fr 3fr; // Adjust the proportion of sidebar and main content
    gap: 2rem; // Space between sidebar and main content
    max-width: var(--resume-max-width, 100%); // Use 100% of the container width
    margin: var(--padding-section) auto; // Margin top and bottom with auto on the sides
    box-shadow: var(--box-shadow); // Shadow from variables
    border-radius: var(--border-radius); // Border-radius from variables
  }
  
  .sidebar {
    background-color: var(--color-background);
    color: var(--color-base);
    padding: var(--padding-section);
    display: flex;
    flex-direction: column;
    gap: 1.5rem; // Increase gap for breathing space between cards
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
    margin-bottom: 2rem; // Consistent bottom margin for all cards
    padding: var(--padding-section);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    &:last-child {
      margin-bottom: 0; // Remove bottom margin for the last card
    }
  }
  

  </style>
  
