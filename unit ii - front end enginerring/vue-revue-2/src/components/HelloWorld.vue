<template>
  <div class="hello">
    
      </div>
</template>

<script>

import Vue from 'vue'

Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

export default {
  name: "HelloWorld",
  mounted: function() {
    const _url =
      "https://api.themoviedb.org/3/search/movie?api_key=<<your_key>>&language=en-US&query=spaceballs&page=1&include_adult=false";
    fetch(_url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
