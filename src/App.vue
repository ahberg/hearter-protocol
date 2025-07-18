

<template>
  <div >
    <div id="nav">
      <router-link to="/">Protokoll</router-link> |
      <router-link :to="{ name: 'Rules' }">Regler</router-link>
    </div>
    <router-view />
  </div>
</template>

