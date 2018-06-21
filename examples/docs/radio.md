<script type="text/javascript">
	export default {
		data(){
			return {
				zyz:'',
			}
		},
	}
</script>

### radio 单选框

:::demo 
```html 
<gl-radio v-model="zyz" size="mini" label="b">选</gl-radio>
<gl-radio v-model="zyz" size="mini" label="a">选</gl-radio>
<gl-radio v-model="zyz" size="mini" label="c">选</gl-radio>

<gl-radio v-model="zyz" label="b">选择一</gl-radio>
<gl-radio v-model="zyz" label="a">选择二</gl-radio>
<gl-radio v-model="zyz" label="c">选择三</gl-radio>

<gl-radio v-model="zyz" label="b" size="small">选择一</gl-radio>
<gl-radio v-model="zyz" label="a" size="small">选择二</gl-radio>
<gl-radio v-model="zyz" label="c" size="small">选择一</gl-radio>

<gl-radio v-model="zyz" label="b" size="medium">选择一</gl-radio>
<gl-radio v-model="zyz" label="a" size="medium">选择二</gl-radio>
<gl-radio v-model="zyz" label="c" size="medium">选择三</gl-radio>

<script>
export default {
    data(){
    	return {
    		zyz:'',
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
|label   | radio绑定值 |string |---------------------- |-------- |
|size   | radio大小 |string | medium small mini |-------- |
