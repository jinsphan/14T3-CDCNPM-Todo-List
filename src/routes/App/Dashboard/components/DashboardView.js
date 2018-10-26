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
  getTodos,
  delTodo,
  editTodo,
  addTodo
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


    console.log("props.authen", props.authen);
    if (props.authen.auth == false) {
      window.location.replace("/login")
    }
  }
  componentDidMount() {
    this.get();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos) {
      console.log(nextProps.todos);
      this.setState({
        listNote: nextProps.todos.filter(item => +item.user_id == +localStorage.getItem("user_authen"))
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
    let todo = this.state.listNote.find(item => item.id == data.id);
    if (todo && todo.isNew) {
      // Add note

      todo = {
        ...todo,
        ...data,
      };

      this.props.dispatch(addTodo({
        title: todo.title,
        description: todo.description,
        user_id: +localStorage.getItem("user_authen")
      }));
      
    } else {
        todo = {
          ...todo,
          ...data
        }
      this.props.dispatch(editTodo(todo));
    }
  }
  delete = (id) => {
    this.props.dispatch(delTodo(id));

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
  todos: state.todos,
  authen: state.authen
}))(DashboardView)
