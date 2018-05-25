import Vue   from 'vue'
import Index from './index.vue'

let LoadingConstructor = Vue.extend(Index);

let fullscreenLoading;

let defaultConfig = {
	fullscreen:true,
}

LoadingConstructor.prototype.close = function(){
  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el);
  }
  if(this.fullscreen){
  	fullscreenLoading = undefined
  }
}

class Loading {
		constructor(options = {}){
	  if (typeof options.target === 'string') {
	    options.target = document.querySelector(options.target);
	  }
	  options.target = options.target || document.body;
	  const instance = new LoadingConstructor({
			el: document.createElement("div"),
			data: options
		});
		
		options.target.appendChild(instance.$el);
		Vue.nextTick(()=>{
			instance.visible = true
		})
		if(options.fullscreen){
			fullscreenLoading = instance
		}
		return instance
	}
}

Loading.server=(options = {})=>{
		options = Object.assign({},defaultConfig,options)
		if(options.fullscreen && fullscreenLoading){
			return fullscreenLoading
		}
		return new Loading(options);
}

export default Loading