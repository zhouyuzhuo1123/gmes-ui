<template>
  <div class="hello">
    <gl-form-input :styles="formInputstyle" swMode="x" :items="configEnums"></gl-form-input>
    <gl-input-button title="名称" v-model="value" :autoFocus="true"></gl-input-button>
    <gl-radio v-model="zyz" label="b">a</gl-radio>
    <gl-radio v-model="zyz" label="a">b</gl-radio>
    <gl-radio v-model="zyz" label="c">c</gl-radio>
    <gl-table-canvas
      :canvasHeight="400" 
      :canvasWidth="400" 
      :grid_cols="6"  
      :grid_rows="6"
      borderc="#ff5000"
      selectc="#ff5000"
      :canvasImg="img"
    ></gl-table-canvas>
    <i class="gl-icon-quanpin"></i>
  </div>
</template>

<script>
  import { Gloading } from '../../src/index'
export default {
  name: 'HelloWorld',
  data(){
    return {
      value:'aa',
      formInputstyle:{color:'#FF5000',fontSize:'1.2rem',margin:'10px 0'},
      configEnums:[[{name:'key',value:'test'},{name:'key',value:'test'},{name:'key',value:'test'}]],
      zyz:'',
      img:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3ee577cff91fbe091c5ec412535b6b0e/c2cec3fdfc03924593a6a9b68c94a4c27d1e2573.jpg",
    }
  },
  mounted(){
    console.log(Gloading)
   const myload2 = Gloading.server({
    name:'ZYZ',
    message:'你大爷'
   });  

   setTimeout(()=>{
    //myload2.close();
   },2000)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  position: relative;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
