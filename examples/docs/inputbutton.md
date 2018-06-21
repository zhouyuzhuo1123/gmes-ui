<script type="text/javascript">
	export default {
		data(){
			return {
				zyz:'',
				zyz1:'',
				lv:true,
			}
		},
	}
</script>

### input-botton input 

:::demo 
```html 
<gl-input-button title="名称" v-model="zyz" :auto-focus="lv" placeholder="我的帅哥"></gl-input-button>

<script>
export default {
    data(){
    	return {
    		zyz:'',
    		lv:true,
    	}
    },
}
</script>

```
:::


### input-botton input 禁用

:::demo 
```html 
<gl-input-button title="名称" v-model="zyz1" :disabled="true" :auto-focus="lv" placeholder="我的帅哥"></gl-input-button>

<script>
export default {
    data(){
    	return {
    		zyz1:'',
    	}
    },
}
</script>

```
:::

### radio Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
|v-model   |双向绑定值 |string |---------------------- |-------- |
|title   | lable值 |string |---------------------- |-------- |
|readonly   | 是否只读 |boolean |---------------------- |false |
|autoFocus   | 自动聚焦（第一次通过true/false确定，以后只需每次取反即可重新聚焦）|boolean |---------------------- |false |
|disabled   | 是否禁用 |boolean |---------------------- |false|
|placeholder   | placeholder |string |---------------------- |请输入内容 |
