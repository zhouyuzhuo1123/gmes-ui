import Vue from 'vue'
import index from './index.vue'

const NotifyConstructor  =  Vue.extend(index);
let instance;
let instances = [];
let seed = 1;
let Notify = function(options = {}){
	const id = 'notify_' + seed++;
  	const position = options.position || 'left';
  	const userOnClose = options.userOnClose || null;
  	options.onClose = function() {
	    Notify.close(id, userOnClose);
	};
	instance = new NotifyConstructor({
		data:options
	})
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
	for(let [i,v] of instances.entries()){
		if(v.id === id) index = i;
	}
	
	const instance = instances.splice(index,1)[0];
	if(typeof userOnClose === 'function'){
		userOnClose(instances)
	}
	for(let i = index;i < instances.length;i++){
		console.log(parseInt(instances[i].$el.style.top - instance.$el.offsetHeight,10) - 16 +'px')
		instances[i].$el.style.top = parseInt(instances[i].$el.style.top,10) - instance.$el.offsetHeight - 16 +'px'
	}
	
}

export {
	Notify
}

