export default (store) => ({
  path : '/*',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async modules loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const PageNotFound = require('./PageNotFoundView').default

      /*  Return getComponent   */
      cb(null, PageNotFound)

      /* Webpack named bundle   */
    }, 'PageNotFound')
  }
})
