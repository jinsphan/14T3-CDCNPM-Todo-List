import React from 'react'
import './IntroWhyChooseMe.scss'
const IntroWhyChooseMe = () => {
  return(
    <div className="p-t-40 p-b-40 introduce">
      <div className="container why-choose-me">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center">
              <strong>
                TẠI SAO BẠN NÊN CHỌN CHÚNG TÔI
              </strong>
            </h1>

          </div>
          <div className="col-lg-6 col-md-4 col-sm-4 col-3 m-t-20">
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8 line-left col-8 m-t-20">
            <div className="introduce-item">
              <div className="introduce-box-icon">
                <i className="fa fa-car"></i>
              </div>
              <div className="introduce-description">
                <h4><strong>Thuê xe với thủ tục đơn giản</strong></h4>
              </div>
            </div>
            <div className="introduce-item">
              <div className="introduce-box-icon">
                <i className="fa fa-car"></i>
              </div>
              <div className="introduce-description">
                <h4><strong>Hỗ trợ tốt nhất, nhanh nhất có thể</strong></h4>
              </div>
            </div>
            <div className="introduce-item">
              <div className="introduce-box-icon">
                <i className="fa fa-car"></i>
              </div>
              <div className="introduce-description">
                <h4><strong>Xe đẹp, chất lượng và an toàn</strong></h4>
              </div>
            </div>
            <div className="introduce-item">
              <div className="introduce-box-icon">
                <i className="fa fa-car"></i>
              </div>
              <div className="introduce-description">
                <h4><strong>Chủng loại xe đời mới, đa dạng</strong></h4>
              </div>
            </div>
            <div className="introduce-item">
              <div className="introduce-box-icon">
                <i className="fa fa-car"></i>
              </div>
              <div className="introduce-description">
                <h4><strong>Giá thuê xe cạnh tranh</strong></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntroWhyChooseMe
