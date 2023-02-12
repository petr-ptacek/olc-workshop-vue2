import Vue from 'vue';
import '@/assets/style/main.scss';

import App from './App.vue';
import TheLoader from "@/components/TheLoader.vue";
import { eventBus } from "@/eventBus";

Vue.component("TheLoader", TheLoader);

const vm = new Vue({
    render: (h) => h(App)
}).$mount('#app');

if (process.env.NODE_ENV === "development") {
    window.$_APP_ = vm;
    window.$_APP_EVENT_BUS_ = eventBus;
}