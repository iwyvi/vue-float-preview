import Vue from 'vue';
import { VNode, VNodeDirective } from 'vue';

export declare class BaseComponent extends Vue {
  static install(vue: typeof Vue): void;
}

export interface VueFloatPreviewSlots {
  default: VNode[];

  preview: VNode[];

  [key: string]: VNode[];
}

/** Integrate information in a card container */
export declare class VueFloatPreview extends BaseComponent {
  src: string;

  disabled: boolean;

  scale: boolean;

  showDelay: number;

  hideDelay: number;

  offsetX: number;

  offsetY: number;

  contentStyle: object;

  maxWidth: number;

  maxHeight: number;

  width: number;

  height: number;

  iconTheme: 'light' | 'dark';

  $slots: VueFloatPreviewSlots;
}
