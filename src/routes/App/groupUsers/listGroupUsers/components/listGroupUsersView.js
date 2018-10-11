/**
 * Created by minmin on 10/9/18.
 */
import React, { Component } from 'react';
import ReactTable from 'react-table'
import {browserHistory} from 'react-router'
import PageTitle from '../../../../../components/Elements/PageTitle'
export default class listGroupUsersView extends Component {
    deleteGr = (item) => {
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
            text : `Xóa nhóm ${item.id} ${item.name}`
        }).then(value=>{
            console.log(item)
            if(value){
                this.props.deleteGr(item)

            }
        })
    }
    viewDetailGr = (item) => {
        this.props.viewingGr(item)
        browserHistory.push(`/app/role/group-user/detail-group-user/${item.id}`)
    }
    editGr = (item) => {
        this.props.viewingGr(item)
        browserHistory.push(`/app/role/group-user/edit-group-user/${item.id}`)
    }
    render() {
        const grUser = this.props.listGrUser
        console.log(grUser)
        return(
            <div className='container-fluid'>
                <PageTitle
                    title='Danh sách nhóm người dùng '
                    button={[
                        {
                            name : 'Thêm mới nhóm người dùng ',
                            value : '/app/role/group-user/add-group-user'
                        }
                    ]}
                />
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='card'>
                            <ReactTable
                                columns={[
                                    {
                                        Header : 'Mã nhóm ',
                                        accessor: 'id',
                                    },
                                    {
                                        Header : 'Tên nhóm',
                                        accessor: 'name',
                                    },
                                    {
                                        Header : 'Mô tả ',
                                        accessor: 'desc',
                                    },
                                    {
                                        Header : 'Ngày tạo ',
                                        accessor: 'dateCreate ',
                                    },
                                    {
                                        Header : 'Thao tác',
                                        columns: [
                                            {
                                                Header: '',
                                                width: 150,
                                                id: 'actions',
                                                accessor: (item) => (
                                                    <div className="button-group text-center">
                                                        <a href="javascript:void(0)" onClick={() =>this.viewDetailGr(item)} className="text-dark p-r-10">
                                                            <i className="ti-eye"/>
                                                        </a> <a href="javascript:void(0)" onClick={() => this.editGr(item)} className="text-dark p-r-10">
                                                        <i className=" ti-pencil"/>
                                                    </a>
                                                        <a href="javascript:void(0)" onClick={() => this.deleteGr(item)} className="text-dark">
                                                            <i className="ti-trash"/>
                                                        </a>
                                                    </div>
                                                )
                                            },
                                        ]
                                    },
                                ]}
                                data={grUser}
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