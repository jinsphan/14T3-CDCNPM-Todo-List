import {browserHistory} from "react-router";

export default (store) => ({
  path : 'login',
  onEnter: ({ params }, replace) => {
    const id = localStorage.getItem('id')
    if(id){
      browserHistory.replace('/app')
    }
  },
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async modules loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Login = require('./containers/LoginContainer').default
      // const reducer = require('./modules/login').default

      /*  Add the reducer to the store on key 'login'  */
      // injectReducer(store, { key: 'login', reducer })

      /*  Return getComponent   */
      cb(null, Login)

      /* Webpack named bundle   */
    }, 'login')
  }
})
