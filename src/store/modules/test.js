const state =  {
    count: 0,
    waiting: false
}   

const getters = {
  waiting: state => state.waiting,
  count: state => state.count,
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
    },
    // 显示和英寸waiting
    SHOW_WAITING_MESSAGE(state){
        state.waiting = true;
    },
    // 显示和英寸waiting
    HIDE_WAITING_MESSAGE(state){
        state.waiting = false;
    },
}


const actions = {
    increment({commit}) {
        commit("INCREMENT");
    },
    decrement({commit}) {
        commit("DECREMENT");
    },
    incrementWithValue({commit}, value) {
        commit("SHOW_WAITING_MESSAGE")
        let intValue = parseInt(value);
        setTimeout(() => {
            if(isNaN(intValue)) {
                alert("Not an Interger");
            } else {
                commit("INCREMENT_WITH_VALUE", intValue);
                commit("HIDE_WAITING_MESSAGE");
            }
        }, 2000);
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}

