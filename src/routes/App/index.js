import PageLayout from "../../layouts/AppLayout/AppLayout";
// import ProfileRoute from './Profile'

import DashboardRoute from './Dashboard'


export default (store) => ({
  path: '',
  component: PageLayout,
  indexRoute  : DashboardRoute(store),
  childRoutes: [
    DashboardRoute(store),

  ],

})
