<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="addValue" @change="addTitle"/>
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
    props:['addItem'],
    methods: {
      addTitle(){
        if(this.addValue.trim() !==''){
          const todoItemInfo ={id:nanoid(),title:this.addValue,done:false};
          this.addItem(todoItemInfo)
          this.addValue = ''
        }
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