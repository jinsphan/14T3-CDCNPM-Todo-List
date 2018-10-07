export default (store) => ({
  path : '/app/services/services-edit/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ServicesEditView = require('./components/ServicesEditView').default
      // injectReducer(store, { key: 'realEstateEdit', reducer })

      /*  Return getComponent   */
      cb(null, ServicesEditView)

      /* Webpack named bundle   */
    }, 'ServicesEditView')
  }
})
