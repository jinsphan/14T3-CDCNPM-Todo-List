import React,{Component} from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'
import Post from '../../../../../components/Post/Post'
import numeral from "numeral";
import './ToursDetailView.scss'
export default class NewsDetailView extends Component{
  constructor(prosp){
    super(prosp)
  }
  render(){
    const  item  = this.props.location.state
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Thông tin tours'
          button={[{
            name: 'Tạo mới tours',
            value: 'app/tours/tours-add'
          }, {
            name: 'Chỉnh sửa tours',
            value: { pathname: `/app/tours/tours-edit/${item.id}`, state: { item } }
          }]}
        />
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <div className='card'>
              <div className='card-body row'>
                <div className='p-t-20 p-b-20 col-md-6'>
                  <h4 className="card-title text-center"><strong>THÔNG TIN CHUYẾN ĐI</strong></h4>
                  <ul className="tours-infomation">
                    <li><i className="fa fa-map-marker"></i><strong>Khởi hành:</strong> {item.placestart}</li>
                    <li><i className="fa fa-map-marker"></i><strong>Điểm đến:</strong> {item.destination}</li>
                    <li><i className="fa  fa-car"></i><strong>Phí cầu đường: </strong> {numeral(item.charge).format('0,0')} VND</li>
                    <li><i className="fa fa-arrows-h"></i><strong>Quãng đường: </strong> {numeral(item.distance).format('0,0')}  Km</li>
                    <li><i className="fa-money fa"></i><strong>Giá tiền: </strong> {numeral(item.price).format('0,0')} VND</li>
                  </ul>
                </div>
                <div className='p-t-20 p-b-20 col-md-6'>
                  <img src={item.image} alt="" className="img-responsive"/>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="p-t-20 p-b-20">
                  <h4 className="card-title text-center"><strong>Huớng dẩn chi tiết thuê xe</strong></h4>

                  <Post content={item.description}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
