<template>
  <div>
    <input placeholder="Update team Name" v-model="TeamName">
    <button type="button" name="button" v-on:click="updateName">Update Name</button>
    <h1>{{TeamNameDisplay}}</h1>
  </div>
</template>

<script>
export default {
  props:{
    teamId:String
  },
  data:function(){
    return {
      TeamName:"",
      TeamNameDisplay:"Team 1"
    }
  },
  methods:{
    updateName : function(){
      console.log(this)
      this.TeamNameDisplay = this.TeamName
    }
  }
}
</script>

<style lang="css">
</style>
