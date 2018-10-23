import Vue from 'vue';

export * from './vue-float-preview';

export interface InstallationOptions {}

export function install(vue: typeof Vue, options: InstallationOptions): void;

export default install;
