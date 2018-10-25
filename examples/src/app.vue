<template>
  <div>
    <div class="container">
      <header>
        <h1>vue-float-preview</h1>
        <a href="https://github.com/IwYvI/vue-float-preview">View in GitHub</a>
      </header>
      <section>
        <div class="section-header">
          <h2 class="section-title">Weibo demo</h2>
        </div>
        <div class="section-container">
          <weibo-demo></weibo-demo>
        </div>
      </section>
      <section>
        <div class="section-header">
          <h2 class="section-title">Slot demo</h2>
        </div>
        <div class="section-container">
          <slot-demo></slot-demo>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import WeiboDemo from './components/weibo-demo.vue';
import SlotDemo from './components/slot-demo.vue';

@Component({
  components: { WeiboDemo, SlotDemo }
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 1200px;
  margin: auto;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 48px;
  margin-top: 50px;
  margin-bottom: 20px;
}
header a {
  color: #5678c2;
}
section {
  margin-bottom: 40px;
}
.section-header {
  display: flex;
}
.section-title {
  padding: 0 20px 5px;
  border-bottom: 4px solid #342423;
}
.section-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
