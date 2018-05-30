import Vue from 'vue'
import Router from 'vue-router'
import navJson from '../nav.config.json'
import helloComponent from '../components/HelloWorld.vue';

Vue.use(Router);

const LOAD_MAP = name => {
 	return r => require.ensure([], () =>
      r(require(`../docs/${name}.md`))
    );
}
const load = function(path) {
  return LOAD_MAP(path);
};
const routes =  [{
	path: '/hello',
	name: 'hello',
	component: helloComponent}
]

navJson.forEach((item,i)=>{
	item.children.forEach((item2,j)=>{
		routes.push({
			path: `/${item2.path}`,
		    name: `${item2.name}`,
		    component: load(item2.path)
		})
	})
})
export default new Router({routes})