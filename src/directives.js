export default function(Vue){
	Vue.directive('auto-focus', {
	  inserted: function (el,bind) {
	    if(bind.value){
	      el.focus()
	    }
	  },
	  update (el,bind){
	    if(bind.value != bind.oldValue){
	    	el.focus()
	    }
	  }
	});

	Vue.directive('auto-select', {
	  inserted: function (el,bind) {
	    if(bind.value){
	      el.select()
	    }
	  },
	  update (el,bind){
	    if(bind.value){
	      el.select()
	    }
	  }
	});
}