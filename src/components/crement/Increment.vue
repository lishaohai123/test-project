<template>
    <div class="app-increment">
        <hr>
        <h1>increment</h1>
        <p>
            <label>姓名：</label><el-input v-model="name"></el-input>
        </p>
        <p>
            <label>电话号码：</label><el-input v-model="phone"></el-input>
        </p>
        <p>
            <label>say</label><el-input v-model="say"></el-input>
        </p>
        <div v-if="ErrorPhone" class="app-error">电话号码必须是数字</div>
        
    </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  created(){

      this.fetchPeople();
      
  },
  data() {
    return {
      incrementValue: 0,
      ErrorPhone: false
    };
  },
  methods: {
    fetchPeople(){
        this.$store.dispatch("fetchPeopleData").then((res)=>{
            alert(1)
            console.log('哈哈哈');
            console.log(res);
        })
    },
    createPeopleProps(propName){
        if(this.$store.getters.people[propName]){
            return this.$store.getters.people[propName];
        }else{
            this.$store.commit('UPDATE_PEOPLE', {newProp: propName, value: null} )
            return null;
        }
    },
    setPeopleProps(propName, newValue){
        if(isNaN(newValue)){
            this.ErrorName = true
        }else{
            this.ErrorName = false
            this.$store.commit('UPDATE_PEOPLE', {newProp: propName, value: newValue} )
        }
    }
  },
  computed: {
      phone:{
          get(){ return this.createPeopleProps('phone') },
          set(newValue){ this.setPeopleProps('phone', newValue) }
      },
      name:{
          get(){ return this.createPeopleProps('name') },
          set(newValue){  this.setPeopleProps('name', newValue) }
      },
      say:{
          get(){ return this.createPeopleProps('say') },
          set(newValue){  this.setPeopleProps('say', newValue) }
      }
  }
};
</script>

<style>
    .app-increment{
        height: 1000px;
    }
    .app-error {
        color: red;
    }
</style>
