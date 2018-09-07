<template>
  <div id="app">
      <div>
        bill total:
        <input type="number" v-model="billTotal">
      </div>
      <div>
       Tip {{tipPercentage}}%
      <input 
        type="range" 
        min="0" 
        max="50" 
        step="1"
        v-model="tipPercentage"
        >

      </div>
      <div>
        <h3 :class="{
            'red-text':tipPercentage < 10, 
            'gold-text':tipPercentage > 20, 
            'bold-text':tipPercentage > 30
          }">Tip calculated: ${{totalTip}}</h3>
      </div>
      <div>
        <h3>{{totalCost}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      billTotal: 0,
      calculatedTip: 0,
      tipPercentage: 18
    };
  },
  computed: {
    totalCost: function() {
      console.log({
        billTotal: this.billTotal,
        tip: this.calculatedTip
      });
      const _total = parseInt(this.billTotal);
      if (_total) {
        return `Total: $${_total + this.totalTip}`;
      } else {
        return "Waiting for a bill total...";
      }
    },
    totalTip: function() {
      const _total = parseInt(this.billTotal);
      const _tipPercentage = parseInt(this.tipPercentage) / 100;
      const _rv = Math.ceil(_total * _tipPercentage);
      if (_rv) {
        return _rv;
      } else {
        return 0;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.red-text {
  color: red;
}

.gold-text {
  color: goldenrod;
}

.bold-text{
  font-size: 3em;
}
</style>
