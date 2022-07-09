<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="addValue" @change="addTitle"/>
    <!-- <button @click="death">点我解绑自定义事件</button> -->
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  export default {
    name:"MyHeader",
    data() {
      return {
        addValue:''
      }
    },
    props:['addItem'],// 使用props来将父组件的方法传递给子组件调用，从而实现将子组件参数回传给父组件
    methods: {
      addTitle(){
        if(this.addValue.trim() !==''){
          const todoItemInfo ={id:nanoid(),title:this.addValue,done:false};
          //this.addItem(todoItemInfo);
          this.$emit('addItem',todoItemInfo);//父组件中给子组件自定义事件，通过emit传参给事件回调函数。
          this.addValue = ''
        }
      },
      unEmit(){
        this.$off("addItem");//解绑单个自定义事件
        //this.$off(['addItem','abc','...'])解绑多个自定义事件
        //this.$off();解绑所有的自定义事件
      },
      death(){
        this.$destroy();//销毁当前header组件实例，销毁后所有header实例的自定义事件全部不生效。
      }
    },
  }
</script>

<style scoped>
  /*header */
  .todo-header input{
    width:560px;
    height: 28px;
    font-size: 14px;
    border:1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px; 
  }
  .todo-header input:focus{
    outline: none;
    border-color: rgba(82,168,236,0.6);
  }
</style>