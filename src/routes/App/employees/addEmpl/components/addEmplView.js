import React,{Component} from 'react'
import {browserHistory} from 'react-router'
import PageTitle from '../../../../../components/Elements/PageTitle'

export default class addEmplView extends Component {

    submitForm = (e) => {
        e.preventDefault()
        let formData = {}
        let fields = this.form.querySelectorAll('[name]')
        for( let field of fields){
            formData[field.name] = field.value
        }
        this.props.addEmpl(formData)
        console.log(formData)
        browserHistory.push('/app/master/employees')
    }
    render(){
        return(
            <div className='container-fluid'>
                <PageTitle
                title='Thêm nhân viên'
                button={[
                    
                ]}
                />
                <form ref={ref => {this.form = ref}} onSubmit={this.submitForm}>
                    <div className="card">
                        <div className="card-body">
                            <div className="form-material">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Mã nhân viên </label>
                                            <input type="text" className="form-control form-control-line" name="emplId"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Tên nhân viên </label>
                                            <input type="text" className="form-control form-control-line" name="name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Địa chỉ</label>
                                            <input type="text" className="form-control form-control-line" name="address"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Số điện thoại</label>
                                            <input type="text" className="form-control form-control-line" name="numphone"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group text-center">
                                            <button className="btn m-r-20">Hủy</button>
                                            <button type="submit" className="btn btn-success">Tạo mới</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        )
    }
}
