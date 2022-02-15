<template>
<div id="container">
  <ul id="card">
        <li id="poster"><img :src="`${basePhotoUri}${photoSize}${this.item.poster_path}`"></li>
        <li id="film-name">{{item.title || item.name}}</li>
        <li id="og-film-name"><em>{{item.original_title || item.original_name}}</em></li>
        <li id="lang">
          <img v-if="hasFLag" :src="flagSrc" :alt="item.original_language">
          <span v-else>
            {{item.original_language}} 
          </span>
        <li id="vote">{{item.vote_average}}</li>

        <li>
          {{item.overview}}
        </li>
      </ul>
</div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      flags : ["it", "en"],
        basePhotoUri: "https://image.tmdb.org/t/p/",
        photoSize: "w300/",
    };
  },
  computed: {
    flagSrc() {
      return require(`@/assets/img/${this.item.original_language}.png`);
    },
    hasFlag() {
      return this.flags.includes(this.item.original_language);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#card{
margin: 10px;
width: 300px;
height: 100%;
overflow-y: auto;
position: relative;
}

// #card:hover{
//   // position: absolute;
//   background-color: black;
//   width: 300px;
// height: 100%;

// }


#poster img{
  
  margin-bottom: 15px;
  border-radius: 5px;
}
#container{

}

  


#film-name, #og-film-name, #vote, #lang{
  padding: 0 5px;
}


#film-name{
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  text-transform: capitalize;

}

#og-film-name{
font-size: 15px;
}

ul{
  list-style-type: none;
}

</style>

