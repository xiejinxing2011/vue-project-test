<template>
  <li>
    <label>
      <!-- <input type="checkbox" :checked="todo.done" @change="changeDone(todo.id)"/> -->
      <!-- 不推荐，因为todo是props -->
      <input type="checkbox" v-model="todo.done"/>
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input type="text" 
      v-show="todo.isEdit"
      v-model="itemValue" 
      @blur="editItem"
      ref="inputItem"
      />
    </label>
    <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
    <button class="btn btn-edit" @click="changeIsEdit(todo.id)">编辑</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js';

  export default {
    name:"TodoItem",
    //props:['todo','changeDone','deleteTodo'],
    props:['todo','changeDone'],
    data() {
      return {
        itemValue:''
      }
    },
    
    methods: {
      deleteItem(id){
        if(confirm("确定删除吗？")){
          //this.deleteTodo(id)
          //this.$emit('deleteTodo',id);
          //this.$bus.$emit("deleteTodoItem",id);
          pubsub.publish("deleteTodo",id);
        }
      },
      changeIsEdit(id){
        this.itemValue = this.todo.title;
        this.$bus.$emit("changeIsEdit",id);

        this.$nextTick(function(){
          this.$refs.inputItem.focus();
        })
      },
      editItem(){
        this.todo.title = this.itemValue;
        this.$bus.$emit("editItem",this.todo.id,this.itemValue);
      }
    },
    
  }
</script>

<style scoped>
  /*item*/
  li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  }

  li label {
  float: left;
  cursor: pointer;
  }

  li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
  }

  li button {
  float: right;
  display: none;
  margin-top: 3px;
  margin-right: 5px;
  }

  li:before {
  content: initial;
  }

  li:last-child {
  border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }

  
</style>