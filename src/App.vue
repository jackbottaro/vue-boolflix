<template>
  <div id="app">
    <header>
      <div class="col">
        <img id="logo" src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg" alt="">
      </div>
      <div class="col search-area">
         <Search placeholder="Cerca un titolo" @search="search" />
      </div>
    </header>

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




import axios from "axios"

export default {
  name: "App",
  props: [],
  components: {
    Search,
    Card,

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
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body{
    background-color: #EEF2F7;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
font-family: 'Red Hat Display', sans-serif;
  scroll-behavior: smooth;
}


header{
  height: 75px;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
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
  padding: 3px 15px;
}

button{
  background-color: #d81f26;
  border: 0;
  color: white;
  font-weight: bold;
  padding: 3px 14px;
  border-radius: 5px;
  text-transform: uppercase;
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
  color: #00000073;
  font-weight: bold;
  font-size: 158px;
  text-align: center;
margin-top: 30px;
}

// SCROLLBAR 
*::-webkit-scrollbar {
  width: 2px;
  
}

body::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: black;
  border-radius: 20px;  
  
}

*::-webkit-scrollbar-thumb {
  background-color: lightgray;    
  border-radius: 20px;

}
</style>
