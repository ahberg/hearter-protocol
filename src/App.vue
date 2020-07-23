<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

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
table, td {
  border: 1px solid black;
  border-collapse:collapse;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
