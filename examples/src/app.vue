<template>
  <div id="app">
    <vue-float-preview
      class="vpp"
      :src="imageSrc"
      :content-style="`border-radius: 20px;box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);`"
      :scale="true"
      :track="true"
    ></vue-float-preview>
    <vue-float-preview
      class="vpp"
      :content-style="`border-radius: 20px;box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);`"
      :scale="false"
      :track="true"
      :width="400"
      :height="400"
    >
      <h1 @click="change">test</h1>
      <template slot="preview">
        <h2>test</h2>
      </template>
    </vue-float-preview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  imageSrc =
    'http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg';

  change() {
    setTimeout(() => {
      this.imageSrc =
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540037609752&di=78150c346d1b4986802d7edf31338c89&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cb11599aaeea0000002129536e52.gif';
    }, 1000);
  }
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
