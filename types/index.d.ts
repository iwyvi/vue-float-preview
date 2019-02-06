import Vue from 'vue';

export * from './vue-float-preview';

export interface InstallationOptions {
  scale?: boolean;
  showDelay?: number;
  hideDelay?: number;
  offsetX?: number;
  offsetY?: number;
  contentStyle?: object;
  maxWidth?: number;
  maxHeight?: number;
  width?: number;
  height?: number;
  iconTheme?: 'light' | 'dark';
}

export function install(vue: typeof Vue, options: InstallationOptions): void;

export default install;
