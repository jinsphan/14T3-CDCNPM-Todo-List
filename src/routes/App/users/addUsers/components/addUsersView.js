/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'
import Checkbox from '../../../../../components/Form-elements/checkbox/checkbox'
import{ browserHistory } from 'react-router'
export default class addUsersView extends Component {

    guidGenerator = () => {
        let S4 = () => {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    submitForm  = (e) => {
        e.preventDefault()
        let formData = {}
        let fields = this.form.querySelectorAll('[name]');
        for(let field of fields) {
            if(field.type !== 'checkbox') {
                formData[field.name] = field.value
            } else {
                formData[field.name] = field.checked
            }
        }
        formData.id = this.guidGenerator()
        console.log(formData)
        this.props.addUser(formData)

        browserHistory.push('/app/role/users')
    }

    render(){
        const {listEmpl,listGrUser} = this.props
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Tạo mới người dùng '
                    button={[

                    ]}
                />
                <form action="" ref={refs=> this.form = refs} onSubmit={this.submitForm}>
                    <div className='card'>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material">
                                        <label htmlFor="">Tên đăng nhập </label>
                                        <input type="text" name="username" className="form-control"/>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material">
                                        <label htmlFor="">Mật khẩu </label>
                                        <input type="password" name="password" className="form-control"/>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <label htmlFor="flat-checkbox-2">Nhân viên</label>
                                    <div className="form-group icheckbox_flat-red">
                                        <select name="employees" className="form-control">
                                            {
                                                listEmpl.map((item,key)=>(
                                                    <option key={key} value={item}>{item.name}</option>

                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <label htmlFor="flat-checkbox-2">Nhóm người dùng</label>
                                    <div className="form-group icheckbox_flat-red">
                                        <select name="group_user" className="form-control">
                                            {
                                                listGrUser.map((item,key)=>(
                                                    <option key={key} value={item}>{item.name}</option>

                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material text-center">
                                        <button onClick={()=>{browserHistory.push('/app/role/users')}} className="btn m-r-20" >Hủy</button>
                                        <input type="submit" className="btn btn-success" value='Tạo mới'/>

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
