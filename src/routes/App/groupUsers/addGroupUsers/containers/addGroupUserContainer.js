/**
 * Created by minmin on 10/9/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import addGroupUsersView from '../components/addGroupUsersView'
import { addGrUser } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    listRoles : state.roles.listRoles
})

const mapDispatchToProps = dispatch => {
    return {
        addGr : item => dispatch(addGrUser(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addGroupUsersView)
