<!--<template>
  <router-view />
  <new_component/>
</template>

<script lang="ts" setup>
  import new_component from './components/new_component.vue'
  export default {
  name: 'App',
  components: {
    new_component
  }
}


export default {
  name: 'App',
  components: {
    new_component
    //HelloWorld
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->

<script lang="ts" setup>
import new_component from "./components/new_component.vue"
import HelloWorld from "./components/HelloWorld.vue"

</script>

<template>
  <new_component/>
  <HelloWorld/>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>