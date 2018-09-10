<template>
    <li>
        <header>{{movieDataAsProp.title}}</header>
        <!-- <img :src="getImageUrl(movieDataAsProp.poster_path)" alt=""> -->
        <section>released:{{movieDataAsProp.release_date}}</section>

        <h4 v-if="isSeen" >saw it!</h4>
        <button v-else v-on:click="markAsSeen"> Seen it! </button>
    </li>  
</template>

<script>
export default {
  name: "Movie",
  props: {
    movieDataAsProp: Object
  },
  data: function() {
    return {
      isSeen: false
    };
  },
  methods: {
    getImageUrl: function(poster_path) {
      return "https://image.tmdb.org/t/p/w500/" + poster_path;
    },
    markAsSeen: function() {
      this.isSeen = true;
      console.log("firing events", this.movieDataAsProp);
      this.$emit("add-to-seen", this.movieDataAsProp);
    }
  }
};
</script>

<style>
</style>
