<template>
    <section>
        <header class="header">Now Showing</header>
        <ul>
            <li>
                <header>Toy Story</header>
                <img src="http://placekitten.com/200/300" alt="">
                <section>genre</section>
            </li>  
             <li>
                <header>Toy Story</header>
                <img src="http://placekitten.com/200/300" alt="">
                <section>genre</section>
            </li>   
            <li>
                <header>Toy Story</header>
                <img src="http://placekitten.com/200/300" alt="">
                <section>genre</section>
            </li>   
            <li>
                <header>Toy Story</header>
                <img src="http://placekitten.com/200/300" alt="">
                <section>genre</section>
            </li>
        </ul>
    </section>
</template>

<script>
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=<<your key here>>>&language=en-US&page=1`

export default {
  name: "MovieList"
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
