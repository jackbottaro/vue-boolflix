<template>
  <div>
    <header>
      <div class="col">
        <img id="logo" src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg" alt="">
      </div>
      <div class="col search-area">
         <Search placeholder="Cerca un titolo" @search="search" />
      </div>
    </header>

    <Test />
    <div class="container">
       <h2>Film</h2>

        <div id="movies">
        <Card v-for="movie in movies" :key="movie.id" :item="movie"/>
    </div>

    <h2>Serie tv</h2>
    <div id="series">
      
        <Card v-for="serie in series" :key="serie.id" :item="serie"/>
    </div>
    </div>
    
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Card from "./components/Card.vue";
import Test from "./components/Test.vue";


import axios from "axios"

export default {
  name: "App",
  props: [],
  components: {
    Search,
    Card,
    Test,

  }, 
  data() {
    return {
      movies: [],
      series: [],
      api: {
        language: "it-IT",
        baseUri: "https://api.themoviedb.org/3",
        key: "9821bc2a93ba1a28cbc3936527a04e7f",
        upHere : true,
      }
    }
  },
  methods: {

    search(term){
      if(!term){
        this.movies = [];
        this.series = [];
        return;
      }
      const {key, language} = this.api;

      const config = {
        params: {
          language,
          api_key: key,
          query: term,
        },
    };

    this.fetchApi(`search/movie`, config, "movies");
    this.fetchApi(`search/tv`, config, "series");

    },


    fetchApi(endpoint, config, target){
      axios.get(`${this.api.baseUri}/${endpoint}`, config).then((res) => {
        this[target] = res.data.results;
      })
    },
  }
};
</script>

<style lang="scss">

  
body{
  background-color: #333f48;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}


header{
  height: 75px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#logo{
  width: 100px;
  height: 100%;
  margin-left: 50px;
  animation: pulse 2s  infinite ;
  @keyframes pulse {
	0% {
		transform: scale(1);
	}

  50% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(1);
	}
  }
}

.search-area{
  margin-right: 50px;
}

input{
  margin: 15px;
}

button{
  background-color: #d81f26;
  border: 0;
  color: white;
  font-weight: bold;
  padding: 2px 11px;
  border-radius: 5px;
}

#movies, #series{
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}

.container{
  width: 1400px;
  margin: 0 auto;

}

h2{
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  padding: 30px;
}
</style>
