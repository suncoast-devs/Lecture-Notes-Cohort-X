<template>
  <div id="app">
    <ScoreCounter teamId="5"/>
  </div>
</template>

<script>
import ScoreCounter from './components/ScoreCounter.vue'

export default {
  name: 'app',
  components: {
    ScoreCounter
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
