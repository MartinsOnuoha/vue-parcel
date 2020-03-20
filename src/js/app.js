import "regenerator-runtime/runtime.js";
import App from '../App.vue';

window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: h => h(App),
  });
})
