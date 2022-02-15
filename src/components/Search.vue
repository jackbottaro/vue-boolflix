<template>
<div>
  <input type="text" :placeholder="placeholder" v-model="userSearch">
  <button @click="searchOut">cerca</button>
</div>
</template>

<script>
export default {
  name: "Search",
  props: ["placeholder"],
  data() {
    return {
      userSearch: "",
    }
  },
  methods: {
    searchOut(){
      this.$emit("search", this.userSearch)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
