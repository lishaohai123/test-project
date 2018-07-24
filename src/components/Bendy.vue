<template>
    <div>
        <h1>Bendy.vue</h1>
        <!-- <h2>{{sayHello}}</h2> -->
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    console.log("Bendy.vue  beforeCreate ");
  },
  created() {
    console.log("Bendy.vue  Create ");
    this.$store.commit("setSayHello", { message: "Welcome to Bendy.vue" });
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

