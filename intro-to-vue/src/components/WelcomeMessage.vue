<template>
    <section>
        <h1>Greetings, {{userName}}</h1>
        <form v-on:submit.stop="resetBox">
            <input type="text" v-model="message">
            <button >clear box</button>
        </form>
    </section>
</template>

<script>
export default {
  name: "WelcomeMessage",
  props: {
    userName: String
  },
  data: function() {
    return {
      message: "hello"
    };
  },
  methods: {
    resetBox: function() {
      this.message = "";
    }
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
