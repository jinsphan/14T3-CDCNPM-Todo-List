/**
 * Created by minmin on 10/9/18.
 */
import React from 'react';
import { connect } from 'react-redux'
import listGroupUsersView from '../components/listGroupUsersView'
import { deleteGrUser,viewingGrUser } from '../../modules/action'

const mapStateToProps = (state, ownProps) => ({
    listGrUser : state.groupUsers.listGroupUser
})

const mapDispatchToProps = dispatch => {
    return {
        deleteGr : (item) => {dispatch(deleteGrUser(item))},
        viewingGr : (item) => {dispatch(viewingGrUser(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listGroupUsersView)
