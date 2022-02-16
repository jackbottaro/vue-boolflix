<template>
<div id="container">

  <div class="poster box">
    <img :src="poster">
    
  <!-- <div id="film-name">
    {{item.title || item.name}}
  </div> -->
    
    <div class="info">
      <ul>
        <li id="film-name">{{item.title || item.name}}</li>
        <li id="og-film-name"><em>{{item.original_title || item.original_name}}</em></li>
        <li id="lang">
          <img v-if="hasFLag" :src="flagSrc" :alt="item.original_language">
          <span v-else>
            {{item.original_language}} 
          </span>
        <li id="vote">
          <i class="fa-star" :class="i <= vote ? 'fa-solid' : 'fa-regular' " v-for="i in 5" :key="i"></i>
        </li>

        <li id="sinox">
          {{item.overview}}

        </li>
      </ul>
    </div>
  </div>

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
        placeHolder: "https://i.postimg.cc/DyVRZcf3/template.jpg"
    };
  },
  computed: {
    flagSrc() {
      return require(`@/assets/img/${this.item.original_language}.png`);
    },
    hasFlag() {
      return this.flags.includes(this.item.original_language);
    },
    vote(){
      return Math.ceil(this.item.vote_average / 2)
    },
    poster(){
      if(!this.item.poster_path) return this.placeHolder;
      return `${this.basePhotoUri}${this.photoSize}${this.item.poster_path}`
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



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
cursor: pointer;

  .info{
    display: block;
  }

  .poster img{
    opacity: 0.1;
  }
}

.info{
    position: absolute;
    top: 0px;
    left: 0px;
    overflow-y: auto;
    width: 300px;
    height: 450px;
    display: none;
    text-align: center;
    background-color: white;
    border-radius: 10px;
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
  padding: 8px 15px;
}

#sinox{
  line-height: 22px;
  text-align: left;
  font-weight: 500;
text-indent: 15px;
}

// SHADOW
.box {
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  background-color: white;
}

// RATING
i{
  padding: 3px;
  color: #E50914;
}
</style>

