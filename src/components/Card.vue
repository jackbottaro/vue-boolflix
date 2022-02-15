<template>
<div id="container">

  <div class="poster">
    <img :src="`${basePhotoUri}${photoSize}${this.item.poster_path}`">
    

    
    <div class="info">
      <ul>
        <li id="film-name">{{item.title || item.name}}</li>
        <li id="og-film-name"><em>{{item.original_title || item.original_name}}</em></li>
        <li id="lang">
          <img v-if="hasFLag" :src="flagSrc" :alt="item.original_language">
          <span v-else>
            {{item.original_language}} 
          </span>
        <li id="vote">{{item.vote_average}}</li>

        <li id="sinox">
          {{item.overview}}
        </li>
      </ul>
    </div>
  </div>
  <!-- <ul id="card">
        <li id="poster"><img :src="`${basePhotoUri}${photoSize}${this.item.poster_path}`"></li>
        
      </ul> -->
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
        upHere : false,
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
// const image = getElementById("poster").style.backgroundImage=`${this.basePhotoUri}${this.photoSize}${this.item.poster_path}`;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// #card:hover{
//   // position: absolute;
//   background-color: black;
//   width: 300px;
// height: 100%;

// }



// ## CARD SECTION

.poster{
  width: 300px;
  height: 450px;
  margin: 20px 10px;
  position: relative;

}

.poster img{
  border-radius: 10px;
}


.poster:hover {

  .info{
    display: block;
  }

  img{
    opacity: 0.1;
  }
}

.info{
position: absolute;
top: 20px;
left: 10px;
overflow-y: auto;
  width: 285px;
  height: 420px;
  color: white;
  display: none;
  text-align: center;
  
}

// INFO SECTION
#film-name{
  font-weight: bold;
  font-size: 1.3rem;

}

#og-film-name{
  font-size: 0.9rem;
  font-style: italic;
  padding-top: 0px;


}

li{
  padding: 6px 0; 
}

ul{
  list-style-type: none;
}

#sinox{
  line-height: 22px;
  text-align: left;

}
</style>

