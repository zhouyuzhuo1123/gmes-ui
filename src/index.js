import Vue from 'vue';
import inputButton 		from '../packages/input-button/index';
import formInput   		from '../packages/form-input/index';
import preventButton  from '../packages/prevent-button/index';
import radio 					from '../packages/radio/index';
import tab 						from '../packages/tab/index';
import tableCanvas 		from '../packages/table-canvas/index';

import Gloading    from '../packages/loading/index';

import directive from './directives'

const components = [
  inputButton,
  formInput,
  preventButton,
  radio,
  tab,
  tableCanvas,
]

const install = function(Vue, opts = {}){
  components.map(component => {
    Vue.component(`Gl${component.name}`, component);
  });
  directive(Vue)
  Vue.prototype.$Gloading = Gloading
}

export {
  inputButton,
  formInput,
  preventButton,
  radio,
  tab,
  tableCanvas,
  Gloading,
}

export default {
  Gloading,
  inputButton,
  formInput,
  preventButton,
  radio,
  tab,
  tableCanvas,
  install
}
