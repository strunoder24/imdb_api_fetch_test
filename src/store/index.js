import Vue from 'vue'
import Vuex from 'vuex'

import loader from './modules/loader'
import films from './modules/films'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        loader,
        films,
    }
});