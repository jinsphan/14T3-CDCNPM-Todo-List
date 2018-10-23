import React, { Component } from 'react'
import ReactTable from 'react-table'
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router'
import swal from 'sweetalert'
import PageTitle from '../../../../../components/Elements/PageTitle'

export default class listProposalView extends Component {

    viewDetailEmpl = (empl) => {
        this.props.viewingEmpl(empl)
        browserHistory.push({
            pathname : `/app/proposal/detail/${empl.emplId}`,
            state : empl
        })
    }
    editEmpl = (empl) => {
        this.props.viewingEmpl(empl)
        browserHistory.push({
            pathname : `/app/proposal/edit-proposal/${empl.emplId}`,
            state : empl
        })
    }
    deleteEmpl = (empl) => {
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
            text : `Xóa đơn mua hàng ${empl.proposalID}`
        }).then(value=>{
            console.log(value)
            if(value){
                // this.props.deleteEmpl(empl)
            }
        })
    }

    render(){
        let listProposal = [];
        
        return(
        <div className='container-fluid'>
            <PageTitle
                title='Danh sách đơn mua hàng '
                button={[
                    {
                        name : 'Thêm mới',
                        value : '/app/proposal/add-proposal'
                    }
                ]}
            />
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='card'>
                        <ReactTable
                            columns={[
                                {
                                    Header : 'Mã đơn bán hàng',
                                    accessor: 'proposalID',
                                },
                                {
                                    Header : 'Tên khách hàng',
                                    accessor: 'custummer_name',
                                },
                                {
                                    Header : 'Địa chỉ',
                                    accessor: 'ProposalAddress',
                                },
                                {
                                    Header : 'Số điện thoại',
                                    accessor: 'numphone',
                                },
                                {
                                    Header : 'Thành tiền',
                                    accessor: 'ProposalAdderss',
                                },
                                {
                                    Header : 'Ngày tạo',
                                    accessor: 'ProposalDate',
                                },
                                {
                                    Header : '',
                                    columns: [
                                        {
                                            Header: 'Trạng thái',
                                            width: 150,
                                            id: 'status',
                                            accessor: (item) => (
                                                <div className="button-group text-center">
                                                    {
                                                        item.status === "Alive" ?
                                                            <button className="btn btn-success btn-rounded btn-sm">Đã duyệt</button>
                                                            : <button className="btn btn-info btn-rounded btn-sm">Tạo mới</button>
                                                    }
                                                </div>
                                            )
                                        }
                                    ],
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
                                              <a href="javascript:void(0)" onClick={() =>this.viewDetailEmpl(item)} className="text-dark p-r-10">
                                                <i className="ti-eye"/>
                                              </a> <a href="javascript:void(0)" onClick={() => this.editEmpl(item)} className="text-dark p-r-10">
                                                <i className=" ti-pencil"/>
                                              </a>
                                              <a href="javascript:void(0)" onClick={() => this.deleteEmpl(item)} className="text-dark">
                                                <i className="ti-trash"/>
                                              </a>
                                            </div>
                                          )
                                        },
                                      ]
                                },
                            ]}
                            data={employees}
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