import React, { Component } from 'react'
import ReactTable from 'react-table'
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router'
import swal from 'sweetalert'
import PageTitle from '../../../../../components/Elements/PageTitle'

export default class listEmployeesView extends Component {

    viewDetailEmpl = (empl) => {
        this.props.viewingEmpl(empl)
        browserHistory.push({
            pathname : `/app/master/employees/detail/${empl.emplId}`,
            state : empl
        })
    }
    editEmpl = (empl) => {
        this.props.viewingEmpl(empl)
        browserHistory.push({
            pathname : `/app/master/employees/edit-empl/${empl.emplId}`,
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
            text : `Xóa nhân viên ${empl.emplId} ${empl.name}`
        }).then(value=>{
            console.log(value)
            if(value){
                this.props.deleteEmpl(empl)
            }
        })
    }

    render(){
        let { employees } = this.props;
        
        return(
        <div className='container-fluid'>
            <PageTitle
            title='Danh sách nhân viên'
            button={[
                {
                    name : 'Thêm mới',
                    value : '/app/master/employees/add-empl'
                }
            ]}
            />
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='card'>
                        <ReactTable
                            columns={[
                                {
                                    Header : 'Mã nhân viên',
                                    accessor: 'emplId',
                                },
                                {
                                    Header : 'Tên nhân viên',
                                    accessor: 'name',
                                },
                                {
                                    Header : 'Địa chỉ',
                                    accessor: 'address',
                                },
                                {
                                    Header : 'Số điện thoại',
                                    accessor: 'numphone',
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