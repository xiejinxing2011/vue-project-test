<template>
  <div class="todo-footer" v-show="total>0">
    <label >
      <!-- <input type="checkbox" :checked="isAllCheck" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="deleteAllDone">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
      name:"MyFooter",
      props:['todos','changeAllChecked','deleteAllChecked'],
      computed:{
        total(){
          return this.todos.length;
        },
        doneTotal(){
          return this.todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
        },
        isAllCheck:{
          get(){
            return this.total == this.doneTotal && this.total>0
          },
          set(value){
            console.log(value)
             this.changeAllChecked(value)
          }
        }
      },
      // methods: {
      //   checkAll(e){
      //     this.changeAllChecked(e.target.checked)
      //   }
      // },
      methods: {
        deleteAllDone(){
          this.deleteAllChecked()
        }
      },
    }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  }

  .todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
  }

  .todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
  }

  .todo-footer button {
  float: right;
  margin-top: 5px;
  }
</style>