 <template>
	<el-button type="primary" 
		class="search-btn" 
		:type="type" :size="size" :icon="icon" :loading="loading"  :disabled="disabled" :nativeType="nativeType"
		@click="handleClick">
		<slot></slot>
		<span class="timer" v-if="showTimer">{{times}}</span>
	</el-button>
 </template>

 <script>
 	export default {
 		name:'PreventButton',
 		data(){
 			return {
 				isActice:false,
 				disabled:false,
 				times:'',
 			}
 		},
 		props:{
 			time:{
 				type:Number,
 				default:2
 			},
			type: {
				type: String,
				default: 'default'
			},
			size: String,
			icon: {
				type: String,
				default: ''
			},
			nativeType: {
				type: String,
				default: 'button'
			},
			loading: Boolean,
			showTimer: Boolean,
 		},
 		methods:{
 			handleClick(evt){
 				if(!this.isActice){
					this.isActice = true;
 					this.showTimer ? this.timeInterval() : this.timeout()
 					this.$emit('click',evt);
 				}
 			},
 			timeout(){
 				setTimeout(()=>{
 					this.isActice = false;
 				},this.time*1000)
 			},
 			timeInterval(){
 				this.times = this.time;
 				let timer = setInterval(()=>{
 					this.times = this.times - 1;
 					if(this.times <=0 ){
 						this.isActice = false;
 						this.times = '';
 						clearInterval(timer)
 					}
 				},1000)
 			}
 		}
 	}
 	
 </script>

 <style lang="scss" scoped>
	.timer{
		color:#FF5000;
	}
	.ishidden{
		display:none
	}
 </style>