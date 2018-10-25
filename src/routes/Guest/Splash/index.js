export default (store) => ({
  path : '/splash',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    // console.log(nextState, cb)
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async modules loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const SplashView = require('./components/SplashView').default

      /*  Return getComponent   */
      cb(null, SplashView)

    /* Webpack named bundle   */
  }, 'SplashView')
  }
})
