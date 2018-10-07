import React,{Component} from 'react'
import './Partner.scss'
import Carousel from '../../../../components/Carousel/Carousel'
const logoCar =[
  {
    url : require('./assets/Audi.png')
  },
  {
    url : require('./assets/bmw.png')
  },
  {
    url : require('./assets/Che.png')
  },
  {
    url : require('./assets/For.png')
  },
  {
    url : require('./assets/Honda.png')
  },
  {
    url : require('./assets/infi.png')
  },
  {
    url : require('./assets/Lex.png')
  },
  {
    url : require('./assets/Merc.png')
  },
  {
    url : require('./assets/Missu.png')
  },
  {
    url : require('./assets/Nissan.png')
  },
]
export default class Partner extends Component {
  render(){
    return(
      <div className="partner-box">
        <div className="row p-t-20 p-b-40">
          <h2 className="text-center col-12 p-t-20 p-b-20 partner-box__title">CÁC HÃNG CHO THUÊ</h2>
          <div className="col-12 col-lg-12 col-md-14 col-sm-12">
            <Carousel partners={logoCar}/>
          </div>
        </div>
      </div>
    )
  }
}
