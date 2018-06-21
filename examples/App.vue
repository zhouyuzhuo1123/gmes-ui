<template>
  <div id="app">
    <div class="header">
      <div class="content">
        <img src="./assets/evun_logo.png" width="100px" />
        <span>组件</span>
      </div>
    </div>
    <div class="body g-scroll">
      <div class="body-content" v-if="isHome">
        <main-nav></main-nav>
        <div class="body-right gmes-md"><router-view/></div>
      </div>
      <div class="body-content" v-else>
        <div class="homePage">
          <img src="./assets/logo.png" width="260" />
          <p class="des">一款轻量级、模块化的前端 UI 组件库</p>
        </div>
        <div class="footer">
            <a @click="goInit">开始使用</a>
            <a href="https://github.com/zhouyuzhuo1123/gmes-ui">github</a>
        </div>
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
     isHome:false,
    }
  },
  components:{
    mainNav
  },
  created(){
    this.isHome = /\w/.test(window.location.hash) ? true : false
  },
  methods:{
    goInit(){
      this.isHome = true;
      this.$router.push('/install');
    }
  },
  watch:{
    $route(newVal,old){
      this.isHome = /\w/.test(window.location.hash) ? true : false
    }
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
    width: 88%;
    margin: 80px auto 0;
    .body-right{
      margin-left:260px;
      height:100%;
    }
    .homePage{
      width: 100%;
      margin: 0 auto;
      text-align: center;
      padding: 130px 0;
      .des{
        margin-top: 56px;
        color: #8994c6;
        font-size: 32px;
      }
    }
  }
  .header{
    height: 80px;
    position: fixed;
    width: 100%;
    background:#fff;
    z-index:999;
    top: 0;
   // box-shadow: 0 10px 60px 0 rgba(29,29,31,.07);
    .content{
      width:90%;
      margin:0 auto;
      height:80px;
      line-height:80px;
      position:relative;
      span{
        float:right;
        color:#20a0ff
      }
      img{
        display:inline-block;
        vertical-align: middle;
      }
    }
  }
  .img{
    width:1000px;
  }
  .footer{
    position:relative;
    text-align:center;
    a{
      color: #316de9;
      padding: 8px 24px;
      margin: 30px;
      font-size: 28px;
      border-radius: 28px;
      border: 1px solid #316de9;
      display: inline-block;
      width: 150px;
      cursor: default;
    }
  }
  .footer:after{
    content: "";
    display: block;
    position: absolute;
    top: -80px;
    width: 100%;
    height: 250px;
    background: #fff;
    -webkit-box-shadow: 0 -4px 30px 0 #dfe1e6;
    box-shadow: 0 -4px 30px 0 #dfe1e6;
    -webkit-transform: skewY(-4deg);
    transform: skewY(-4deg);
    z-index: -1;
    
  }
}
</style>