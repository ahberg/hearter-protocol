<template>
  <div id="app">
    <Table/>
  </div>
</template>

<script>
import Table from './components/table'

export default {
  name: 'App',
  components: {
    Table
  }
}
</script>

<style>
*,html,body {
  margin: 0;
  margin-left:3px;
  margin-right:3px;
  font-size: 16px;
  color: black;
}
div {
  margin-bottom:5px
}

body{
  background-color: #e55656;
  width: 100%;
}

*[type=text]   {
  background-color: transparent;
  width: 32px;
  border:none;
  cursor:pointer;

}
a {
text-decoration: none;

}
table, td {
  border: 1px solid black;
  border-collapse:collapse;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin-top: 9px;
  margin-bottom: 9px;
}
</style>
