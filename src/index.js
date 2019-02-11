import multiCascader from './multi-cascader/multi-cascader.vue'

const install = (Vue) => {
  Vue.component(multiCascader.name, multiCascader)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default { install }
