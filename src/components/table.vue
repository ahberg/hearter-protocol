<template>
  <div class="hello">
    <h2>Protokoll</h2>
    <table class="game_table">
      <thead>
        <tr>
          <td>Spelare</td>
          <td v-for="(player) in players" :key="player.index">
            <input type="text" v-model="player.name" />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game,gameId) in gameInfo" :key="game.index" >
          <td>{{ game.name }}</td>
          <td v-for="(player,playerId) in players" :key="player.index">
            <input  v-on:input="calcPoints(playerId)" type="text" v-model.number="points[playerId][gameId]" />
          </td>
          <td> {{ game.points }} </td>
        </tr>
      <tr>
        <td>Poäng</td>
        <td v-for="(player,playerId) in players" :key="player.index">
        {{ players[playerId].total }}
        </td>
      </tr>   
    </tbody>
    </table>

  </div>
</template>

<script>
  const gameInfo = [
    {
      name:'H',
      points:65
    },
     {
      name:'D',
      points:40
    },
     {
      name:'3M',
      points:45
    },
     {
      name:'SS',
      points:20
    },
    {
      name:'Totti',
      points:155
    },
  ]
export default {
  name: 'HelloWorld',

  data () {
    return {
      gameInfo: gameInfo,
      numberOfPlayers: 4,
      players: [],
      points: []
    }
  },
  methods: {
    calcPoints: function (playerId) {
    let numOr0 = n => isNaN(n) ? 0 : n
    console.log(this.points[playerId])
    this.players[playerId].total =  this.points[playerId].reduce((a, b) => 
    numOr0(a) + numOr0(b))
   // console.log(this.points[playerId][5])
    },
    foo: function() {
      console.log('run');
    }
  },
  mounted () {
    while (this.players.length < this.numberOfPlayers) {
      this.players.push({ name: '',total:0 })
      this.points.push(['','','','',''])    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
