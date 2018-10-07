import { injectReducer } from '../../../store/reducers'
import {browserHistory} from 'react-router'
export default (store) => ({
  path : '/tin-tuc/:type/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    window.scrollTo(0,0);

    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async modules loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const NewsContent = require('./components/NewsDetail').default

      /*  Return getComponent   */
      cb(null, NewsContent)

    /* Webpack named bundle   */
    }, 'NewsDetail')
  }
})
