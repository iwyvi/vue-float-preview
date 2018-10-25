<template>
  <div class="weibo">
    <div class="avatar-wrap">
      <div class="avatar">
        <img src="assets/logo.png" alt="">
      </div>
    </div>
    <div class="content-wrap">
      <div class="nickname">vue-float-preview</div>
      <div class="content">
        <p>A Floating Previewer for Vue.js.</p>
        <p>
          Online images are from
          <a href="https://pixabay.com">https://pixabay.com</a>
        </p>
      </div>
      <div class="images">
        <float-preview
          v-for="(image, index) in imageList"
          :key="index"
          class="image"
          :src="image"
          :max-width="500"
          :max-height="400"
        ></float-preview>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WeiboDemo extends Vue {
  imageList = [
    'https://cdn.pixabay.com/photo/2018/10/21/21/28/autumn-3763897__340.jpg',
    'https://cdn.pixabay.com/photo/2018/04/28/22/03/dawn-3358468_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/10/06/11/22/coffee-3727673_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/spring-276014_960_720.jpg',
    'assets/logo.png'
  ];
}
</script>
<style scoped>
.weibo {
  width: 100%;
  display: flex;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
}
.avatar-wrap {
  width: 80px;
}
.avatar {
  width: 60px;
  height: 60px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  width: 100%;
  height: 100%;
}
.content-wrap {
  flex: 1;
}
.nickname {
  font-size: 22px;
  font-weight: bold;
}
.content {
  min-height: 50px;
}
.images {
  width: 550px;
}
.image {
  padding: 5px;
  width: 150px;
  height: 150px;
  display: inline-block;
}
</style>
