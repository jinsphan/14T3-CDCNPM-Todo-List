/**
 * Created by minmin on 10/9/18.
 */
import React from 'react';
import { connect } from 'react-redux'
import editGroupUsersView from '../components/editGroupUsersView'
import { updateGrUser } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    viewingGr : state.groupUsers.viewingGroupUser,
    listRoles : state.roles.listRoles
})

const mapDispatchToProps = dispatch => {
    return {
        updateGr : item => dispatch(updateGrUser(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(editGroupUsersView)
