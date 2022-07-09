<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addItem="addItem"/>
      <!-- <TodoList :todos="todos" :changeDone="changeDone"/> -->
      <TodoList :todos="todos" :deleteTodo="deleteTodo" /> 
      <MyFooter :todos="todos" :changeAllChecked="changeAllChecked" :deleteAllChecked="deleteAllChecked"/>
    </div>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'
  import MyFooter from './components/MyFooter'
  import TodoList from './components/TodoList'
  export default {
    name: 'App',
    components: {
      MyHeader,
      MyFooter,
      TodoList
    },
    data(){
      return{
        todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
        addItem(v){
          console.log("接收到参数：",v);
          this.todos.unshift(v)
        },
        // changeDone(id){
        //   this.todos.forEach(todo => {
        //     if(todo.id === id){
        //       todo.done = !todo.done
        //     }
        //   });
        // }
        deleteTodo(id){
          this.todos=this.todos.filter(todo => todo.id !==id)
        },
        changeAllChecked(done){
          this.todos.forEach(todo => todo.done = done)
        },
        deleteAllChecked(){
          if(confirm("确定删除已完成任务吗？")){
            this.todos=this.todos.filter(todo => todo.done === false)
          }
        }
    },
    watch:{
      todos:{
        //开启深度监视，监测数组中对象的属性变化
        deep:true,
        handler(newValue,oldValue){
          localStorage.setItem('todos',JSON.stringify(newValue));
        }
      }
    },
      
      
  }
</script>

<style>
  /*base*/
  body{
    background: #fff;
  }
  .btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2) 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger{
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger :hover{
    color: #fff;
    background-color: #bd362f;
  }
  .btn :focus{
    outline: none;
  }
  .todo-container{
    width:600px;
    margin: 0 auto ;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
