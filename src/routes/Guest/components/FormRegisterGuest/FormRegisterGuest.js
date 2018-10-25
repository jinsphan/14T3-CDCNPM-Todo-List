/**
 * Created by minmin on 6/13/18.
 */
import React,{Component} from 'react'
import Text from '../../../../components/Form-elements/text'
import Number from '../../../../components/Form-elements/number'
import Select from '../../../../components/Form-elements/select'
import Date from '../../../../components/Form-elements/date'
import TextArea from '../../../../components/Form-elements/TextArea'
import Form from '../../../../components/Forms/Form'
import './FormRegisterGuest.scss'
import Alert from "../../../../components/Alert";
import BookingModel from "../../../../services/api/model/Bookings";
import Validator from "validatorjs";
export default class FormRegisterGuest extends Component {
  constructor(props){
    super(props)
    this.state= {
      optionsTypeCar: [
        {
          value: '',
          text: 'Loại xe cần thuê'
        },
        {
          value: 'Xe 4 chỗ',
          text: 'Xe 4 chỗ'
        },
        {
          value: 'Xe 7 chỗ',
          text: 'Xe 7 chỗ'
        },
        {
          value: 'Xe 16 chỗ',
          text: 'Xe 16 chỗ'
        },
        {
          value: 'Xe 29 chỗ',
          text: 'Xe 29 chỗ'
        },
        {
          value: 'Xe 45 chỗ',
          text: 'Xe 45 chỗ'
        },
      ],
      optionshtCar : [
        {
          value:'',
          text :'Hình thức thuê xe'
        },
        {
          value:'Xe hợp đồng',
          text :'Xe hợp đồng'
        },
        {
          value:'Xe du lịch',
          text :'Xe du lịch'
        },
        {
          value:'Xe tự lái ',
          text :'Xe tự lái '
        },
      ],
      errors : {}
    }
  }
  submit = (data)=>{
    const rules = {
      fullName: 'required',
      phone: 'required'
    }
    Alert.loadingAlert();
    let validation = new Validator(data, rules);

    if(validation.passes()){
      BookingModel.create(data)
        .then((res)=>{
          Alert.successAlert(
            'Đăng ký thành công',
            `Cảm ơn quý khách đã sử dụng dịch vụ thuê xe TTB
            Chúng tôi sẽ liên hệ quý khách nhanh nhất có thể.
            `,
            'Ok',
            null,
            4000
          )
        })
        .catch( (e) => {
          Alert.errorAlert(
            'Đăng ký thất bại',
            `Xảy ra lỗi trong việc kết nối đến hệ thống của TTB
            Quý khách vui lòng đăng ký lại sau
            `,
            'Ok'
          )
        })
    } else{
      this.setState({
        errors : validation.errors.errors
      })
      Alert.errorAlert(
        'Đăng ký thất bại',
        `${(validation.errors.errors.fullName) ? 'Họ và tên không được để trống' : ''}
        ${(validation.errors.errors.phone)? 'Số điện thoại không được để trống' : ''}
        `,
        'Thử lại'
      )
    }
  }
  render(){
    return(
    <div className="form-register">
      <Form title="ĐĂNG KÝ THUÊ XE" submitText="Đăng Ký" onSubmit={this.submit} >
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Text className="form-group" id="fullName" name="fullName" rules='required' placeholder='Họ và Tên (*)' errors={this.state.error ? this.state.errors : null}/>
          </div>
          <div className="col-lg-12 col-md-12">
            <Text className="form-group" id='phone' name='phone' rules='required' placeholder='Số điện thoại (*)' errors={this.state.error ? this.state.errors : null}/>
          </div>
          <div className="col-lg-12 col-md-12">
            <Select className = 'form-group' id="typeCar" name="typeCar" options={this.state.optionsTypeCar} />
          </div>
          <div className="col-lg-12 col-md-12">
            <Select className = 'form-group' id="methodRent" name="methodRent" options={this.state.optionshtCar}/>
          </div>
          <div className="col-lg-12">
            <label><strong>Ngày thuê xe </strong></label>
            <Date name="timeRent" id="timeRent" className="form-group"/>
          </div>
          <div className="col-lg-12">
            <TextArea className="form-group" rows="2" placeholder='Ghi Chú' name="note" id="note"/>
          </div>
        </div>
      </Form>
    </div>
    )
  }
}
