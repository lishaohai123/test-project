const state =  {
    sayHello:{
        message: "哈哈哈哈" 
    }
}   

const getters = {
    sayHello: state => state.sayHello,
}

const mutations = {
    setSayHello(state, data){
        state.sayHello = data;
    }
}


const actions = {

}


export default {
    state,
    getters,
    mutations,
    actions
}

