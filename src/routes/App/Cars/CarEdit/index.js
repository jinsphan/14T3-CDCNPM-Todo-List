export default (store) => ({
  path : '/app/cars/car-edit/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const CarEditView = require('./components/CarEditView').default
      // injectReducer(store, { key: 'realEstateEdit', reducer })

      /*  Return getComponent   */
      cb(null, CarEditView)

      /* Webpack named bundle   */
    }, 'carEditView')
  }
})
