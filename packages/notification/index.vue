<template>
	<transition name="gl-notification-fade">
		<section 
			:class="['gl-notification',horizontalClass]" 
			:style="positionStyle" 
			v-show="visible"
			@mouseenter="clearTimer()"
      @mouseleave="startTimer()">
      <slot v-show="message">
				{{message}}
      </slot>
			<button @click="close">关闭</button>
		</section>
	</transition>
</template>
<script>
	export default {
		data(){
			return {
				message:'',
				visible:false,
				duration:4500,
				position:'left-top',
				verticalOffset: 0,
				onClose:null,
				timer:null,
				closed:false,
				position:'top-left'
			}
		},
		computed:{
			horizontalClass(){
				return /left/i.test(this.position) ? 'left' : 'right';
			},
			verticalProperty(){
				return /top/i.test(this.position) ? 'top' : 'bottom';
			},
			positionStyle(){
				return {
					[this.verticalProperty]: `${ this.verticalOffset }px`
				}
			}
		},
		mounted(){
			if(this.duration > 0){
				this.startTimer()
			}
		},
		watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
		},
		methods:{
			destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
			close(){
				this.closed= true;
				if(typeof this.onClose === 'function'){
					this.onClose()
				}
			},
			clearTimer(){
				clearTimeout(this.timer)
			},
			startTimer(){
				if(this.duration > 0){
					this.timer = setTimeout(()=>{
						if(!this.closed){
							this.close()
						}
					},this.duration)
				}
			}
		}
	}
</script>

<style lang="scss">
	.gl-notification{
		position: fixed;
		z-index: 99999;
		color: #000;
		width: 300px;
		background: #fff;
		border-radius:8px;
		top:10px;
		box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);
		transition: opacity .3s, transform .3s, left .3s, right .3s, top 0.4s, bottom .3s;
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
