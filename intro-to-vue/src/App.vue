<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <WelcomeMessage userName="Jimbo" />
    <Counter/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WelcomeMessage from './components/WelcomeMessage.vue'
import Counter from './components/Counter.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    WelcomeMessage, 
    Counter
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

h1{
  color:green;
}

img{
 animation: img-spin infinite 20s linear;
}

@keyframes img-spin {
  from{transform: rotate(0deg);}
  to{transform: rotate(360);}
}

</style>
