export default (store) => ({
  path : '/app/news/news-edit/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async modules loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const NewsEdit = require('./components/NewsEditView').default
      // injectReducer(store, { key: 'realEstateEdit', reducer })

      /*  Return getComponent   */
      cb(null, NewsEdit)

      /* Webpack named bundle   */
    }, 'NewsEdit')
  }
})
