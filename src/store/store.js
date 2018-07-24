import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import course from './modules/course'; 
import test from './modules/test.js'; 
import testForm from './modules/testForm.js'; 

const store = new Vuex.Store({
    
    modules:{
        course,
        test,
        testForm,
    },


})

export default store

