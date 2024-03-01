<template>
    <div class="card contact">
      <h2>Contact</h2>
      <div class="contact-info">
        <a href="mailto:ariel.amzallag@efrei.net" class="contact-link">
            <FontAwesomeIcon icon="envelope"/>
            Contact me via Email
        </a>
        <a href="https://www.linkedin.com/in/ariel-amzallag-637710221" class="contact-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon :icon="['fab', 'linkedin-in']" />
            Reach my Linkedin Profile
        </a>
        <p>
            +33782647950
        </p>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import { library } from '@fortawesome/fontawesome-svg-core'
  
  library.add(faLinkedinIn, faEnvelope)
  </script>
  
  <style scoped>
  .contact-link {
    display: flex;
    align-items: center;
    color: var(--color-info);
    text-decoration: none;
    margin-bottom: 0.5rem;
  }
  
  .contact-link .fa-icon {
    margin-right: 0.5rem;
  }
  
  .contact-link:hover {
    text-decoration: underline;
  }
  </style>
  