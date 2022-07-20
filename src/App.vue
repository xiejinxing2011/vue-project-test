<template>
  <div>
    <Count/>
  </div>
</template>

<script>
  import Count from './components/Count'

  export default {
    name: 'App',
    components: {
    Count,
},
    data(){
      return{

      }
    },
    methods: {
      
    },

    watch:{
      
    },

    mounted() {
      
    },      
    beforeDestroy(){//解绑全局总线中自定义事件
      
    },
      
  }
</script>

<style>
  
</style>
