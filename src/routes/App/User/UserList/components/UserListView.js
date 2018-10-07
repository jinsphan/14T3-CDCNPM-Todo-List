import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import ReactTable from 'react-table'
import PageTitle from '../../../../../components/Elements/PageTitle'
import Alert, { confirmAlert } from '../../../../../components/Alert/index'


export default class UserListView extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    // deleteProperty: PropTypes.func.isRequired,
    listUser: PropTypes.array.isRequired,
  }
  componentWillMount () {
    this.props.fetchUsers()
  }
  render () {
    const { listUser } = this.props
    return (
      <div className='container-fluid'>
        <PageTitle
          title='User List'
        />
        <div className='row'>
          <div className='col-sm-12' >
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title'>Manage users</h4>
                <ReactTable
                  data={listUser}
                  columns={[{
                    Header: 'Infomation',
                    columns: [
                      {
                        Header: 'Name',
                        accessor: 'username' // String-based value accessors!
                      }, {
                        Header: 'Email',
                        accessor: 'email',
                      }, {
                        Header: 'Role',
                        accessor: 'role',
                      }
                    ]
                  }, {
                    Header: 'Actions',
                    columns: [
                      {
                        Header: 'Control',
                        id: 'action',
                        accessor: d => (
                          <div className='text-center'>
                            <a href='javascript:void(0)' data-toggle='tooltip' data-original-title='Edit'>
                              <i className='fa fa-pencil text-inverse m-r-20' />
                            </a>
                            <a href='javascript:void(0)' data-toggle='tooltip' data-original-title='Close'>
                              <i className='fa fa-close text-danger m-r-20' />
                            </a>
                            <a href='javascript:void(0)' data-toggle='tooltip' data-original-title='Close'>
                              <i className='fa fa-eye text-success' />
                            </a>

                          </div>
                        )
                      }
                    ]
                  }]}
                  getTdProps={(state, rowInfo, column, instance) => {
                    return {
                      onMouseEnter: e =>
                        console.log('Cell - onMouseEnter', {
                          state,
                          rowInfo,
                          column,
                          instance,
                          event: e
                        })
                    }
                  }}
                  defaultPageSize={10}
                  className='-striped -highlight'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
