<template>
  <div class="icon-wrap">
    <div v-if="type === 'loader'" class="ball-clip-rotate-multiple" :class="this.theme">
      <div></div>
      <div></div>
    </div>
    <div v-if="type === 'error'" class="icono-crossCircle" :class="this.theme"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface IIconTheme {}

@Component
export default class Icon extends Vue {
  @Prop({
    required: true
  })
  type!: string;

  @Prop({
    type: String,
    default: 'dark',
    validator(value) {
      return ['light', 'dark'].indexOf(value) !== -1;
    }
  })
  theme!: string;
}
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.6);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.icon-wrap {
  width: 0;
  height: 0;
}

.ball-clip-rotate-multiple {
  position: relative;
  width: 0;
  height: 0;
}
.ball-clip-rotate-multiple > div {
  animation-fill-mode: both;
  position: absolute;
  left: -20px;
  top: -20px;
  border: 2px solid #333;
  border-bottom-color: transparent;
  border-top-color: transparent;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  animation: rotate 1s 0s ease-in-out infinite;
}
.ball-clip-rotate-multiple > div:last-child {
  display: inline-block;
  top: -10px;
  left: -10px;
  width: 15px;
  height: 15px;
  animation-duration: 0.8s;
  border-color: #333 transparent #333 transparent;
  animation-direction: reverse;
}
.ball-clip-rotate-multiple.dark > div,
.ball-clip-rotate-multiple.dark > div:last-child {
  border-color: #eee transparent #eee transparent;
}

.icono-crossCircle {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid;
  transition: all 0.2s;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -15px;
  left: -15px;
  font-style: normal;
  color: #333;
  text-align: left;
  text-indent: -9999px;
  direction: ltr;
  transform: rotate(45deg);
  margin: 0;
  padding: 0;
}
.icono-crossCircle.dark {
  color: #eee;
}
.icono-crossCircle:before {
  width: 18px;
  content: '';
  pointer-events: none;
  height: 2px;
  box-shadow: inset 0 0 0 32px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.icono-crossCircle:after {
  height: 18px;
  content: '';
  pointer-events: none;
  width: 2px;
  box-shadow: inset 0 0 0 32px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
