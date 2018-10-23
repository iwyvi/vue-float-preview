import Vue from 'vue';

import VueFloatPreview from './vue-float-preview.vue';
import { InstallationOptions } from '../types/index';

export function install(vue: typeof Vue, options: InstallationOptions) {
  vue.component(`float-preview`, VueFloatPreview);
}
