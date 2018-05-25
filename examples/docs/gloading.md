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

:::demo
```html
import { Loading } from 'gmes-ui';

const load = this.$Gloading.server({});
load.close()
```
:::

# Gloading Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
|name  |汽车名称 |string |---------------------- |'GEELY' |
|target |父元素class |class|---------------------- |body |
