import LoginRoute from './Login'
import AppRoute from './App'
// import GuestRoute from './Guest'
import PageNotFoundRoute from './PageNotFound'
export const createRoutes = (store) => (
    {
      path        : '/',
      indexRoute  : LoginRoute(),
      childRoutes : [
        // GuestRoute(),
        LoginRoute(),
        AppRoute(),
        PageNotFoundRoute(),
      ]
    }
)
export default createRoutes
