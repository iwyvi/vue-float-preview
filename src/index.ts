import Vue from 'vue';

import VueFloatPreview from './vue-float-preview.vue';
import { InstallationOptions } from '../types/index';
import { isPositive, isPositiveWithZero } from './utils';

export function install(vue: typeof Vue, options: InstallationOptions = {}) {
  vue.component(`float-preview`, VueFloatPreview);

  vue.prototype.$VUE_FLOAT_PREVIEW_OPTIONS = {
    scale: typeof options.scale === 'boolean' ? options.scale : true,
    thumbSize:
      options.thumbSize === 'contain'
        ? 'contain'
        : options.thumbSize === 'auto'
        ? 'auto'
        : 'contain',
    showDelay:
      typeof options.showDelay === 'number' &&
      isPositiveWithZero(options.showDelay)
        ? options.showDelay
        : 150,
    hideDelay:
      typeof options.hideDelay === 'number' &&
      isPositiveWithZero(options.hideDelay)
        ? options.hideDelay
        : 100,
    offsetX:
      typeof options.offsetX === 'number' && isPositive(options.offsetX)
        ? options.offsetX
        : 40,
    offsetY:
      typeof options.offsetY === 'number' && isPositive(options.offsetY)
        ? options.offsetY
        : -40,
    contentStyle:
      typeof options.contentStyle === 'object'
        ? options.contentStyle
        : undefined,
    maxWidth:
      typeof options.maxWidth === 'number' && isPositive(options.maxWidth)
        ? options.maxWidth
        : undefined,
    maxHeight:
      typeof options.maxHeight === 'number' && isPositive(options.maxHeight)
        ? options.maxHeight
        : undefined,
    width:
      typeof options.width === 'number' && isPositive(options.width)
        ? options.width
        : undefined,
    height:
      typeof options.height === 'number' && isPositive(options.height)
        ? options.height
        : undefined,
    iconTheme:
      options.iconTheme === 'light'
        ? 'light'
        : options.iconTheme === 'dark'
        ? 'dark'
        : 'light'
  } as InstallationOptions;
}
