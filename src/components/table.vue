<template>
  <table class="game_table">
    <thead>
      <tr>
        <td>Spelare</td>
        <td v-for="(player) in players" :key="player.index">
          <input class="name" type="text" v-model="player.name" />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(game,gameId) in gameInfo" :key="game.index">
        <td>{{ game.name }}</td>
        <td v-for="(player,playerId) in players" :key="player.index">
          <input
            v-on:input="calcPoints(playerId,gameId),calcPointsleft(playerId,gameId)"
            type="text"
            v-model.number="points[playerId][gameId]"
          />
        </td>
        <td>{{ pointsLeft[gameId] }}</td>
      </tr>
      <tr>
        <td>Poäng</td>
        <td v-for="(player,playerId) in players" :key="player.index">
          <span class="points">{{ players[playerId].total }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const gameInfo = [
  {
    name: "H",
    points: 65
  },
  {
    name: "D",
    points: 40
  },
  {
    name: "3M",
    points: 45
  },
  {
    name: "SS",
    points: 20
  },
  {
    name: "Totti",
    points: 155
  }
];
export default {
  name: "HelloWorld",

  data() {
    return {
      gameInfo: gameInfo,
      numberOfPlayers: 4,
      players: [],
      points: [],
      pointsLeft: [
        gameInfo[0].points,
        gameInfo[1].points,
        gameInfo[2].points,
        gameInfo[3].points,
        gameInfo[4].points
      ]
    };
  },
  methods: {
    calcPoints: function(playerId, gameId) {
      // calc player points
      let numOr0 = n => (isNaN(parseInt(n)) ? 0 : n)
      this.players[playerId].total = this.points[playerId].reduce((a, b) => { 
      return numOr0(a) + numOr0(b) 
      
      });
      // calcPointsleft(gameId);
    },
    calcPointsleft: function(playerId, gameId) {
      let sum = this.gameInfo[gameId]
      let zeros = [];
      sum = sum - this.points[playerId][gameId];
      this.pointsLeft[gameId] = sum;
      if (sum === 0) {
        this.points.forEach((p,id) => {
          if(!p[gameId]){
            zeros.push(id);
          }
        });
      console.log(zeros)
      zeros.forEach((pid) => {
        this.points[pid][gameId]  = Math.round(-50 / zeros.length);
      });
      }
    }
  },
  mounted() {
    while (this.players.length < this.numberOfPlayers) {
      this.players.push({ name: "", total: 0 });
      this.points.push([null, null, null, null, null]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name[type="text"] {
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}

.points {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
}
</style>
