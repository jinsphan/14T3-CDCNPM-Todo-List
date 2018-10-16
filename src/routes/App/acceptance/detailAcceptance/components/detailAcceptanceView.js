/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react';
import ReactTable from 'react-table'
import swal from 'sweetalert'
import { browserHistory } from 'react-router'

import PageTitle from '../../../../../components/Elements/PageTitle'
export default class listAcceptanceView extends Component {

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
        const listAcceptance = [];
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Chi tiết nghiệm thu sản phẩm'
                    button={[
                        {
                            name : 'Thêm mới',
                            value : '/app/acceptance/add-acceptance'
                        }
                    ]}
                />
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='card'>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-6">Ma nghiem thu san pham: </div>
                                            <div className="col-md-6">123485486</div>
                                            <div className="col-md-6">Nhan vien: </div>
                                            <div className="col-md-6">Huynh Quang viet</div>
                                            <div className="col-md-6">Nha cung cap: </div>
                                            <div className="col-md-6">Cong ty A</div>
                                            <div className="col-md-6">Ngay giao hang: </div>
                                            <div className="col-md-6">24/09/2018</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-6">Trang thai:</div>
                                            <div className="col-md-6">Da duyet</div>
                                            <div className="col-md-6">Ngay tao: </div>
                                            <div className="col-md-6">25/9/2018</div>
                                            <div className="col-md-12">Ghi chu:</div>
                                            <div className="col-md-12">12345679</div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="m-t-30 text-info text-uppercase">Danh sach san pham</h4>
                                <ReactTable
                                    columns={[
                                        {
                                            Header : 'Mã san pham',
                                            accessor: 'id',
                                        },
                                        {
                                            Header : 'Ten san pham',
                                            accessor: 'PurchaseOrderNo',
                                        },
                                        {
                                            Header : 'Chat luong',
                                            accessor: 'Supplier',
                                        },
                                        {
                                            Header : 'Ngày san xuat',
                                            accessor: 'group_user',
                                        },
                                        {
                                            Header : 'Hang su dung',
                                            accessor: 'group_user',
                                        },

                                    ]}
                                    data={listAcceptance}
                                    filterable
                                    defaultPageSize={5}
                                    className="-striped -highlight"
                                    noDataText="Oh Noes!"
                                />
                                <div className="form-group text-center m-t-30">
                                    <button className="btn btn-success btn-rounded m-r-30">Duyet</button>
                                    <button className="btn btn-info btn-rounded m-r-30">Chinh sua</button>
                                    <button className="btn btn-rounded m-r-30">Tro ve</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}