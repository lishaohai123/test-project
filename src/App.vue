<template>
  <div id="app">
    <app-header></app-header>
    <el-select v-model="is_component_value" @change="changeComponent" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
       >
      </el-option>
    </el-select>
    <div class="height">
      <component :is="is_component_value"></component>
    </div>
    <!-- <keep-alive> -->
    <!-- </keep-alive> -->

    <el-button type="primary" @click="saveData()">保存数据</el-button>
    <div></div>
      <h1>{{"checked:" + checked }}</h1>
      <div></div>
      <h1>{{"checked4:" + checked4}}</h1>
    <p>
        <el-checkbox v-model="checked1" @click.native="clickHandler">隐藏</el-checkbox>
        <el-checkbox v-model="checked2" @click.native="clickHandler">显示</el-checkbox>
    </p>
    <hr>
    <p></p>
    <app-decrement></app-decrement>
    <p></p>
    <p></p>

    <app-Increment></app-Increment>
    <!-- <h1> {{cehcked}}</h1> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Henry from "./components/Henry.vue";
import Emily from "./components/Emily.vue";
import Bucky from "./components/Bucky.vue";
import Bendy from "./components/Bendy.vue";

import Decrement from "./components/crement/Decrement.vue";
import Increment from "./components/crement/Increment.vue";

export default {
  name: "app",
  data() {
    return {
      // checked: true,
      checked4: true,
      // checked2: true,

      options: [
        {
          value: "app-henry",
          label: "Henry"
        },
        {
          value: "app-emily",
          label: "Emily"
        },
        {
          value: "app-bucky",
          label: "Bucky"
        },
        {
          value: "app-bendy",
          label: "Bendy"
        }
      ],
      is_component_value: "app-henry"
    };
  },
  methods: {
    clickHandler (value){
      // alert(value);
    },
    changeChecked1(value){
      
      // this.checked2 = !this.checked2;
      // this.checked1 = !this.checked1;
    },
    changeChecked2(value){
      // this.checked2 = !this.checked2;
      // this.checked1 = !this.checked1;
    },
    saveData(){
      console.log('saving. ...')
      const people = this.$store.getters.people
      console.log(people);
    },
    changeComponent(val) {
      console.log("val");
      console.log(val);
    }
  },
  computed:{
    checked:{
      get(){
        return this.$store.getters.checked;
      },
      set(bool){
        this.$store.commit("UPDATE_CHECKED", bool);
      }
    },
    checked1:{
      get(){
        return this.checked;
      },
      set(value){
        if(this.checked == true){
          return ;  
        }
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
            
          if(this.checked !== value){
            this.checked = value;
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
      }
    },
    checked2:{
      get(){
        return !this.checked;
      },
      set(value){
        if(this.checked === false){
          return ;
        }
        // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
            
        if(this.checked === value){
          this.checked = !value;
        }
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });          
        // });

      }
    },
  },
  components: {
    "app-header": Header,
    "app-henry": Henry,
    "app-emily": Emily,
    "app-bucky": Bucky,
    "app-bendy": Bendy,
    "app-decrement": Decrement,
    "app-Increment": Increment,
  }
};
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
}
.height {
  margin-top: 300px;
  text-align: center;
}
</style>
