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
    <hr>
    <p></p>
    <app-decrement></app-decrement>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Henry from "./components/Henry.vue";
import Emily from "./components/Emily.vue";
import Bucky from "./components/Bucky.vue";
import Bendy from "./components/Bendy.vue";

import Decrement from "./components/crement/Decrement.vue";

export default {
  name: "app",
  data() {
    return {
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
    saveData(){
      console.log('saving. ...')
    },
    changeComponent(val) {
      console.log("val");
      console.log(val);
    }
  },
  components: {
    "app-header": Header,
    "app-henry": Henry,
    "app-emily": Emily,
    "app-bucky": Bucky,
    "app-bendy": Bendy,
    "app-decrement": Decrement,
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
