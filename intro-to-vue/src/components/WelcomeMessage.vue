<template>
    <section>
        <h1>Greetings, {{userName}}</h1>

        <input type="text" v-model="message">

    </section>
</template>

<script>
export default {
    name:"WelcomeMessage", 
    props: {
        userName:String
    }, 
    data: function(){
        return {
            message:"hello"
        }
    }
};
</script>

<style scoped>
h1{
    color:blue;
}
</style>
