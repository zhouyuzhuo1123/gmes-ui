<script type="text/javascript">
	export default {
		data(){
			return {
				zyz:'',
			}
		}
	}
</script>

### radio 单选框

:::demo 
```html 

<gl-radio v-model="zyz" label="b">a</gl-radio>
<gl-radio v-model="zyz" label="a">b</gl-radio>
<gl-radio v-model="zyz" label="c">c</gl-radio>

<script>
export default {
    data(){
    	return {
    		zyz:'',
    	}
    }
}
</script>

```
:::

### radio Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
|v-model   |双向绑定值 |string |---------------------- |-------- |
