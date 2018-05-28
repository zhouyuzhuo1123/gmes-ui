<script type="text/javascript">
	export default {
		data(){
			return {
				imgs:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3ee577cff91fbe091c5ec412535b6b0e/c2cec3fdfc03924593a6a9b68c94a4c27d1e2573.jpg",
			}
		}
	}
</script>

### table-canvas 

:::demo 
```html 
<div>
	<gl-table-canvas
	  :canvas-height="400" 
	  :canvas-width="400" 
	  :grid_cols="6"  
	  :grid_rows="6"
	  borderc="#ff5000"
	  selectc="#ff5000"
	  :canvas-img="imgs">
	</gl-table-canvas>
</div>

<script>
export default {
    data(){
    	return {
    		imgs:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3ee577cff91fbe091c5ec412535b6b0e/c2cec3fdfc03924593a6a9b68c94a4c27d1e2573.jpg",
    		canvasHeight:400,
			canvasWidth:400,
			grid_cols : 6 ,  
			grid_rows : 6 ,
    	}
    }
}
</script>
```
:::


### table-canvas Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
|canvas-height   |canvas高度 |number |---------------------- |-------- |
|canvas-width   |canvas宽度 |number |---------------------- |-------- |
|grid_cols   |格子横轴格子数 |number |---------------------- |10 |
|grid_rows   |格子纵轴格子数 |number |---------------------- |10 |
|selectc   |选中格子背景色 |string |---------------------- |-------- |
|borderc   |边框颜色 |string |---------------------- |#ff5000|
|click   |点击选中格子 |event |---------------------- |([x,y],$event)|
