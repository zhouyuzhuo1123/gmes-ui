<template>
  <canvas id="a_canvas" 
  :height="canvasHeight" 
  :width="canvasWidth" 
  :style="{'border-top':'1px solid' + borderc,'border-left':'1px solid'+borderc}" 
  @click="coordinate">
</canvas>
</template>
<script>
export default {   
  name:'TableCanvas',
  data(){
    return {
      a_canvas:null,
      context:null,
      imgObj:null,
      cell_width:0,
      cell_height:0,
    }
  },
  props:{
    canvasHeight:{
        type:Number,
        default:400,
    },
    canvasWidth:{
        type:Number,
        default:400,
    },
    grid_cols:{
        type:Number,
        default:10,
    },
    grid_rows:{
        type:Number,
        default:10,
    },
    borderc:{
        type:String,
        default:"#000",
    },
    selectc:{
        type:String,
        default:'#000',
    },
    canvasImg:{
        type:String,
        default:'',
    }
  },
  methods:{
    imgload(){
        const vm = this;
        const {
            context,
            drawtable,
            canvasHeight,
            canvasWidth,
            canvasImg,
        } = this;
        context.clearRect(0,0,canvasWidth,canvasHeight);
        this.imgObj = new Image();
        this.imgObj.src = canvasImg;
        this.imgObj.onload = function(){
            vm.drawtable(this)
        }
    },
    coordinate(e){
        const {
            cell_width,
            cell_height,
            context,
            drawtable,
            imgObj,
            canvasHeight,
            canvasWidth,
        } = this;
        const {
            layerX,
            layerY
        } = e;//获取canvas中的点击位置坐标
        var x_line = Math.floor(layerX/cell_width);
        var y_line = Math.floor(layerY/cell_height);
        context.clearRect(0,0,canvasWidth,canvasHeight);
        drawtable(imgObj);
        context.fillStyle = this.selectc;
        context.fillRect(x_line*cell_width,y_line*cell_height,cell_width,cell_height);
        this.$emit('click',[x_line,y_line],e);
    },
    drawtable(img){
        const {
            a_canvas,
            imgObj,
            context,
            canvasHeight,
            canvasWidth,
            grid_cols,
            grid_rows,
        } = this;
        
        if(imgObj.width >= imgObj.height){
            var imgH = imgObj.height*canvasHeight/imgObj.width;
            var top = (canvasHeight-imgH)/2;
            context.drawImage(imgObj, 0, top, canvasWidth, imgH);
        }else{
            var imgW  = imgObj.width*canvasWidth/imgObj.height;
            var left = (canvasWidth - imgW)/2;
            context.drawImage(imgObj, left, 0, imgW, canvasHeight);
        }
        context.fillStyle = "rgba(255,255,255,0)";
        context.fillRect(0,0,a_canvas.width,a_canvas.height);
        // 描绘边框
        this.cell_height = a_canvas.height / grid_rows;
        this.cell_width = a_canvas.width / grid_cols;
        context.lineWidth = 1;
        context.strokeStyle = this.borderc;
        // 结束边框描绘
        context.beginPath();
        // 准备画横线
        for (var col = 0; col <= grid_cols; col++) {
        var x = Math.ceil(col * this.cell_width);
            context.moveTo(x-0.5,0); 
            context.lineTo(x-0.5,a_canvas.height);
        }
        // 准备画竖线
        for(var row = 0; row <= grid_rows; row++){
            var y = Math.ceil(row * this.cell_height);
            context.moveTo(0,y-0.5);
            context.lineTo(a_canvas.width, y-0.5);
        }
        //由于画布划线是画在 像素中线 所以当linewidth = 奇数时 会导致 左右都0.5 由于浏览器像素最小为1 导致0.5被自动补全。
        //当坐标点（8.5--11.5）+10*n;有效
        context.stroke();
    },
    
  },    
  mounted(){
    this.a_canvas = document.getElementById('a_canvas');
    this.context = this.a_canvas.getContext("2d");
    this.imgload();
  },
  watch:{
      canvasImg(val,oldval){
          if(val != oldval){
              this.imgload();
          }
      }
  },
}
// canvasHeight="400" 画布高度
// canvasWidth="400" 画布宽度
// grid_cols="10"  画布表格行数
// grid_rows="10" 画布表格列数
// borderc="#ff5000" 画布表格线颜色
// selectc="#ff5000" 画布选择块颜色
// canvasImg="img" 画布背景图
</script>

