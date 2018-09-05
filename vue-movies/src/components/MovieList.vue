<template>
    <section>
        <header class="header">Now Showing</header>
        <ul>
            <li v-for="movie in movies" v-bind:key="movie.id">
                <header>{{movie.title}}</header>
                <img :src="getImageUrl(movie.poster_path)" alt="">
                <section>released:{{movie.release_date}}</section>
            </li>  
        </ul>
    </section>
</template>

<script>
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=2b39f89969ae6ac7cc55346160e79f11&language=en-US&page=1`

export default {
  name: "MovieList",
  data:function() {
      return {
          movies:[]
      }
  },
  mounted:function(){
      fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.movies = data.results.reverse()
      })
  },
  methods:{
      getImageUrl(poster_path){
          return 'https://image.tmdb.org/t/p/w500/' + poster_path
      }
  }
};
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}

.header{
    padding:1em;
    border:4px yellow dotted;
}
ul{
    list-style: none;
}

li{
    display:flex;
    align-items: center;
    flex-direction: column;
}
</style>
