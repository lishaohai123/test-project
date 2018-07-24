import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import course from './course.js'; 

const store = new Vuex.Store({
    
    modules:{
        course
    }
})

export default store

