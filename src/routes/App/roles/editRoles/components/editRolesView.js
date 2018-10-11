/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'
import Checkbox from '../../../../../components/Form-elements/checkbox/checkbox'
import{ browserHistory } from 'react-router'
export default class editRolesView extends Component {

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
        formData.idRole = this.props.viewingRoles.idRole
        this.props.updateRoles(formData)
        browserHistory.push('/app/role/roles')
    }

    render(){
        const {viewingRoles} = this.props
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Tạo mới quyền '
                    button={[
                    ]}
                />
                <form action="" ref={refs=> this.form = refs} onSubmit={this.submitForm}>
                    <div className='card'>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material">
                                        <label htmlFor="">Tên quyền</label>
                                        <input type="text" name="name" className="form-control" defaultValue={viewingRoles.name}/>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material">
                                        <label htmlFor="">Mô tả </label>
                                        <textarea rows={5} type="text" name="desc" className="form-control" defaultValue={viewingRoles.desc}/>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <label htmlFor="flat-checkbox-2">Trạng thái</label>
                                    <div className="form-group icheckbox_flat-red">
                                        <Checkbox name="status" label="Hoạt động" defaultChecked={viewingRoles.status} className='radio'/>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material text-center">
                                        <button onClick={()=>{browserHistory.push('/app/role/roles')}} className="btn m-r-20">Hủy</button>
                                        <input type="submit" className="btn btn-success" value='Lưu'/>

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