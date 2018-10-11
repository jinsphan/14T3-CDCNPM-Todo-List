/**
 * Created by minmin on 10/9/18.
 */
import React from 'react';
import { connect } from 'react-redux'
import editGroupUsersView from '../components/editRolesView'
import { updateRoles } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    viewingRoles : state.roles.viewingRoles
})

const mapDispatchToProps = dispatch => {
    return {
        updateRoles: role => dispatch(updateRoles(role))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(editGroupUsersView)
