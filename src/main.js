import Vue             from 'vue';
import App             from './App.vue';
import '@/assets/css/main.pcss';
import { UserService } from '@/service';

UserService.getAsync().then(res => {
  console.log(res);
});

new Vue({
  render: (h) => h(App)
}).$mount('#app');
