<template>
    <div class="card interests-hobbies">
      <h2>Interests & Hobbies</h2>
      <ul>
        <li v-for="interest in interests" :key="interest.title">
          <strong @click="toggleDescription(interest.title)">
            {{ interest.title }}:
          </strong>
          <p v-if="interest.showDescription">{{ interest.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const interests = ref([
    { title: 'Guitar', description: '4 years\' experience playing and learning music.', showDescription: true },
    { title: 'Story Writing', description: 'Passionate about creating engaging narratives and characters.', showDescription: true },
    { title: 'World Building', description: 'Developing intricate worlds for storytelling and gaming.', showDescription: true },
    { title: 'Tabletop Role-Playing Games', description: 'Active player and dungeon master in D&D, focusing on creative storytelling and team dynamics.', showDescription: true }
  ]);
  
  const toggleDescription = (title) => {
    const interest = interests.value.find(i => i.title === title);
    if (interest) {
      interest.showDescription = !interest.showDescription;
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../style.scss';

  .interests-hobbies {
    @include card-style;
    @include tablet {
        padding: $padding-small; // Reduce padding on smaller screens
      }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    li {
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        background-color: lighten($color-card-background, 5%);
        border-radius: --border-radius-small;
        padding: 0.2rem;
      }
    }
    
    strong {
      color: $color-primary;
      cursor: pointer;
      transition: color 0.3s, transform 0.3s;
      display: inline-block;
      &:hover {
        color: $color-info;
        transform: scale(1.05);
      }
    }
    
    p {
      margin: 0.5rem 0;
      color: $color-secondary;
      font-size: 0.9rem;
      transition: transform 0.3s, opacity 0.3s;
      &:hover {
        transform: translateX(5px);
        opacity: 0.9;
      }
    }
  }
  
  
  </style>
  