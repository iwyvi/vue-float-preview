# vue-float-preview

**This component ONLY supports mouse operations!**

> A Floating Previewer for Vue.js.

https://www.iwyvi.com/vue-float-preview/

## Install

### yarn

```bash
yarn add vue-float-preview
```

### npm

```
npm install --save vue-float-preview
```

## Quick Start

```javascript
import Vue from 'vue';
import VueFloatPreview from 'vue-float-preview';

Vue.use(VueFloatPreview, OPTIONS);
```

```vue
<template>
  <float-preview src="IMAGE_SRC"></float-preview>
</template>
```

For more information, please refer to [Examples](https://www.iwyvi.com/vue-float-preview/).

## Document

### Attributes

| Attribute | Description | Type | Accepted Values | Default |
| ------ | ------ | ------ | ------ | ------ |
| src | src of the image | string | - | - |
| thumbSrc | src of the thumbnail | string | - | - |
| disabled | whether functions of the component is disabled | boolean | - | false |
| scale | whether scale of image when hovering is enabled | boolean | - | true |
| thumbSize | whether thumbnail fill the block | contain / auto | contain |
| show-delay | the delay before showing the previewer | number | - | 150 |
| hide-delay | the delay before hiding the previewer | number | - | 100 |
| offset-x | the X-axis offset of the previewer (should always be positive) | number | - | 40 |
| offset-y | the Y-axis offset of the previewer | number | - | -40 |
| content-style | CSS style of content | object | - | - |
| max-width | maximum width of the previewer | number | - | - |
| max-height | maximum height of the previewer | number | - | - |
| width | width of the previewer | number | - | - |
| height | height of the previewer | number | - | - |
| icon-theme | theme of icons | string | light / dark | light |

### Slots

| Name | Description | Optional |
| --- | --- | --- |
| default | base content (will replace default image block) | Y |
| preview | content in previewer (will replace default image block in previewer) | Y |

### Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| onPreviewShow | triggers when previewer shows | - |
| onPreviewHide | triggers when previewer hides | - |

### Global Options

```javascript
Vue.use(VueFloatPreview, {
  showDelay: 300,
  iconTheme: 'dark'
})
```

Available options: `scale`, `thumbSize`, `showDelay`, `hideDelay`, `offsetX`, `offsetY`, `contentStyle`, `maxWidth`, `maxHeight`, `width`, `height`, `iconTheme`.

Refers to the document of Attributes.

## Development

### Setup

Please use `yarn` to install dependencies.

```bash
git clone git@github.com:IwYvI/vue-float-preview.git

# install dependencies
yarn
```

### Build

```bash
yarn dist
```

### Start development server

```bash
yarn dev
```

## LICENSE

[MIT](https://github.com/IwYvI/vue-float-preview/blob/master/LICENSE)
