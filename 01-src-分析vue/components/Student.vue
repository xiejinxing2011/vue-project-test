<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="age++">点我年龄+1</button>
        <button @click="addAge">点我年龄+1</button>
    </div>
</template>

<script>
export default {
    name:"Student",
   data() {
    return {
        name:"张三",
        age:18
    }
   },
methods: {
    addAge(){
        this.age++
    }
},
}
</script>
