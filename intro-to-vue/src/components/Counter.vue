<template>
    <div>
        <h1>{{count}}</h1>
        <h2>{{personName}}</h2>
        <button v-on:click="addOne">Add 1!</button>
    </div>
</template>

<script>
export default {
    name:"Counter", 
    data:function(){
        return {
            count:0, 
            personName:"Stan", 
            address:"123 Fake street"
        }
    },
    methods:{
        addOne:function(){
            console.log("add 1 was clicked")
            this.count++;
        }, 
        subtractOne:function(){

        }
    }

}
</script>

<style scoped>
    h1{
        color:purple;
    }
</style>
