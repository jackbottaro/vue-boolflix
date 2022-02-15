<template>
<header>
  <div class="col">
    <img src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg" alt="">
  </div>
  <div class="col search-area">
    <input type="text">
    <button>CERCA</button>
  </div>
</header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
  height: 75px;
  background-color: #221f1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img{
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

</style>
