<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader  v-on:addItem="addItem"/>
      <!-- <TodoList :todos="todos" :changeDone="changeDone"/> -->

      <!-- <TodoList :todos="todos" :deleteTodo="deleteTodo" />  -->
      <TodoList :todos="todos" /> 
      <MyFooter :todos="todos" ref="foot" :deleteAllChecked="deleteAllChecked" @click.native="al"/><!-- 加native实现click不是自定义组件，不加则认为click是自定义组件-->
      <!-- <MyFooter :todos="todos" ref="foot" :deleteAllChecked="deleteAllChecked" @click.native="al"/> -->
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

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
        addItem(v,...x){
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
        },
        al(){
          alert(111);
        },
        
    },
    mounted() {
      this.$bus.$on("deleteTodoItem",this.deleteTodo);
      this.$refs.foot.$on('changeAllChecked',this.changeAllChecked);

      pubsub.subscribe('hello',deleteTodo);//消息订阅，当有人发布名为hello的消息时，执行deleteTodo回调
    },
    beforeDestroy() {
      this.$bus.$off("deleteTodo");
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

    mounted() {

      //用ref绑定自定义事件时更加灵活，可以在mount里面进行延时，定时等操作
      this.$refs.foot.$on('changeAllChecked',this.changeAllChecked);
      //  使用全局事件总线
      this.$bus.$on('deleteTodo',this.deleteTodo);

    },      
    beforeDestroy(){//解绑全局总线中自定义事件
      this.$bus.$off('deleteTodo');}

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
