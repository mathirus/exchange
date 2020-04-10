

require('./bootstrap');

import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router'
import { dollarFilter, percentFilter } from './filter'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'


Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.use(BootstrapVue);
Vue.use(Chartkick.use(Chart));
Vue.use(VueSpinners)


window.Vue = require('vue');

Vue.component('header-component', require('./components/header-component.vue').default);
Vue.component('icon-component', require('./components/icon-component.vue').default);
Vue.component('table_component', require('./components/table_component.vue').default);
Vue.component('indexComponent', require('./components/indexComponent.vue').default);






const app = new Vue({

    el: '#app',
    router
});
