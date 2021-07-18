<template>
  <div>
    <div>
    <table>
      <thead>
        <tr>
          <td>Spelare</td>
          <td v-for="player in players" :key="player.index">
            <input class="name" type="text" v-model="player.name" />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, gameId) in gameInfo" :key="game.index">
          <td>{{ game.name }}</td>
          <td v-for="(player, playerId) in players" :key="player.index">
            <input
              v-on:input="
                calcTotalPoints(playerId),
                  calcPointsleft(gameId)
              "
              type="text"
              v-model.number="points[playerId][gameId]"
            />
          </td>
          <td>{{ pointsLeft[gameId] }}</td>
        </tr>
        <tr>
          <td>Poäng</td>
          <td v-for="(player, playerId) in players" :key="player.index">
            <span class="points">{{ players[playerId].total }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div>
      <button @click="clearGame">Nytt spel</button>
      <label   for="cp">Antal spelare</label>
      <input @change="startNewGame" id="cp" type="text" v-model="numberOfPlayers" name="countPlayers" />
    </div>
  </div>
</template>

<script>
const gameInfo = [
  {
    name: 'H',
    points: 65
  },
  {
    name: 'D',
    points: 40
  },
  {
    name: '3M',
    points: 45
  },
  {
    name: 'SS',
    points: 20
  },
  {
    name: 'Totti',
    points: 155
  }
]
export default {
  name: 'Table',

  data () {
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
    }
  },
  mounted () {
    if (localStorage.getItem('players')) {
      this.players = JSON.parse(localStorage.getItem('players'))
      this.points = JSON.parse(localStorage.getItem('points'))
      this.refreshPointsLeft()
    } else {
      this.startNewGame()
    }
  },
  methods: {
    startNewGame () {
      this.players = []
      this.points = []
      while (this.players.length < this.numberOfPlayers) {
        this.players.push({ name: '', total: 0 })
        this.points.push([null, null, null, null, null])
      }
    },
    calcTotalPoints (playerId) {
      // calc player points
      let numOr0 = n => (isNaN(parseInt(n)) ? 0 : n)
      this.players[playerId].total = this.points[playerId].reduce((a, b) => {
        return numOr0(a) + numOr0(b)
      })
    },
    calcPointsleft (gameId, fromRefresh = false) {
      let sum = this.gameInfo[gameId].points
      let zeros = []
      this.points.forEach((p, id) => {
        if (p[gameId] > 0) {
          sum = sum - p[gameId]
        } else {
          zeros.push(id)
        }
      })
      this.pointsLeft[gameId] = sum
      if (sum === 0) {
        zeros.forEach(pid => {
          this.points[pid][gameId] = Math.round(-50 / zeros.length)
          this.calcTotalPoints(pid, gameId)
        })
        if (gameId === 4 && !fromRefresh) {
          this.sendResult()
        }
      }
      if(!fromRefresh){
        this.saveGame()
      }
    },
    refreshPointsLeft () {
      this.pointsLeft.forEach((p, gameId) => {
        this.calcPointsleft(gameId,true)
      })
    },
    clearGame () {
      this.startNewGame()
      this.refreshPointsLeft()
    },
    saveGame () {
      localStorage.setItem('players', JSON.stringify(this.players))
      localStorage.setItem('points', JSON.stringify(this.points))
    },
    sendResult () {
      let result = this.players.reduce(
        (obj, item) => Object.assign(obj, { [item.name]: item.total }),
        {}
      )
      console.log(result)
      fetch('/save.php', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })
    }
  }
}
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
