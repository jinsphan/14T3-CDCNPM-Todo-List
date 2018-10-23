import React from 'react';
import { connect } from 'react-redux'
import addEmplView from '../components/addEmplView'
import { addEmpl } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    ViewingEmpl : state.employees.viewingEmpl
})

const mapDispatchToProps = (dispatch)=>{
    return {
        addEmpl : (empl)=> {return dispatch(addEmpl(empl))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addEmplView)
