import App from '../App.vue';
import Vue from 'vue';

window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: h => h(App),
  });
})
