<template>
  <div id="app">
   <h1>Filters & Mixins</h1>
    <Filters/>
  </div>
</template>

<script>
import Filters from './components/Filters.vue'

export default {
  name: 'app',
  components: {
    Filters
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
