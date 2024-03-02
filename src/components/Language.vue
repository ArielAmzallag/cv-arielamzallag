<template>
    <section class="card language">
      <h2>Languages</h2>
      <ul>
        <li v-for="language in languages" :key="language.name" class="language-item">
          <div class="language-info">
            <img :src="language.flag" :alt="`${language.name} flag`" class="language-flag">
            <span class="language-name">{{ language.name }}</span>
          </div>
          <div class="language-proficiency">
            <span class="language-level">{{ language.proficiency }}</span>
            <div class="progress-bar">
              <div class="progress" :style="{ width: language.level }"></div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ukFlag from '../assets/uk-flag.png'
  import frenchFlag from '../assets/french-flag.png'

  // Add appropriate paths or URLs to your flag images
  const languages = ref([
    { 
      name: 'French', 
      proficiency: 'Native', 
      level: '100%', 
      flag: frenchFlag
    },
    { 
      name: 'English', 
      proficiency: 'Proficient (B2 to C1)', 
      level: '80%', // Assuming C1 is 100%, B2 might be around 80%
      flag: ukFlag
    }
  ]);
  </script>
  
  <style lang="scss" scoped>
  @import '../style.scss';

  .language {
    @include card-style;
    @include tablet {
        padding: $padding-small; // Reduce padding on smaller screens
      }
  
    .language-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      flex-grow: 1;
  
      &:hover .progress {
        width: 100%;
      }
    }
  
    .language-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  
    .language-flag {
      width: 40px;
      height: 26px;
      object-fit: cover;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      border: 1px solid $color-secondary;
      transition: all 0.3s ease;
  
      &:hover {
        transform: scale(1.1); // Enlarges the flag slightly on hover
      }
    }
  
    .language-proficiency {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        box-sizing: border-box;
        text-align: center;
        position: relative; 
        display: flex;
        justify-content: center;
    }
  
    .language-level {
      font-style: italic;
      margin-bottom: 5px;
    }
  
    .progress-bar {
      width: 100%;
      height: 10px;
      overflow: hidden;
      background-color: #ddd;
      border-radius: 5px;
  
      .progress {
        background-color: $color-primary;
        height: 100%;
        transition: width 1s ease;
        width: var(--progress-width, 80%);
      }
    }
  }
  
  </style>
  