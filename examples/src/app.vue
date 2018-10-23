<template>
  <div id="app">
    <float-preview
      class="vpp"
      :src="imageSrc"
      :content-style="`border-radius: 20px;box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);`"
    ></float-preview>
    <float-preview
      class="vpp"
      :content-style="`border-radius: 20px;box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);`"
      :scale="false"
      :width="400"
      :height="300"
    >
      <h1>vue-float-preview</h1>
      <template slot="preview">
        <h2>Hello World!</h2>
      </template>
    </float-preview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  imageSrc = 'assets/logo.png';
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.vpp {
  width: 300px;
  height: 300px;
}
</style>
