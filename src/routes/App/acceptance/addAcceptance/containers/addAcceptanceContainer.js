/**
 * Created by minmin on 10/9/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import addAcceptanceView from '../components/addAcceptanceView'
import { addUser } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    listEmpl : state.employees.employees,
    listGrUser : state.groupUsers.listGroupUser
})

const mapDispatchToProps = dispatch => {
    // return {
    //     addUser : item => dispatch(addUser(item))
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(addAcceptanceView)
