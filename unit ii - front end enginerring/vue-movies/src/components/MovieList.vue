<template>
    <section>
        <header class="header">Now Showing</header>
        <ul>
            <Movie  
              v-for="movieFromForLoop in movies"
              :key="movieFromForLoop.id" 
              :movieDataAsProp="movieFromForLoop"
              v-on:add-to-seen="addToList"
              />
        </ul>
        <header>Movies I saw</header>
        <ul>
            <li v-for="movie in seenMovies"
                :key="movie.id"
                 >
                 {{movie.title}}
            </li>
        </ul>
    </section>
</template>

<script>
import axios from 'axios'
import Movie from "./Movie.vue";
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=2b39f89969ae6ac7cc55346160e79f11&language=en-US&page=1`;

export default {
  name: "MovieList",
  components: {
    Movie
  },
  data: function() {
    return {
      movies: [],
      seenMovies: []
    };
  },
  mounted: function() {
    axios.get(URL)
      .then(resp => {
        console.log(resp);
        this.movies = resp.data.results.reverse();
      });
  },
  methods: {
    addToList: function(seenMovie) {
      console.log("caught event", seenMovie);
      this.seenMovies.push(seenMovie);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.header {
  padding: 1em;
  border: 4px yellow dotted;
}
ul {
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
