/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'
import moment from 'moment'
import Checkbox from '../../../../../components/Form-elements/checkbox/checkbox'
import{ browserHistory } from 'react-router'
export default class addGroupUsersView extends Component {

    guidGenerator = () => {
        let S4 = () => {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    submitForm  = (e) => {
        e.preventDefault()
        let formData = {roles: []}
        let fields = this.form.querySelectorAll('[name]');
        for(let field of fields) {
            if(field.type !== 'checkbox') {
                formData[field.name] = field.value
            } else {
                if(field.checked) {
                    formData.roles.push(field.name)
                }

            }
        }
        formData.id = this.guidGenerator();
        formData.dateCreate = moment().format('DD-MM-YYYY').toString()
        this.props.addGr(formData)
        browserHistory.push('/app/role/group-user')
    }

    render(){
        const {listRoles} = this.props
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Tạo mới nhóm người dùng '
                    button={[

                    ]}
                />
                <form action="" ref={refs=> this.form = refs} onSubmit={this.submitForm}>
                    <div className='card'>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material">
                                        <label htmlFor="">Tên nhóm</label>
                                        <input type="text" name="name" className="form-control"/>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material">
                                        <label htmlFor="">Mô tả </label>
                                        <textarea rows={5} type="text" name="desc" className="form-control"/>
                                    </div>
                                </div>
                                <div className='col-sm-12 row'>
                                    {
                                        listRoles.map((item,key)=>(
                                            <div className="col-md-3" key={key}>
                                                <Checkbox name={item.idRole} label={item.name} defaultChecked={false} className='radio'  />
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material text-center">
                                        <button onClick={()=>{browserHistory.push('/app/role/roles')}} className="btn m-r-20" >Hủy</button>
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