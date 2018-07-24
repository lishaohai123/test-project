<template>
  <div class="app-header">
    <h1>{{ sayHello.message }}</h1>
  </div>
</template>

<script>
export default {
  computed:{
    sayHello(){
      return this.$store.getters.sayHello;
    }
  }
}
</script>

<style>
  h1{
    display: inline-block
  }
</style>



