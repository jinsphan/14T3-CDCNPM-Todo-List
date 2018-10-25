import HomeRoute from './Home'
import RentCarRoute from'./RentCar'
import CarContentRoute from './CarDetail'
import ContactRoute from './Contact'
import NewsRoute from './News'
import NewsContentRoute from './NewsDetail'
import ServicesRoute from './Services'
import ToursDetail from './Tours/ToursDetail'
import CoreLayout from "../../layouts/GuestLayout/GuestLayout";

export default (store) => ({
  path: '',
  component   : CoreLayout,
  indexRoute  : HomeRoute(),
  childRoutes: [
    HomeRoute(),
    RentCarRoute(),
    CarContentRoute(),
    ContactRoute(),
    NewsRoute(),
    NewsContentRoute(),
    ToursDetail(),
    ServicesRoute()
  ],

})
