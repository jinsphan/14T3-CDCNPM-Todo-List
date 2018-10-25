import LoginRoute from './Login'
import AppRoute from './App'
// import GuestRoute from './Guest'
import PageNotFoundRoute from './PageNotFound'
export const createRoutes = (store) => (
    {
      path        : '',
      indexRoute  : AppRoute(),
      childRoutes : [
        // GuestRoute(),
        AppRoute(),
          LoginRoute(),

          PageNotFoundRoute(),
      ]
    }
)
export default createRoutes
