import PageLayout from "../../layouts/AppLayout/AppLayout";
import ProfileRoute from './Profile'

import DashboardRoute from './Dashboard'
import BookingsListRoute from './Bookings/BookingsList'


import NewsListRoute from './News/NewsList'
import NewsDetailRoute from './News/NewsDetail'
import NewsAddRoute from './News/NewsAdd'
import NewsEditRoute from './News/NewsEdit'

import CarsListRoute from './Cars/CarsList'
import CarsAddRoute from './Cars/CarAdd'
import CarsEditRoute from './Cars/CarEdit'

import ToursListRoute from './Tours/ToursList'
import ToursAddRoute from './Tours/ToursAdd'
import ToursEditRoute from './Tours/ToursEdit'
import ToursDetailRoute from './Tours/ToursDetail'

import ServicesListRoute from './Services/ServicesList'
import ServicesEditRoute from './Services/ServicesEdit'

import ListUserRoute from './User/UserList'
import SettingsRoute from './Settings'
export default (store) => ({
  path: 'app',
  component: PageLayout,
  indexRoute  : DashboardRoute(store),
  childRoutes: [
    DashboardRoute(store),
    ProfileRoute(store),

    BookingsListRoute(store),
    SettingsRoute(store),

    NewsListRoute(store),
    NewsDetailRoute(store),
    NewsAddRoute(store),
    NewsEditRoute(store),

    CarsListRoute(store),
    CarsAddRoute(store),
    CarsEditRoute(store),

    ToursListRoute(store),
    ToursAddRoute(store),
    ToursEditRoute(store),
    ToursDetailRoute(store),

    ServicesListRoute(store),
    ServicesEditRoute(store),
  ],

})
