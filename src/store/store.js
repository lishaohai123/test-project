import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import course from './modules/course'; 
import test from './modules/test.js'; 

const store = new Vuex.Store({
    
    modules:{
        course,
        test
    },


})

export default store

