<template>
  <ul class="todo-main">
    <!-- <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" :changeDone="changeDone"/> -->
    <!-- <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo"/> -->

    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
      name:"TodoList",
      components:{
          TodoItem
      },
      // props:['todos','changeDone']

      //props:['todos','deleteTodo']
      props:['todos']//delete函数为中转作用，直接使用全局事件总线
  }
</script>

<style scoped>
  /*main*/
  .todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
  }

  .todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
  }
</style>

