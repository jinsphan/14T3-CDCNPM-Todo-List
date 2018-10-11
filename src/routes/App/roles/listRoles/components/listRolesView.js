/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react';
import ReactTable from 'react-table'
import swal from 'sweetalert'
import { browserHistory } from 'react-router'

import PageTitle from '../../../../../components/Elements/PageTitle'
export default class listRolesView extends Component {

    viewDetailRole = (role) => {
        this.props.viewingRoles(role)
        browserHistory.push({
            pathname : `/app/role/roles/detail-roles/${role.idRole}`,
            state : role
        })
    }
    editRole = (role) => {
        this.props.viewingRoles(role)
        browserHistory.push({
            pathname : `/app/role/roles/edit-roles/${role.idRole}`,
            state : role
        })
    }
    deleteRole = (role) => {
        swal({
            title : 'Xác nhận xóa',
            icon : 'error',
            buttons :
                {
                    cancel: {
                        text: "Không",
                        value: null,
                        visible: true,
                        className: "",
                        closeModal: true,
                    },
                    confirm: {
                        text: "Có",
                        value: true,
                        visible: true,
                        className: "",
                        closeModal: true
                    }
                }
            ,
            text : `Xóa quyền ${role.idRole} ${role.name}`
        }).then(value=>{
            console.log(value)
            if(value){
                this.props.deleteRoles(role)
            }
        })
    }
    render() {
        const {listRoles} = this.props
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Danh sách quyền '
                    button={[
                        {
                            name : 'Thêm mới',
                            value : '/app/role/roles/add-roles'
                        }
                    ]}
                />
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='card'>
                            <ReactTable
                                columns={[
                                    {
                                        Header : 'Mã quyền ',
                                        accessor: 'idRole',
                                    },
                                    {
                                        Header : 'Tên quyền ',
                                        accessor: 'name',
                                    },
                                    {
                                        Header : 'Mô tả',
                                        accessor: 'desc',
                                    },
                                    {
                                        Header : '',
                                        columns : [
                                            {
                                                Header: 'Trạng thái',
                                                id: 'status',
                                                accessor: item => (
                                                    <div className="button-group text-center">
                                                        {item.status ?
                                                            <div className="btn btn-rounded btn-success btn-sm">Hoạt động</div> :
                                                            <div className="btn btn-rounded btn-secondary btn-sm">Không hoạt động</div>
                                                        }
                                                    </div>
                                                ),
                                            }

                                        ]
                                    },
                                    {
                                        Header : '',
                                        columns: [
                                            {
                                                Header: 'Thao tác',
                                                width: 150,
                                                id: 'actions',
                                                accessor: (item) => (
                                                    <div className="button-group text-center">
                                                        <a href="javascript:void(0)" onClick={() =>this.viewDetailRole(item)} className="text-dark p-r-10">
                                                            <i className="ti-eye"/>
                                                        </a> <a href="javascript:void(0)" onClick={() => this.editRole(item)} className="text-dark p-r-10">
                                                        <i className=" ti-pencil"/>
                                                    </a>
                                                        <a href="javascript:void(0)" onClick={() => this.deleteRole(item)} className="text-dark">
                                                            <i className="ti-trash"/>
                                                        </a>
                                                    </div>
                                                )
                                            },
                                        ]
                                    },
                                ]}
                                data={listRoles}
                                filterable
                                defaultPageSize={10}
                                className="-striped -highlight"
                                noDataText="Oh Noes!"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}