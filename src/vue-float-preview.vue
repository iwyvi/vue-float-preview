<template>
  <div class="vfp-wrap">
    <div
      class="vfp-content-wrap"
      :style="contentStyle"
      @mousemove.capture="onMouseMove"
      @mouseout.capture="onMouseOut"
      @mouseover.capture="onMouseOver"
      ref="content-wrap"
    >
      <div
        class="vfp-content-scale"
        :class="{'vfp-scale-over': !disabled && !isImageError && scale && isOver}"
      >
        <slot>
          <div class="vfp-content-image" :style="{'background-image': `url(${src})`}">
            <icon v-if="isImageLoading" class="vfp-content-image-loader" name="loader"></icon>
            <img class="vfp-content-image-placeholder" :src="src">
          </div>
        </slot>
      </div>
    </div>
    <div
      v-if="!disabled && isRender"
      :class="{'vfp-fade-in': isShowing, 'vfp-fade-out': isHidding}"
      class="vfp-preview-wrap"
      ref="preview-wrap"
      :style="previewStyle"
    >
      <slot name="preview">
        <icon v-if="isImageLoading" name="loader"></icon>
        <span v-else-if="isImageError">
          <icon name="error"></icon>
        </span>
        <img v-else-if="src" :src="src" class="vfp-preview-image">
        <icon v-else name="error"></icon>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Icon from './icon.vue';

function isPositive(equal: boolean = true): (v: number) => boolean {
  if (equal) {
    return (v) => (v >= 0 ? true : false);
  }
  return (v) => (v > 0 ? true : false);
}

function getBiggerNumber(num1: number, num2: number): number {
  return num1 > num2 ? num1 : num2;
}

function getSmallerNumber(num1: number, num2: number): number {
  return num1 > num2 ? num2 : num1;
}

@Component({
  components: {
    Icon
  }
})
export default class VueFloatPreview extends Vue {
  @Prop({
    type: String
  })
  src!: string;

  @Prop({
    default: false,
    type: Boolean
  })
  disabled!: boolean;

  @Prop({
    default: true,
    type: Boolean
  })
  scale!: boolean;

  @Prop({
    default: 150,
    type: Number,
    validator: isPositive()
  })
  showDelay!: number; // 鼠标放上以后的显示延迟

  @Prop({
    default: 100,
    type: Number,
    validator: isPositive()
  })
  hideDelay!: number; // 鼠标移走后的隐藏延迟

  @Prop({
    default: 40,
    type: Number,
    validator: isPositive(false)
  })
  offsetX!: number; // 与鼠标的距离（这个必须为正值）

  @Prop({
    default: -40,
    type: Number
  })
  offsetY!: number; // 与鼠标的距离

  @Prop({
    type: String
  })
  contentStyle!: string;

  @Prop({
    type: Number,
    validator: isPositive(false)
  })
  maxPreviewWidth!: number;

  @Prop({
    type: Number,
    validator: isPositive(false)
  })
  maxPreviewHeight!: number;

  @Prop({
    type: Number,
    validator: isPositive(false)
  })
  width!: number;

  @Prop({
    type: Number,
    validator: isPositive(false)
  })
  height!: number;

  private isOver = false;
  private isRender = false;
  private isShowing = false; // 表示动画
  private isHidding = false; // 表示动画
  private isSetPosition = false; // 防止初始位置错误

  private previewX!: number;
  private previewY!: number;
  private previewWidth = 320;
  private previewHeight = 180;

  private isImageLoading = false;
  private isImageError = false;
  private imageWidth = 0;
  private imageHeight = 0;

  private showTimer = 0;
  private hideTimer = 0;
  private destroyTimer = 0;

  private get previewStyle() {
    return {
      width: `${this.previewWidth}px`,
      height: `${this.previewHeight}px`
    };
  }

  private mounted() {
    this.loadImage();
  }

  @Watch('src')
  private loadImage() {
    this.resetPreviewSize();
    this.resetImage();
    if (this.src) {
      this.isImageLoading = true;
      const img = document.createElement('img');
      img.src = this.src;
      img.onload = () => {
        this.imageWidth = img.width;
        this.imageHeight = img.height;
        this.isImageLoading = false;
        this.isImageError = false;
        this.setPreviewSize();
      };
      img.onerror = () => {
        this.isImageLoading = false;
        this.isImageError = true;
      };
    }
  }

  private resetImage() {
    this.isImageLoading = false;
    this.isImageError = false;
    this.imageWidth = 0;
    this.imageHeight = 0;
  }

  private setPreviewSize(
    width: number = this.imageWidth || 320,
    height: number = this.imageHeight || 180
  ) {
    if (this.width && this.height) {
      [this.previewWidth, this.previewHeight] = [this.width, this.height];
      return;
    }
    const [windowWidth, windowHeight] = this.getWindowSize();
    const maxPreviewWidth = this.maxPreviewWidth
      ? getSmallerNumber((windowWidth * 3) / 5, this.maxPreviewWidth)
      : (windowWidth * 3) / 5;
    const maxPreviewHeight = this.maxPreviewHeight
      ? getSmallerNumber(windowHeight, this.maxPreviewHeight)
      : windowHeight;
    let [previewWidth, previewHeight] = [0, 0];
    const ratio = width / height;
    if (ratio >= 1) {
      if (width > maxPreviewWidth) {
        previewWidth = maxPreviewWidth;
        previewHeight = Math.round(maxPreviewWidth / ratio);
      } else {
        previewWidth = width;
        previewHeight = height;
      }
    } else {
      if (height > maxPreviewHeight) {
        previewWidth = Math.round(maxPreviewHeight * ratio);
        previewHeight = maxPreviewHeight;
      } else {
        previewWidth = width;
        previewHeight = height;
      }
    }
    [this.previewWidth, this.previewHeight] = [previewWidth, previewHeight];
  }
  private resetPreviewSize() {
    this.setPreviewSize(320, 180);
  }

  private getWindowSize(): [number, number] {
    return [window.innerWidth, window.innerHeight];
  }

  private getRelativePosition(element: HTMLElement): [number, number] {
    const rect = element.getBoundingClientRect();
    return [rect.left, rect.top];
  }

  private getPreviewReverseStatus(
    cursorX: number,
    cursorY: number
  ): [boolean, boolean] {
    const imageWrap = this.$refs['content-wrap'] as HTMLElement;
    const [relativeX, relativeY] = this.getRelativePosition(imageWrap);
    const [windowWidth, windowHeight] = this.getWindowSize();
    let reverseX = false;
    let reverseY = false;
    if (
      relativeX + cursorX + this.offsetX + this.previewWidth / 2 >
      windowWidth
    ) {
      reverseX = true;
    }
    if (
      relativeY + cursorY + this.offsetY + (this.previewHeight * 3) / 5 >
      windowHeight
    ) {
      reverseY = true;
    }
    return [reverseX, reverseY];
  }

  private setPreviewPositionFromEvent(e: MouseEvent): void {
    const [cursorX, cursorY] = [e.layerX, e.layerY];
    const [reverseX, reverseY] = this.getPreviewReverseStatus(cursorX, cursorY);
    if (!reverseX) {
      this.previewX = cursorX + this.offsetX;
    } else {
      this.previewX = cursorX - this.offsetX - this.previewWidth;
    }
    if (!reverseY) {
      this.previewY = cursorY + this.offsetY;
    } else {
      this.previewY = cursorY - this.offsetY - this.previewHeight;
    }
    this.isSetPosition = true;
    const previewWrap = this.$refs['preview-wrap'] as HTMLElement;
    if (previewWrap) {
      previewWrap.style.left = `${this.previewX}px`;
      previewWrap.style.top = `${this.previewY}px`;
    }
  }

  private onMouseMove(e: MouseEvent): void {
    if (!this.isOver) {
      this.onMouseOver(e);
    }
    if (!this.disabled && this.isRender) {
      this.setPreviewPositionFromEvent(e);
    }
  }
  private onMouseOut(): void {
    clearTimeout(this.showTimer);
    this.isOver = false;
    this.hideTimer = setTimeout(() => {
      this.isHidding = true;
      this.isShowing = false;
      this.isSetPosition = false;
      this.destroyTimer = setTimeout(() => {
        this.isRender = false;
        this.isHidding = false;
      }, 200);
    }, this.hideDelay);
  }
  private onMouseOver(e: MouseEvent): void {
    clearTimeout(this.hideTimer);
    clearTimeout(this.destroyTimer);
    this.isRender = true;
    this.isOver = true;
    this.setPreviewSize();
    this.showTimer = setTimeout(() => {
      this.isShowing = true;
      this.isHidding = false;
      this.$nextTick(() => {
        if (!this.isSetPosition) {
          this.setPreviewPositionFromEvent(e);
        }
      });
    }, this.showDelay);
  }
}
</script>
<style scoped>
.vfp-wrap {
  position: relative;
  display: flex;
}
.vfp-content-wrap {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.vfp-content-scale {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: 0.5s all ease;
  transition-delay: 0.1s;
}
.vfp-content-image {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: top center;
}
.vfp-content-image-loader {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.vfp-content-image-placeholder {
  min-width: 100%;
  min-height: 100%;
  opacity: 0;
}
.vfp-preview-wrap {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  top: -99999px;
  left: -99999px;
  opacity: 0;
  z-index: 99999;
}
.vfp-preview-image {
  width: 100%;
  height: 100%;
}
.vfp-fade-in {
  opacity: 1;
  animation-name: fadeIn;
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
}
.vfp-fade-out {
  opacity: 0;
  animation-name: fadeOut;
  animation-duration: 0.2s;
  animation-timing-function: ease-in;
}
.vfp-scale-over {
  transform: scale(1.1);
}
@keyframes fadeIn {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.6);
    opacity: 0;
  }
}
</style>
