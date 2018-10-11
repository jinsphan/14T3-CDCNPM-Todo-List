/**
 * Created by minmin on 10/9/18.
 */
import React from 'react';
import { connect } from 'react-redux'
import listRolesView from '../components/listRolesView'
import { viewingRoles,deleteRoles } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    listRoles : state.roles.listRoles
})

const mapDispatchToProps = (dispatch) => {
    return {
        viewingRoles : (role) => dispatch(viewingRoles(role)),
        deleteRoles : (role) => dispatch(deleteRoles(role))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listRolesView)
