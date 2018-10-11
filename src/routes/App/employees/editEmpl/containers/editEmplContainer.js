import React from 'react'
import { connect } from 'react-redux'
import editEmplView from '../components/editEmplView'
import { updateEmpl } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    viewingEmpl : state.employees.viewingEmpl
})

const mapDispatchToProps = (dispatch) => {
    return{
        updateEmpl : (empl) => {return dispatch(updateEmpl(empl))}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(editEmplView)
