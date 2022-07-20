import Vue from 'vue'
import Vuex from 'vuex'

//准备state用于存储数据
const state = {
  sum:0
}
//准备actions用于响应组件中的动作
const actions = {
  jia:function(context,value){
    if(value % 2){
      context.commit("JIA",value);
    }
  }
}
//准备mutations用于操作数据(state)
const mutations = {
  JIA(state,value){
    //console.log(this)this是store对象
    state.sum += value;
  }
}

Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
  //配置参数
  state,
  actions,
  mutations
})

 