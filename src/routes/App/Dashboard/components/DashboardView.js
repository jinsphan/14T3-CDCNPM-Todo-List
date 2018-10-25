import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router'
// Components
import PageTitle from '../../../../components/Elements/PageTitle'
import Note from './Note'
// Models
// Fixtures
import dashboard from './Dashboard'
import { findIndex, remove } from 'lodash'

// Actions
import {
  getTodos
} from "../../../../store/todos";


// Styles
import './DashboardView.scss'

export class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      listNote: [
        ...props.todos
        // {
        //     title : 'hello 1',
        //     body : 'note 1ahsdfaoidhfoadfasdfasdf',
        //     id: 1
        // },
        // {
        //     title : 'hello 2',
        //     body : 'note 1ahsdfaoidhfoadfasdfasdf',
        //     id: 2
        // },
        // {
        //     title : 'hello 3',
        //     body : 'note 1ahsdfaoidhfoadfasdfasdf',
        //     id: 3

        // },
        // {
        //     title : 'hello 4',
        //     body : 'note 1ahsdfaoidhfoadfasdfasdf',
        //     id: 4

        // },
      ]
    }

    console.log(props);
  }
  componentDidMount() {
    this.get();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos.length > 0) {
      console.log( nextProps.todos);
      this.setState({
        listNote: nextProps.todos
      })
    }
  }

  get = () => {
    this.props.dispatch(getTodos());
  }

  add = () => {
    let { listNote } = this.state;
    listNote.push({
      title: '',
      body: '',
      id: listNote.length + 1,
      isNew: true
    })
    this.setState({
      listNote
    })
  }
  edit = (data) => {
    let { listNote } = this.state;
    const index = findIndex(this.state.listNote, e => { return e.id === data.id })
    listNote[index] = data;
    this.setState({
      listNote
    })
  }
  delete = (id) => {
    let { listNote } = this.state;

    listNote = remove(listNote, e => { return e.id !== id })
    this.setState({
      listNote
    })
  }
  render() {
    const { listNote } = this.state
    return (
      <div className='container-fluid'>
        <div className='row page-titles'>
          <div className='col-md-5 align-self-center'>
            <h4 className='text-themecolor text-uppercase'>Bảng điều khiển</h4>
          </div>
          <div className='col-md-7 align-self-center text-right'>
            <div className='d-flex justify-content-end align-items-center'>
              <button className='btn btn-info d-none d-lg-block m-l-15' onClick={this.add}>
                <i className='fa fa-plus-circle p-l-10 p-r-10' />
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          {
            listNote.map(item => (
              <div key={item.id} className='col-lg-3 col-sm-6 col-xs-12'>
                <Note data={item} edit={this.edit} delete={this.delete} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
DashboardView.propTypes = {
}
export default connect((state) => ({
  todos: state.todos
}))(DashboardView)