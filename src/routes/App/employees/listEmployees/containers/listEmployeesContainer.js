import React from 'react'
import { connect } from 'react-redux'
import listEmployeesView from '../components/listEmployeesView'
import { deleteEmpl,viewingEmpl } from '../../modules/action'

const mapStateToProps = (state) => ({
    employees : state.employees.employees
})

const mapDispatchToProps = (dispatch) => {
    return({
        deleteEmpl : (empl) => {dispatch(deleteEmpl(empl))},
        viewingEmpl : (empl) => {dispatch(viewingEmpl(empl))},
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(listEmployeesView)
