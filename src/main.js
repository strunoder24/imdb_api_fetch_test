import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/styles/common.scss'

import './config/axiosConf';

import { store } from './store';
import { router } from './routes';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});