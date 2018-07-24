<template>
    <div>
        <h1>Henry.vue</h1>
        <!-- <h2>{{sayHello}}</h2> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Henry.vue"
    };
  },
  beforeCreate() {
    console.log("Henry.vue  beforeCreate");
  },
  created() {
    // alert("created");
    console.log("Henry.vue  Create ");
    this.$store.commit("setSayHello", { message: "Welcome to Henry.vue" });
  },
  computed: {
    sayHello: {
      get() {
        // alert("sayHello");
        return this.$store.getters.sayHello;
      },
      set() {}
    }
  }
};
</script>
