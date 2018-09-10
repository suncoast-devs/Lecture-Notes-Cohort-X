<template>
    <div>
        <h1>sweepin' mines'</h1>
        <table>
            <tbody>
                <tr v-for="(row, i) in board" :key="i">
                    <td v-for="(space, j) in row" :key="j">
                        {{space}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "Minesweeper",
  data: function() {
    return {
      board: [[], [], [], [], [], [], []]
    };
  },
  mounted: function() {
    fetch("https://minesweeper-api.herokuapp.com/games", {
      method: "POST",
      body: JSON.stringify({ difficulty: 0 }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(gameData => {
        console.log(gameData);
        this.board = gameData.board;
        this.gameId = gameData.id;
      });
  }
};
</script>

<style scoped>
td{
    height: 2em;
    width: 2em;
    border: 3px solid green;
}
</style>
