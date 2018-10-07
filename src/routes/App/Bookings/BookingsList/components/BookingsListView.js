import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactTable from 'react-table'
import PageTitle from '../../../../../components/Elements/PageTitle'
import { confirmAlert } from '../../../../../components/Alert/index'
import BookingModel from '../../../../../services/api/model/Bookings'
import './BookingsListView.scss'
class BookingsListView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data:[],
    }
  }
  componentWillMount () {
    this.getBookings()
  }
  getBookings = () => {
    BookingModel.find().then((res)=>{
      this.setState({
        data : res.data
      })
    })
  }
  deleteBooking = (id) => {
    confirmAlert(
      'Xác nhận',
      'Bạn muốn xóa đơn đặt hàng này ?',
      'Có',
      'Không',
      () => {
        BookingModel.deleteById(id).then(res => {
          this.getBookings()
        })
      })
  }
  finalBooking = (item) => {
    const newItem = {...item, status: 'Success'};
    confirmAlert(
      'Xác nhận',
      'Đơn hàng đã được xử lý ?',
      'Ok',
      'Không',
      () => {
        BookingModel.update(newItem).then(res => {
          this.getBookings()
        })
      })
  }
  cancelBooking = (item) => {
    const newItem = {...item, status: 'Failed'};
    confirmAlert(
      'Xác nhận',
      'Đơn hàng đã hủy ?',
      'Ok',
      'Không',
      () => {
        BookingModel.update(newItem).then(res => {
          this.getBookings()
        })
      })
  }
  render () {
    const columns = [
      {
        Header: "Thông tin đơn hàng",
        columns: [
          {
            Header: 'Họ tên',
            accessor: 'fullName'
          },
          {
            Header: 'Số điện thoại',
            accessor: 'phone',
          },
          {
            Header: 'Loại xe cần thuê',
            accessor: 'typeCar'
          },
          {
            Header: 'Hình thức thuê xe',
            accessor: 'methodRent'
          },
          {
            Header: 'Thời gian thuê',
            accessor: 'timeRent'
          },
          {
            Header: 'Ghi chú',
            accessor: 'note'
          },
          {
            Header: 'Trạng thái',
            width: 150,
            id: 'status',
            accessor: (item) => (
              <div className="button-group text-center">
                <button type="button" className={`btn waves-effect waves-light btn-sm btn-rounded ${item.status === 'Success' ? 'btn-success' : (item.status === 'Failed' ? 'btn-danger' : 'btn-warning')}`}>{item.status}</button>
              </div>
            )
          },
        ]
      },
      {
        Header: "Trạng thái",
        columns: [
          {
            Header: '',
            width: 150,
            id: 'actions',
            accessor: (item) => (
              <div className="button-group text-center">
                <a href="javascript:void(0)" onClick={() => this.finalBooking(item)} className="text-dark p-r-10">
                  <i className="ti-check-box"/>
                </a> <a href="javascript:void(0)" onClick={() => this.cancelBooking(item)} className="text-dark p-r-10">
                  <i className="ti-close"/>
                </a>
                <a href="javascript:void(0)" onClick={() => this.deleteBooking(item.id)} className="text-dark">
                  <i className="ti-trash"/>
                </a>
              </div>
            )
          },
        ]
      }

    ]
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Đơn đặt hàng'
          button={[]}
        />
        {
          this.state.data.length > 0 && <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-body'>
                  <ReactTable
                    data={this.state.data}
                    columns={columns}
                    defaultSorted={[
                      {
                        id: "no",
                        desc: false
                      }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
export default BookingsListView
