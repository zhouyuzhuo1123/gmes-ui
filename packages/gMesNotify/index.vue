<template>
	<transition name="gl-notification-fade">
		<section :class="['gl-notification',position]" :style="positionStyle" v-show="visible">
			测试测试
			<el-button @click="close">关闭</el-button>
		</section>
	</transition>
</template>
<script>
	export default {
		data(){
			return {
				visible:false,
				duration:4500,
				position:'left',
				verticalOffset: 0,
				onClose:null,
			}
		},
		computed:{
			positionStyle(){
				return {
					top: `${ this.verticalOffset }px`
				}
			}
		},
		mounted(){
			if(this.duration > 0){
				setTimeout(()=>{
					this.close()
				},this.duration)
			}
		},
		methods:{
			close(){
				if(typeof this.onClose === 'function'){
					this.onClose()
				}
				this.$destroy(true);
				this.$el.parentNode.removeChild(this.$el);
			}
		}
	}
</script>

<style lang="scss">
	.gl-notification{
		position: fixed;
		z-index: 99999;
		color: #000;
		width: 400px;
		height: 200px;
		background: #fff;
		border-radius:8px;
		top:10px;
		box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);
		transition: opacity .3s, transform 0.3s, left .3s, right .3s, top 0.4s, bottom .3s;
		&.right{
			right:16px;
		};
		&.left{
			left:16px;
		}
	}
	.gl-notification-fade-enter {
	  &.right {
	    right: 0;
	    transform: translateX(100%);
	  }

	  &.left {
	    left: 0;
	    transform: translateX(-100%);
	  }
	}

	.gl-notification-fade-leave-active {
	  opacity: 0;
	}
</style>
