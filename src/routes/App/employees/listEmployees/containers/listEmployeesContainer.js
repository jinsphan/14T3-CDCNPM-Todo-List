import React from 'react'
import { connect } from 'react-redux'
import listEmployeesView from '../components/listEmployeesView'
import { deleteEmpl } from '../../modules/action'

const mapStateToProps = (state) => ({
    employees : state.employees.employees
})

const mapDispatchToProps = (dispatch) => {
    return({
        deleteEmpl : (empl) => {dispatch(deleteEmpl(empl))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(listEmployeesView)
