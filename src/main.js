import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';  
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 
library.add(
  faInstagram,
  faLinkedin,
  faGithub,
  faEnvelope,
  faTwitter
)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
