import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    // Add icons to the library for easy reference
    library.add(faEnvelope, faLinkedinIn);
  },
};



createApp(App).mount('#app')
