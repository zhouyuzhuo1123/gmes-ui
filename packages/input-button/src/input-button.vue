<template>
	<div class="gl-input-serach-btn">
		<label>{{title}}</label>
		<input class="gl-input-serach" type="text" :disabled="disabled" v-auto-focus="autoFocus" @input="$emit('input', $event.target.value)" v-bind="$props" :placeholder="placeholder"/>
		<slot name="btn"></slot>
	</div>
</template>

<script>
	export default {
		name:'InputButton',
		data(){
			return {
				
			}
		},
		props:{
			title: {
		      type: String,
		      default: '产品标识号'
		    },
		    value:{
		      type: String,
		      default: ''
		    },
		    readonly:{
		      type :Boolean,
		      default:false
		    },
		    autoFocus:{
		      type :Boolean,
		      default:false
		    },
		    disabled:{
		      type :Boolean,
		      default:false
		    },
		    placeholder:{
		      type: String,
		      default: '请输入内容'
		    }
		}
	}
</script>
