<template>
    <div>
        <h1>Emily.vue</h1>
        <!-- <h2>{{sayHello}}</h2> -->
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    console.log("Emily.vue  beforeCreate ");
  },
  created() {
    console.log("Emily.vue  Create ");
    this.$store.commit("setSayHello", { message: "Welcome to Emily.vue" });
  },
  computed: {
    sayHello: {
      get() {
        return this.$store.getters.sayHello;
      },
      set() {}
    }
  }
};
</script>
