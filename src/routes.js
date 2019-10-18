import VueRouter from 'vue-router';
import { store } from '~s'
import Home from '~p/Home.vue'

const Favourite = () => import('~p/Favourite.vue');


let mode = '';
if (process.env.NODE_ENV === 'production') {
    mode = 'history';
}


const routes = [
    { path: '/', component: Home, name: 'home'},
    { path: '/favourite', component: Favourite, name: 'favorite'}
];


export const router = new VueRouter({
    routes,
    mode,
});

router.beforeEach((to, from, next) => {
    store.dispatch('scriptOnload');
    next();
});

router.afterEach((to, from) => {
    store.dispatch('scriptIsLoaded');
});