<template>
    <div>
        <h1>Bucky.vue</h1>
        <!-- <h2>{{sayHello}}</h2> -->
    </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    console.log("Bucky.vue  beforeCreate ");
  },
  created() {
    this.getChineseCourse();
    console.log("Bucky.vue  Create ");
    this.$store.commit("setSayHello", { message: "Welcome to Bucky.vue" });
  },
  methods: {
    getChineseCourse() {
      setTimeout(() => {
          
      }, 1000);
    }
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
