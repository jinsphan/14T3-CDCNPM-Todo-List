/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'
import moment from 'moment'
import Checkbox from '../../../../../components/Form-elements/checkbox/checkbox'
import{ browserHistory } from 'react-router'
export default class editGroupUsersView extends Component {
    constructor(props){
        super(props)
        this.state = {
            CheckAll : false
        }
    }
    guidGenerator = () => {
        let S4 = () => {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    submitForm  = (e) => {

        e.preventDefault()
        console.log('submit')
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
        formData.id = this.props.viewingGr.id;
        this.props.updateGr(formData)
        browserHistory.push('/app/role/group-user')
    }

    render(){
        const {listRoles,viewingGr} = this.props
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
                                        <input type="text" name="name" className="form-control" defaultValue={viewingGr.name}/>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material">
                                        <label htmlFor="">Mô tả </label>
                                        <textarea rows={5} type="text" name="desc" className="form-control" defaultValue={viewingGr.desc}/>
                                    </div>
                                </div>
                                <div className='col-sm-12 row'>
                                    <input type="button" className="btn btn-success" onClick={()=>{this.setState({CheckAll : !this.state.CheckAll})}} value={this.state.CheckAll ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}/>

                                    {
                                        listRoles.map((item,key)=>(
                                            <div className="col-md-3" key={key}>
                                                <Checkbox name={item.idRole} label={item.name} defaultChecked={(viewingGr.roles.includes(item.idRole) || this.state.CheckAll)} className='radio'  />
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className='col-sm-12'>
                                    <div className="form-group form-material text-center">
                                        <button onClick={()=>{browserHistory.push('/app/role/group-user')}} className="btn m-r-20" >Hủy</button>
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