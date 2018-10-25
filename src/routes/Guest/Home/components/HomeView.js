import React,{Component,Fragment} from 'react'
import {connect} from "react-redux";
import {browserHistory} from 'react-router'
//libraries
import Validator from 'validatorjs'
import numeral from 'numeral'
// Components
import FormRegisterGuest from '../../components/FormRegisterGuest/FormRegisterGuest'
import IntroWhyChooseMe from '../../components/IntroWhyChooseMe/IntroWhyChooseMe'
import Alert from '../../../../components/Alert'
import Partner from '../../components/Partner/Partner'
import ListItem from '../../components/ListItem/ListItem'
import Helmet from 'react-helmet'
// services
import BookingModel from '../../../../services/api/model/Bookings'
import CarModel from '../../../../services/api/model/Cars'
// styles
import './HomeView.scss'

class HomeView extends Component{
  render(){
    const { settings } =this.props;
    const url =require('../images/Family-Vaction.jpg');
    return(
      <div className="home-view">
      <Helmet>
        <title>Trang chủ-Thuê xe TTB</title>
    </Helmet>
        <div style={{backgroundImage : `url(${settings.bannerHome ? settings.bannerHome: url})`,backgroundSize: 'cover', backgroundAttachment :'fixed'}}>
          <div className="container p-t-40 p-b-40">
            <div className="row">
              <div className="col-lg-4">
                <FormRegisterGuest Submit={this.Submit}/>
              </div>
            </div>
          </div>
        </div>
        <div className="white-box">
          <div className="container p-t-40 p-b-40">
            <div className="row">
              <div className="col-lg-6">
                <div className="introduce ">
                  <h1 className="text-left">
                    <strong>DỊCH VỤ THUÊ XE DU LỊCH CHUYÊN NGHIỆP</strong>
                  </h1>
                  <div className="p-t-30 p-b-30">
                    <p ><strong>Công ty CP Logistics Trung Trung Bộ</strong> chuyên cung cấp dịch vụ cho thuê xe du lịch phục vụ đa dạng các nhu cầu của khách hàng như: du lịch, công tác, làm việc,…
                      Với mong muốn mang đến cho khách hàng sự hài lòng và những trải nghiệm tuyệt vời nhất trên những chuyến đi.
                    </p>
                    <p >Các dịch vụ TTB đang cung cấp:
                      <br/>
                      - Đưa đón sân bay phục vụ các hội nghị, hội thảo,....
                      <br/>
                      - Vận chuyển khách du lịch
                      <br/>
                      - Thuê xe hợp đồng
                      <br/>
                      - Cung cấp tài xế cho doanh nghiệp
                      <br/>
                      Chúng tôi cam kết dịch vụ vận chuyển an toàn, chuyên nghiệp.
                      <br/>
                      Rất mong được phục vụ quý khách!
                      <br/></p>
                  </div>
                  <div className="text-center">
                    <button className="btn form-control">Gọi ngay: {settings.hotLine}</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 img-gif" >
                <img
                  className="img-responsive"
                  height={272} src={require('../images/giphy-downsized.gif')} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container p-t-40 p-b-40 introduce">
              <div className="row">
                <h1 className="text-center text-uppercase col-lg-12 m-b-40">
                  <strong>DỊCH VỤ CHO THUÊ XE TẠI TTB</strong>
                </h1>
                <div className="col-lg-4">
                  <div className="text-center">
                    <img
                      src={require('../images/xe-hop-dong.jpg')}
                      width={350}
                      style={{ height: 230}}
                      alt="thue-xe-theo-nam"
                      title="thue-xe-theo-nam"
                      className="img-responsive"
                    />
                  </div>
                  <h2 className="p-t-30 text-center">
                    <span>
                      <b>
                        <span>Thuê xe hợp đồng</span>
                      </b>
                    </span>
                  </h2>
                  <p className="text-justify"><span>Đáp ứng nhu cầu thuê xe của doanh nghiệp, cá nhân sử dụng xe trong một thời gian nhất định cho các dự án hay công việc. TTB mong muốn đem tới giải pháp kinh tế hiệu quả với xe ô tô với chất lượng và tài xế chuyên nghiệp, an toàn.</span></p>
                </div>
                <div className="col-lg-4">
                  <div className="text-center">
                    <img
                      style={{ height: 230}}
                      src={require('../images/xe-theo-tuyen.jpg')}
                      width={350} height={270} alt="thue-xe-theo-thang" title="thue-xe-theo-thang"
                      className="img-responsive"
                    />
                  </div>
                  <h2 className="p-t-30 text-center">
                    <span>
                      <b>
                        <span >Thuê xe du lịch</span>
                      </b>
                    </span>
                  </h2>
                  <p className="text-justify">Đem đến cho quý khách những trải nghiệp tuyệt với trên những chuyến đi là cách mà chúng tôi cung cấp dịch vụ cho thuê xe du lịch theo lộ trình. An toàn và thân thiện là cảm nhận bạn sẽ được tận hưởng trong suốt hành trình của mình.</p>
                </div>
                <div className="col-lg-4">
                  <div className="text-center">
                    <img
                      width={350} height={270}
                      style={{ height: 230}}
                      src={require('../images/xe-du-lich.jpg')}
                      alt="thue-xe-du-lich" title="thue-xe-du-lich"
                      className="img-responsive"
                    />
                  </div>
                  <h2 className="p-t-30 text-center">
                    <span>
                      <b>
                        <span>Thuê xe tự lái</span>
                      </b>
                    </span>
                  </h2>
                  <p className="text-justify">Mang tới sự tiện lợi và thoải mái nhất cho khách hàng trong việc lưu thông cũng như chủ động về thời gian với dịch vụ thuê xe tư lái TTB.</p>
                </div>
              </div>
          </div>
        </div>
        <div className="white-box">
          <IntroWhyChooseMe/>
        </div>
        <div>
          <div className="container p-t-40 p-b-40 list-product__home">
            <div className="text-center">
              <h2 className="text-uppercase">BẢNG GIÁ CHO THUÊ XE TẠI TTB</h2>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center m-b-20 top-button">
                <button className="btn m-r-10" >Theo xe hợp đồng</button>
                <button className="btn m-r-10">Thuê xe hợp du lịch</button>
                <button className="btn m-r-10">Thuê xe tự lái</button>
              </div>
              <div className="col-lg-12">
                <ListItem type={'home'} />
              </div>
            </div>
          </div>
        </div>
        <div className="white-box">
          <div>
            <Partner/>
          </div>
        </div>
        <div
          className="introduce p-t-40 p-b-40"
          style={{
            backgroundImage:`url(${require("../images/summerhaircaretips.jpg")})`,
            backgroundSize:'cover',
            backgroundAttachment:'fixed',
            minHeight: '400px'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3"/>
              <div className="col-lg-6 col-md-6"  >
                <div className="white-box text-center p-t-40 p-b-40 box-hotline" >
                  <h3 className="m-b-40 p-b-40" ><strong>DỊCH VỤ CHO THUÊ XE TẠI TTB</strong></h3>
                  <button className="btn btn-lg">Gọi ngay: {settings.hotLine}</button>
                </div>
              </div>
              <div className="col-lg-3 col-md-3"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    settings : state.site.settings
  })
}
export default connect(mapStateToProps, null)(HomeView)
