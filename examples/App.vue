<template>
  <div id="app">
    <div class="header">
      <div style="width:1200px;margin:0 auto;height:50px;line-height:50px;position:relative">
        <img src="./assets/evun_logo.png" style="display:inline-block;vertical-align: middle;"/>
      </div>
    </div>
    <div class="body g-scroll">
      <div class="body-content">
        <main-nav></main-nav>
        <div class="body-right gmes-md"><router-view/></div>
      </div>
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
  height:100%;
  overflow-y: hidden;
  .body{
    width:100%;
    height: 100%;
    overflow-y: scroll;
  }
  .body-content{
    width: 1200px;
    margin: 50px auto 0;
    .body-right{
      margin-left:260px;
      height:100%;
    }
  }
  .header{
    background: #20a0ff;
    color: #FFF;
    height: 50px;
    position: fixed;
    width: 100%;
    top: 0;
  }
  .img{
    width:1000px;
  }
}
</style>