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
  
  const skills = ref([
  { name: 'Python', level: 'Intermediate' },
  { name: 'C#', level: 'Beginner' },
  { name: 'Project Management', level: 'Beginner' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'HTML5', level: 'Intermediate' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'SQL', level: 'Novice' },
  { name: 'PHP', level: 'Novice' },
  { name: 'MariaDB, MySQL, MongoDB', level: 'Novice' },
  { name: 'Vue.js', level: 'Beginner' },
  { name: 'Three.js', level: 'Beginner' },
  { name: 'Alpine.js', level: 'Novice' },
  { name: 'Tailwind CSS', level: 'Novice' },
  { name: 'React.js', level: 'Beginner' },
  { name: 'Node.js', level: 'Novice' },
  { name: 'Java', level: 'Novice' },
  { name: 'Kotlin', level: 'Beginner' },
]);
  </script>
  
  <style lang="scss" scoped>
  @import '../style.scss';

  .skills {
    @include card-style;
    position: relative;
    overflow: hidden;
    border-radius: 5%;
    @include tablet {
        padding: $padding-small; // Reduce padding on smaller screens
      }
    
    &:before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      border-radius: 50%;
      z-index: -1;
    }
  
  
    ul {
      list-style: none;
      padding-left: 0;
      margin: 0;
      perspective: 800px;
    }
    
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      transform: rotateX(0deg);
      transition: transform 0.3s ease-out;
      
      &:hover {
        transform: rotateX(10deg);
      }
    }
    
    .skill-name {
      color: $color-base;
      font-size: 1rem;
      font-weight: 700;
    }
    
    .skill-level {
      background-color: $color-primary;
      color: $color-background;
      padding: 0.2rem 0.6rem;
      border-radius: $border-radius;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      
      &:hover {
        background-color: lighten($color-primary, 10%);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }
    }
    
    @media (max-width: 768px) {
      .skills {
        padding: 1rem;
      }
    }
  }
  
  
  </style>
  