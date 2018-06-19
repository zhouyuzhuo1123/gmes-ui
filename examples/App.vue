<template>
  <div id="app">
    <div class="header">
      <div style="width:1200px;margin:0 auto;height:60px;line-height:60px;position:relative">
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
    box-shadow: 0 10px 60px 0 rgba(29,29,31,.07);
  }
  .img{
    width:1000px;
  }
}
</style>