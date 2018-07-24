<template>
    <div>
        <!-- <el-button type="primary" @click="increment"> + 1 </el-button> -->
        <el-button type="primary" @click="add"> + 1 </el-button>
        <el-button type="primary" @click="decrement"> - 1 </el-button>
        <hr>
        <p></p>
        <div>
            <el-input v-model="incrementValue" ></el-input>
            <el-button type="primary" @click="incrementWithValue">increment</el-button> 
        </div>
        <!-- 展示信息 -->
        <div v-if="show">
          waiting ... 
        </div>
        <h1>{{count}}</h1>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      incrementValue: 0
    };
  },
  methods: {
    // increment(){
    //     this.$store.dispatch("increment");
    // },
    // decrement(){
    //     this.$store.dispatch("decrement");
    // },

    ...mapActions(["increment", "decrement"]),
    // mapActions 对应做出改变
    ...mapActions({
      add: "increment"
    }),
    incrementWithValue() {
      try {
        this.$store.dispatch("incrementWithValue", this.incrementValue);
      } catch (error) {
        alert(error);
      }
    }
  },
  computed: {
    show() {
      return this.$store.getters.waiting;
    },
    count() {
      return this.$store.getters.count;
    }
  }
};
</script>


