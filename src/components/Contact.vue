<template>
    <div class="card contact">
      <h2>Contact</h2>
      <div class="contact-info">
        <a href="mailto:ariel.amzallag@efrei.net" class="contact-link">
          <FontAwesomeIcon icon="envelope" class="contact-icon"/>
          Contact me via Email
        </a>
        <a href="https://www.linkedin.com/in/ariel-amzallag-637710221" class="contact-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon :icon="['fab', 'linkedin-in']" class="contact-icon"/>
          Reach my Linkedin Profile
        </a>
        <div class="phone-contact">
          <FontAwesomeIcon :icon="['fas', 'phone']" class="contact-icon"/>
          <span>+33 782647950</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
  import { library } from '@fortawesome/fontawesome-svg-core';
  
  library.add(faLinkedinIn, faEnvelope, faPhone);
  </script>
  
  <style lang="scss" scoped>
  @import '../style.scss';

  .contact {
    @include card-style;
    @include tablet {
        padding: $padding-small; // Reduce padding on smaller screens
      }
  
    h2 {
      margin-bottom: 1rem;
    }
  
    .contact-info {
      display: grid;
      gap: 0.5rem;
    }
  
    .contact-link, .phone-contact {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: --color-info;
      text-decoration: none;
      gap: 0.5rem;
  
      .contact-icon {
        font-size: 1%; 
      }
  
      &:hover {
        transform: translateX(5px);
        color: --color-primary;
        text-decoration: underline;
  
      }
    }
    .contact-link, .phone-contact {
      @include hover-effect;
    }
  }
  
  </style>
  