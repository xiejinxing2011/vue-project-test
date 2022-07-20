import Vue from 'vue'
import Vuex from 'vuex'

//准备state用于存储数据
const state = {
  sum:0
}
//准备actions用于响应组件中的动作
const actions = {
  jia:function(a,b){
    console.log(a,b)
    state.sum += b
  }
}
//准备mutations用于操作数据(state)
const mutations = {
  
}

Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
  //配置参数
  state,
  actions,
  mutations
})

 