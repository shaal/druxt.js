import { resolve } from 'path'

export { DruxtMenu } from './menu.js'

import DruxtMenuComponent from './components/DruxtMenu.vue'
export { DruxtMenuComponent }

import DruxtMenuItemComponent from './components/DruxtMenuItem.vue'
export { DruxtMenuItemComponent }

export { DruxtMenuStore } from './store.js'

export default function (moduleOptions = {}) {
  // Use root level Druxt options.
  if (typeof this.options === 'undefined' || !this.options.druxt) {
    throw new TypeError('Druxt settings missing.')
  }
  const options = this.options.druxt

  // Add plugin.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/plugin.js'),
    fileName: 'druxt-menu.js',
    options
  })

  // Add Vuex plugin.
  // @TODO - Ensure Vuex store is available.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/store.js'),
    fileName: 'store/druxt-menu.js',
    options
  })
}
