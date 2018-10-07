import { injectReducer } from '../../../store/reducers'
import {browserHistory} from 'react-router'
export default (store) => ({
  path : '/dich-vu/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    window.scrollTo(0,0);

    const param = nextState.params.id
    const arrayParams = [
      'lam-visa', 'dich-thuat','ve-may-bay'
    ]
    if(arrayParams.indexOf(param)<0)
    {
      browserHistory.replace('/')
    }
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async modules loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Services = require('./components/Services').default

      /*  Return getComponent   */
      cb(null, Services)

    /* Webpack named bundle   */
    }, 'Services')
  }
})
