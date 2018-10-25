<template>
  <float-preview
    class="slot-demo"
    :content-style="{ padding: '20px' }"
    :scale="false"
    :width="600"
    :height="300"
  >
    <p>vue-float-preview</p>
    <template slot="preview">
      <h2>Hello World!</h2>
    </template>
  </float-preview>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WeiboDemo from './weibo-demo.vue';

@Component({
  components: { WeiboDemo }
})
export default class SlotDemo extends Vue {}
</script>
<style scoped>
.slot-demo {
  width: 500px;
  border-radius: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
}
</style>

