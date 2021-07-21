import * as DruxtFieldComponents from '..'

global.console = {
  warn: jest.fn()
}

describe('DruxtFieldComponents - Deprecations', () => {
  for (const component of Object.keys(DruxtFieldComponents)) {
    test(component, async () => {
      DruxtFieldComponents[component].mounted.call({
        $options: {
          _componentTag: component,
        },
      })
      expect(console.warn).toBeCalledWith(`[druxt-entity] The ${component} component is deprecated. See https://entity.druxtjs.org/guide/deprecations.html`)
    })  
  }
})
