import React,{Component} from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'

export default class addEmplView extends Component {

    render(){
        return(
            <div className='container-fluid'>
                <PageTitle
                title='Chỉnh sửa nhân viên'
                button={[
                    
                ]}
                />
                <form>
                    <div className="card">
                        <div className="card-body">
                            <div className="form-material">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Mã nhân viên </label>
                                            <input type="text" className="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Tên nhân viên </label>
                                            <input type="text" className="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Địa chỉ</label>
                                            <input type="text" className="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Số điện thoại</label>
                                            <input type="text" className="form-control form-control-line"/>
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
