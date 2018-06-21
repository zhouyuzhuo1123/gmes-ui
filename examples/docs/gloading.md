<script>
  export default {
    data() {
      return {
   
        zyz:''
      };
    },
  };
</script>

<style>
  
</style>

### Gloading 提示框

> 单独使用

:::demo
```html
import { Gloading } from 'gmes-ui';

const load = Gloading.server({});
load.close()
```
:::

> vue 实类方法使用
:::demo
```html

const load = this.$Gloading.server({});
load.close()
```
:::

# Gloading Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
|name  |汽车名称 |string |---------------------- |GEELY |
|target |父元素class |class|---------------------- |body |
|message |底部文本 |string|---------------------- |------ |
|opacity |透明度 |number|---------------------- |0.8 |
|scale |小车缩放比例 |number |---------------------- |0.8 |

