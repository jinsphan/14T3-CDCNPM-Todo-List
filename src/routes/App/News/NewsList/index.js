import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path : '/app/news',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async modules loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const NewsList = require('./components/NewsListView').default
      // const reducer = require('./modules/realestateList').default

      /*  Add the reducer to the store on key 'realEstateList'  */
      // injectReducer(store, { key: 'realEstateList', reducer })

      /*  Return getComponent   */
      cb(null, NewsList)

      /* Webpack named bundle   */
    }, 'NewsList')
  }
})
