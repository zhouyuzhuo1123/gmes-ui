<template>
	<label class="gl_radio"
		:class="[
			size ? 'gl_radio_'+size : '',
			{
				'gl_radio_checked':model === label,
				'gl_radio_disabled':disabled
			}
		]"
	>
		<span><slot></slot></span>
		<input 
			class="gl-hide"
			type="radio" 
			:value="label" 
			v-model="model"
			:disabled="disabled"
		/>
	</label>
</template>


<script type="text/javascript">
	export default {
		name:'Radio',
		data(){
			return {
				
			}
		},
		computed:{
			model:{
				get(){
					return this.value;
				},
				set(){
					this.$emit('input',this.label)
				}
			}
		},
		props:{
			size:{
				type:String,
				default:''
			},
			value:{},
			label:{},
		  	disabled:Boolean,
		}
	}
</script>