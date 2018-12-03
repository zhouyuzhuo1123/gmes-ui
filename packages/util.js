export function isVNode(vNode = {}){
	return vNode.hasOwnProperty('componentOptions')
}