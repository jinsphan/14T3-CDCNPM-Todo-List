/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react';
import ReactTable from 'react-table'
import swal from 'sweetalert'
import { browserHistory } from 'react-router'

import PageTitle from '../../../../../components/Elements/PageTitle'
export default class listUsersView extends Component {

    viewDetailUser = (user) => {
        this.props.viewingUser(user)
        browserHistory.push({
            pathname : `/app/role/roles/detail-roles/${user.id}`,
            state : user
        })
    }
    editUser = (user) => {
        this.props.viewingUser(user)
        browserHistory.push({
            pathname : `/app/role/users/edit-user/${user.id}`,
            state : user
        })
    }
    deleteUser = (user) => {
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
            text : `Xóa nhân viên ${user.id} ${user.fullname}`
        }).then(value=>{
            console.log(value)
            if(value){
                this.props.deleteUser(user)
            }
        })
    }
    render() {
        const {listUser} = this.props;
        console.log(listUser)
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Danh sách quyền '
                    button={[
                        {
                            name : 'Thêm mới',
                            value : '/app/role/users/add-user'
                        }
                    ]}
                />
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='card'>
                            <ReactTable
                                columns={[
                                    {
                                        Header : 'Mã Người dùng  ',
                                        accessor: 'id',
                                    },
                                    {
                                        Header : 'Tên đăng nhập ',
                                        accessor: 'username',
                                    },
                                    {
                                        Header : 'Họ tên',
                                        accessor: 'fullname',
                                    },
                                    {
                                        Header : 'Nhóm',
                                        accessor: 'group_user',
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
                                                        <a href="javascript:void(0)" onClick={() =>this.viewDetailUser(item)} className="text-dark p-r-10">
                                                            <i className="ti-eye"/>
                                                        </a> <a href="javascript:void(0)" onClick={() => this.editUser(item)} className="text-dark p-r-10">
                                                        <i className=" ti-pencil"/>
                                                    </a>
                                                        <a href="javascript:void(0)" onClick={() => this.deleteUser(item)} className="text-dark">
                                                            <i className="ti-trash"/>
                                                        </a>
                                                    </div>
                                                )
                                            },
                                        ]
                                    },
                                ]}
                                data={listUser}
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