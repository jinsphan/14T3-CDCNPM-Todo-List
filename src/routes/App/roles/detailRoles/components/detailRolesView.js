/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react'
import PageTitle from '../../../../../components/Elements/PageTitle'
export default class detailRolesView extends Component {
    render(){
        const {viewingRoles} = this.props
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Tạo mới quyền '
                    button={[
                        {
                            name : 'Thêm mới',
                            value : '/app/role/roles/add-roles'
                        },
                        {
                            name : 'Chỉnh sửa',
                            value : `/app/role/roles/edit-roles/${viewingRoles.idRole}`
                        }
                    ]}
                />
                <div className="card">
                    <div className="card-header">
                        <h3>{viewingRoles.name}</h3>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="justify-content-center">
                                    {viewingRoles.desc}
                                </p>
                            </div>
                            <div className="col-md-12">
                                {viewingRoles.status ?
                                    <button className="btn btn-sm btn-rounded btn-success">Hoạt động </button> :
                                    <button className="btn btn-sm btn-rounded btn-success">Không hoạt động</button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}