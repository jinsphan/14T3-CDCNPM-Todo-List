import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path : '',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async modules loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const DashboardView = require('./components/DashboardView').default
      // const reducer = require('./modules/dashboard').default

      /*  Add the reducer to the store on key 'counter'  */
      // injectReducer(store, { key: 'dashboard', reducer })

      /*  Return getComponent   */
      cb(null, DashboardView)

      /* Webpack named bundle   */
    }, 'dashboardView')
  }
})
