const state =  {
    people:{}
}   

const getters = {
    donePhone: state => state.phone,
    doneName:  state => state.name,
    people:  state => state.people
}

const mutations = {
    UPDATE_PHONE(state, value){
        state.phone = value;
    },

    UPDATE_PEOPLE (state, {newProp, value}) {
     
        state.people[newProp] = value
    },
    UPDATE_FETCH_PEOPLE (state, people) {
        const {...statePeople} = state.people
        for(let item in people){
            if(statePeople.hasOwnProperty(item)){
                statePeople[item] = people[item];
            }
        }
        state.people = {...statePeople};
    }
   
}


const actions = {
    fetchPeopleData({commit, state}){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let people = {name: 'henry', phone: 1234}
                commit('UPDATE_FETCH_PEOPLE', people)
            }, 2000);
        })
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}

