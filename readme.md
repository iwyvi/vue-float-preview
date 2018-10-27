# vue-float-preview

**This component ONLY supports mouse operations!**

> A Floating Previewer for Vue.js.

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

Vue.use(VueFloatPreview);
```

```vue
<template>
  <float-preview src="IMAGE_SRC"></float-preview>
</template>
```

For more information, please refer to [Examples](https://www.iwyvi.com/vue-float-preview/).

## Document

### Attribute

| Attribute | Description | Type | Accepted Values | Default |
| ------ | ------ | ------ | ------ | ------ |
| src | src of the image | string | - | - |
| disabled | whether functions of the component is disabled | boolean | - | false |
| scale | whether scale of image when hovering is enabled | boolean | - | true |
| showDelay | the delay before showing the previewer | number | - | 150 |
| hideDelay | the delay before hiding the previewer | number | - | 100 |
| offsetX | the X-axis offset of the previewer (should always be positive) | number | - | 40 |
| offsetY | the Y-axis offset of the previewer | number | - | -40 |
| contentStyle | CSS style of content | object | - | - |
| maxWidth | maximum width of the previewer | number | - | - |
| maxHeight | maximum height of the previewer | number | - | - |
| width | width of the previewer | number | - | - |
| height | height of the previewer | number | - | - |

### Slots

| Name | Description | Optional |
| --- | --- | --- |
| default | base content (will replace default image block) | Y |
| preview | content in previewer (will replace default image block in previewer) | Y |


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
