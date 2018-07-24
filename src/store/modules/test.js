const state =  {
    count: 0
}   

const getters = {
  
}

const mutations = {

    // 加1
    INCREMENT(state) {
        state.count ++ 
    },

    // 减1
    DECREMENT(state) {
        state.count --
    },
    INCREMENT_WITH_VALUE(state, value) {
        state.count += value;
    }
}


const actions = {
    increment({commit}) {
        commit("INCREMENT");
    },
    decrement({commit}) {
        commit("DECREMENT");
    },
    incrementWithValue({commit}, value) {
        commit("INCREMENT_WITH_VALUE", parseInt(value))
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}

