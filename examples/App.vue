<template>
  <div id="app">
    <div class="header">
      <div style="width:1200px;margin:0 auto;height:50px;
    align-items: center;display:flex;">
        <img src="./assets/evun_logo.png"/>
      </div>
    </div>
    <div class="body">
      <main-nav></main-nav>
      <div class="body-right gmes-md"><router-view/></div>
    </div>
  </div>
</template>
<script>

import mainNav from './components/mainNav.vue'

export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components:{
    mainNav
  }
}
</script>

<style lang="scss" scoped>

@import 'highlight.js/styles/color-brewer.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .body{
    display:flex;
    width: 1200px;
    margin: 0 auto;
    .body-right{
      flex:1
    }
  }
  .header{
    background: #444;
    color: #FFF;
    height: 50px;
  }
  .img{
    width:1000px;
  }
}
</style>