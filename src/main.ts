import Vue from 'vue';
import App from './app.vue';

import * as VueFloatPreview from '../../src';

Vue.use(VueFloatPreview);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
