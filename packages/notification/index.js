import Vue from 'vue'
import index from './index.vue'
import { isVNode } from '../util'

const NotifyConstructor  =  Vue.extend(index);
let instance;
let instances = [];
let seed = 1;
let Notify = function(options = {}){
	const id = 'notify_' + seed++;
  	const position = options.position || 'top-left';
  	const userOnClose = options.userOnClose || null;
  	options.onClose = function() {
	    Notify.close(id, userOnClose);
	};

	instance = new NotifyConstructor({
		data:options
	})
	if(isVNode(options.message)){
		instance.$slots.default = options.message;
		options.message = true;
	}
	instance.id = id;
	instance.$mount();
	document.body.appendChild(instance.$el)
	instance.visible = true;
	instance.dom = instance.$el;
	let verticalOffset = options.offset || 0;
	instances.filter(item => item.position === position).forEach(item => {
		verticalOffset += item.$el.offsetHeight + 16;
	});
	verticalOffset += 16;
	instance.verticalOffset = verticalOffset;
	instances.push(instance)
	return instance
}

Notify.close = function(id,userOnClose){
	let index = -1;
	let position = '';
	for(let [i,v] of instances.entries()){
		if(v.id === id) {
			index = i;
			position = v.position;
		}
	}
	if(index < 0) return 
	
	const instance = instances.splice(index,1)[0];
	if(typeof userOnClose === 'function'){
		userOnClose(instances)
	}
	const verticalProperty = instance['verticalProperty'];
	for(let i = index;i < instances.length;i++){
		if(instances[i].position === position)
		instances[i].$el.style[verticalProperty] = parseInt(instances[i].$el.style[verticalProperty],10) - instance.$el.offsetHeight - 16 +'px'
	}
	
}

Notify.closeAll = function(){
	for(let i = instances.length - 1 ;i >= 0;i--){
		instances[i].close()
	}
}

export default Notify

